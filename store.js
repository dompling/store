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
  downloadAlert.message = `确定要下载${widget.title}${
    widget.depend ? '和' + widget.depend.length + '个依赖' : ''
  } 组件脚本吗?`;
  downloadAlert.addAction('确定');
  downloadAlert.addCancelAction('取消');
  let text = '下载';
  if ((await downloadAlert.presentAlert()) === 0) {
    const scriptPath = fm.joinPath(RootPath, `${widget.name}.js`);
    const scriptExists = fm.fileExists(scriptPath);
    if (scriptExists) {
      text = '更新';
      const alreadyExistsAlert = new Alert();
      alreadyExistsAlert.message = `脚本${widget.title}已经存在!`;
      alreadyExistsAlert.addAction('更新');
      alreadyExistsAlert.addCancelAction('取消');
      if ((await alreadyExistsAlert.presentAlert()) === -1) return false;
    }
    try {
      setLoading(true);
      await saveFile({ moduleName: widget.name, url: widget.scriptURL });
      if (widget.depend) {
        for (const dependElement of widget.depend) {
          await saveFile({
            moduleName: dependElement.name,
            url: dependElement.scriptURL,
          });
          console.log(`依赖：${dependElement.name}下载成功`);
        }
      }
      setLoading(false);
      Toast(`组件脚本${widget.title}${text}成功，请在组件列表中找到${widget.name}运行！`);
    } catch (e) {
      console.log(e);
      Toast(`组件脚本${widget.title}${text}失败!`, 3, 'error');
    }
    return true;
  }
};

async function Toast(msg, timer = 3, type = 'success') {
  const js = `
     window.addEventListener('Toast',(e)=>{
        e.detail["${type}"]("${msg}",${timer});
     });
     window.dispatchEvent(window.Toast);
     `;
  console.log(js);
  return webView.evaluateJavaScript(js);
}

async function setLoading(loading) {
  const js = `
     window.addEventListener('setLoading',(e)=>{
        e.detail.setLoading(${loading},"下载中")
     });
     window.dispatchEvent(window.loadingEvent);
     `;
  return webView.evaluateJavaScript(js);
}

async function injectEventhandler() {
  const js = `
     window.addEventListener('catalog-event', (event) => {
        completion(event.detail);
     }, false);
  `;
  return webView.evaluateJavaScript(js, true).then(async (widget) => {
    await downloadWidget(widget);
    return injectEventhandler();
  });
}

module.exports.present = async (b) => {
  baseUrl = !b ? defaultBaseURL : b;
  const queryParams = '?scriptable=1&t=' + new Date().getTime();
  await webView.loadURL(baseUrl + catalogPageURL + queryParams);
  injectEventhandler();
  return webView.present(true);
};
