(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    Y4ta: function (t, e, n) {
      'use strict';
      n.r(e);
      n('2f0q');
      var a = n('0OHd'),
        r = n('Wval'),
        c = (n('P0Cl'), n('oB33')),
        o = n('xwgP'),
        u = n.n(o),
        i = n('D2RX'),
        s = n('diY3'),
        l = n('I5X1'),
        d = n('bIAK');
      (window.Clipboard = (function (t, e) {
        var n;
        function a(t) {
          (n = e.createElement('textArea')), (n.value = t), e.body.appendChild(n), n.select();
        }
        function r() {
          e.execCommand('copy'), e.body.removeChild(n);
        }
        var c = (t) => {
          a(t), r();
        };
        return { copy: c };
      })(window, document)),
        (window.Toast = new CustomEvent('Toast', {
          detail: {
            success: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
              return c['a'].success(t, e);
            },
            fail: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
              return c['a'].fail(t, e);
            },
          },
        }));
      var p = (t) => {
        var e = t.children,
          n = Object(o['useState'])(!1),
          c = Object(r['a'])(n, 2),
          p = c[0],
          b = c[1],
          f = Object(o['useState'])(''),
          v = Object(r['a'])(f, 2),
          w = v[0],
          m = v[1],
          h = Object(i['b'])(s['b'], { manual: !0 }),
          g = Object(l['a'])('boxjsModel', (t) => t);
        return (
          Object(o['useEffect'])(() => {
            (window.loadingEvent = new CustomEvent('setLoading', {
              detail: {
                setLoading: (t, e) => {
                  m(e), b(t);
                },
              },
            })),
              h.run().then((t) => {
                t && g.setBoxJS(t);
              });
          }, []),
          u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(a['a'], { toast: !0, text: ''.concat(w, '...'), animating: p }),
            h.loading ? u.a.createElement(d['b'], null) : u.a.createElement('main', null, e),
          )
        );
      };
      e['default'] = p;
    },
    diY3: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      }),
        n.d(e, 'b', function () {
          return s;
        }),
        n.d(e, 'c', function () {
          return l;
        });
      n('P0Cl');
      var a = n('oB33'),
        r = n('SDO5'),
        c = n('4Wd/'),
        o = n.n(c),
        u = n('9kvl'),
        i = (function () {
          var t = Object(r['a'])(
            o.a.mark(function t(e) {
              var n, r;
              return o.a.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(u['c'])(e, { method: 'get' });
                    case 2:
                      n = t.sent;
                      try {
                        n.scriptable
                          ? ((r = JSON.parse(localStorage.getItem('dataSource') || '{}')),
                            (r[e] = n),
                            localStorage.setItem('dataSource', JSON.stringify(r)))
                          : a['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (c) {
                        a['a'].fail(JSON.stringify(c));
                      }
                    case 4:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        s = (function () {
          var t = Object(r['a'])(
            o.a.mark(function t() {
              var e;
              return o.a.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          Object(u['c'])(
                            'http://'.concat(
                              localStorage.getItem('boxjs') || 'boxjs.net',
                              '/query/boxdata',
                            ),
                          )
                        );
                      case 2:
                        return (e = t.sent), (t.prev = 3), t.abrupt('return', e);
                      case 7:
                        return (
                          (t.prev = 7),
                          (t.t0 = t['catch'](3)),
                          console.log(t.t0),
                          t.abrupt('return', !1)
                        );
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[3, 7]],
              );
            }),
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        l = (function () {
          var t = Object(r['a'])(
            o.a.mark(function t(e) {
              var n;
              return o.a.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          Object(u['c'])(
                            'http://'.concat(
                              localStorage.getItem('boxjs') || 'boxjs.net',
                              '/api/save',
                            ),
                            { method: 'POST', data: e },
                          )
                        );
                      case 3:
                        return (
                          (n = t.sent),
                          a['a'].success('\u5907\u4efd\u6210\u529f'),
                          t.abrupt('return', n)
                        );
                      case 8:
                        return (
                          (t.prev = 8),
                          (t.t0 = t['catch'](0)),
                          console.log(t.t0),
                          a['a'].fail('\u5907\u4efd\u5931\u8d25'),
                          t.abrupt('return', !1)
                        );
                      case 13:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 8]],
              );
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
    },
  },
]);
