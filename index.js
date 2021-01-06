// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: teal; icon-glyph: book-open;

const defaultBaseURL = 'https://scriptablejs.gitee.io/store/#';
let baseUrl;
const catalogPageURL = '/menu';
const webView = new WebView();

let fm;
try {
  fm = FileManager.iCloud();
  fm.documentsDirectory();
} catch (e) {
  console.log('设置文件缓存路径失败，请检查 iCloud 权限是否开启');
  console.error(e);
  fm = FileManager.local();
}

async function loadScript(url) {
  const req = new Request(url);
  const content = await req.loadString();
  const filename = url.split('/').pop();
  return { content, filename };
}

const downloadWidget = async function (widget) {
  const downloadAlert = new Alert();
  downloadAlert.message = `确定要下载 '${widget.title}' 小组件脚本吗?`;
  downloadAlert.addAction('确定');
  downloadAlert.addCancelAction('取消');

  if ((await downloadAlert.presentAlert()) === 0) {
    const { content, filename } = await loadScript(widget.scriptURL);

    const scriptPath = fm.joinPath(fm.documentsDirectory(), filename);
    const scriptExists = fm.fileExists(scriptPath);

    if (scriptExists) {
      const alreadyExistsAlert = new Alert();
      alreadyExistsAlert.message = `脚本 '${filename}' 已经存在!`;
      alreadyExistsAlert.addAction('更新');
      alreadyExistsAlert.addCancelAction('取消');
      if ((await alreadyExistsAlert.presentAlert()) === -1) return false;
    }
    fm.writeString(scriptPath, content);
    const successAlert = new Alert();
    successAlert.message = `组件脚本 '${filename}' 下载成功!`;
    successAlert.addCancelAction('确定');
    return filename;
  }
};

async function injectEventhandler() {
  const js = `
    window.addEventListener('catalog-event', (event) => { completion(event.detail) }, false);
  `;
  return webView.evaluateJavaScript(js, true).then(async (widget) => {
    if (widget.key === 'downloadButtonClicked') {
      return await downloadWidget(widget);
    }
  });
}

present = async (b) => {
  baseUrl = !b ? defaultBaseURL : b;
  const queryParams = 'scriptable=1';
  await webView.loadURL(baseUrl + catalogPageURL + queryParams);
  injectEventhandler();
  return webView.present(true);
};

await present();
