(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
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
          return o;
        }),
        a.d(t, 'a', function () {
          return i;
        });
      var r = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        n = (e, t) => {
          var a = r(),
            n = Object.keys(a).find((t) => a[t].author === e) || '',
            o = a[n].apps || [];
          return o.find((e) => e.name === t);
        },
        o = (e) => localStorage.setItem('dataSource', JSON.stringify(e)),
        i = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
    },
    DIa4: function (e, t, a) {
      'use strict';
      a.r(t);
      a('vu4r');
      var r = a('aLjh'),
        n = (a('ka6A'), a('JqU2')),
        o = (a('P0Cl'), a('oB33')),
        i = a('SDO5'),
        c = (a('JHCA'), a('vTGJ')),
        l = (a('zr+F'), a('VuRx'), a('6ato')),
        s = a.n(l),
        u = a('2dj7'),
        p = a.n(u),
        m = a('Xtzg'),
        d = a.n(m),
        f = a('0dFU'),
        v = a.n(f),
        h = a('jK+o'),
        b = a.n(h),
        y = a('xwgP'),
        g = a.n(y),
        w = (function (e) {
          function t() {
            return (
              s()(this, t),
              d()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            v()(t, e),
            p()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    a = e.size,
                    r = e.className,
                    n = e.style,
                    o = e.onClick,
                    i = b()(t, t + '-' + a, r);
                  return y['createElement']('div', { className: i, style: n, onClick: o });
                },
              },
            ]),
            t
          );
        })(y['Component']),
        x = w;
      w.defaultProps = { prefixCls: 'am-whitespace', size: 'md' };
      a('6Yi/');
      var O = a('aJ6J'),
        S = (a('o171'), a('bS4n')),
        j = a.n(S),
        E = a('/umX'),
        k = a.n(E),
        C = a('eVHG'),
        N = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 && (a[r[n]] = e[r[n]]);
          }
          return a;
        },
        _ = (function (e) {
          function t() {
            return (
              s()(this, t),
              d()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            v()(t, e),
            p()(t, [
              {
                key: 'render',
                value: function () {
                  return y['createElement'](
                    'div',
                    { className: 'am-list-brief', style: this.props.style },
                    this.props.children,
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']),
        J = (function (e) {
          function t(e) {
            s()(this, t);
            var a = d()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (a.onClick = function (e) {
                var t = a.props,
                  r = t.onClick,
                  n = t.platform,
                  o = 'android' === n;
                if (r && o) {
                  a.debounceTimeout &&
                    (clearTimeout(a.debounceTimeout), (a.debounceTimeout = null));
                  var i = e.currentTarget,
                    c = Math.max(i.offsetHeight, i.offsetWidth),
                    l = e.currentTarget.getBoundingClientRect(),
                    s = e.clientX - l.left - i.offsetWidth / 2,
                    u = e.clientY - l.top - i.offsetWidth / 2,
                    p = { width: c + 'px', height: c + 'px', left: s + 'px', top: u + 'px' };
                  a.setState({ coverRippleStyle: p, RippleClicked: !0 }, function () {
                    a.debounceTimeout = setTimeout(function () {
                      a.setState({ coverRippleStyle: { display: 'none' }, RippleClicked: !1 });
                    }, 1e3);
                  });
                }
                r && r(e);
              }),
              (a.state = { coverRippleStyle: { display: 'none' }, RippleClicked: !1 }),
              a
            );
          }
          return (
            v()(t, e),
            p()(t, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.debounceTimeout &&
                    (clearTimeout(this.debounceTimeout), (this.debounceTimeout = null));
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    r = this,
                    n = this.props,
                    o = n.prefixCls,
                    i = n.className,
                    c = n.activeStyle,
                    l = n.error,
                    s = n.align,
                    u = n.wrap,
                    p = n.disabled,
                    m = n.children,
                    d = n.multipleLine,
                    f = n.thumb,
                    v = n.extra,
                    h = n.arrow,
                    g = n.onClick,
                    w = N(n, [
                      'prefixCls',
                      'className',
                      'activeStyle',
                      'error',
                      'align',
                      'wrap',
                      'disabled',
                      'children',
                      'multipleLine',
                      'thumb',
                      'extra',
                      'arrow',
                      'onClick',
                    ]),
                    x = (w.platform, N(w, ['platform'])),
                    O = this.state,
                    S = O.coverRippleStyle,
                    E = O.RippleClicked,
                    _ = b()(
                      o + '-item',
                      i,
                      ((e = {}),
                      k()(e, o + '-item-disabled', p),
                      k()(e, o + '-item-error', l),
                      k()(e, o + '-item-top', 'top' === s),
                      k()(e, o + '-item-middle', 'middle' === s),
                      k()(e, o + '-item-bottom', 'bottom' === s),
                      e),
                    ),
                    J = b()(o + '-ripple', k()({}, o + '-ripple-animate', E)),
                    z = b()(
                      o + '-line',
                      ((t = {}), k()(t, o + '-line-multiple', d), k()(t, o + '-line-wrap', u), t),
                    ),
                    P = b()(
                      o + '-arrow',
                      ((a = {}),
                      k()(a, o + '-arrow-horizontal', 'horizontal' === h),
                      k()(a, o + '-arrow-vertical', 'down' === h || 'up' === h),
                      k()(a, o + '-arrow-vertical-up', 'up' === h),
                      a),
                    ),
                    T = y['createElement'](
                      'div',
                      j()({}, x, {
                        onClick: function (e) {
                          r.onClick(e);
                        },
                        className: _,
                      }),
                      f
                        ? y['createElement'](
                            'div',
                            { className: o + '-thumb' },
                            'string' === typeof f ? y['createElement']('img', { src: f }) : f,
                          )
                        : null,
                      y['createElement'](
                        'div',
                        { className: z },
                        void 0 !== m && y['createElement']('div', { className: o + '-content' }, m),
                        void 0 !== v && y['createElement']('div', { className: o + '-extra' }, v),
                        h && y['createElement']('div', { className: P, 'aria-hidden': 'true' }),
                      ),
                      y['createElement']('div', { style: S, className: J }),
                    ),
                    I = {};
                  return (
                    Object.keys(x).forEach(function (e) {
                      /onTouch/i.test(e) && ((I[e] = x[e]), delete x[e]);
                    }),
                    y['createElement'](
                      C['a'],
                      j()({}, I, {
                        disabled: p || !g,
                        activeStyle: c,
                        activeClassName: o + '-item-active',
                      }),
                      T,
                    )
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']);
      (J.defaultProps = {
        prefixCls: 'am-list',
        align: 'middle',
        error: !1,
        multipleLine: !1,
        wrap: !1,
        platform: 'ios',
      }),
        (J.Brief = _);
      var z = J,
        P = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 && (a[r[n]] = e[r[n]]);
          }
          return a;
        },
        T = (function (e) {
          function t() {
            return (
              s()(this, t),
              d()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            v()(t, e),
            p()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    a = e.children,
                    r = e.className,
                    n = e.style,
                    o = e.renderHeader,
                    i = e.renderFooter,
                    c = P(e, [
                      'prefixCls',
                      'children',
                      'className',
                      'style',
                      'renderHeader',
                      'renderFooter',
                    ]),
                    l = b()(t, r);
                  return y['createElement'](
                    'div',
                    j()({ className: l, style: n }, c),
                    o
                      ? y['createElement'](
                          'div',
                          { className: t + '-header' },
                          'function' === typeof o ? o() : o,
                        )
                      : null,
                    a ? y['createElement']('div', { className: t + '-body' }, a) : null,
                    i
                      ? y['createElement'](
                          'div',
                          { className: t + '-footer' },
                          'function' === typeof i ? i() : i,
                        )
                      : null,
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']),
        I = T;
      (T.Item = z), (T.defaultProps = { prefixCls: 'am-list' });
      var R = a('4Wd/'),
        B = a.n(R),
        L = a('I5X1'),
        H = a('EkL2'),
        V = a.n(H),
        W = a('bIAK'),
        U = a('diY3'),
        X = a('0lfv'),
        D = a('D2RX'),
        F = I.Item,
        M = O['a'].prompt,
        Y = () => {
          var e = Object(L['a'])('boxjsModel', (e) => e),
            t = Object(D['b'])(U['c'], { manual: !0 }),
            a = Object(X['b'])();
          return e.data.usercfgs
            ? g.a.createElement(
                r['a'],
                { size: 'sm' },
                g.a.createElement(x, { size: 'lg' }),
                g.a.createElement(x, { size: 'lg' }),
                g.a.createElement(x, { size: 'lg' }),
                g.a.createElement(x, { size: 'lg' }),
                g.a.createElement(
                  n['a'],
                  null,
                  g.a.createElement(
                    n['a'].Body,
                    { className: V.a.container },
                    g.a.createElement(
                      c['a'],
                      { justify: 'center', direction: 'column', className: V.a.avatarView },
                      g.a.createElement('img', {
                        alt: '\u5934\u50cf',
                        src: e.data.usercfgs.icon || X['a'],
                        className: V.a.avatar,
                      }),
                      g.a.createElement('span', null, e.data.usercfgs.name),
                    ),
                    g.a.createElement(x, { size: 'lg' }),
                    g.a.createElement(
                      I,
                      null,
                      g.a.createElement(
                        F,
                        {
                          thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                          arrow: 'horizontal',
                          onClick: Object(i['a'])(
                            B.a.mark(function r() {
                              var n, o;
                              return B.a.wrap(function (r) {
                                while (1)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        window.loadingEvent.detail.setLoading(
                                          !0,
                                          '\u5907\u4efd\u4e2d',
                                        ),
                                        (n = [
                                          { key: 'scriptable', val: JSON.stringify(a, null, '\t') },
                                          {
                                            key: 'chavy_boxjs_cur_sessions',
                                            val: JSON.stringify(e.data.curSessions),
                                          },
                                        ]),
                                        (r.next = 4),
                                        t.run(n)
                                      );
                                    case 4:
                                      (o = r.sent),
                                        window.loadingEvent.detail.setLoading(!1, ''),
                                        o && e.setBoxJS(o);
                                    case 7:
                                    case 'end':
                                      return r.stop();
                                  }
                              }, r);
                            }),
                          ),
                        },
                        '\u5907\u4efd\u8ba2\u9605',
                      ),
                      g.a.createElement(
                        F,
                        {
                          thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
                          onClick: () => {
                            e.data.datas.scriptable
                              ? (Object(X['d'])(JSON.parse(e.data.datas.scriptable)),
                                o['a'].success('\u6062\u590d\u6210\u529f'))
                              : o['a'].fail('\u6682\u672a\u627e\u5230\u5907\u4efd\u8ba2\u9605');
                          },
                          arrow: 'horizontal',
                        },
                        '\u6062\u590d\u8ba2\u9605',
                      ),
                    ),
                  ),
                ),
              )
            : g.a.createElement(
                W['a'],
                null,
                g.a.createElement(
                  'div',
                  {
                    onClick: () => {
                      M(
                        'BoxJS\u57df\u540d\u8bbe\u7f6e',
                        '',
                        [
                          { text: '\u53d6\u6d88' },
                          {
                            text: '\u786e\u5b9a',
                            onPress: (function () {
                              var e = Object(i['a'])(
                                B.a.mark(function e(t) {
                                  return B.a.wrap(function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          localStorage.setItem('boxjs', t),
                                            o['a'].success(
                                              '\u8bbe\u7f6e\u6210\u529f\n\u5f53\u524d BoxJS \u57df\u540d\u4e3a\uff1a'.concat(
                                                t,
                                              ),
                                            );
                                        case 2:
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
                        ],
                        'default',
                        localStorage.getItem('boxjs') || 'boxjs.net',
                      );
                    },
                  },
                  'BoxJS \u8fde\u63a5\u5931\u8d25',
                  g.a.createElement(x, { size: 'lg' }),
                  g.a.createElement(
                    'span',
                    { style: { color: 'red' } },
                    ' \u70b9\u51fb\u8bbe\u7f6e BoxJS \u57df\u540d',
                  ),
                ),
              );
        };
      t['default'] = Y;
    },
    EkL2: function (e, t, a) {
      e.exports = {
        container: 'container___wXmHU',
        avatarView: 'avatarView___kr50v',
        avatar: 'avatar___2p2ju',
      };
    },
    VuRx: function (e, t, a) {},
    diY3: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return l;
      }),
        a.d(t, 'b', function () {
          return s;
        }),
        a.d(t, 'c', function () {
          return u;
        });
      a('P0Cl');
      var r = a('oB33'),
        n = a('SDO5'),
        o = a('4Wd/'),
        i = a.n(o),
        c = a('9kvl'),
        l = (function () {
          var e = Object(n['a'])(
            i.a.mark(function e(t) {
              var a, n;
              return i.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(c['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((n = JSON.parse(localStorage.getItem('dataSource') || '{}')),
                            (n[t] = a),
                            localStorage.setItem('dataSource', JSON.stringify(n)))
                          : r['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (o) {
                        r['a'].fail(JSON.stringify(o));
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
        s = (function () {
          var e = Object(n['a'])(
            i.a.mark(function e() {
              var t;
              return i.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(c['c'])(
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
        u = (function () {
          var e = Object(n['a'])(
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
                          Object(c['c'])(
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
    o171: function (e, t, a) {},
  },
]);
