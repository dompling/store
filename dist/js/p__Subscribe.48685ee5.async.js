(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '0lfv': function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return r;
      }),
        a.d(t, 'b', function () {
          return n;
        }),
        a.d(t, 'c', function () {
          return c;
        });
      var r = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        n = (e) => {
          var t = r(),
            a = [];
          return (
            Object.keys(t).forEach((e) => a.push(...t[e].apps)),
            a.find((t) => t.name === e)
          );
        },
        c = (e) => localStorage.setItem('dataSource', JSON.stringify(e));
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
      var r = a('nJCp'),
        n = a('VTBJ'),
        c = (a('tLCQ'), a('XYLF')),
        s = a('o0o1'),
        i = a.n(s),
        o = a('HaE+'),
        l = (a('RFiq'), a('ZyfH')),
        u = a('ODXe'),
        m = (a('pYJI'), a('EIQY')),
        d = (a('B8GA'), a('8dL9')),
        p = (a('QE6f'), a('Xo8F')),
        f = a('wx14'),
        g = a('Ff2n'),
        _ = (a('puyI'), a('xZH1')),
        b = a('q1tI'),
        h = a.n(b),
        O = a('R0pf'),
        v = a.n(O),
        E = a('0lfv'),
        j = (a('HVTF'), a('OT5E')),
        w = a('9kvl'),
        x = (function () {
          var e = Object(o['a'])(
            i.a.mark(function e(t) {
              var a, r;
              return i.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(w['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((r = JSON.parse(
                              localStorage.getItem('dataSource') || '{}',
                            )),
                            (r[t] = a),
                            localStorage.setItem(
                              'dataSource',
                              JSON.stringify(r),
                            ))
                          : j['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (n) {
                        j['a'].fail(JSON.stringify(n));
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
        y = _['a'].prompt,
        k = Object(b['forwardRef'])((e, t) => {
          var a = e.icon,
            r = Object(g['a'])(e, ['icon']);
          return h.a.createElement(
            'img',
            Object(f['a'])({ ref: t, className: v.a.icon, alt: '', src: a }, r),
          );
        }),
        S = (e) => {
          var t = e.dataSource,
            a = e.update,
            r = e.setLoading;
          return h.a.createElement(
            m['a'],
            {
              className: v.a.subList,
              autoClose: !0,
              right: [
                {
                  text: '\u66f4\u65b0',
                  onPress: () => (
                    r(!0),
                    x(t.url)
                      .then(() => {
                        var e = Object(E['a'])();
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
                    var e = Object(E['a'])();
                    delete e[t.url], Object(E['c'])(e), a(e);
                  },
                  style: { backgroundColor: 'red', color: 'white' },
                },
              ],
              style: { marginBottom: 10, padding: '10px 0' },
            },
            h.a.createElement(
              p['a'],
              null,
              h.a.createElement('img', {
                className: v.a.avatar,
                src: t.icon,
                alt: '',
              }),
              h.a.createElement(
                'div',
                null,
                h.a.createElement(
                  p['a'],
                  {
                    className: v.a.user_info,
                    direction: 'column',
                    justify: 'start',
                  },
                  h.a.createElement(
                    'div',
                    { className: v.a.user_title },
                    t.author,
                    ' \u7ec4\u4ef6',
                  ),
                  h.a.createElement('div', null, t.repo),
                  h.a.createElement(
                    'div',
                    { className: v.a.user_text },
                    '@',
                    t.author,
                  ),
                ),
              ),
              h.a.createElement(d['a'], { text: t.counts, size: 'small' }),
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
        var e = Object(E['a'])(),
          t = h.a.useState(e),
          a = Object(u['a'])(t, 2),
          s = a[0],
          m = a[1],
          d = h.a.useState(!1),
          p = Object(u['a'])(d, 2),
          f = p[0],
          g = p[1];
        return h.a.createElement(
          r['a'],
          { className: v.a.container },
          h.a.createElement(l['a'], { toast: !0, animating: f }),
          h.a.createElement(
            c['a'],
            null,
            h.a.createElement(c['a'].Header, {
              className: v.a.widgetTitle,
              title: '\u7ec4\u4ef6\u8ba2\u9605('.concat(
                Object.keys(s).length,
                ')',
              ),
              extra: h.a.createElement(
                'div',
                { className: v.a.extra },
                h.a.createElement(k, {
                  icon: 'https://img.icons8.com/clouds/344/cloud-refresh.png',
                  onClick: Object(o['a'])(
                    i.a.mark(function e() {
                      var t, a, r, n;
                      return i.a.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = Object.keys(s)), g(!0), (a = 0), (r = t);
                            case 3:
                              if (!(a < r.length)) {
                                e.next = 10;
                                break;
                              }
                              return (n = r[a]), (e.next = 7), x(n);
                            case 7:
                              a++, (e.next = 3);
                              break;
                            case 10:
                              m(Object(E['a'])()), g(!1);
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
                    y('\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740', '', [
                      { text: '\u53d6\u6d88' },
                      {
                        text: '\u786e\u5b9a',
                        onPress: (function () {
                          var e = Object(o['a'])(
                            i.a.mark(function e(t) {
                              return i.a.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return g(!0), (e.next = 3), x(t);
                                    case 3:
                                      m(Object(E['a'])()), g(!1);
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
              Object.keys(s).map((e) => {
                var t = s[e],
                  a = Object(n['a'])(
                    Object(n['a'])({}, t),
                    {},
                    { counts: t.apps.length, url: e },
                  );
                return h.a.createElement(S, {
                  key: e,
                  dataSource: a,
                  update: m,
                  setLoading: g,
                });
              }),
            ),
          ),
        );
      };
    },
  },
]);
