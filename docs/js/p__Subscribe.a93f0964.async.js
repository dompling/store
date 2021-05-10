(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    '0lfv': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return r;
      }),
        a.d(t, 'c', function () {
          return n;
        }),
        a.d(t, 'd', function () {
          return c;
        }),
        a.d(t, 'a', function () {
          return s;
        });
      var r = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        n = (e, t) => {
          var a = r(),
            n = Object.keys(a).find((t) => a[t].author === e) || '',
            c = a[n].apps || [];
          return c.find((e) => e.name === t);
        },
        c = (e) => localStorage.setItem('dataSource', JSON.stringify(e)),
        s = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
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
        return u;
      }),
        a.d(t, 'b', function () {
          return i;
        }),
        a.d(t, 'c', function () {
          return l;
        });
      a('P0Cl');
      var r = a('oB33'),
        n = a('SDO5'),
        c = a('4Wd/'),
        s = a.n(c),
        o = a('9kvl'),
        u = (function () {
          var e = Object(n['a'])(
            s.a.mark(function e(t) {
              var a, n;
              return s.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((n = JSON.parse(localStorage.getItem('dataSource') || '{}')),
                            (n[t] = a),
                            localStorage.setItem('dataSource', JSON.stringify(n)))
                          : r['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (c) {
                        r['a'].fail(JSON.stringify(c));
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
        i = (function () {
          var e = Object(n['a'])(
            s.a.mark(function e() {
              var t;
              return s.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(o['c'])(
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
        l = (function () {
          var e = Object(n['a'])(
            s.a.mark(function e(t) {
              var a;
              return s.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(o['c'])(
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
                          r['a'].success('\u5907\u4efd\u6210\u529f'),
                          e.abrupt('return', a)
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e['catch'](0)),
                          console.log(e.t0),
                          r['a'].fail('\u5907\u4efd\u5931\u8d25'),
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
      var r = a('aLjh'),
        n = a('7+KJ'),
        c = (a('ka6A'), a('JqU2')),
        s = a('SDO5'),
        o = (a('2f0q'), a('0OHd')),
        u = a('Wval'),
        i = (a('KNKI'), a('Qm4I')),
        l = (a('JHCA'), a('vTGJ')),
        d = (a('xx5R'), a('1eom')),
        m = a('DJqP'),
        p = a('M+ez'),
        b = (a('6Yi/'), a('aJ6J')),
        g = a('4Wd/'),
        f = a.n(g),
        h = a('xwgP'),
        v = a.n(h),
        O = a('F61N'),
        j = a.n(O),
        _ = a('Wu6v'),
        x = a('R0pf'),
        w = a.n(x),
        E = a('0lfv'),
        y = a('diY3'),
        S = a('bIAK'),
        k = b['a'].prompt,
        N = Object(h['forwardRef'])((e, t) => {
          var a = e.icon,
            r = Object(p['a'])(e, ['icon']);
          return v.a.createElement(
            'img',
            Object(m['a'])({ ref: t, className: w.a.icon, alt: '', src: a }, r),
          );
        }),
        J = Object(_['c'])((e) => {
          var t = e.counts;
          return v.a.createElement(d['a'], {
            style: { userSelect: 'none' },
            text: t,
            size: 'small',
          });
        }),
        I = (e) => {
          var t = e.dataSource,
            a = e.update,
            r = e.setLoading;
          return v.a.createElement(
            i['a'],
            {
              className: w.a.subList,
              autoClose: !0,
              right: [
                {
                  text: '\u66f4\u65b0',
                  onPress: () => (
                    r(!0),
                    Object(y['a'])(t.url)
                      .then(() => {
                        var e = Object(E['b'])();
                        a(e);
                      })
                      .finally(() => {
                        r(!1);
                      })
                  ),
                  style: { backgroundColor: '#77cad1', color: 'white' },
                },
                {
                  text: '\u5220\u9664',
                  onPress: () => {
                    var e = Object(E['b'])();
                    delete e[t.url], Object(E['d'])(e), a(e);
                  },
                  style: { backgroundColor: 'red', color: 'white' },
                },
              ],
              style: { marginBottom: 10, padding: '10px 0' },
            },
            v.a.createElement(
              l['a'],
              null,
              v.a.createElement('img', { className: w.a.avatar, alt: '', src: t.icon }),
              v.a.createElement(
                'div',
                null,
                v.a.createElement(
                  l['a'],
                  { className: w.a.user_info, direction: 'column', justify: 'start' },
                  v.a.createElement(
                    'div',
                    { className: w.a.user_title },
                    t.author,
                    ' \u7ec4\u4ef6',
                  ),
                  v.a.createElement('div', null, t.repo),
                  v.a.createElement('div', { className: w.a.user_text }, '@', t.author),
                ),
              ),
              v.a.createElement(J, { counts: t.counts }),
              v.a.createElement(
                'div',
                { style: { marginLeft: 'auto' } },
                v.a.createElement(
                  'a',
                  { href: t.repo, target: '_blank' },
                  v.a.createElement(N, {
                    icon: 'https://img.icons8.com/clouds/344/github.png',
                    style: { width: '3rem', height: '3rem' },
                  }),
                ),
              ),
            ),
          );
        },
        C = Object(_['b'])((e) => v.a.createElement(I, e)),
        P = Object(_['a'])((e) => {
          var t = e.children;
          return v.a.createElement('div', null, t);
        });
      t['default'] = () => {
        var e = Object(E['b'])(),
          t = v.a.useState(e),
          a = Object(u['a'])(t, 2),
          i = a[0],
          l = a[1],
          d = v.a.useState(!1),
          m = Object(u['a'])(d, 2),
          p = m[0],
          b = m[1];
        return v.a.createElement(
          r['a'],
          { className: w.a.container },
          v.a.createElement(o['a'], { toast: !0, animating: p }),
          v.a.createElement(
            c['a'],
            null,
            v.a.createElement(c['a'].Header, {
              className: w.a.widgetTitle,
              title: '\u7ec4\u4ef6\u8ba2\u9605('.concat(Object.keys(i).length, ')'),
              extra: v.a.createElement(
                'div',
                { className: w.a.extra },
                v.a.createElement(N, {
                  icon: 'https://img.icons8.com/clouds/344/cloud-refresh.png',
                  onClick: Object(s['a'])(
                    f.a.mark(function e() {
                      var t, a, r, n;
                      return f.a.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = Object.keys(i)), b(!0), (a = 0), (r = t);
                            case 3:
                              if (!(a < r.length)) {
                                e.next = 10;
                                break;
                              }
                              return (n = r[a]), (e.next = 7), Object(y['a'])(n);
                            case 7:
                              a++, (e.next = 3);
                              break;
                            case 10:
                              l(Object(E['b'])()), b(!1);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                }),
                v.a.createElement(N, {
                  icon: 'https://img.icons8.com/clouds/344/add.png',
                  onClick: () =>
                    k('\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740', '', [
                      { text: '\u53d6\u6d88' },
                      {
                        text: '\u786e\u5b9a',
                        onPress: (function () {
                          var e = Object(s['a'])(
                            f.a.mark(function e(t) {
                              return f.a.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return b(!0), (e.next = 3), Object(y['a'])(t);
                                    case 3:
                                      l(Object(E['b'])()), b(!1);
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
            v.a.createElement(
              c['a'].Body,
              { style: { minHeight: 100 } },
              v.a.createElement(
                P,
                {
                  useDragHandle: !0,
                  helperClass: w.a['row-dragging'],
                  onSortEnd: (t) => {
                    var a = t.oldIndex,
                      r = t.newIndex,
                      n = Object.keys(i),
                      c = j()(n, a, r),
                      s = {};
                    c.forEach((t) => {
                      s[t] = e[t];
                    }),
                      Object(E['d'])(s),
                      l(s);
                  },
                },
                Object.keys(i).length
                  ? Object.keys(i).map((e, t) => {
                      var a = i[e],
                        r = Object(n['a'])(
                          Object(n['a'])({}, a),
                          {},
                          { counts: a.apps.length, url: e },
                        );
                      return v.a.createElement(C, {
                        key: e,
                        index: t,
                        dataSource: r,
                        update: l,
                        setLoading: b,
                      });
                    })
                  : v.a.createElement(
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
