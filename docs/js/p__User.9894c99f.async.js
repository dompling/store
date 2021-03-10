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
          return i;
        }),
        a.d(t, 'a', function () {
          return o;
        });
      var r = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        n = (e, t) => {
          var a = r(),
            n = Object.keys(a).find((t) => a[t].author === e) || '',
            i = a[n].apps || [];
          return i.find((e) => e.name === t);
        },
        i = (e) => localStorage.setItem('dataSource', JSON.stringify(e)),
        o = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
    },
    DIa4: function (e, t, a) {
      'use strict';
      a.r(t);
      a('vu4r');
      var r = a('aLjh'),
        n = (a('ka6A'), a('JqU2')),
        i = (a('P0Cl'), a('oB33')),
        o = a('SDju'),
        c = a.n(o),
        l = a('YLUp'),
        s = (a('JHCA'), a('vTGJ')),
        u = (a('zr+F'), a('VuRx'), a('6ato')),
        p = a.n(u),
        m = a('2dj7'),
        d = a.n(m),
        f = a('Xtzg'),
        v = a.n(f),
        h = a('0dFU'),
        b = a.n(h),
        y = a('iczh'),
        g = a.n(y),
        w = a('xwgP'),
        x = a.n(w),
        O = (function (e) {
          function t() {
            return (
              p()(this, t),
              v()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            d()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    a = e.size,
                    r = e.className,
                    n = e.style,
                    i = e.onClick,
                    o = g()(t, t + '-' + a, r);
                  return w['createElement']('div', { className: o, style: n, onClick: i });
                },
              },
            ]),
            t
          );
        })(w['Component']),
        S = O;
      O.defaultProps = { prefixCls: 'am-whitespace', size: 'md' };
      a('6Yi/');
      var j = a('aJ6J'),
        E = (a('o171'), a('bS4n')),
        k = a.n(E),
        C = a('/umX'),
        N = a.n(C),
        _ = a('eVHG'),
        J = function (e, t) {
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
        z = (function (e) {
          function t() {
            return (
              p()(this, t),
              v()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            d()(t, [
              {
                key: 'render',
                value: function () {
                  return w['createElement'](
                    'div',
                    { className: 'am-list-brief', style: this.props.style },
                    this.props.children,
                  );
                },
              },
            ]),
            t
          );
        })(w['Component']),
        P = (function (e) {
          function t(e) {
            p()(this, t);
            var a = v()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (a.onClick = function (e) {
                var t = a.props,
                  r = t.onClick,
                  n = t.platform,
                  i = 'android' === n;
                if (r && i) {
                  a.debounceTimeout &&
                    (clearTimeout(a.debounceTimeout), (a.debounceTimeout = null));
                  var o = e.currentTarget,
                    c = Math.max(o.offsetHeight, o.offsetWidth),
                    l = e.currentTarget.getBoundingClientRect(),
                    s = e.clientX - l.left - o.offsetWidth / 2,
                    u = e.clientY - l.top - o.offsetWidth / 2,
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
            b()(t, e),
            d()(t, [
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
                    i = n.prefixCls,
                    o = n.className,
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
                    b = n.onClick,
                    y = J(n, [
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
                    x = (y.platform, J(y, ['platform'])),
                    O = this.state,
                    S = O.coverRippleStyle,
                    j = O.RippleClicked,
                    E = g()(
                      i + '-item',
                      o,
                      ((e = {}),
                      N()(e, i + '-item-disabled', p),
                      N()(e, i + '-item-error', l),
                      N()(e, i + '-item-top', 'top' === s),
                      N()(e, i + '-item-middle', 'middle' === s),
                      N()(e, i + '-item-bottom', 'bottom' === s),
                      e),
                    ),
                    C = g()(i + '-ripple', N()({}, i + '-ripple-animate', j)),
                    z = g()(
                      i + '-line',
                      ((t = {}), N()(t, i + '-line-multiple', d), N()(t, i + '-line-wrap', u), t),
                    ),
                    P = g()(
                      i + '-arrow',
                      ((a = {}),
                      N()(a, i + '-arrow-horizontal', 'horizontal' === h),
                      N()(a, i + '-arrow-vertical', 'down' === h || 'up' === h),
                      N()(a, i + '-arrow-vertical-up', 'up' === h),
                      a),
                    ),
                    T = w['createElement'](
                      'div',
                      k()({}, x, {
                        onClick: function (e) {
                          r.onClick(e);
                        },
                        className: E,
                      }),
                      f
                        ? w['createElement'](
                            'div',
                            { className: i + '-thumb' },
                            'string' === typeof f ? w['createElement']('img', { src: f }) : f,
                          )
                        : null,
                      w['createElement'](
                        'div',
                        { className: z },
                        void 0 !== m && w['createElement']('div', { className: i + '-content' }, m),
                        void 0 !== v && w['createElement']('div', { className: i + '-extra' }, v),
                        h && w['createElement']('div', { className: P, 'aria-hidden': 'true' }),
                      ),
                      w['createElement']('div', { style: S, className: C }),
                    ),
                    I = {};
                  return (
                    Object.keys(x).forEach(function (e) {
                      /onTouch/i.test(e) && ((I[e] = x[e]), delete x[e]);
                    }),
                    w['createElement'](
                      _['a'],
                      k()({}, I, {
                        disabled: p || !b,
                        activeStyle: c,
                        activeClassName: i + '-item-active',
                      }),
                      T,
                    )
                  );
                },
              },
            ]),
            t
          );
        })(w['Component']);
      (P.defaultProps = {
        prefixCls: 'am-list',
        align: 'middle',
        error: !1,
        multipleLine: !1,
        wrap: !1,
        platform: 'ios',
      }),
        (P.Brief = z);
      var T = P,
        I = function (e, t) {
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
        R = (function (e) {
          function t() {
            return (
              p()(this, t),
              v()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            d()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    a = e.children,
                    r = e.className,
                    n = e.style,
                    i = e.renderHeader,
                    o = e.renderFooter,
                    c = I(e, [
                      'prefixCls',
                      'children',
                      'className',
                      'style',
                      'renderHeader',
                      'renderFooter',
                    ]),
                    l = g()(t, r);
                  return w['createElement'](
                    'div',
                    k()({ className: l, style: n }, c),
                    i
                      ? w['createElement'](
                          'div',
                          { className: t + '-header' },
                          'function' === typeof i ? i() : i,
                        )
                      : null,
                    a ? w['createElement']('div', { className: t + '-body' }, a) : null,
                    o
                      ? w['createElement'](
                          'div',
                          { className: t + '-footer' },
                          'function' === typeof o ? o() : o,
                        )
                      : null,
                  );
                },
              },
            ]),
            t
          );
        })(w['Component']),
        B = R;
      (R.Item = T), (R.defaultProps = { prefixCls: 'am-list' });
      var L = a('I5X1'),
        U = a('EkL2'),
        H = a.n(U),
        V = a('bIAK'),
        X = a('diY3'),
        Y = a('0lfv'),
        W = a('D2RX'),
        D = B.Item,
        F = j['a'].prompt,
        M = () => {
          var e = Object(L['a'])('boxjsModel', (e) => e),
            t = Object(W['b'])(X['c'], { manual: !0 }),
            a = Object(Y['b'])();
          return e.data.usercfgs
            ? x.a.createElement(
                r['a'],
                { size: 'sm' },
                x.a.createElement(S, { size: 'lg' }),
                x.a.createElement(S, { size: 'lg' }),
                x.a.createElement(S, { size: 'lg' }),
                x.a.createElement(S, { size: 'lg' }),
                x.a.createElement(
                  n['a'],
                  null,
                  x.a.createElement(
                    n['a'].Body,
                    { className: H.a.container },
                    x.a.createElement(
                      s['a'],
                      { justify: 'center', direction: 'column', className: H.a.avatarView },
                      x.a.createElement('img', {
                        alt: '\u5934\u50cf',
                        src: e.data.usercfgs.icon || Y['a'],
                        className: H.a.avatar,
                      }),
                      x.a.createElement('span', null, e.data.usercfgs.name),
                    ),
                    x.a.createElement(S, { size: 'lg' }),
                    x.a.createElement(
                      B,
                      null,
                      x.a.createElement(
                        D,
                        {
                          thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                          arrow: 'horizontal',
                          onClick: Object(l['a'])(
                            c.a.mark(function r() {
                              var n, i;
                              return c.a.wrap(function (r) {
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
                                      (i = r.sent),
                                        window.loadingEvent.detail.setLoading(!1, ''),
                                        i && e.setBoxJS(i);
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
                      x.a.createElement(
                        D,
                        {
                          thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
                          onClick: () => {
                            e.data.datas.scriptable
                              ? (Object(Y['d'])(JSON.parse(e.data.datas.scriptable)),
                                i['a'].success('\u6062\u590d\u6210\u529f'))
                              : i['a'].fail('\u6682\u672a\u627e\u5230\u5907\u4efd\u8ba2\u9605');
                          },
                          arrow: 'horizontal',
                        },
                        '\u6062\u590d\u8ba2\u9605',
                      ),
                    ),
                  ),
                ),
              )
            : x.a.createElement(
                V['a'],
                null,
                x.a.createElement(
                  'div',
                  {
                    onClick: () => {
                      F(
                        'BoxJS\u57df\u540d\u8bbe\u7f6e',
                        '',
                        [
                          { text: '\u53d6\u6d88' },
                          {
                            text: '\u786e\u5b9a',
                            onPress: (function () {
                              var e = Object(l['a'])(
                                c.a.mark(function e(t) {
                                  return c.a.wrap(function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          localStorage.setItem('boxjs', t),
                                            i['a'].success(
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
                  x.a.createElement(S, { size: 'lg' }),
                  x.a.createElement(
                    'span',
                    { style: { color: 'red' } },
                    ' \u70b9\u51fb\u8bbe\u7f6e BoxJS \u57df\u540d',
                  ),
                ),
              );
        };
      t['default'] = M;
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
      var r = a('SDju'),
        n = a.n(r),
        i = (a('P0Cl'), a('oB33')),
        o = a('YLUp'),
        c = a('9kvl'),
        l = (function () {
          var e = Object(o['a'])(
            n.a.mark(function e(t) {
              var a, r;
              return n.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(c['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((r = JSON.parse(localStorage.getItem('dataSource') || '{}')),
                            (r[t] = a),
                            localStorage.setItem('dataSource', JSON.stringify(r)))
                          : i['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (n) {
                        i['a'].fail(JSON.stringify(n));
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
          var e = Object(o['a'])(
            n.a.mark(function e() {
              var t;
              return n.a.wrap(
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
          var e = Object(o['a'])(
            n.a.mark(function e(t) {
              var a;
              return n.a.wrap(
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
                          i['a'].success('\u5907\u4efd\u6210\u529f'),
                          e.abrupt('return', a)
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e['catch'](0)),
                          console.log(e.t0),
                          i['a'].fail('\u5907\u4efd\u5931\u8d25'),
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
