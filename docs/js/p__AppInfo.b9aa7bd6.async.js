(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7, 9],
  {
    '0lfv': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return n;
      }),
        a.d(t, 'c', function () {
          return r;
        }),
        a.d(t, 'd', function () {
          return c;
        }),
        a.d(t, 'a', function () {
          return i;
        });
      var n = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        r = (e, t) => {
          var a = n(),
            r = Object.keys(a).find((t) => a[t].author === e) || '',
            c = a[r].apps || [];
          return c.find((e) => e.name === t);
        },
        c = (e) => localStorage.setItem('dataSource', JSON.stringify(e)),
        i = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
    },
    Idy6: function (e, t, a) {
      'use strict';
      a.r(t);
      a('JHCA');
      var n = a('vTGJ'),
        r = (a('ka6A'), a('JqU2')),
        c = (a('17wr'), a('QKZ7')),
        i = (a('alSR'), a('1F0g')),
        l = (a('buIX'), a('2te2')),
        s = a('7+KJ'),
        o = a('Wval'),
        d = a('xwgP'),
        u = a.n(d),
        m = a('q5+0'),
        p = a('9kvl'),
        g = a('HreP'),
        f = a('tVxf'),
        b = a('MjVI'),
        v = a('G2O9'),
        w = a('i7U8'),
        E =
          "// Variables used by Scriptable.\n// These must be at the very top of the file. Do not edit.\n// icon-color: teal; icon-glyph: book-open;\n\nlet fm;\ntry {\n  fm = FileManager.iCloud();\n} catch (e) {\n  console.log('\u8bbe\u7f6e\u6587\u4ef6\u7f13\u5b58\u8def\u5f84\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5 iCloud \u6743\u9650\u662f\u5426\u5f00\u542f');\n  console.error(e);\n  fm = FileManager.local();\n}\nconst RootPath = fm.documentsDirectory();\n\nconst saveFileName = (fileName) => {\n  const hasSuffix = fileName.lastIndexOf('.') + 1;\n  return !hasSuffix ? `${fileName}.js` : fileName;\n};\n\nconst write = (fileName, content, version = '') => {\n  let file = saveFileName(fileName);\n  const filePath = fm.joinPath(RootPath, file);\n  fm.writeString(filePath, `${content}\\n//version:${version}`);\n  return true;\n};\n\nconst saveFile = async ({ moduleName, url, version }) => {\n  const req = new Request(encodeURI(url));\n  const content = await req.loadString();\n  write(`${moduleName}`, content, version);\n  return true;\n};\n\nasync function downloadWidget(widget) {\n  const text = '\u4e0b\u8f7d';\n  const a = new Alert();\n  try {\n    await saveFile({\n      moduleName: widget.name,\n      url: widget.scriptURL,\n      version: widget.version,\n    });\n    if (widget.depend) {\n      const depend = JSON.parse(widget.depend);\n      for (const dependElement of depend) {\n        await saveFile({\n          moduleName: dependElement.name,\n          url: dependElement.scriptURL,\n        });\n        console.log(`\u4f9d\u8d56\uff1a${dependElement.name}\u4e0b\u8f7d\u6210\u529f`);\n      }\n    }\n    a.message = `\u7ec4\u4ef6\u811a\u672c${widget.title}${text}\u6210\u529f\uff0c\u8bf7\u5728\u7ec4\u4ef6\u5217\u8868\u4e2d\u627e\u5230${widget.name}\u8fd0\u884c\uff01`;\n  } catch (e) {\n    console.log(e);\n    a.message = `\u7ec4\u4ef6\u811a\u672c${widget.title}${text}\u5931\u8d25!`;\n  }\n  a.addCancelAction('\u786e\u5b9a');\n  await a.presentAlert();\n  return true;\n}\n\nasync function getLocalStoreWidget(widget) {\n  const scriptPath = fm.joinPath(RootPath, `${widget.name}.js`);\n  const scriptExists = fm.fileExists(scriptPath);\n  const alreadyExistsAlert = new Alert();\n  if (scriptExists) {\n    const scriptContent = fm.readString(scriptPath);\n    const m = scriptContent.match(/version:(.*)/m);\n    if (m && m[1]) {\n      if (m[1] !== widget.version) {\n        alreadyExistsAlert.message = `\u68c0\u6d4b${widget.title}\u5b58\u5728\u65b0\u7248\u672c\uff0c\u662f\u5426\u66f4\u65b0\uff1f`;\n        alreadyExistsAlert.addAction('\u66f4\u65b0');\n        alreadyExistsAlert.addCancelAction('\u53d6\u6d88');\n      } else {\n        alreadyExistsAlert.message = `${widget.title}\u5df2\u7ecf\u662f\u6700\u65b0\u7248\u672c\uff0c\u9700\u8981\u7ee7\u7eed\u4e0b\u8f7d\u5417\uff1f`;\n        alreadyExistsAlert.addAction('\u786e\u5b9a');\n        alreadyExistsAlert.addCancelAction('\u53d6\u6d88');\n      }\n    } else {\n      alreadyExistsAlert.message = `\u786e\u5b9a\u8981\u5b89\u88c5${widget.title}\u5417\uff1f`;\n      alreadyExistsAlert.addAction('\u786e\u5b9a');\n      alreadyExistsAlert.addCancelAction('\u53d6\u6d88');\n    }\n  } else {\n    alreadyExistsAlert.message = `\u786e\u5b9a\u8981\u5b89\u88c5${widget.title}\u5417\uff1f`;\n    alreadyExistsAlert.addAction('\u786e\u5b9a');\n    alreadyExistsAlert.addCancelAction('\u53d6\u6d88');\n  }\n  if ((await alreadyExistsAlert.presentAlert()) === -1) return false;\n  await downloadWidget(widget);\n}\n\nconst present = async () => {\n  let data = args.queryParameters;\n  if (data.name && data.scriptURL && data.version) {\n    await getLocalStoreWidget(data);\n  } else {\n    const a = new Alert();\n    a.title = data.scriptURL;\n    a.message = '\u8be5\u811a\u672c\u4e0d\u5728 App \u4e2d\u6267\u884c\uff0c\u8bf7\u4e0d\u7528\u8fd0\u884c\u8fd9\u6bb5\u7a0b\u5e8f';\n    a.addAction('\u786e\u5b9a');\n    a.addCancelAction('\u53d6\u6d88');\n    await a.presentAlert();\n    return false;\n  }\n};\n\nif (config.runsInApp) {\n  await present();\n}\n\nScript.complete();\n",
        h = a('0lfv'),
        y = a('bIAK'),
        x = a('I5X1'),
        _ = a('La0L'),
        j = a.n(_);
      a('U/Xo');
      g['a'].use([f['a']]);
      var O = () => {
        var e = Object(m['l'])(),
          t = e.appId,
          a = e.author,
          g = Object(h['c'])(a, t),
          f = Object(x['a'])('initialiseModel', (e) => e),
          _ = f.isScriptable,
          O = Object(d['useState'])('\u6682\u65e0\u66f4\u65b0'),
          S = Object(o['a'])(O, 2),
          A = S[0],
          N = S[1];
        Object(d['useEffect'])(() => {
          function e(t) {
            N(t.detail), window.removeEventListener('getLocalWidgetVersion', e);
          }
          window.dispatchEvent(
            new CustomEvent('catalog-event', {
              detail: Object(s['a'])(Object(s['a'])({}, g), {}, { key: 'fetchAppInfo' }),
            }),
          ),
            window.addEventListener('getLocalWidgetVersion', e);
        }, [g, N]);
        var k = g && g.depend ? '&depend='.concat(JSON.stringify(g.depend)) : '';
        return u.a.createElement(
          u.a.Fragment,
          null,
          u.a.createElement(i['a'], {
            mode: 'light',
            icon: u.a.createElement(l['a'], { type: 'left' }),
            onLeftClick: () => p['a'].goBack(),
          }),
          !_ &&
            u.a.createElement(
              'div',
              { style: { marginTop: 10 } },
              u.a.createElement(
                c['a'],
                {
                  mode: 'link',
                  marqueeProps: { loop: !0 },
                  action: u.a.createElement(
                    'span',
                    {
                      onClick: () => {
                        window.Clipboard.copy(E), (window.location.href = 'scriptable:///add');
                      },
                    },
                    '\u590d\u5236',
                  ),
                },
                '\u4f7f\u7528\u7f51\u9875\u7248\u5b89\u88c5\uff0c\u8bf7\u786e\u4fdd Scriptable \u91cc\u9762\u5b58\u5728 WebStore\uff0c\u70b9\u6b64\u590d\u5236\u4ee3\u7801,\u81ea\u52a8\u6253\u5f00 app \u4e4b\u540e\uff0c\u8bf7\u81ea\u884c\u4fee\u6539\u811a\u672c\u540d\u5b57\u4e3a WebStore',
              ),
            ),
          g
            ? u.a.createElement(
                'div',
                { className: j.a.container },
                u.a.createElement(
                  r['a'],
                  { full: !0 },
                  u.a.createElement(r['a'].Header, {
                    title: '\u7ec4\u4ef6\u4fe1\u606f',
                    extra: _
                      ? u.a.createElement(w['CustomerIcon'], {
                          icon: 'https://img.icons8.com/clouds/344/download-2.png',
                          onClick: () => {
                            var e = new CustomEvent('catalog-event', {
                              detail: Object(s['a'])(
                                Object(s['a'])({}, g),
                                {},
                                { key: 'downloadButtonClicked' },
                              ),
                            });
                            window.dispatchEvent(e),
                              console.log('\u89e6\u53d1\u4e0b\u8f7d\u529f\u80fd');
                          },
                        })
                      : u.a.createElement(
                          'span',
                          {
                            onClick: () => {
                              window.location.href = 'scriptable:///run?scriptName=WebStore&title='
                                .concat(g.title, '&name=')
                                .concat(g.name, '&scriptURL=')
                                .concat(g.scriptURL, '&version=')
                                .concat(g.version)
                                .concat(k);
                            },
                          },
                          u.a.createElement(w['CustomerIcon'], {
                            icon: 'https://img.icons8.com/clouds/344/download-2.png',
                          }),
                        ),
                  }),
                  u.a.createElement(
                    r['a'].Body,
                    { className: j.a.container_body },
                    u.a.createElement(
                      n['a'],
                      { align: 'start', justify: 'start' },
                      u.a.createElement(
                        'div',
                        null,
                        u.a.createElement('img', {
                          className: j.a.appImg,
                          src: g.thumb,
                          alt: g.name,
                        }),
                        u.a.createElement(
                          'div',
                          { style: { textAlign: 'center', fontSize: 12 } },
                          '\u7248\u672c\u53f7\uff1a',
                          g.version,
                        ),
                      ),
                      u.a.createElement(
                        n['a'].Item,
                        null,
                        u.a.createElement(
                          n['a'],
                          { direction: 'column', align: 'start' },
                          u.a.createElement(
                            'div',
                            null,
                            u.a.createElement('h3', { className: j.a.appTitle }, g.title),
                            u.a.createElement(
                              'div',
                              { style: { textAlign: 'center', fontSize: 12 } },
                              '\u672c\u5730\u7248\u672c\uff1a',
                              A,
                            ),
                          ),
                          u.a.createElement(
                            n['a'].Item,
                            null,
                            u.a.createElement('div', { className: j.a.appDesc }, g.description),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                g.html &&
                  u.a.createElement(
                    r['a'],
                    { full: !0 },
                    u.a.createElement(r['a'].Header, { title: '\u7ec4\u4ef6\u63cf\u8ff0' }),
                    u.a.createElement(
                      r['a'].Body,
                      null,
                      u.a.createElement('div', {
                        dangerouslySetInnerHTML: { __html: g.html.join('') },
                      }),
                    ),
                  ),
                g.images &&
                  u.a.createElement(
                    'div',
                    { className: j.a.photos },
                    u.a.createElement(
                      r['a'],
                      { full: !0 },
                      u.a.createElement(r['a'].Header, { title: '\u7ec4\u4ef6\u76f8\u518c' }),
                      u.a.createElement(
                        r['a'].Body,
                        null,
                        u.a.createElement(
                          b['a'],
                          { scrollbar: { draggable: !0 }, spaceBetween: 10, slidesPerView: 1.2 },
                          g.images.map((e, t) =>
                            u.a.createElement(
                              v['a'],
                              { key: 'img'.concat(t) },
                              u.a.createElement('img', {
                                style: { maxWidth: '100%', width: 'auto' },
                                src: e,
                                alt: '',
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
              )
            : u.a.createElement(y['a'], null, '\u6ca1\u6709\u627e\u5230\u8be5\u7ec4\u4ef6'),
        );
      };
      t['default'] = O;
    },
    La0L: function (e, t, a) {
      e.exports = {
        container: 'container___2dK_3',
        container_body: 'container_body___1k27R',
        appImg: 'appImg___1MXfc',
        appTitle: 'appTitle___2Vrw4',
        appDesc: 'appDesc___qLGi7',
      };
    },
    R0pf: function (e, t, a) {
      e.exports = {
        container: 'container___3WbTd',
        widgetTitle: 'widgetTitle___1Ojl9',
        icon: 'icon___38pp4',
        subList: 'subList___1NVQZ',
        'row-dragging': 'row-dragging___1TbdM',
        avatar: 'avatar___2yRWX',
        user_info: 'user_info___1pF6R',
        user_title: 'user_title___3VZaa',
        user_text: 'user_text___2-KJa',
        extra: 'extra___1Pjch',
      };
    },
    diY3: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return s;
      }),
        a.d(t, 'b', function () {
          return o;
        }),
        a.d(t, 'c', function () {
          return d;
        });
      a('P0Cl');
      var n = a('oB33'),
        r = a('SDO5'),
        c = a('4Wd/'),
        i = a.n(c),
        l = a('9kvl'),
        s = (function () {
          var e = Object(r['a'])(
            i.a.mark(function e(t) {
              var a, r;
              return i.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(l['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((r = JSON.parse(localStorage.getItem('dataSource') || '{}')),
                            (r[t] = a),
                            localStorage.setItem('dataSource', JSON.stringify(r)))
                          : n['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (c) {
                        n['a'].fail(JSON.stringify(c));
                      }
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        o = (function () {
          var e = Object(r['a'])(
            i.a.mark(function e() {
              var t;
              return i.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(l['c'])(
                            'http://'.concat(
                              localStorage.getItem('boxjs') || 'boxjs.net',
                              '/query/boxdata',
                            ),
                          )
                        );
                      case 2:
                        return (t = e.sent), (e.prev = 3), e.abrupt('return', t);
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e['catch'](3)),
                          console.log(e.t0),
                          e.abrupt('return', !1)
                        );
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 7]],
              );
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        d = (function () {
          var e = Object(r['a'])(
            i.a.mark(function e(t) {
              var a;
              return i.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(l['c'])(
                            'http://'.concat(
                              localStorage.getItem('boxjs') || 'boxjs.net',
                              '/api/save',
                            ),
                            { method: 'POST', data: t },
                          )
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          n['a'].success('\u5907\u4efd\u6210\u529f'),
                          e.abrupt('return', a)
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e['catch'](0)),
                          console.log(e.t0),
                          n['a'].fail('\u5907\u4efd\u5931\u8d25'),
                          e.abrupt('return', !1)
                        );
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    i7U8: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'CustomerIcon', function () {
          return N;
        });
      a('vu4r');
      var n = a('aLjh'),
        r = a('7+KJ'),
        c = (a('ka6A'), a('JqU2')),
        i = a('SDO5'),
        l = (a('2f0q'), a('0OHd')),
        s = a('Wval'),
        o = (a('KNKI'), a('Qm4I')),
        d = (a('JHCA'), a('vTGJ')),
        u = (a('xx5R'), a('1eom')),
        m = a('DJqP'),
        p = a('M+ez'),
        g = (a('6Yi/'), a('aJ6J')),
        f = a('4Wd/'),
        b = a.n(f),
        v = a('xwgP'),
        w = a.n(v),
        E = a('F61N'),
        h = a.n(E),
        y = a('Wu6v'),
        x = a('R0pf'),
        _ = a.n(x),
        j = a('0lfv'),
        O = a('diY3'),
        S = a('bIAK'),
        A = g['a'].prompt,
        N = Object(v['forwardRef'])((e, t) => {
          var a = e.icon,
            n = Object(p['a'])(e, ['icon']);
          return w.a.createElement(
            'img',
            Object(m['a'])({ ref: t, className: _.a.icon, alt: '', src: a }, n),
          );
        }),
        k = Object(y['c'])((e) => {
          var t = e.counts;
          return w.a.createElement(u['a'], {
            style: { userSelect: 'none' },
            text: t,
            size: 'small',
          });
        }),
        C = (e) => {
          var t = e.dataSource,
            a = e.update,
            n = e.setLoading;
          return w.a.createElement(
            o['a'],
            {
              className: _.a.subList,
              autoClose: !0,
              right: [
                {
                  text: '\u66f4\u65b0',
                  onPress: () => (
                    n(!0),
                    Object(O['a'])(t.url)
                      .then(() => {
                        var e = Object(j['b'])();
                        a(e);
                      })
                      .finally(() => {
                        n(!1);
                      })
                  ),
                  style: { backgroundColor: '#77cad1', color: 'white' },
                },
                {
                  text: '\u5220\u9664',
                  onPress: () => {
                    var e = Object(j['b'])();
                    delete e[t.url], Object(j['d'])(e), a(e);
                  },
                  style: { backgroundColor: 'red', color: 'white' },
                },
              ],
              style: { marginBottom: 10, padding: '10px 0' },
            },
            w.a.createElement(
              d['a'],
              null,
              w.a.createElement('img', { className: _.a.avatar, alt: '', src: t.icon }),
              w.a.createElement(
                'div',
                null,
                w.a.createElement(
                  d['a'],
                  { className: _.a.user_info, direction: 'column', justify: 'start' },
                  w.a.createElement(
                    'div',
                    { className: _.a.user_title },
                    t.author,
                    ' \u7ec4\u4ef6',
                  ),
                  w.a.createElement('div', null, t.repo),
                  w.a.createElement('div', { className: _.a.user_text }, '@', t.author),
                ),
              ),
              w.a.createElement(k, { counts: t.counts }),
              w.a.createElement(
                'div',
                { style: { marginLeft: 'auto' } },
                w.a.createElement(
                  'a',
                  { href: t.repo, target: '_blank' },
                  w.a.createElement(N, {
                    icon: 'https://img.icons8.com/clouds/344/github.png',
                    style: { width: '3rem', height: '3rem' },
                  }),
                ),
              ),
            ),
          );
        },
        I = Object(y['b'])((e) => w.a.createElement(C, e)),
        L = Object(y['a'])((e) => {
          var t = e.children;
          return w.a.createElement('div', null, t);
        });
      t['default'] = () => {
        var e = Object(j['b'])(),
          t = w.a.useState(e),
          a = Object(s['a'])(t, 2),
          o = a[0],
          d = a[1],
          u = w.a.useState(!1),
          m = Object(s['a'])(u, 2),
          p = m[0],
          g = m[1];
        return w.a.createElement(
          n['a'],
          { className: _.a.container },
          w.a.createElement(l['a'], { toast: !0, animating: p }),
          w.a.createElement(
            c['a'],
            null,
            w.a.createElement(c['a'].Header, {
              className: _.a.widgetTitle,
              title: '\u7ec4\u4ef6\u8ba2\u9605('.concat(Object.keys(o).length, ')'),
              extra: w.a.createElement(
                'div',
                { className: _.a.extra },
                w.a.createElement(N, {
                  icon: 'https://img.icons8.com/clouds/344/cloud-refresh.png',
                  onClick: Object(i['a'])(
                    b.a.mark(function e() {
                      var t, a, n, r;
                      return b.a.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = Object.keys(o)), g(!0), (a = 0), (n = t);
                            case 3:
                              if (!(a < n.length)) {
                                e.next = 10;
                                break;
                              }
                              return (r = n[a]), (e.next = 7), Object(O['a'])(r);
                            case 7:
                              a++, (e.next = 3);
                              break;
                            case 10:
                              d(Object(j['b'])()), g(!1);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                }),
                w.a.createElement(N, {
                  icon: 'https://img.icons8.com/clouds/344/add.png',
                  onClick: () =>
                    A('\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740', '', [
                      { text: '\u53d6\u6d88' },
                      {
                        text: '\u786e\u5b9a',
                        onPress: (function () {
                          var e = Object(i['a'])(
                            b.a.mark(function e(t) {
                              return b.a.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return g(!0), (e.next = 3), Object(O['a'])(t);
                                    case 3:
                                      d(Object(j['b'])()), g(!1);
                                    case 5:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                    ]),
                }),
              ),
            }),
            w.a.createElement(
              c['a'].Body,
              { style: { minHeight: 100 } },
              w.a.createElement(
                L,
                {
                  useDragHandle: !0,
                  helperClass: _.a['row-dragging'],
                  onSortEnd: (t) => {
                    var a = t.oldIndex,
                      n = t.newIndex,
                      r = Object.keys(o),
                      c = h()(r, a, n),
                      i = {};
                    c.forEach((t) => {
                      i[t] = e[t];
                    }),
                      Object(j['d'])(i),
                      d(i);
                  },
                },
                Object.keys(o).length
                  ? Object.keys(o).map((e, t) => {
                      var a = o[e],
                        n = Object(r['a'])(
                          Object(r['a'])({}, a),
                          {},
                          { counts: a.apps.length, url: e },
                        );
                      return w.a.createElement(I, {
                        key: e,
                        index: t,
                        dataSource: n,
                        update: d,
                        setLoading: g,
                      });
                    })
                  : w.a.createElement(
                      S['a'],
                      { style: { height: '5rem' } },
                      '\u6682\u672a\u6dfb\u52a0\u76f8\u5173\u8ba2\u9605',
                    ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
