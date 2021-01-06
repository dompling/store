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
const RootPath = fm.documentsDirectory();

const saveFileName = (fileName) => {
  const hasSuffix = fileName.lastIndexOf('.') + 1;
  return !hasSuffix ? `${fileName}.js` : fileName;
};

const write = (fileName, content) => {
  let file = saveFileName(fileName);
  const filePath = fm.joinPath(RootPath, file);
  fm.writeString(filePath, content);
  return true;
};

const saveFile = async ({ moduleName, url }) => {
  const req = new Request(encodeURI(url));
  const content = await req.loadString();
  write(`${moduleName}`, content);
  return true;
};

const downloadWidget = async function (widget) {
  const downloadAlert = new Alert();
  downloadAlert.message = `确定要下载 '${widget.title}' ${
    widget.depend ? '和' + widget.depend.length + '个依赖' : ''
  } 组件脚本吗?`;
  downloadAlert.addAction('确定');
  downloadAlert.addCancelAction('取消');

  if ((await downloadAlert.presentAlert()) === 0) {
    const scriptPath = fm.joinPath(fm.documentsDirectory(), widget.name);
    const scriptExists = fm.fileExists(scriptPath);

    if (scriptExists) {
      const alreadyExistsAlert = new Alert();
      alreadyExistsAlert.message = `脚本 '${widget.name}' 已经存在!`;
      alreadyExistsAlert.addAction('更新');
      alreadyExistsAlert.addCancelAction('取消');
      if ((await alreadyExistsAlert.presentAlert()) === -1) return false;
    }
    const successAlert = new Alert();
    try {
      await saveFile({ moduleName: widget.name, url: widget.scriptURL });
      if (widget.depend) {
        for (const dependElement of widget.depend) {
          await saveFile({
            moduleName: dependElement.name,
            url: dependElement.scriptURL,
          });
        }
      }
      successAlert.message = `组件脚本 '${widget.title}' 下载成功!`;
      successAlert.addCancelAction('确定');
    } catch (e) {
      console.log(e);
      successAlert.message = `组件脚本 '${widget.title}' 下载失败!`;
      successAlert.addCancelAction('关闭');
    }
    return true;
  }
};

async function injectEventhandler() {
  const js = `
    window.addEventListener('catalog-event', (event) => { completion(event.detail) }, false);
  `;
  return webView.evaluateJavaScript(js, true).then(async (widget) => {
    console.log(widget);
    if (widget.key === 'downloadButtonClicked') {
      return await downloadWidget(widget);
    }
  });
}

present = async (b) => {
  baseUrl = !b ? defaultBaseURL : b;
  const queryParams = '?scriptable=1';
  await webView.loadURL(baseUrl + catalogPageURL + queryParams);
  injectEventhandler();
  return webView.present(true);
};

await present();
