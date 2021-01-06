(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4, 6],
  {
    '+J+N': function (e, t, a) {},
    '0lfv': function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return n;
      }),
        a.d(t, 'b', function () {
          return r;
        }),
        a.d(t, 'c', function () {
          return c;
        });
      var n = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        r = (e) => {
          var t = n(),
            a = [];
          return (
            Object.keys(t).forEach((e) => a.push(...t[e].apps)),
            a.find((t) => t.name === e)
          );
        },
        c = (e) => localStorage.setItem('dataSource', JSON.stringify(e));
    },
    Idy6: function (e, t, a) {
      'use strict';
      a.r(t);
      a('QE6f');
      var n = a('Xo8F'),
        r = (a('tLCQ'), a('XYLF')),
        c = (a('ywh3'), a('+J+N'), a('QbLZ')),
        l = a.n(c),
        o = a('iCc5'),
        i = a.n(o),
        s = a('V7oC'),
        m = a.n(s),
        u = a('FYw3'),
        p = a.n(u),
        d = a('mRg0'),
        f = a.n(d),
        _ = a('TSYQ'),
        g = a.n(_),
        E = a('q1tI'),
        h = a.n(E),
        v = function (e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 && (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        b = (function (e) {
          function t() {
            return (
              i()(this, t),
              p()(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                  this,
                  arguments,
                ),
              )
            );
          }
          return (
            f()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    a = e.className,
                    n = e.children,
                    r = e.mode,
                    c = e.icon,
                    o = e.onLeftClick,
                    i = e.leftContent,
                    s = e.rightContent,
                    m = v(e, [
                      'prefixCls',
                      'className',
                      'children',
                      'mode',
                      'icon',
                      'onLeftClick',
                      'leftContent',
                      'rightContent',
                    ]);
                  return E['createElement'](
                    'div',
                    l()({}, m, { className: g()(a, t, t + '-' + r) }),
                    E['createElement'](
                      'div',
                      { className: t + '-left', role: 'button', onClick: o },
                      c
                        ? E['createElement'](
                            'span',
                            {
                              className: t + '-left-icon',
                              'aria-hidden': 'true',
                            },
                            c,
                          )
                        : null,
                      i,
                    ),
                    E['createElement']('div', { className: t + '-title' }, n),
                    E['createElement']('div', { className: t + '-right' }, s),
                  );
                },
              },
            ]),
            t
          );
        })(E['Component']),
        y = b;
      b.defaultProps = {
        prefixCls: 'am-navbar',
        mode: 'dark',
        onLeftClick: function () {},
      };
      a('D2jH');
      var O,
        w = a('2ROE'),
        j = a('i7U8'),
        x = a('9kvl'),
        k = a('0lfv'),
        N = a('bIAK'),
        C = a('La0L'),
        L = a.n(C),
        I = (e) => {
          var t = e.match,
            a = t.params,
            c = a.appId,
            l = Object(k['b'])(c);
          console.log(l, O);
          var o = new CustomEvent('catalog-event', { detail: l });
          return h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(y, {
              mode: 'light',
              icon: h.a.createElement(w['a'], { type: 'left' }),
              onLeftClick: () => x['a'].goBack(),
            }),
            l
              ? h.a.createElement(
                  'div',
                  { className: L.a.container },
                  h.a.createElement(
                    r['a'],
                    { full: !0 },
                    h.a.createElement(r['a'].Header, {
                      title: '\u7ec4\u4ef6\u4fe1\u606f',
                      extra: O
                        ? h.a.createElement(j['CustomerIcon'], {
                            icon:
                              'https://img.icons8.com/clouds/344/download-2.png',
                            onClick: () => {
                              window.dispatchEvent(o);
                            },
                          })
                        : h.a.createElement(j['CustomerIcon'], {
                            icon:
                              'https://img.icons8.com/clouds/344/download-2.png',
                            onClick: () => {
                              window.open(
                                null === l || void 0 === l
                                  ? void 0
                                  : l.scriptURL,
                              );
                            },
                          }),
                    }),
                    h.a.createElement(
                      r['a'].Body,
                      { className: L.a.container_body },
                      h.a.createElement(
                        n['a'],
                        { align: 'start', justify: 'start' },
                        h.a.createElement('img', {
                          className: L.a.appImg,
                          src: l.thumb,
                          alt: l.name,
                        }),
                        h.a.createElement(
                          n['a'].Item,
                          null,
                          h.a.createElement(
                            n['a'],
                            { direction: 'column', align: 'start' },
                            h.a.createElement(
                              n['a'],
                              null,
                              h.a.createElement(
                                'h3',
                                { className: L.a.appTitle },
                                l.title,
                              ),
                            ),
                            h.a.createElement(
                              n['a'].Item,
                              null,
                              h.a.createElement(
                                'div',
                                { className: L.a.appDesc },
                                l.description,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  l.html &&
                    h.a.createElement('div', {
                      dangerouslySetInnerHTML: { __html: l.html },
                    }),
                  l.images &&
                    h.a.createElement(
                      'div',
                      { className: L.a.photos },
                      h.a.createElement(
                        r['a'],
                        { full: !0 },
                        h.a.createElement(r['a'].Header, {
                          title: '\u7ec4\u4ef6\u76f8\u518c',
                        }),
                        h.a.createElement(
                          r['a'].Body,
                          null,
                          l.images.map((e) =>
                            h.a.createElement('img', { src: e, alt: '' }),
                          ),
                        ),
                      ),
                    ),
                )
              : h.a.createElement(
                  N['a'],
                  null,
                  '\u6ca1\u6709\u627e\u5230\u8be5\u7ec4\u4ef6',
                ),
          );
        };
      t['default'] = I;
    },
    La0L: function (e, t, a) {
      e.exports = {
        container: 'container___2dK_3',
        container_body: 'container_body___1k27R',
        appImg: 'appImg___1MXfc',
        appTitle: 'appTitle___2Vrw4',
        appDesc: 'appDesc___qLGi7',
        photos: 'photos___2UKHY',
      };
    },
    R0pf: function (e, t, a) {
      e.exports = {
        container: 'container___3WbTd',
        widgetTitle: 'widgetTitle___1Ojl9',
        subList: 'subList___1NVQZ',
        avatar: 'avatar___2yRWX',
        user_info: 'user_info___1pF6R',
        user_title: 'user_title___3VZaa',
        user_text: 'user_text___2-KJa',
        extra: 'extra___1Pjch',
        icon: 'icon___38pp4',
      };
    },
    i7U8: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'CustomerIcon', function () {
          return k;
        });
      a('mw1O');
      var n = a('nJCp'),
        r = a('VTBJ'),
        c = (a('tLCQ'), a('XYLF')),
        l = a('o0o1'),
        o = a.n(l),
        i = a('HaE+'),
        s = (a('RFiq'), a('ZyfH')),
        m = a('ODXe'),
        u = (a('pYJI'), a('EIQY')),
        p = (a('B8GA'), a('8dL9')),
        d = (a('QE6f'), a('Xo8F')),
        f = a('wx14'),
        _ = a('Ff2n'),
        g = (a('puyI'), a('xZH1')),
        E = a('q1tI'),
        h = a.n(E),
        v = a('R0pf'),
        b = a.n(v),
        y = a('0lfv'),
        O = (a('HVTF'), a('OT5E')),
        w = a('9kvl'),
        j = (function () {
          var e = Object(i['a'])(
            o.a.mark(function e(t) {
              var a, n;
              return o.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(w['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((n = JSON.parse(
                              localStorage.getItem('dataSource') || '{}',
                            )),
                            (n[t] = a),
                            localStorage.setItem(
                              'dataSource',
                              JSON.stringify(n),
                            ))
                          : O['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (r) {
                        O['a'].fail(JSON.stringify(r));
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
        x = g['a'].prompt,
        k = Object(E['forwardRef'])((e, t) => {
          var a = e.icon,
            n = Object(_['a'])(e, ['icon']);
          return h.a.createElement(
            'img',
            Object(f['a'])({ ref: t, className: b.a.icon, alt: '', src: a }, n),
          );
        }),
        N = (e) => {
          var t = e.dataSource,
            a = e.update,
            n = e.setLoading;
          return h.a.createElement(
            u['a'],
            {
              className: b.a.subList,
              autoClose: !0,
              right: [
                {
                  text: '\u66f4\u65b0',
                  onPress: () => (
                    n(!0),
                    j(t.url)
                      .then(() => {
                        var e = Object(y['a'])();
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
                    var e = Object(y['a'])();
                    delete e[t.url], Object(y['c'])(e), a(e);
                  },
                  style: { backgroundColor: 'red', color: 'white' },
                },
              ],
              style: { marginBottom: 10, padding: '10px 0' },
            },
            h.a.createElement(
              d['a'],
              null,
              h.a.createElement('img', {
                className: b.a.avatar,
                src: t.icon,
                alt: '',
              }),
              h.a.createElement(
                'div',
                null,
                h.a.createElement(
                  d['a'],
                  {
                    className: b.a.user_info,
                    direction: 'column',
                    justify: 'start',
                  },
                  h.a.createElement(
                    'div',
                    { className: b.a.user_title },
                    t.author,
                    ' \u7ec4\u4ef6',
                  ),
                  h.a.createElement('div', null, t.repo),
                  h.a.createElement(
                    'div',
                    { className: b.a.user_text },
                    '@',
                    t.author,
                  ),
                ),
              ),
              h.a.createElement(p['a'], { text: t.counts, size: 'small' }),
              h.a.createElement(
                'div',
                { style: { marginLeft: 'auto' } },
                h.a.createElement(
                  'a',
                  { href: t.repo, target: '_blank' },
                  h.a.createElement(k, {
                    icon: 'https://img.icons8.com/clouds/344/github.png',
                    style: { width: '3rem', height: '3rem' },
                  }),
                ),
              ),
            ),
          );
        };
      t['default'] = () => {
        var e = Object(y['a'])(),
          t = h.a.useState(e),
          a = Object(m['a'])(t, 2),
          l = a[0],
          u = a[1],
          p = h.a.useState(!1),
          d = Object(m['a'])(p, 2),
          f = d[0],
          _ = d[1];
        return h.a.createElement(
          n['a'],
          { className: b.a.container },
          h.a.createElement(s['a'], { toast: !0, animating: f }),
          h.a.createElement(
            c['a'],
            null,
            h.a.createElement(c['a'].Header, {
              className: b.a.widgetTitle,
              title: '\u7ec4\u4ef6\u8ba2\u9605('.concat(
                Object.keys(l).length,
                ')',
              ),
              extra: h.a.createElement(
                'div',
                { className: b.a.extra },
                h.a.createElement(k, {
                  icon: 'https://img.icons8.com/clouds/344/cloud-refresh.png',
                  onClick: Object(i['a'])(
                    o.a.mark(function e() {
                      var t, a, n, r;
                      return o.a.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = Object.keys(l)), _(!0), (a = 0), (n = t);
                            case 3:
                              if (!(a < n.length)) {
                                e.next = 10;
                                break;
                              }
                              return (r = n[a]), (e.next = 7), j(r);
                            case 7:
                              a++, (e.next = 3);
                              break;
                            case 10:
                              u(Object(y['a'])()), _(!1);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                }),
                h.a.createElement(k, {
                  icon: 'https://img.icons8.com/clouds/344/add.png',
                  onClick: () =>
                    x('\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740', '', [
                      { text: '\u53d6\u6d88' },
                      {
                        text: '\u786e\u5b9a',
                        onPress: (function () {
                          var e = Object(i['a'])(
                            o.a.mark(function e(t) {
                              return o.a.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return _(!0), (e.next = 3), j(t);
                                    case 3:
                                      u(Object(y['a'])()), _(!1);
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
            h.a.createElement(
              c['a'].Body,
              { style: { minHeight: 100 } },
              Object.keys(l).map((e) => {
                var t = l[e],
                  a = Object(r['a'])(
                    Object(r['a'])({}, t),
                    {},
                    { counts: t.apps.length, url: e },
                  );
                return h.a.createElement(N, {
                  key: e,
                  dataSource: a,
                  update: u,
                  setLoading: _,
                });
              }),
            ),
          ),
        );
      };
    },
  },
]);
