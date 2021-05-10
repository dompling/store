(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    '1wSM': function (e, t, n) {
      'use strict';
      n('zr+F'), n('neBw');
    },
    '3oCz': function (e, t, n) {
      'use strict';
      var i = n('6ato'),
        r = n.n(i),
        o = n('2dj7'),
        a = n.n(o),
        s = n('Xtzg'),
        l = n.n(s),
        c = n('0dFU'),
        u = n.n(c),
        p = n('xwgP'),
        h = n.n(p),
        d = n('EH+i'),
        f = n.n(d),
        v = n('jK+o'),
        g = n.n(v),
        y = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function b(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function S(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function w(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var C = (function (e) {
        function t() {
          return (
            b(this, t), S(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          );
        }
        return (
          w(t, e),
          y(t, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return this.props.forceRender || this.props.isActive || e.isActive;
              },
            },
            {
              key: 'render',
              value: function () {
                var e;
                if (
                  ((this._isActived =
                    this.props.forceRender || this._isActived || this.props.isActive),
                  !this._isActived)
                )
                  return null;
                var t = this.props,
                  n = t.prefixCls,
                  i = t.isActive,
                  r = t.children,
                  o = t.destroyInactivePanel,
                  a = t.forceRender,
                  s = t.role,
                  l = g()(
                    ((e = {}),
                    m(e, n + '-content', !0),
                    m(e, n + '-content-active', i),
                    m(e, n + '-content-inactive', !i),
                    e),
                  ),
                  c =
                    a || i || !o
                      ? h.a.createElement('div', { className: n + '-content-box' }, r)
                      : null;
                return h.a.createElement('div', { className: l, role: s }, c);
              },
            },
          ]),
          t
        );
      })(p['Component']);
      C.propTypes = {
        prefixCls: f.a.string,
        isActive: f.a.bool,
        children: f.a.any,
        destroyInactivePanel: f.a.bool,
        forceRender: f.a.bool,
        role: f.a.string,
      };
      var T = C,
        k = n('zXgj'),
        O = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
      function x(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function E(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function j(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function P(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var A = (function (e) {
        function t() {
          var e, n, i, r;
          E(this, t);
          for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
          return (
            (i = j(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)),
            )),
            (n = i),
            (i.handleItemClick = function () {
              i.props.onItemClick && i.props.onItemClick();
            }),
            (i.handleKeyPress = function (e) {
              ('Enter' !== e.key && 13 !== e.keyCode && 13 !== e.which) || i.handleItemClick();
            }),
            (r = n),
            j(i, r)
          );
        }
        return (
          P(t, e),
          O(t, [
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.props,
                  n = t.className,
                  i = t.id,
                  r = t.style,
                  o = t.prefixCls,
                  a = t.header,
                  s = t.headerClass,
                  l = t.children,
                  c = t.isActive,
                  u = t.showArrow,
                  p = t.destroyInactivePanel,
                  d = t.disabled,
                  f = t.accordion,
                  v = t.forceRender,
                  y = g()(o + '-header', x({}, s, s)),
                  m = g()(
                    ((e = {}),
                    x(e, o + '-item', !0),
                    x(e, o + '-item-active', c),
                    x(e, o + '-item-disabled', d),
                    e),
                    n,
                  );
                return h.a.createElement(
                  'div',
                  { className: m, style: r, id: i },
                  h.a.createElement(
                    'div',
                    {
                      className: y,
                      onClick: this.handleItemClick,
                      role: f ? 'tab' : 'button',
                      tabIndex: d ? -1 : 0,
                      'aria-expanded': '' + c,
                      onKeyPress: this.handleKeyPress,
                    },
                    u && h.a.createElement('i', { className: 'arrow' }),
                    a,
                  ),
                  h.a.createElement(
                    k['a'],
                    {
                      showProp: 'isActive',
                      exclusive: !0,
                      component: '',
                      animation: this.props.openAnimation,
                    },
                    h.a.createElement(
                      T,
                      {
                        prefixCls: o,
                        isActive: c,
                        destroyInactivePanel: p,
                        forceRender: v,
                        role: f ? 'tabpanel' : null,
                      },
                      l,
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(p['Component']);
      (A.propTypes = {
        className: f.a.oneOfType([f.a.string, f.a.object]),
        id: f.a.string,
        children: f.a.any,
        openAnimation: f.a.object,
        prefixCls: f.a.string,
        header: f.a.oneOfType([f.a.string, f.a.number, f.a.node]),
        headerClass: f.a.string,
        showArrow: f.a.bool,
        isActive: f.a.bool,
        onItemClick: f.a.func,
        style: f.a.object,
        destroyInactivePanel: f.a.bool,
        disabled: f.a.bool,
        accordion: f.a.bool,
        forceRender: f.a.bool,
      }),
        (A.defaultProps = {
          showArrow: !0,
          isActive: !1,
          destroyInactivePanel: !1,
          onItemClick: function () {},
          headerClass: '',
          forceRender: !1,
        });
      var M = A,
        _ = n('Sg71');
      function I(e, t, n, i) {
        var r = void 0;
        return Object(_['a'])(e, n, {
          start: function () {
            t
              ? ((r = e.offsetHeight), (e.style.height = 0))
              : (e.style.height = e.offsetHeight + 'px');
          },
          active: function () {
            e.style.height = (t ? r : 0) + 'px';
          },
          end: function () {
            (e.style.height = ''), i();
          },
        });
      }
      function R(e) {
        return {
          enter: function (t, n) {
            return I(t, !0, e + '-anim', n);
          },
          leave: function (t, n) {
            return I(t, !1, e + '-anim', n);
          },
        };
      }
      var W = R,
        D = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
      function N(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function L(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      function B(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function X(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function z(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      function V(e) {
        var t = e;
        return Array.isArray(t) || (t = t ? [t] : []), t;
      }
      var K = (function (e) {
        function t(e) {
          B(this, t);
          var n = X(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
            i = n.props,
            r = i.activeKey,
            o = i.defaultActiveKey,
            a = o;
          return (
            'activeKey' in n.props && (a = r),
            (n.state = {
              openAnimation: n.props.openAnimation || W(n.props.prefixCls),
              activeKey: V(a),
            }),
            n
          );
        }
        return (
          z(t, e),
          D(t, [
            {
              key: 'componentWillReceiveProps',
              value: function (e) {
                'activeKey' in e && this.setState({ activeKey: V(e.activeKey) }),
                  'openAnimation' in e && this.setState({ openAnimation: e.openAnimation });
              },
            },
            {
              key: 'onClickItem',
              value: function (e) {
                var t = this.state.activeKey;
                if (this.props.accordion) t = t[0] === e ? [] : [e];
                else {
                  t = [].concat(L(t));
                  var n = t.indexOf(e),
                    i = n > -1;
                  i ? t.splice(n, 1) : t.push(e);
                }
                this.setActiveKey(t);
              },
            },
            {
              key: 'getItems',
              value: function () {
                var e = this,
                  t = this.state.activeKey,
                  n = this.props,
                  i = n.prefixCls,
                  r = n.accordion,
                  o = n.destroyInactivePanel,
                  a = [];
                return (
                  p['Children'].forEach(this.props.children, function (n, s) {
                    if (n) {
                      var l = n.key || String(s),
                        c = n.props,
                        u = c.header,
                        p = c.headerClass,
                        d = c.disabled,
                        f = !1;
                      f = r ? t[0] === l : t.indexOf(l) > -1;
                      var v = {
                        key: l,
                        header: u,
                        headerClass: p,
                        isActive: f,
                        prefixCls: i,
                        destroyInactivePanel: o,
                        openAnimation: e.state.openAnimation,
                        accordion: r,
                        children: n.props.children,
                        onItemClick: d
                          ? null
                          : function () {
                              return e.onClickItem(l);
                            },
                      };
                      a.push(h.a.cloneElement(n, v));
                    }
                  }),
                  a
                );
              },
            },
            {
              key: 'setActiveKey',
              value: function (e) {
                'activeKey' in this.props || this.setState({ activeKey: e }),
                  this.props.onChange(this.props.accordion ? e[0] : e);
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.props,
                  n = t.prefixCls,
                  i = t.className,
                  r = t.style,
                  o = t.accordion,
                  a = g()(((e = {}), N(e, n, !0), N(e, i, !!i), e));
                return h.a.createElement(
                  'div',
                  { className: a, style: r, role: o ? 'tablist' : null },
                  this.getItems(),
                );
              },
            },
          ]),
          t
        );
      })(p['Component']);
      (K.propTypes = {
        children: f.a.any,
        prefixCls: f.a.string,
        activeKey: f.a.oneOfType([f.a.string, f.a.arrayOf(f.a.string)]),
        defaultActiveKey: f.a.oneOfType([f.a.string, f.a.arrayOf(f.a.string)]),
        openAnimation: f.a.object,
        onChange: f.a.func,
        accordion: f.a.bool,
        className: f.a.string,
        style: f.a.object,
        destroyInactivePanel: f.a.bool,
      }),
        (K.defaultProps = {
          prefixCls: 'rc-collapse',
          onChange: function () {},
          accordion: !1,
          destroyInactivePanel: !1,
        }),
        (K.Panel = M);
      var F = K,
        Y = F,
        U = F.Panel,
        H = (function (e) {
          function t() {
            return (
              r()(this, t),
              l()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            u()(t, e),
            a()(t, [
              {
                key: 'render',
                value: function () {
                  return p['createElement'](Y, this.props);
                },
              },
            ]),
            t
          );
        })(p['Component']);
      t['a'] = H;
      (H.Panel = U), (H.defaultProps = { prefixCls: 'am-accordion' });
    },
    '5qKr': function (e, t, n) {
      'use strict';
      n('zr+F'), n('JHCA'), n('okz7'), n('S/2G');
    },
    '9dWS': function (e, t, n) {
      'use strict';
      var i = n('/umX'),
        r = n.n(i),
        o = n('bS4n'),
        a = n.n(o),
        s = n('6ato'),
        l = n.n(s),
        c = n('2dj7'),
        u = n.n(c),
        p = n('Xtzg'),
        h = n.n(p),
        d = n('0dFU'),
        f = n.n(d),
        v = n('jK+o'),
        g = n.n(v),
        y = n('xwgP'),
        m = n.n(y),
        b = n('eVHG'),
        S = [
          {
            component: (function (e) {
              function t() {
                l()(this, t);
                var e = h()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                return (
                  (e.handleClick = function (t) {
                    t.preventDefault(), e.props.previousSlide();
                  }),
                  e
                );
              }
              return (
                f()(t, e),
                u()(t, [
                  {
                    key: 'render',
                    value: function () {
                      return m.a.createElement(
                        'button',
                        {
                          style: this.getButtonStyles(
                            0 === this.props.currentSlide && !this.props.wrapAround,
                          ),
                          onClick: this.handleClick,
                        },
                        'PREV',
                      );
                    },
                  },
                  {
                    key: 'getButtonStyles',
                    value: function (e) {
                      return {
                        border: 0,
                        background: 'rgba(0,0,0,0.4)',
                        color: 'white',
                        padding: 10,
                        outline: 0,
                        opacity: e ? 0.3 : 1,
                        cursor: 'pointer',
                      };
                    },
                  },
                ]),
                t
              );
            })(m.a.Component),
            position: 'CenterLeft',
          },
          {
            component: (function (e) {
              function t() {
                l()(this, t);
                var e = h()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                return (
                  (e.handleClick = function (t) {
                    t.preventDefault(), e.props.nextSlide && e.props.nextSlide();
                  }),
                  e
                );
              }
              return (
                f()(t, e),
                u()(t, [
                  {
                    key: 'render',
                    value: function () {
                      return m.a.createElement(
                        'button',
                        {
                          style: this.getButtonStyles(
                            this.props.currentSlide + this.props.slidesToScroll >=
                              this.props.slideCount && !this.props.wrapAround,
                          ),
                          onClick: this.handleClick,
                        },
                        'NEXT',
                      );
                    },
                  },
                  {
                    key: 'getButtonStyles',
                    value: function (e) {
                      return {
                        border: 0,
                        background: 'rgba(0,0,0,0.4)',
                        color: 'white',
                        padding: 10,
                        outline: 0,
                        opacity: e ? 0.3 : 1,
                        cursor: 'pointer',
                      };
                    },
                  },
                ]),
                t
              );
            })(m.a.Component),
            position: 'CenterRight',
          },
          {
            component: (function (e) {
              function t() {
                return (
                  l()(this, t),
                  h()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return (
                f()(t, e),
                u()(t, [
                  {
                    key: 'render',
                    value: function () {
                      var e = this,
                        t = this.getIndexes(this.props.slideCount, this.props.slidesToScroll);
                      return m.a.createElement(
                        'ul',
                        { style: this.getListStyles() },
                        t.map(function (t) {
                          return m.a.createElement(
                            'li',
                            { style: e.getListItemStyles(), key: t },
                            m.a.createElement(
                              'button',
                              {
                                style: e.getButtonStyles(e.props.currentSlide === t),
                                onClick: e.props.goToSlide && e.props.goToSlide.bind(null, t),
                              },
                              '\u2022',
                            ),
                          );
                        }),
                      );
                    },
                  },
                  {
                    key: 'getIndexes',
                    value: function (e, t) {
                      for (var n = [], i = 0; i < e; i += t) n.push(i);
                      return n;
                    },
                  },
                  {
                    key: 'getListStyles',
                    value: function () {
                      return { position: 'relative', margin: 0, top: -10, padding: 0 };
                    },
                  },
                  {
                    key: 'getListItemStyles',
                    value: function () {
                      return { listStyleType: 'none', display: 'inline-block' };
                    },
                  },
                  {
                    key: 'getButtonStyles',
                    value: function (e) {
                      return {
                        border: 0,
                        background: 'transparent',
                        color: 'black',
                        cursor: 'pointer',
                        padding: 10,
                        outline: 0,
                        fontSize: 24,
                        opacity: e ? 1 : 0.5,
                      };
                    },
                  },
                ]),
                t
              );
            })(m.a.Component),
            position: 'BottomCenter',
          },
        ],
        w = S,
        C = n('Olv+'),
        T = n.n(C),
        k = n('RfwO'),
        O = n.n(k);
      function x(e, t, n, i) {
        var r = n - t;
        return r * Math.sqrt(1 - (e = e / i - 1) * e) + t;
      }
      function E(e, t, n, i) {
        var r = n - t;
        return (r * e) / i + t;
      }
      var j = 'ADDITIVE',
        P = 300,
        A = 0,
        M = { ADDITIVE: 'ADDITIVE', DESTRUCTIVE: 'DESTRUCTIVE' },
        _ = function (e, t, n) {
          null !== e &&
            'undefined' !== typeof e &&
            (e.addEventListener
              ? e.addEventListener(t, n, !1)
              : e.attachEvent
              ? e.attachEvent('on' + t, n)
              : (e['on' + t] = n));
        },
        I = function (e, t, n) {
          null !== e &&
            'undefined' !== typeof e &&
            (e.removeEventListener
              ? e.removeEventListener(t, n, !1)
              : e.detachEvent
              ? e.detachEvent('on' + t, n)
              : (e['on' + t] = null));
        },
        R = (function (e) {
          function t(e) {
            l()(this, t);
            var n = h()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n._rafCb = function () {
                var e = n.state;
                if (0 !== e.tweenQueue.length) {
                  for (var t = Date.now(), i = [], r = 0; r < e.tweenQueue.length; r++) {
                    var o = e.tweenQueue[r],
                      a = o.initTime,
                      s = o.config;
                    t - a < s.duration ? i.push(o) : s.onEnd && s.onEnd();
                  }
                  -1 !== n._rafID && (n.setState({ tweenQueue: i }), (n._rafID = O()(n._rafCb)));
                }
              }),
              (n.handleClick = function (e) {
                !0 === n.clickSafe &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  e.nativeEvent && e.nativeEvent.stopPropagation());
              }),
              (n.autoplayIterator = function () {
                if (n.props.wrapAround) return n.nextSlide();
                n.state.currentSlide !== n.state.slideCount - n.state.slidesToShow
                  ? n.nextSlide()
                  : n.stopAutoplay();
              }),
              (n.goToSlide = function (e) {
                var t = n.props,
                  i = t.beforeSlide,
                  r = t.afterSlide;
                if (e >= m.a.Children.count(n.props.children) || e < 0) {
                  if (!n.props.wrapAround) return;
                  if (e >= m.a.Children.count(n.props.children))
                    return (
                      i(n.state.currentSlide, 0),
                      n.setState({ currentSlide: 0 }, function () {
                        n.animateSlide(null, null, n.getTargetLeft(null, e), function () {
                          n.animateSlide(null, 0.01), r(0), n.resetAutoplay(), n.setExternalData();
                        });
                      })
                    );
                  var o = m.a.Children.count(n.props.children) - n.state.slidesToScroll;
                  return (
                    i(n.state.currentSlide, o),
                    n.setState({ currentSlide: o }, function () {
                      n.animateSlide(null, null, n.getTargetLeft(null, e), function () {
                        n.animateSlide(null, 0.01), r(o), n.resetAutoplay(), n.setExternalData();
                      });
                    })
                  );
                }
                i(n.state.currentSlide, e),
                  n.setState({ currentSlide: e }, function () {
                    n.animateSlide(), n.props.afterSlide(e), n.resetAutoplay(), n.setExternalData();
                  });
              }),
              (n.nextSlide = function () {
                var e = m.a.Children.count(n.props.children),
                  t = n.props.slidesToShow;
                if (
                  ('auto' === n.props.slidesToScroll && (t = n.state.slidesToScroll),
                  !(n.state.currentSlide >= e - t) || n.props.wrapAround)
                )
                  if (n.props.wrapAround)
                    n.goToSlide(n.state.currentSlide + n.state.slidesToScroll);
                  else {
                    if (1 !== n.props.slideWidth)
                      return n.goToSlide(n.state.currentSlide + n.state.slidesToScroll);
                    n.goToSlide(Math.min(n.state.currentSlide + n.state.slidesToScroll, e - t));
                  }
              }),
              (n.previousSlide = function () {
                (n.state.currentSlide <= 0 && !n.props.wrapAround) ||
                  (n.props.wrapAround
                    ? n.goToSlide(n.state.currentSlide - n.state.slidesToScroll)
                    : n.goToSlide(Math.max(0, n.state.currentSlide - n.state.slidesToScroll)));
              }),
              (n.onResize = function () {
                n.setDimensions();
              }),
              (n.onReadyStateChange = function () {
                n.setDimensions();
              }),
              (n.state = {
                currentSlide: n.props.slideIndex,
                dragging: !1,
                frameWidth: 0,
                left: 0,
                slideCount: 0,
                slidesToScroll: n.props.slidesToScroll,
                slideWidth: 0,
                top: 0,
                tweenQueue: [],
              }),
              (n.touchObject = {}),
              (n.clickSafe = !0),
              n
            );
          }
          return (
            f()(t, e),
            u()(t, [
              {
                key: 'componentWillMount',
                value: function () {
                  this.setInitialDimensions();
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.setDimensions(),
                    this.bindEvents(),
                    this.setExternalData(),
                    this.props.autoplay && this.startAutoplay();
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function (e) {
                  this.setState({ slideCount: e.children.length }),
                    this.setDimensions(e),
                    this.props.slideIndex !== e.slideIndex &&
                      e.slideIndex !== this.state.currentSlide &&
                      this.goToSlide(e.slideIndex),
                    this.props.autoplay !== e.autoplay &&
                      (e.autoplay ? this.startAutoplay() : this.stopAutoplay());
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.unbindEvents(),
                    this.stopAutoplay(),
                    O.a.cancel(this._rafID),
                    (this._rafID = -1);
                },
              },
              {
                key: 'tweenState',
                value: function (e, t) {
                  var n = this,
                    i = t.easing,
                    r = t.duration,
                    o = t.delay,
                    a = t.beginValue,
                    s = t.endValue,
                    l = t.onEnd,
                    c = t.stackBehavior;
                  this.setState(function (t) {
                    var u = t,
                      p = void 0,
                      h = void 0;
                    if ('string' === typeof e) (p = e), (h = e);
                    else {
                      for (var d = 0; d < e.length - 1; d++) u = u[e[d]];
                      (p = e[e.length - 1]), (h = e.join('|'));
                    }
                    var f = {
                        easing: i,
                        duration: null == r ? P : r,
                        delay: null == o ? A : o,
                        beginValue: null == a ? u[p] : a,
                        endValue: s,
                        onEnd: l,
                        stackBehavior: c || j,
                      },
                      v = t.tweenQueue;
                    return (
                      f.stackBehavior === M.DESTRUCTIVE &&
                        (v = t.tweenQueue.filter(function (e) {
                          return e.pathHash !== h;
                        })),
                      v.push({ pathHash: h, config: f, initTime: Date.now() + f.delay }),
                      (u[p] = f.endValue),
                      1 === v.length && (n._rafID = O()(n._rafCb)),
                      { tweenQueue: v }
                    );
                  });
                },
              },
              {
                key: 'getTweeningValue',
                value: function (e) {
                  var t = this.state,
                    n = void 0,
                    i = void 0;
                  if ('string' === typeof e) (n = t[e]), (i = e);
                  else {
                    n = t;
                    for (var r = 0; r < e.length; r++) n = n[e[r]];
                    i = e.join('|');
                  }
                  for (var o = Date.now(), a = 0; a < t.tweenQueue.length; a++) {
                    var s = t.tweenQueue[a],
                      l = s.pathHash,
                      c = s.initTime,
                      u = s.config;
                    if (l === i) {
                      var p = o - c > u.duration ? u.duration : Math.max(0, o - c),
                        h =
                          0 === u.duration
                            ? u.endValue
                            : u.easing(p, u.beginValue, u.endValue, u.duration),
                        d = h - u.endValue;
                      n += d;
                    }
                  }
                  return n;
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t =
                      m.a.Children.count(this.props.children) > 1
                        ? this.formatChildren(this.props.children)
                        : this.props.children;
                  return m.a.createElement(
                    'div',
                    {
                      className: ['slider', this.props.className || ''].join(' '),
                      ref: 'slider',
                      style: a()({}, this.getSliderStyles(), this.props.style),
                    },
                    m.a.createElement(
                      'div',
                      a()(
                        { className: 'slider-frame', ref: 'frame', style: this.getFrameStyles() },
                        this.getTouchEvents(),
                        this.getMouseEvents(),
                        { onClick: this.handleClick },
                      ),
                      m.a.createElement(
                        'ul',
                        { className: 'slider-list', ref: 'list', style: this.getListStyles() },
                        t,
                      ),
                    ),
                    this.props.decorators
                      ? this.props.decorators.map(function (t, n) {
                          return m.a.createElement(
                            'div',
                            {
                              style: a()({}, e.getDecoratorStyles(t.position), t.style || {}),
                              className: 'slider-decorator-' + n,
                              key: n,
                            },
                            m.a.createElement(t.component, {
                              currentSlide: e.state.currentSlide,
                              slideCount: e.state.slideCount,
                              frameWidth: e.state.frameWidth,
                              slideWidth: e.state.slideWidth,
                              slidesToScroll: e.state.slidesToScroll,
                              cellSpacing: e.props.cellSpacing,
                              slidesToShow: e.props.slidesToShow,
                              wrapAround: e.props.wrapAround,
                              nextSlide: e.nextSlide,
                              previousSlide: e.previousSlide,
                              goToSlide: e.goToSlide,
                            }),
                          );
                        })
                      : null,
                    m.a.createElement('style', {
                      type: 'text/css',
                      dangerouslySetInnerHTML: { __html: this.getStyleTagStyles() },
                    }),
                  );
                },
              },
              {
                key: 'getTouchEvents',
                value: function () {
                  var e = this;
                  return !1 === this.props.swiping
                    ? null
                    : {
                        onTouchStart: function (t) {
                          (e.touchObject = {
                            startX: t.touches[0].pageX,
                            startY: t.touches[0].pageY,
                          }),
                            e.handleMouseOver();
                        },
                        onTouchMove: function (t) {
                          var n = e.swipeDirection(
                            e.touchObject.startX,
                            t.touches[0].pageX,
                            e.touchObject.startY,
                            t.touches[0].pageY,
                          );
                          0 !== n && t.preventDefault();
                          var i = e.props.vertical
                            ? Math.round(
                                Math.sqrt(Math.pow(t.touches[0].pageY - e.touchObject.startY, 2)),
                              )
                            : Math.round(
                                Math.sqrt(Math.pow(t.touches[0].pageX - e.touchObject.startX, 2)),
                              );
                          (e.touchObject = {
                            startX: e.touchObject.startX,
                            startY: e.touchObject.startY,
                            endX: t.touches[0].pageX,
                            endY: t.touches[0].pageY,
                            length: i,
                            direction: n,
                          }),
                            e.setState({
                              left: e.props.vertical
                                ? 0
                                : e.getTargetLeft(e.touchObject.length * e.touchObject.direction),
                              top: e.props.vertical
                                ? e.getTargetLeft(e.touchObject.length * e.touchObject.direction)
                                : 0,
                            });
                        },
                        onTouchEnd: function (t) {
                          e.handleSwipe(t), e.handleMouseOut();
                        },
                        onTouchCancel: function (t) {
                          e.handleSwipe(t);
                        },
                      };
                },
              },
              {
                key: 'getMouseEvents',
                value: function () {
                  var e = this;
                  return !1 === this.props.dragging
                    ? null
                    : {
                        onMouseOver: function () {
                          e.handleMouseOver();
                        },
                        onMouseOut: function () {
                          e.handleMouseOut();
                        },
                        onMouseDown: function (t) {
                          (e.touchObject = { startX: t.clientX, startY: t.clientY }),
                            e.setState({ dragging: !0 });
                        },
                        onMouseMove: function (t) {
                          if (e.state.dragging) {
                            var n = e.swipeDirection(
                              e.touchObject.startX,
                              t.clientX,
                              e.touchObject.startY,
                              t.clientY,
                            );
                            0 !== n && t.preventDefault();
                            var i = e.props.vertical
                              ? Math.round(Math.sqrt(Math.pow(t.clientY - e.touchObject.startY, 2)))
                              : Math.round(
                                  Math.sqrt(Math.pow(t.clientX - e.touchObject.startX, 2)),
                                );
                            (e.touchObject = {
                              startX: e.touchObject.startX,
                              startY: e.touchObject.startY,
                              endX: t.clientX,
                              endY: t.clientY,
                              length: i,
                              direction: n,
                            }),
                              e.setState({
                                left: e.props.vertical
                                  ? 0
                                  : e.getTargetLeft(e.touchObject.length * e.touchObject.direction),
                                top: e.props.vertical
                                  ? e.getTargetLeft(e.touchObject.length * e.touchObject.direction)
                                  : 0,
                              });
                          }
                        },
                        onMouseUp: function (t) {
                          e.state.dragging && e.handleSwipe(t);
                        },
                        onMouseLeave: function (t) {
                          e.state.dragging && e.handleSwipe(t);
                        },
                      };
                },
              },
              {
                key: 'handleMouseOver',
                value: function () {
                  this.props.autoplay && ((this.autoplayPaused = !0), this.stopAutoplay());
                },
              },
              {
                key: 'handleMouseOut',
                value: function () {
                  this.props.autoplay &&
                    this.autoplayPaused &&
                    (this.startAutoplay(), (this.autoplayPaused = null));
                },
              },
              {
                key: 'handleSwipe',
                value: function (e) {
                  'undefined' !== typeof this.touchObject.length && this.touchObject.length > 44
                    ? (this.clickSafe = !0)
                    : (this.clickSafe = !1);
                  var t = this.props,
                    n = t.slidesToShow,
                    i = t.slidesToScroll,
                    r = t.swipeSpeed;
                  'auto' === i && (n = this.state.slidesToScroll),
                    m.a.Children.count(this.props.children) > 1 &&
                    this.touchObject.length > this.state.slideWidth / n / r
                      ? 1 === this.touchObject.direction
                        ? this.state.currentSlide >= m.a.Children.count(this.props.children) - n &&
                          !this.props.wrapAround
                          ? this.animateSlide(this.props.edgeEasing)
                          : this.nextSlide()
                        : -1 === this.touchObject.direction &&
                          (this.state.currentSlide <= 0 && !this.props.wrapAround
                            ? this.animateSlide(this.props.edgeEasing)
                            : this.previousSlide())
                      : this.goToSlide(this.state.currentSlide),
                    (this.touchObject = {}),
                    this.setState({ dragging: !1 });
                },
              },
              {
                key: 'swipeDirection',
                value: function (e, t, n, i) {
                  var r = e - t,
                    o = n - i,
                    a = Math.atan2(o, r),
                    s = Math.round((180 * a) / Math.PI);
                  return (
                    s < 0 && (s = 360 - Math.abs(s)),
                    (s <= 45 && s >= 0) || (s <= 360 && s >= 315)
                      ? 1
                      : s >= 135 && s <= 225
                      ? -1
                      : !0 === this.props.vertical
                      ? s >= 35 && s <= 135
                        ? 1
                        : -1
                      : 0
                  );
                },
              },
              {
                key: 'startAutoplay',
                value: function () {
                  m.a.Children.count(this.props.children) <= 1 ||
                    (this.autoplayID = setInterval(
                      this.autoplayIterator,
                      this.props.autoplayInterval,
                    ));
                },
              },
              {
                key: 'resetAutoplay',
                value: function () {
                  this.props.resetAutoplay &&
                    this.props.autoplay &&
                    !this.autoplayPaused &&
                    (this.stopAutoplay(), this.startAutoplay());
                },
              },
              {
                key: 'stopAutoplay',
                value: function () {
                  this.autoplayID && clearInterval(this.autoplayID);
                },
              },
              {
                key: 'animateSlide',
                value: function (e, t, n, i) {
                  this.tweenState(this.props.vertical ? 'top' : 'left', {
                    easing: e || this.props.easing,
                    duration: t || this.props.speed,
                    endValue: n || this.getTargetLeft(),
                    delay: null,
                    beginValue: null,
                    onEnd: i || null,
                    stackBehavior: M,
                  });
                },
              },
              {
                key: 'getTargetLeft',
                value: function (e, t) {
                  var n = void 0,
                    i = t || this.state.currentSlide,
                    r = this.props.cellSpacing;
                  switch (this.props.cellAlign) {
                    case 'left':
                      (n = 0), (n -= r * i);
                      break;
                    case 'center':
                      (n = (this.state.frameWidth - this.state.slideWidth) / 2), (n -= r * i);
                      break;
                    case 'right':
                      (n = this.state.frameWidth - this.state.slideWidth), (n -= r * i);
                      break;
                    default:
                      break;
                  }
                  var o = this.state.slideWidth * i,
                    a =
                      this.state.currentSlide > 0 &&
                      i + this.state.slidesToScroll >= this.state.slideCount;
                  return (
                    a &&
                      1 !== this.props.slideWidth &&
                      !this.props.wrapAround &&
                      'auto' === this.props.slidesToScroll &&
                      ((o = this.state.slideWidth * this.state.slideCount - this.state.frameWidth),
                      (n = 0),
                      (n -= r * (this.state.slideCount - 1))),
                    (n -= e || 0),
                    -1 * (o - n)
                  );
                },
              },
              {
                key: 'bindEvents',
                value: function () {
                  T.a.canUseDOM &&
                    (_(window, 'resize', this.onResize),
                    _(document, 'readystatechange', this.onReadyStateChange));
                },
              },
              {
                key: 'unbindEvents',
                value: function () {
                  T.a.canUseDOM &&
                    (I(window, 'resize', this.onResize),
                    I(document, 'readystatechange', this.onReadyStateChange));
                },
              },
              {
                key: 'formatChildren',
                value: function (e) {
                  var t = this,
                    n = this.props.vertical
                      ? this.getTweeningValue('top')
                      : this.getTweeningValue('left');
                  return m.a.Children.map(e, function (e, i) {
                    return m.a.createElement(
                      'li',
                      { className: 'slider-slide', style: t.getSlideStyles(i, n), key: i },
                      e,
                    );
                  });
                },
              },
              {
                key: 'setInitialDimensions',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.vertical,
                    i = t.initialSlideHeight,
                    r = t.initialSlideWidth,
                    o = t.slidesToShow,
                    a = t.cellSpacing,
                    s = t.children,
                    l = n ? i || 0 : r || 0,
                    c = i ? i * o : 0,
                    u = c + a * (o - 1);
                  this.setState(
                    {
                      slideHeight: c,
                      frameWidth: n ? u : '100%',
                      slideCount: m.a.Children.count(s),
                      slideWidth: l,
                    },
                    function () {
                      e.setLeft(), e.setExternalData();
                    },
                  );
                },
              },
              {
                key: 'setDimensions',
                value: function (e) {
                  var t = this;
                  e = e || this.props;
                  var n = void 0,
                    i = void 0,
                    r = void 0,
                    o = void 0,
                    a = e.slidesToScroll,
                    s = this.refs.frame,
                    l = s.childNodes[0].childNodes[0];
                  l
                    ? ((l.style.height = 'auto'),
                      (r = this.props.vertical ? l.offsetHeight * e.slidesToShow : l.offsetHeight))
                    : (r = 100),
                    (o =
                      'number' !== typeof e.slideWidth
                        ? parseInt(e.slideWidth, 10)
                        : e.vertical
                        ? (r / e.slidesToShow) * e.slideWidth
                        : (s.offsetWidth / e.slidesToShow) * e.slideWidth),
                    e.vertical || (o -= e.cellSpacing * ((100 - 100 / e.slidesToShow) / 100)),
                    (i = r + e.cellSpacing * (e.slidesToShow - 1)),
                    (n = e.vertical ? i : s.offsetWidth),
                    'auto' === e.slidesToScroll && (a = Math.floor(n / (o + e.cellSpacing))),
                    this.setState(
                      {
                        slideHeight: r,
                        frameWidth: n,
                        slideWidth: o,
                        slidesToScroll: a,
                        left: e.vertical ? 0 : this.getTargetLeft(),
                        top: e.vertical ? this.getTargetLeft() : 0,
                      },
                      function () {
                        t.setLeft();
                      },
                    );
                },
              },
              {
                key: 'setLeft',
                value: function () {
                  this.setState({
                    left: this.props.vertical ? 0 : this.getTargetLeft(),
                    top: this.props.vertical ? this.getTargetLeft() : 0,
                  });
                },
              },
              {
                key: 'setExternalData',
                value: function () {
                  this.props.data && this.props.data();
                },
              },
              {
                key: 'getListStyles',
                value: function () {
                  var e = this.state.slideWidth * m.a.Children.count(this.props.children),
                    t = this.props.cellSpacing,
                    n = t * m.a.Children.count(this.props.children),
                    i =
                      'translate3d(' +
                      this.getTweeningValue('left') +
                      'px, ' +
                      this.getTweeningValue('top') +
                      'px, 0)';
                  return {
                    transform: i,
                    WebkitTransform: i,
                    msTransform:
                      'translate(' +
                      this.getTweeningValue('left') +
                      'px, ' +
                      this.getTweeningValue('top') +
                      'px)',
                    position: 'relative',
                    display: 'block',
                    margin: this.props.vertical
                      ? (t / 2) * -1 + 'px 0px'
                      : '0px ' + (t / 2) * -1 + 'px',
                    padding: 0,
                    height: this.props.vertical ? e + n : this.state.slideHeight,
                    width: this.props.vertical ? 'auto' : e + n,
                    cursor: !0 === this.state.dragging ? 'pointer' : 'inherit',
                    boxSizing: 'border-box',
                    MozBoxSizing: 'border-box',
                  };
                },
              },
              {
                key: 'getFrameStyles',
                value: function () {
                  return {
                    position: 'relative',
                    display: 'block',
                    overflow: this.props.frameOverflow,
                    height: this.props.vertical ? this.state.frameWidth || 'initial' : 'auto',
                    margin: this.props.framePadding,
                    padding: 0,
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    msTransform: 'translate(0, 0)',
                    boxSizing: 'border-box',
                    MozBoxSizing: 'border-box',
                  };
                },
              },
              {
                key: 'getSlideStyles',
                value: function (e, t) {
                  var n = this.getSlideTargetPosition(e, t),
                    i = this.props.cellSpacing;
                  return {
                    position: 'absolute',
                    left: this.props.vertical ? 0 : n,
                    top: this.props.vertical ? n : 0,
                    display: this.props.vertical ? 'block' : 'inline-block',
                    listStyleType: 'none',
                    verticalAlign: 'top',
                    width: this.props.vertical ? '100%' : this.state.slideWidth,
                    height: 'auto',
                    boxSizing: 'border-box',
                    MozBoxSizing: 'border-box',
                    marginLeft: this.props.vertical ? 'auto' : i / 2,
                    marginRight: this.props.vertical ? 'auto' : i / 2,
                    marginTop: this.props.vertical ? i / 2 : 'auto',
                    marginBottom: this.props.vertical ? i / 2 : 'auto',
                  };
                },
              },
              {
                key: 'getSlideTargetPosition',
                value: function (e, t) {
                  var n = this.state.frameWidth / this.state.slideWidth,
                    i = (this.state.slideWidth + this.props.cellSpacing) * e,
                    r = (this.state.slideWidth + this.props.cellSpacing) * n * -1;
                  if (this.props.wrapAround) {
                    var o = Math.ceil(t / this.state.slideWidth);
                    if (this.state.slideCount - o <= e)
                      return (
                        (this.state.slideWidth + this.props.cellSpacing) *
                        (this.state.slideCount - e) *
                        -1
                      );
                    var a = Math.ceil((Math.abs(t) - Math.abs(r)) / this.state.slideWidth);
                    if (
                      (1 !== this.state.slideWidth &&
                        (a = Math.ceil(
                          (Math.abs(t) - this.state.slideWidth) / this.state.slideWidth,
                        )),
                      e <= a - 1)
                    )
                      return (
                        (this.state.slideWidth + this.props.cellSpacing) *
                        (this.state.slideCount + e)
                      );
                  }
                  return i;
                },
              },
              {
                key: 'getSliderStyles',
                value: function () {
                  return {
                    position: 'relative',
                    display: 'block',
                    width: this.props.width,
                    height: 'auto',
                    boxSizing: 'border-box',
                    MozBoxSizing: 'border-box',
                    visibility: this.state.slideWidth ? 'visible' : 'hidden',
                  };
                },
              },
              {
                key: 'getStyleTagStyles',
                value: function () {
                  return '.slider-slide > img {width: 100%; display: block;}';
                },
              },
              {
                key: 'getDecoratorStyles',
                value: function (e) {
                  switch (e) {
                    case 'TopLeft':
                      return { position: 'absolute', top: 0, left: 0 };
                    case 'TopCenter':
                      return {
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        WebkitTransform: 'translateX(-50%)',
                        msTransform: 'translateX(-50%)',
                      };
                    case 'TopRight':
                      return { position: 'absolute', top: 0, right: 0 };
                    case 'CenterLeft':
                      return {
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        WebkitTransform: 'translateY(-50%)',
                        msTransform: 'translateY(-50%)',
                      };
                    case 'CenterCenter':
                      return {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        WebkitTransform: 'translate(-50%, -50%)',
                        msTransform: 'translate(-50%, -50%)',
                      };
                    case 'CenterRight':
                      return {
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        WebkitTransform: 'translateY(-50%)',
                        msTransform: 'translateY(-50%)',
                      };
                    case 'BottomLeft':
                      return { position: 'absolute', bottom: 0, left: 0 };
                    case 'BottomCenter':
                      return {
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        textAlign: 'center',
                      };
                    case 'BottomRight':
                      return { position: 'absolute', bottom: 0, right: 0 };
                    default:
                      return { position: 'absolute', top: 0, left: 0 };
                  }
                },
              },
            ]),
            t
          );
        })(m.a.Component);
      R.defaultProps = {
        afterSlide: function () {},
        autoplay: !1,
        resetAutoplay: !0,
        swipeSpeed: 12,
        autoplayInterval: 3e3,
        beforeSlide: function () {},
        cellAlign: 'left',
        cellSpacing: 0,
        data: function () {},
        decorators: w,
        dragging: !0,
        easing: x,
        edgeEasing: E,
        framePadding: '0px',
        frameOverflow: 'hidden',
        slideIndex: 0,
        slidesToScroll: 1,
        slidesToShow: 1,
        slideWidth: 1,
        speed: 500,
        swiping: !0,
        vertical: !1,
        width: '100%',
        wrapAround: !1,
        style: {},
      };
      var W = R,
        D = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 && (n[i[r]] = e[i[r]]);
          }
          return n;
        },
        N = (function (e) {
          function t(e) {
            l()(this, t);
            var n = h()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.onChange = function (e) {
                n.setState({ selectedIndex: e }, function () {
                  n.props.afterChange && n.props.afterChange(e);
                });
              }),
              (n.state = { selectedIndex: n.props.selectedIndex }),
              n
            );
          }
          return (
            f()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.infinite,
                    n = e.selectedIndex,
                    i = e.beforeChange,
                    o = (e.afterChange, e.dots),
                    s = D(e, ['infinite', 'selectedIndex', 'beforeChange', 'afterChange', 'dots']),
                    l = s.prefixCls,
                    c = s.dotActiveStyle,
                    u = s.dotStyle,
                    p = s.className,
                    h = s.vertical,
                    d = a()({}, s, { wrapAround: t, slideIndex: n, beforeSlide: i }),
                    f = [];
                  o &&
                    (f = [
                      {
                        component: function (e) {
                          for (
                            var t = e.slideCount,
                              n = e.slidesToScroll,
                              i = e.currentSlide,
                              o = [],
                              a = 0;
                            a < t;
                            a += n
                          )
                            o.push(a);
                          var s = o.map(function (e) {
                            var t = g()(l + '-wrap-dot', r()({}, l + '-wrap-dot-active', e === i)),
                              n = e === i ? c : u;
                            return y['createElement'](
                              'div',
                              { className: t, key: e },
                              y['createElement']('span', { style: n }),
                            );
                          });
                          return y['createElement']('div', { className: l + '-wrap' }, s);
                        },
                        position: 'BottomCenter',
                      },
                    ]);
                  var v = g()(l, p, r()({}, l + '-vertical', h));
                  return y['createElement'](
                    W,
                    a()({}, d, { className: v, decorators: f, afterSlide: this.onChange }),
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']),
        L = N;
      N.defaultProps = {
        prefixCls: 'am-carousel',
        dots: !0,
        arrows: !1,
        autoplay: !1,
        infinite: !1,
        cellAlign: 'center',
        selectedIndex: 0,
        dotStyle: {},
        dotActiveStyle: {},
      };
      var B = n('vTGJ'),
        X = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 && (n[i[r]] = e[i[r]]);
          }
          return n;
        },
        z = (function (e) {
          function t() {
            l()(this, t);
            var e = h()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return (
              (e.state = { initialSlideWidth: 0 }),
              (e.renderCarousel = function (t, n, i) {
                for (
                  var r = e.props.prefixCls, o = e.props.carouselMaxRow, a = [], s = 0;
                  s < n;
                  s++
                ) {
                  for (var l = [], c = 0; c < o; c++) {
                    var u = s * o + c;
                    u < i
                      ? l.push(t[u])
                      : l.push(y['createElement']('div', { key: 'gridline-' + u }));
                  }
                  a.push(
                    y['createElement'](
                      'div',
                      { key: 'pageitem-' + s, className: r + '-carousel-page' },
                      l,
                    ),
                  );
                }
                return a;
              }),
              (e.renderItem = function (t, n, i, r) {
                var o = e.props.prefixCls,
                  a = null;
                if (r) a = r(t, n);
                else if (t) {
                  var s = t.icon,
                    l = t.text;
                  a = y['createElement'](
                    'div',
                    { className: o + '-item-inner-content column-num-' + i },
                    y['isValidElement'](s)
                      ? s
                      : y['createElement']('img', { className: o + '-icon', src: s }),
                    y['createElement']('div', { className: o + '-text' }, l),
                  );
                }
                return y['createElement']('div', { className: o + '-item-content' }, a);
              }),
              (e.getRows = function (t, n) {
                var i = e.props,
                  r = i.columnNum,
                  o = i.data,
                  s = i.renderItem,
                  l = i.prefixCls,
                  c = i.onClick,
                  u = i.activeStyle,
                  p = i.activeClassName,
                  h = i.itemStyle,
                  d = [];
                r = r;
                for (var f = 100 / r + '%', v = a()({ width: f }, h), g = 0; g < t; g++) {
                  for (
                    var m = [],
                      S = function (t) {
                        var i = g * r + t,
                          a = void 0;
                        if (i < n) {
                          var h = o && o[i];
                          a = y['createElement'](
                            b['a'],
                            {
                              key: 'griditem-' + i,
                              activeClassName: p || l + '-item-active',
                              activeStyle: u,
                            },
                            y['createElement'](
                              B['a'].Item,
                              {
                                className: l + '-item',
                                onClick: function () {
                                  return c && c(h, i);
                                },
                                style: v,
                              },
                              e.renderItem(h, i, r, s),
                            ),
                          );
                        } else
                          a = y['createElement'](B['a'].Item, {
                            key: 'griditem-' + i,
                            className: l + '-item ' + l + '-null-item',
                            style: v,
                          });
                        m.push(a);
                      },
                      w = 0;
                    w < r;
                    w++
                  )
                    S(w);
                  d.push(
                    y['createElement'](
                      B['a'],
                      { justify: 'center', align: 'stretch', key: 'gridline-' + g },
                      m,
                    ),
                  );
                }
                return d;
              }),
              e
            );
          }
          return (
            f()(t, e),
            u()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.setState({ initialSlideWidth: document.documentElement.clientWidth });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.prefixCls,
                    i = t.className,
                    o = t.data,
                    s = t.hasLine,
                    l = t.isCarousel,
                    c = t.square,
                    u =
                      (t.activeStyle,
                      t.activeClassName,
                      X(t, [
                        'prefixCls',
                        'className',
                        'data',
                        'hasLine',
                        'isCarousel',
                        'square',
                        'activeStyle',
                        'activeClassName',
                      ])),
                    p = u.columnNum,
                    h = u.carouselMaxRow,
                    d =
                      (u.onClick,
                      u.renderItem,
                      X(u, ['columnNum', 'carouselMaxRow', 'onClick', 'renderItem'])),
                    f = this.state.initialSlideWidth;
                  (p = p), (h = h);
                  var v = (o && o.length) || 0,
                    m = Math.ceil(v / p),
                    b = void 0,
                    S = void 0;
                  if (l) {
                    if (f < 0) return null;
                    m % h !== 0 && (m = m + h - (m % h));
                    var w = Math.ceil(m / h);
                    b = this.getRows(m, v);
                    var C = {};
                    w <= 1 && (C = { dots: !1, dragging: !1, swiping: !1 }),
                      (S = y['createElement'](
                        L,
                        a()({ initialSlideWidth: f }, d, C),
                        this.renderCarousel(b, w, m),
                      ));
                  } else (b = this.getRows(m, v)), (S = b);
                  var T = g()(
                    n,
                    i,
                    ((e = {}),
                    r()(e, n + '-square', c),
                    r()(e, n + '-line', s),
                    r()(e, n + '-carousel', l),
                    e),
                  );
                  return y['createElement']('div', { className: T }, S);
                },
              },
            ]),
            t
          );
        })(y['Component']);
      t['a'] = z;
      z.defaultProps = {
        data: [],
        hasLine: !0,
        isCarousel: !1,
        columnNum: 4,
        carouselMaxRow: 2,
        prefixCls: 'am-grid',
        square: !0,
        itemStyle: {},
      };
    },
    HL7L: function (e, t, n) {
      (function (t) {
        (function () {
          var n, i, r, o, a, s;
          'undefined' !== typeof performance && null !== performance && performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : 'undefined' !== typeof t && null !== t && t.hrtime
            ? ((e.exports = function () {
                return (n() - a) / 1e6;
              }),
              (i = t.hrtime),
              (n = function () {
                var e;
                return (e = i()), 1e9 * e[0] + e[1];
              }),
              (o = n()),
              (s = 1e9 * t.uptime()),
              (a = o - s))
            : Date.now
            ? ((e.exports = function () {
                return Date.now() - r;
              }),
              (r = Date.now()))
            : ((e.exports = function () {
                return new Date().getTime() - r;
              }),
              (r = new Date().getTime()));
        }.call(this));
      }.call(this, n('7vYp')));
    },
    JHCA: function (e, t, n) {
      'use strict';
      n('zr+F'), n('VfKq');
    },
    'Li/y': function (e, t, n) {
      'use strict';
      var i = n('bS4n'),
        r = n.n(i),
        o = n('/umX'),
        a = n.n(o),
        s = n('6ato'),
        l = n.n(s),
        c = n('2dj7'),
        u = n.n(c),
        p = n('Xtzg'),
        h = n.n(p),
        d = n('0dFU'),
        f = n.n(d),
        v = n('jK+o'),
        g = n.n(v),
        y = n('xwgP'),
        m = n('EH+i'),
        b = n('eVHG'),
        S = n('zCLS');
      function w(e, t, n, i) {
        var o = {};
        if (t && t.antLocale && t.antLocale[n]) o = t.antLocale[n];
        else {
          var a = i();
          o = a['default'] || a;
        }
        var s = r()({}, o);
        return (
          e.locale &&
            ((s = r()({}, s, e.locale)),
            e.locale.lang && (s.lang = r()({}, o.lang, e.locale.lang))),
          s
        );
      }
      function C() {}
      var T = {
        prefixCls: 'am-search',
        placeholder: '',
        onSubmit: C,
        onChange: C,
        onFocus: C,
        onBlur: C,
        onClear: C,
        showCancelButton: !1,
        disabled: !1,
      };
      function k(e) {
        return window.requestAnimationFrame
          ? window.requestAnimationFrame(e)
          : window.setTimeout(e, 1);
      }
      function O(e) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.clearTimeout(e);
      }
      var x = (function (e) {
        function t(e) {
          l()(this, t);
          var n = h()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          (n.onSubmit = function (e) {
            e.preventDefault(),
              n.props.onSubmit && n.props.onSubmit(n.state.value || ''),
              n.inputRef && n.inputRef.blur();
          }),
            (n.onChange = function (e) {
              n.state.focus || n.setState({ focus: !0 });
              var t = e.target.value;
              'value' in n.props || n.setState({ value: t }),
                n.props.onChange && n.props.onChange(t);
            }),
            (n.onFocus = function () {
              n.setState({ focus: !0 }), (n.firstFocus = !0), n.props.onFocus && n.props.onFocus();
            }),
            (n.onBlur = function () {
              (n.onBlurTimeout = k(function () {
                n.blurFromOnClear ||
                  (document.activeElement !== n.inputRef && n.setState({ focus: !1 })),
                  (n.blurFromOnClear = !1);
              })),
                n.props.onBlur &&
                  (setTimeout(function () {
                    document.body && (document.body.scrollTop = document.body.scrollTop);
                  }, 100),
                  n.props.onBlur());
            }),
            (n.onClear = function () {
              n.doClear();
            }),
            (n.doClear = function () {
              var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              (n.blurFromOnClear = e),
                'value' in n.props || n.setState({ value: '' }),
                n.props.onClear && n.props.onClear(''),
                n.props.onChange && n.props.onChange(''),
                e && n.focus();
            }),
            (n.onCancel = function () {
              n.props.onCancel ? n.props.onCancel(n.state.value || '') : n.doClear(!1);
            }),
            (n.focus = function () {
              n.inputRef && n.inputRef.focus();
            });
          var i = void 0;
          return (
            (i = 'value' in e ? e.value || '' : 'defaultValue' in e ? e.defaultValue : ''),
            (n.state = { value: i, focus: !1 }),
            n
          );
        }
        return (
          f()(t, e),
          u()(t, [
            {
              key: 'componentDidMount',
              value: function () {
                if (this.rightBtnRef) {
                  var e = window.getComputedStyle(this.rightBtnRef);
                  this.rightBtnInitMarginleft = e.marginLeft;
                }
                this.componentDidUpdate();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                if (this.syntheticPhRef)
                  if (
                    this.inputContainerRef &&
                    this.inputContainerRef.className.indexOf(this.props.prefixCls + '-start') > -1
                  ) {
                    if (this.syntheticPhContainerRef) {
                      var e = this.syntheticPhContainerRef.getBoundingClientRect().width;
                      this.syntheticPhRef.style.width = Math.ceil(e) + 'px';
                    }
                    !this.props.showCancelButton &&
                      this.rightBtnRef &&
                      (this.rightBtnRef.style.marginRight = '0');
                  } else
                    (this.syntheticPhRef.style.width = '100%'),
                      !this.props.showCancelButton &&
                        this.rightBtnRef &&
                        (this.rightBtnRef.style.marginRight =
                          '-' +
                          (this.rightBtnRef.offsetWidth +
                            (null != this.rightBtnInitMarginleft
                              ? parseInt(this.rightBtnInitMarginleft, 10)
                              : 0)) +
                          'px');
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function (e) {
                'value' in e && e.value !== this.state.value && this.setState({ value: e.value });
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.onBlurTimeout && (O(this.onBlurTimeout), (this.onBlurTimeout = null));
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t = this,
                  i = this.props,
                  o = i.prefixCls,
                  s = i.showCancelButton,
                  l = i.disabled,
                  c = i.placeholder,
                  u = i.className,
                  p = i.style,
                  h = i.maxLength,
                  d = w(this.props, this.context, 'SearchBar', function () {
                    return n('XUKA');
                  }),
                  f = d.cancelText,
                  v = this.state,
                  m = v.value,
                  C = v.focus,
                  T = g()(o, u, a()({}, o + '-start', !!(C || (m && m.length > 0)))),
                  k = g()(o + '-clear', a()({}, o + '-clear-show', !!(C && m && m.length > 0))),
                  O = g()(
                    o + '-cancel',
                    ((e = {}),
                    a()(e, o + '-cancel-show', !!(s || C || (m && m.length > 0))),
                    a()(e, o + '-cancel-anim', this.firstFocus),
                    e),
                  );
                return y['createElement'](
                  'form',
                  {
                    onSubmit: this.onSubmit,
                    className: T,
                    style: p,
                    ref: function (e) {
                      return (t.inputContainerRef = e);
                    },
                    action: '#',
                  },
                  y['createElement'](
                    'div',
                    { className: o + '-input' },
                    y['createElement'](
                      'div',
                      {
                        className: o + '-synthetic-ph',
                        ref: function (e) {
                          return (t.syntheticPhRef = e);
                        },
                      },
                      y['createElement'](
                        'span',
                        {
                          className: o + '-synthetic-ph-container',
                          ref: function (e) {
                            return (t.syntheticPhContainerRef = e);
                          },
                        },
                        y['createElement']('i', { className: o + '-synthetic-ph-icon' }),
                        y['createElement'](
                          'span',
                          {
                            className: o + '-synthetic-ph-placeholder',
                            style: { visibility: c && !m ? 'visible' : 'hidden' },
                          },
                          c,
                        ),
                      ),
                    ),
                    y['createElement'](
                      'input',
                      r()(
                        {
                          type: 'search',
                          className: o + '-value',
                          value: m,
                          disabled: l,
                          placeholder: c,
                          onChange: this.onChange,
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          ref: function (e) {
                            return (t.inputRef = e);
                          },
                          maxLength: h,
                        },
                        Object(S['a'])(this.props),
                      ),
                    ),
                    y['createElement'](
                      b['a'],
                      { activeClassName: o + '-clear-active' },
                      y['createElement']('a', { onClick: this.onClear, className: k }),
                    ),
                  ),
                  y['createElement'](
                    'div',
                    {
                      className: O,
                      onClick: this.onCancel,
                      ref: function (e) {
                        return (t.rightBtnRef = e);
                      },
                    },
                    this.props.cancelText || f,
                  ),
                );
              },
            },
          ]),
          t
        );
      })(y['Component']);
      t['a'] = x;
      (x.defaultProps = T), (x.contextTypes = { antLocale: m['object'] });
    },
    'Olv+': function (e, t, n) {
      var i;
      (function () {
        'use strict';
        var r = !(
            'undefined' === typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          o = {
            canUseDOM: r,
            canUseWorkers: 'undefined' !== typeof Worker,
            canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
          };
        (i = function () {
          return o;
        }.call(t, n, t, e)),
          void 0 === i || (e.exports = i);
      })();
    },
    RfwO: function (e, t, n) {
      (function (t) {
        for (
          var i = n('HL7L'),
            r = 'undefined' === typeof window ? t : window,
            o = ['moz', 'webkit'],
            a = 'AnimationFrame',
            s = r['request' + a],
            l = r['cancel' + a] || r['cancelRequest' + a],
            c = 0;
          !s && c < o.length;
          c++
        )
          (s = r[o[c] + 'Request' + a]),
            (l = r[o[c] + 'Cancel' + a] || r[o[c] + 'CancelRequest' + a]);
        if (!s || !l) {
          var u = 0,
            p = 0,
            h = [],
            d = 1e3 / 60;
          (s = function (e) {
            if (0 === h.length) {
              var t = i(),
                n = Math.max(0, d - (t - u));
              (u = n + t),
                setTimeout(function () {
                  var e = h.slice(0);
                  h.length = 0;
                  for (var t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(u);
                      } catch (n) {
                        setTimeout(function () {
                          throw n;
                        }, 0);
                      }
                }, Math.round(n));
            }
            return h.push({ handle: ++p, callback: e, cancelled: !1 }), p;
          }),
            (l = function (e) {
              for (var t = 0; t < h.length; t++) h[t].handle === e && (h[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return s.call(r, e);
        }),
          (e.exports.cancel = function () {
            l.apply(r, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = r), (e.requestAnimationFrame = s), (e.cancelAnimationFrame = l);
          });
      }.call(this, n('qYsL')));
    },
    'S/2G': function (e, t, n) {},
    VfKq: function (e, t, n) {},
    XUKA: function (e, t, n) {
      'use strict';
      n.r(t), (t['default'] = { cancelText: '\u53d6\u6d88' });
    },
    eVHG: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      });
      var i = n('bS4n'),
        r = n.n(i),
        o = n('6ato'),
        a = n.n(o),
        s = n('2dj7'),
        l = n.n(s),
        c = n('Xtzg'),
        u = n.n(c),
        p = n('0dFU'),
        h = n.n(p),
        d = n('xwgP'),
        f = n.n(d),
        v = n('jK+o'),
        g = n.n(v),
        y = (function (e) {
          function t() {
            a()(this, t);
            var e = u()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return (
              (e.state = { active: !1 }),
              (e.onTouchStart = function (t) {
                e.triggerEvent('TouchStart', !0, t);
              }),
              (e.onTouchMove = function (t) {
                e.triggerEvent('TouchMove', !1, t);
              }),
              (e.onTouchEnd = function (t) {
                e.triggerEvent('TouchEnd', !1, t);
              }),
              (e.onTouchCancel = function (t) {
                e.triggerEvent('TouchCancel', !1, t);
              }),
              (e.onMouseDown = function (t) {
                e.triggerEvent('MouseDown', !0, t);
              }),
              (e.onMouseUp = function (t) {
                e.triggerEvent('MouseUp', !1, t);
              }),
              (e.onMouseLeave = function (t) {
                e.triggerEvent('MouseLeave', !1, t);
              }),
              e
            );
          }
          return (
            h()(t, e),
            l()(t, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.props.disabled && this.state.active && this.setState({ active: !1 });
                },
              },
              {
                key: 'triggerEvent',
                value: function (e, t, n) {
                  var i = 'on' + e,
                    r = this.props.children;
                  r.props[i] && r.props[i](n),
                    t !== this.state.active && this.setState({ active: t });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.disabled,
                    i = e.activeClassName,
                    o = e.activeStyle,
                    a = n
                      ? void 0
                      : {
                          onTouchStart: this.onTouchStart,
                          onTouchMove: this.onTouchMove,
                          onTouchEnd: this.onTouchEnd,
                          onTouchCancel: this.onTouchCancel,
                          onMouseDown: this.onMouseDown,
                          onMouseUp: this.onMouseUp,
                          onMouseLeave: this.onMouseLeave,
                        },
                    s = f.a.Children.only(t);
                  if (!n && this.state.active) {
                    var l = s.props,
                      c = l.style,
                      u = l.className;
                    return (
                      !1 !== o && (o && (c = r()({}, c, o)), (u = g()(u, i))),
                      f.a.cloneElement(s, r()({ className: u, style: c }, a))
                    );
                  }
                  return f.a.cloneElement(s, a);
                },
              },
            ]),
            t
          );
        })(f.a.Component),
        m = y;
      y.defaultProps = { disabled: !1 };
    },
    fJPK: function (e, t, n) {},
    neBw: function (e, t, n) {},
    o4wL: function (e, t, n) {
      'use strict';
      n('zr+F'), n('fJPK');
    },
    okz7: function (e, t, n) {},
    vTGJ: function (e, t, n) {
      'use strict';
      var i = n('bS4n'),
        r = n.n(i),
        o = n('/umX'),
        a = n.n(o),
        s = n('6ato'),
        l = n.n(s),
        c = n('2dj7'),
        u = n.n(c),
        p = n('Xtzg'),
        h = n.n(p),
        d = n('0dFU'),
        f = n.n(d),
        v = n('jK+o'),
        g = n.n(v),
        y = n('xwgP'),
        m = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 && (n[i[r]] = e[i[r]]);
          }
          return n;
        },
        b = (function (e) {
          function t() {
            return (
              l()(this, t),
              h()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            f()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.direction,
                    i = t.wrap,
                    o = t.justify,
                    s = t.align,
                    l = t.alignContent,
                    c = t.className,
                    u = t.children,
                    p = t.prefixCls,
                    h = t.style,
                    d = m(t, [
                      'direction',
                      'wrap',
                      'justify',
                      'align',
                      'alignContent',
                      'className',
                      'children',
                      'prefixCls',
                      'style',
                    ]),
                    f = g()(
                      p,
                      c,
                      ((e = {}),
                      a()(e, p + '-dir-row', 'row' === n),
                      a()(e, p + '-dir-row-reverse', 'row-reverse' === n),
                      a()(e, p + '-dir-column', 'column' === n),
                      a()(e, p + '-dir-column-reverse', 'column-reverse' === n),
                      a()(e, p + '-nowrap', 'nowrap' === i),
                      a()(e, p + '-wrap', 'wrap' === i),
                      a()(e, p + '-wrap-reverse', 'wrap-reverse' === i),
                      a()(e, p + '-justify-start', 'start' === o),
                      a()(e, p + '-justify-end', 'end' === o),
                      a()(e, p + '-justify-center', 'center' === o),
                      a()(e, p + '-justify-between', 'between' === o),
                      a()(e, p + '-justify-around', 'around' === o),
                      a()(e, p + '-align-start', 'start' === s),
                      a()(e, p + '-align-center', 'center' === s),
                      a()(e, p + '-align-end', 'end' === s),
                      a()(e, p + '-align-baseline', 'baseline' === s),
                      a()(e, p + '-align-stretch', 'stretch' === s),
                      a()(e, p + '-align-content-start', 'start' === l),
                      a()(e, p + '-align-content-end', 'end' === l),
                      a()(e, p + '-align-content-center', 'center' === l),
                      a()(e, p + '-align-content-between', 'between' === l),
                      a()(e, p + '-align-content-around', 'around' === l),
                      a()(e, p + '-align-content-stretch', 'stretch' === l),
                      e),
                    );
                  return y['createElement']('div', r()({ className: f, style: h }, d), u);
                },
              },
            ]),
            t
          );
        })(y['Component']),
        S = b;
      b.defaultProps = { prefixCls: 'am-flexbox', align: 'center' };
      var w = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 && (n[i[r]] = e[i[r]]);
          }
          return n;
        },
        C = (function (e) {
          function t() {
            return (
              l()(this, t),
              h()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            f()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.className,
                    i = e.prefixCls,
                    o = e.style,
                    a = w(e, ['children', 'className', 'prefixCls', 'style']),
                    s = g()(i + '-item', n);
                  return y['createElement']('div', r()({ className: s, style: o }, a), t);
                },
              },
            ]),
            t
          );
        })(y['Component']),
        T = C;
      (C.defaultProps = { prefixCls: 'am-flexbox' }), (S.Item = T);
      t['a'] = S;
    },
    zCLS: function (e, t, n) {
      'use strict';
      t['a'] = function (e) {
        return Object.keys(e).reduce(function (t, n) {
          return (
            ('aria-' !== n.substr(0, 5) && 'data-' !== n.substr(0, 5) && 'role' !== n) ||
              (t[n] = e[n]),
            t
          );
        }, {});
      };
    },
  },
]);
