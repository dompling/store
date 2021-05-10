(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    '17wr': function (e, t, r) {
      'use strict';
      r('zr+F'), r('buIX'), r('s7TO');
    },
    '1F0g': function (e, t, r) {
      'use strict';
      var i = r('bS4n'),
        n = r.n(i),
        s = r('6ato'),
        a = r.n(s),
        o = r('2dj7'),
        l = r.n(o),
        d = r('Xtzg'),
        c = r.n(d),
        u = r('0dFU'),
        p = r.n(u),
        f = r('jK+o'),
        v = r.n(f),
        h = r('xwgP'),
        m = function (e, t) {
          var r = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
              t.indexOf(i[n]) < 0 && (r[i[n]] = e[i[n]]);
          }
          return r;
        },
        g = (function (e) {
          function t() {
            return (
              a()(this, t),
              c()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            p()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    r = e.className,
                    i = e.children,
                    s = e.mode,
                    a = e.icon,
                    o = e.onLeftClick,
                    l = e.leftContent,
                    d = e.rightContent,
                    c = m(e, [
                      'prefixCls',
                      'className',
                      'children',
                      'mode',
                      'icon',
                      'onLeftClick',
                      'leftContent',
                      'rightContent',
                    ]);
                  return h['createElement'](
                    'div',
                    n()({}, c, { className: v()(r, t, t + '-' + s) }),
                    h['createElement'](
                      'div',
                      { className: t + '-left', role: 'button', onClick: o },
                      a
                        ? h['createElement'](
                            'span',
                            { className: t + '-left-icon', 'aria-hidden': 'true' },
                            a,
                          )
                        : null,
                      l,
                    ),
                    h['createElement']('div', { className: t + '-title' }, i),
                    h['createElement']('div', { className: t + '-right' }, d),
                  );
                },
              },
            ]),
            t
          );
        })(h['Component']);
      (t['a'] = g),
        (g.defaultProps = { prefixCls: 'am-navbar', mode: 'dark', onLeftClick: function () {} });
    },
    '7H96': function (e, t, r) {
      'use strict';
      r.d(t, 'b', function () {
        return n;
      }),
        r.d(t, 'e', function () {
          return s;
        }),
        r.d(t, 'f', function () {
          return a;
        }),
        r.d(t, 'd', function () {
          return l;
        }),
        r.d(t, 'c', function () {
          return c;
        }),
        r.d(t, 'a', function () {
          return u;
        });
      var i = r('OJ7w');
      function n(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (r) {}
          try {
            delete t[e];
          } catch (r) {}
        });
      }
      function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function a() {
        return Date.now();
      }
      function o(e) {
        var t,
          r = Object(i['b'])();
        return (
          r.getComputedStyle && (t = r.getComputedStyle(e, null)),
          !t && e.currentStyle && (t = e.currentStyle),
          t || (t = e.style),
          t
        );
      }
      function l(e, t) {
        void 0 === t && (t = 'x');
        var r,
          n,
          s,
          a = Object(i['b'])(),
          l = o(e, null);
        return (
          a.WebKitCSSMatrix
            ? ((n = l.transform || l.webkitTransform),
              n.split(',').length > 6 &&
                (n = n
                  .split(', ')
                  .map(function (e) {
                    return e.replace(',', '.');
                  })
                  .join(', ')),
              (s = new a.WebKitCSSMatrix('none' === n ? '' : n)))
            : ((s =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
              (r = s.toString().split(','))),
          'x' === t &&
            (n = a.WebKitCSSMatrix
              ? s.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          'y' === t &&
            (n = a.WebKitCSSMatrix
              ? s.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          n || 0
        );
      }
      function d(e) {
        return (
          'object' === typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function c() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ['__proto__', 'constructor', 'prototype'],
            r = 1;
          r < arguments.length;
          r += 1
        ) {
          var i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (void 0 !== i && null !== i)
            for (
              var n = Object.keys(Object(i)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                s = 0,
                a = n.length;
              s < a;
              s += 1
            ) {
              var o = n[s],
                l = Object.getOwnPropertyDescriptor(i, o);
              void 0 !== l &&
                l.enumerable &&
                (d(e[o]) && d(i[o])
                  ? i[o].__swiper__
                    ? (e[o] = i[o])
                    : c(e[o], i[o])
                  : !d(e[o]) && d(i[o])
                  ? ((e[o] = {}), i[o].__swiper__ ? (e[o] = i[o]) : c(e[o], i[o]))
                  : (e[o] = i[o]));
            }
        }
        return e;
      }
      function u(e, t) {
        Object.keys(t).forEach(function (r) {
          d(t[r]) &&
            Object.keys(t[r]).forEach(function (i) {
              'function' === typeof t[r][i] && (t[r][i] = t[r][i].bind(e));
            }),
            (e[r] = t[r]);
        });
      }
    },
    G2O9: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return d;
      });
      var i = r('xwgP'),
        n = r.n(i),
        s = r('axFv'),
        a = r('tpsa');
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) (r = s[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n;
      }
      var d = Object(i['forwardRef'])(function (e, t) {
        var r,
          d = void 0 === e ? {} : e,
          c = d.tag,
          u = void 0 === c ? 'div' : c,
          p = d.children,
          f = d.className,
          v = void 0 === f ? '' : f,
          h = d.swiper,
          m = d.zoom,
          g = d.virtualIndex,
          b = l(d, ['tag', 'children', 'className', 'swiper', 'zoom', 'virtualIndex']),
          w = Object(i['useRef'])(null),
          y = Object(i['useState'])('swiper-slide'),
          S = y[0],
          T = y[1];
        function E(e, t, r) {
          t === w.current && T(r);
        }
        Object(a['a'])(function () {
          if ((t && (t.current = w.current), w.current && h)) {
            if (!h.destroyed)
              return (
                h.on('_slideClass', E),
                function () {
                  h && h.off('_slideClass', E);
                }
              );
            'swiper-slide' !== S && T('swiper-slide');
          }
        }),
          Object(a['a'])(
            function () {
              h && w.current && T(h.getSlideClasses(w.current));
            },
            [h],
          ),
          'function' === typeof p &&
            (r = {
              isActive:
                S.indexOf('swiper-slide-active') >= 0 ||
                S.indexOf('swiper-slide-duplicate-active') >= 0,
              isVisible: S.indexOf('swiper-slide-visible') >= 0,
              isDuplicate: S.indexOf('swiper-slide-duplicate') >= 0,
              isPrev:
                S.indexOf('swiper-slide-prev') >= 0 ||
                S.indexOf('swiper-slide-duplicate-prev') >= 0,
              isNext:
                S.indexOf('swiper-slide-next') >= 0 ||
                S.indexOf('swiper-slide-duplicate-next') >= 0,
            });
        var C = function () {
          return 'function' === typeof p ? p(r) : p;
        };
        return n.a.createElement(
          u,
          o(
            {
              ref: w,
              className: Object(s['f'])(S + (v ? ' ' + v : '')),
              'data-swiper-slide-index': g,
            },
            b,
          ),
          m
            ? n.a.createElement(
                'div',
                {
                  className: 'swiper-zoom-container',
                  'data-swiper-zoom': 'number' === typeof m ? m : void 0,
                },
                C(),
              )
            : C(),
        );
      });
      d.displayName = 'SwiperSlide';
    },
    HreP: function (e, t, r) {
      'use strict';
      var i,
        n,
        s,
        a = r('YBjJ'),
        o = r('7H96'),
        l = r('OJ7w');
      function d() {
        var e = Object(l['b'])(),
          t = Object(l['a'])();
        return {
          touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
          pointerEvents:
            !!e.PointerEvent && 'maxTouchPoints' in e.navigator && e.navigator.maxTouchPoints >= 0,
          observer: (function () {
            return 'MutationObserver' in e || 'WebkitMutationObserver' in e;
          })(),
          passiveListener: (function () {
            var t = !1;
            try {
              var r = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0;
                },
              });
              e.addEventListener('testPassiveListener', null, r);
            } catch (i) {}
            return t;
          })(),
          gestures: (function () {
            return 'ongesturestart' in e;
          })(),
        };
      }
      function c() {
        return i || (i = d()), i;
      }
      function u(e) {
        var t = void 0 === e ? {} : e,
          r = t.userAgent,
          i = c(),
          n = Object(l['b'])(),
          s = n.navigator.platform,
          a = r || n.navigator.userAgent,
          o = { ios: !1, android: !1 },
          d = n.screen.width,
          u = n.screen.height,
          p = a.match(/(Android);?[\s\/]+([\d.]+)?/),
          f = a.match(/(iPad).*OS\s([\d_]+)/),
          v = a.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !f && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          m = 'Win32' === s,
          g = 'MacIntel' === s,
          b = [
            '1024x1366',
            '1366x1024',
            '834x1194',
            '1194x834',
            '834x1112',
            '1112x834',
            '768x1024',
            '1024x768',
            '820x1180',
            '1180x820',
            '810x1080',
            '1080x810',
          ];
        return (
          !f &&
            g &&
            i.touch &&
            b.indexOf(d + 'x' + u) >= 0 &&
            ((f = a.match(/(Version)\/([\d.]+)/)), f || (f = [0, 1, '13_0_0']), (g = !1)),
          p && !m && ((o.os = 'android'), (o.android = !0)),
          (f || h || v) && ((o.os = 'ios'), (o.ios = !0)),
          o
        );
      }
      function p(e) {
        return void 0 === e && (e = {}), n || (n = u(e)), n;
      }
      function f() {
        var e = Object(l['b'])();
        function t() {
          var t = e.navigator.userAgent.toLowerCase();
          return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
        }
        return {
          isEdge: !!e.navigator.userAgent.match(/Edge/g),
          isSafari: t(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
        };
      }
      function v() {
        return s || (s = f()), s;
      }
      var h = function () {
          var e = Object(l['b'])();
          return 'undefined' !== typeof e.ResizeObserver;
        },
        m = {
          name: 'resize',
          create: function () {
            var e = this;
            Object(o['c'])(e, {
              resize: {
                observer: null,
                createObserver: function () {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    ((e.resize.observer = new ResizeObserver(function (t) {
                      var r = e.width,
                        i = e.height,
                        n = r,
                        s = i;
                      t.forEach(function (t) {
                        var r = t.contentBoxSize,
                          i = t.contentRect,
                          a = t.target;
                        (a && a !== e.el) ||
                          ((n = i ? i.width : (r[0] || r).inlineSize),
                          (s = i ? i.height : (r[0] || r).blockSize));
                      }),
                        (n === r && s === i) || e.resize.resizeHandler();
                    })),
                    e.resize.observer.observe(e.el));
                },
                removeObserver: function () {
                  e.resize.observer &&
                    e.resize.observer.unobserve &&
                    e.el &&
                    (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
                },
                resizeHandler: function () {
                  e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'));
                },
                orientationChangeHandler: function () {
                  e && !e.destroyed && e.initialized && e.emit('orientationchange');
                },
              },
            });
          },
          on: {
            init: function (e) {
              var t = Object(l['b'])();
              e.params.resizeObserver && h()
                ? e.resize.createObserver()
                : (t.addEventListener('resize', e.resize.resizeHandler),
                  t.addEventListener('orientationchange', e.resize.orientationChangeHandler));
            },
            destroy: function (e) {
              var t = Object(l['b'])();
              e.resize.removeObserver(),
                t.removeEventListener('resize', e.resize.resizeHandler),
                t.removeEventListener('orientationchange', e.resize.orientationChangeHandler);
            },
          },
        };
      function g() {
        return (
          (g =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          g.apply(this, arguments)
        );
      }
      var b = {
          attach: function (e, t) {
            void 0 === t && (t = {});
            var r = Object(l['b'])(),
              i = this,
              n = r.MutationObserver || r.WebkitMutationObserver,
              s = new n(function (e) {
                if (1 !== e.length) {
                  var t = function () {
                    i.emit('observerUpdate', e[0]);
                  };
                  r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0);
                } else i.emit('observerUpdate', e[0]);
              });
            s.observe(e, {
              attributes: 'undefined' === typeof t.attributes || t.attributes,
              childList: 'undefined' === typeof t.childList || t.childList,
              characterData: 'undefined' === typeof t.characterData || t.characterData,
            }),
              i.observer.observers.push(s);
          },
          init: function () {
            var e = this;
            if (e.support.observer && e.params.observer) {
              if (e.params.observeParents)
                for (var t = e.$el.parents(), r = 0; r < t.length; r += 1) e.observer.attach(t[r]);
              e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy: function () {
            var e = this;
            e.observer.observers.forEach(function (e) {
              e.disconnect();
            }),
              (e.observer.observers = []);
          },
        },
        w = {
          name: 'observer',
          params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
          create: function () {
            var e = this;
            Object(o['a'])(e, { observer: g({}, b, { observers: [] }) });
          },
          on: {
            init: function (e) {
              e.observer.init();
            },
            destroy: function (e) {
              e.observer.destroy();
            },
          },
        },
        y = {
          useParams: function (e) {
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (r) {
                var i = t.modules[r];
                i.params && Object(o['c'])(e, i.params);
              });
          },
          useModules: function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (r) {
                var i = t.modules[r],
                  n = e[r] || {};
                i.on &&
                  t.on &&
                  Object.keys(i.on).forEach(function (e) {
                    t.on(e, i.on[e]);
                  }),
                  i.create && i.create.bind(t)(n);
              });
          },
        },
        S = {
          on: function (e, t, r) {
            var i = this;
            if ('function' !== typeof t) return i;
            var n = r ? 'unshift' : 'push';
            return (
              e.split(' ').forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t);
              }),
              i
            );
          },
          once: function (e, t, r) {
            var i = this;
            if ('function' !== typeof t) return i;
            function n() {
              i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
              for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
                s[a] = arguments[a];
              t.apply(i, s);
            }
            return (n.__emitterProxy = t), i.on(e, n, r);
          },
          onAny: function (e, t) {
            var r = this;
            if ('function' !== typeof e) return r;
            var i = t ? 'unshift' : 'push';
            return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r;
          },
          offAny: function (e) {
            var t = this;
            if (!t.eventsAnyListeners) return t;
            var r = t.eventsAnyListeners.indexOf(e);
            return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
          },
          off: function (e, t) {
            var r = this;
            return r.eventsListeners
              ? (e.split(' ').forEach(function (e) {
                  'undefined' === typeof t
                    ? (r.eventsListeners[e] = [])
                    : r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach(function (i, n) {
                        (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                          r.eventsListeners[e].splice(n, 1);
                      });
                }),
                r)
              : r;
          },
          emit: function () {
            var e,
              t,
              r,
              i = this;
            if (!i.eventsListeners) return i;
            for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
            'string' === typeof s[0] || Array.isArray(s[0])
              ? ((e = s[0]), (t = s.slice(1, s.length)), (r = i))
              : ((e = s[0].events), (t = s[0].data), (r = s[0].context || i)),
              t.unshift(r);
            var o = Array.isArray(e) ? e : e.split(' ');
            return (
              o.forEach(function (e) {
                i.eventsAnyListeners &&
                  i.eventsAnyListeners.length &&
                  i.eventsAnyListeners.forEach(function (i) {
                    i.apply(r, [e].concat(t));
                  }),
                  i.eventsListeners &&
                    i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (e) {
                      e.apply(r, t);
                    });
              }),
              i
            );
          },
        };
      function T() {
        var e,
          t,
          r = this,
          i = r.$el;
        (e =
          'undefined' !== typeof r.params.width && null !== r.params.width
            ? r.params.width
            : i[0].clientWidth),
          (t =
            'undefined' !== typeof r.params.height && null !== r.params.height
              ? r.params.height
              : i[0].clientHeight),
          (0 === e && r.isHorizontal()) ||
            (0 === t && r.isVertical()) ||
            ((e =
              e -
              parseInt(i.css('padding-left') || 0, 10) -
              parseInt(i.css('padding-right') || 0, 10)),
            (t =
              t -
              parseInt(i.css('padding-top') || 0, 10) -
              parseInt(i.css('padding-bottom') || 0, 10)),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
            Object(o['c'])(r, { width: e, height: t, size: r.isHorizontal() ? e : t }));
      }
      function E() {
        var e = this,
          t = function (t) {
            return e.isHorizontal()
              ? t
              : {
                  width: 'height',
                  'margin-top': 'margin-left',
                  'margin-bottom ': 'margin-right',
                  'margin-left': 'margin-top',
                  'margin-right': 'margin-bottom',
                  'padding-left': 'padding-top',
                  'padding-right': 'padding-bottom',
                  marginRight: 'marginBottom',
                }[t];
          },
          r = function (e, r) {
            return parseFloat(e.getPropertyValue(t(r)) || 0);
          },
          i = e.params,
          n = e.$wrapperEl,
          s = e.size,
          a = e.rtlTranslate,
          l = e.wrongRTL,
          d = e.virtual && i.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          u = n.children('.' + e.params.slideClass),
          p = d ? e.virtual.slides.length : u.length,
          f = [],
          v = [],
          h = [];
        function m(e, t) {
          return !i.cssMode || t !== u.length - 1;
        }
        var g = i.slidesOffsetBefore;
        'function' === typeof g && (g = i.slidesOffsetBefore.call(e));
        var b = i.slidesOffsetAfter;
        'function' === typeof b && (b = i.slidesOffsetAfter.call(e));
        var w = e.snapGrid.length,
          y = e.slidesGrid.length,
          S = i.spaceBetween,
          T = -g,
          E = 0,
          C = 0;
        if ('undefined' !== typeof s) {
          var O, x;
          'string' === typeof S &&
            S.indexOf('%') >= 0 &&
            (S = (parseFloat(S.replace('%', '')) / 100) * s),
            (e.virtualSize = -S),
            a
              ? u.css({ marginLeft: '', marginTop: '' })
              : u.css({ marginRight: '', marginBottom: '' }),
            i.slidesPerColumn > 1 &&
              ((O =
                Math.floor(p / i.slidesPerColumn) === p / e.params.slidesPerColumn
                  ? p
                  : Math.ceil(p / i.slidesPerColumn) * i.slidesPerColumn),
              'auto' !== i.slidesPerView &&
                'row' === i.slidesPerColumnFill &&
                (O = Math.max(O, i.slidesPerView * i.slidesPerColumn)));
          for (
            var P,
              M,
              k,
              j = i.slidesPerColumn,
              L = O / j,
              z = Math.floor(p / i.slidesPerColumn),
              _ = 0;
            _ < p;
            _ += 1
          ) {
            x = 0;
            var D = u.eq(_);
            if (i.slidesPerColumn > 1) {
              var A = void 0,
                N = void 0,
                I = void 0;
              if ('row' === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                var B = Math.floor(_ / (i.slidesPerGroup * i.slidesPerColumn)),
                  G = _ - i.slidesPerColumn * i.slidesPerGroup * B,
                  R =
                    0 === B
                      ? i.slidesPerGroup
                      : Math.min(Math.ceil((p - B * j * i.slidesPerGroup) / j), i.slidesPerGroup);
                (I = Math.floor(G / R)),
                  (N = G - I * R + B * i.slidesPerGroup),
                  (A = N + (I * O) / j),
                  D.css({
                    '-webkit-box-ordinal-group': A,
                    '-moz-box-ordinal-group': A,
                    '-ms-flex-order': A,
                    '-webkit-order': A,
                    order: A,
                  });
              } else
                'column' === i.slidesPerColumnFill
                  ? ((N = Math.floor(_ / j)),
                    (I = _ - N * j),
                    (N > z || (N === z && I === j - 1)) &&
                      ((I += 1), I >= j && ((I = 0), (N += 1))))
                  : ((I = Math.floor(_ / L)), (N = _ - I * L));
              D.css(t('margin-top'), 0 !== I && i.spaceBetween && i.spaceBetween + 'px');
            }
            if ('none' !== D.css('display')) {
              if ('auto' === i.slidesPerView) {
                var H = getComputedStyle(D[0]),
                  W = D[0].style.transform,
                  V = D[0].style.webkitTransform;
                if (
                  (W && (D[0].style.transform = 'none'),
                  V && (D[0].style.webkitTransform = 'none'),
                  i.roundLengths)
                )
                  x = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                else {
                  var $ = r(H, 'width'),
                    F = r(H, 'padding-left'),
                    q = r(H, 'padding-right'),
                    X = r(H, 'margin-left'),
                    Y = r(H, 'margin-right'),
                    U = H.getPropertyValue('box-sizing');
                  if (U && 'border-box' === U) x = $ + X + Y;
                  else {
                    var J = D[0],
                      K = J.clientWidth,
                      Z = J.offsetWidth;
                    x = $ + F + q + X + Y + (Z - K);
                  }
                }
                W && (D[0].style.transform = W),
                  V && (D[0].style.webkitTransform = V),
                  i.roundLengths && (x = Math.floor(x));
              } else
                (x = (s - (i.slidesPerView - 1) * S) / i.slidesPerView),
                  i.roundLengths && (x = Math.floor(x)),
                  u[_] && (u[_].style[t('width')] = x + 'px');
              u[_] && (u[_].swiperSlideSize = x),
                h.push(x),
                i.centeredSlides
                  ? ((T = T + x / 2 + E / 2 + S),
                    0 === E && 0 !== _ && (T = T - s / 2 - S),
                    0 === _ && (T = T - s / 2 - S),
                    Math.abs(T) < 0.001 && (T = 0),
                    i.roundLengths && (T = Math.floor(T)),
                    C % i.slidesPerGroup === 0 && f.push(T),
                    v.push(T))
                  : (i.roundLengths && (T = Math.floor(T)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup ===
                      0 && f.push(T),
                    v.push(T),
                    (T = T + x + S)),
                (e.virtualSize += x + S),
                (E = x),
                (C += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + b),
            a &&
              l &&
              ('slide' === i.effect || 'coverflow' === i.effect) &&
              n.css({ width: e.virtualSize + i.spaceBetween + 'px' }),
            i.setWrapperSize)
          )
            n.css(((M = {}), (M[t('width')] = e.virtualSize + i.spaceBetween + 'px'), M));
          if (i.slidesPerColumn > 1)
            if (
              ((e.virtualSize = (x + i.spaceBetween) * O),
              (e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween),
              n.css(((k = {}), (k[t('width')] = e.virtualSize + i.spaceBetween + 'px'), k)),
              i.centeredSlides)
            ) {
              P = [];
              for (var Q = 0; Q < f.length; Q += 1) {
                var ee = f[Q];
                i.roundLengths && (ee = Math.floor(ee)), f[Q] < e.virtualSize + f[0] && P.push(ee);
              }
              f = P;
            }
          if (!i.centeredSlides) {
            P = [];
            for (var te = 0; te < f.length; te += 1) {
              var re = f[te];
              i.roundLengths && (re = Math.floor(re)), f[te] <= e.virtualSize - s && P.push(re);
            }
            (f = P),
              Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - s);
          }
          if ((0 === f.length && (f = [0]), 0 !== i.spaceBetween)) {
            var ie,
              ne = e.isHorizontal() && a ? 'marginLeft' : t('marginRight');
            u.filter(m).css(((ie = {}), (ie[ne] = S + 'px'), ie));
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            var se = 0;
            h.forEach(function (e) {
              se += e + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (se -= i.spaceBetween);
            var ae = se - s;
            f = f.map(function (e) {
              return e < 0 ? -g : e > ae ? ae + b : e;
            });
          }
          if (i.centerInsufficientSlides) {
            var oe = 0;
            if (
              (h.forEach(function (e) {
                oe += e + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (oe -= i.spaceBetween),
              oe < s)
            ) {
              var le = (s - oe) / 2;
              f.forEach(function (e, t) {
                f[t] = e - le;
              }),
                v.forEach(function (e, t) {
                  v[t] = e + le;
                });
            }
          }
          Object(o['c'])(e, { slides: u, snapGrid: f, slidesGrid: v, slidesSizesGrid: h }),
            p !== c && e.emit('slidesLengthChange'),
            f.length !== w &&
              (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
            v.length !== y && e.emit('slidesGridLengthChange'),
            (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
        }
      }
      function C(e) {
        var t,
          r = this,
          i = [],
          n = 0;
        if (
          ('number' === typeof e ? r.setTransition(e) : !0 === e && r.setTransition(r.params.speed),
          'auto' !== r.params.slidesPerView && r.params.slidesPerView > 1)
        )
          if (r.params.centeredSlides)
            r.visibleSlides.each(function (e) {
              i.push(e);
            });
          else
            for (t = 0; t < Math.ceil(r.params.slidesPerView); t += 1) {
              var s = r.activeIndex + t;
              if (s > r.slides.length) break;
              i.push(r.slides.eq(s)[0]);
            }
        else i.push(r.slides.eq(r.activeIndex)[0]);
        for (t = 0; t < i.length; t += 1)
          if ('undefined' !== typeof i[t]) {
            var a = i[t].offsetHeight;
            n = a > n ? a : n;
          }
        n && r.$wrapperEl.css('height', n + 'px');
      }
      function O() {
        for (var e = this, t = e.slides, r = 0; r < t.length; r += 1)
          t[r].swiperSlideOffset = e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop;
      }
      function x(e) {
        void 0 === e && (e = (this && this.translate) || 0);
        var t = this,
          r = t.params,
          i = t.slides,
          n = t.rtlTranslate;
        if (0 !== i.length) {
          'undefined' === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
          var s = -e;
          n && (s = e),
            i.removeClass(r.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (var o = 0; o < i.length; o += 1) {
            var l = i[o],
              d =
                (s + (r.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) /
                (l.swiperSlideSize + r.spaceBetween);
            if (r.watchSlidesVisibility || (r.centeredSlides && r.autoHeight)) {
              var c = -(s - l.swiperSlideOffset),
                u = c + t.slidesSizesGrid[o],
                p = (c >= 0 && c < t.size - 1) || (u > 1 && u <= t.size) || (c <= 0 && u >= t.size);
              p &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(o),
                i.eq(o).addClass(r.slideVisibleClass));
            }
            l.progress = n ? -d : d;
          }
          t.visibleSlides = Object(a['a'])(t.visibleSlides);
        }
      }
      function P(e) {
        var t = this;
        if ('undefined' === typeof e) {
          var r = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * r) || 0;
        }
        var i = t.params,
          n = t.maxTranslate() - t.minTranslate(),
          s = t.progress,
          a = t.isBeginning,
          l = t.isEnd,
          d = a,
          c = l;
        0 === n
          ? ((s = 0), (a = !0), (l = !0))
          : ((s = (e - t.minTranslate()) / n), (a = s <= 0), (l = s >= 1)),
          Object(o['c'])(t, { progress: s, isBeginning: a, isEnd: l }),
          (i.watchSlidesProgress ||
            i.watchSlidesVisibility ||
            (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !d && t.emit('reachBeginning toEdge'),
          l && !c && t.emit('reachEnd toEdge'),
          ((d && !a) || (c && !l)) && t.emit('fromEdge'),
          t.emit('progress', s);
      }
      function M() {
        var e,
          t = this,
          r = t.slides,
          i = t.params,
          n = t.$wrapperEl,
          s = t.activeIndex,
          a = t.realIndex,
          o = t.virtual && i.virtual.enabled;
        r.removeClass(
          i.slideActiveClass +
            ' ' +
            i.slideNextClass +
            ' ' +
            i.slidePrevClass +
            ' ' +
            i.slideDuplicateActiveClass +
            ' ' +
            i.slideDuplicateNextClass +
            ' ' +
            i.slideDuplicatePrevClass,
        ),
          (e = o
            ? t.$wrapperEl.find('.' + i.slideClass + '[data-swiper-slide-index="' + s + '"]')
            : r.eq(s)),
          e.addClass(i.slideActiveClass),
          i.loop &&
            (e.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      a +
                      '"]',
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : n
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      a +
                      '"]',
                  )
                  .addClass(i.slideDuplicateActiveClass));
        var l = e
          .nextAll('.' + i.slideClass)
          .eq(0)
          .addClass(i.slideNextClass);
        i.loop && 0 === l.length && ((l = r.eq(0)), l.addClass(i.slideNextClass));
        var d = e
          .prevAll('.' + i.slideClass)
          .eq(0)
          .addClass(i.slidePrevClass);
        i.loop && 0 === d.length && ((d = r.eq(-1)), d.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      l.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicateNextClass)
              : n
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      l.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicateNextClass),
            d.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      d.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : n
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      d.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicatePrevClass)),
          t.emitSlidesClasses();
      }
      function k(e) {
        var t,
          r = this,
          i = r.rtlTranslate ? r.translate : -r.translate,
          n = r.slidesGrid,
          s = r.snapGrid,
          a = r.params,
          l = r.activeIndex,
          d = r.realIndex,
          c = r.snapIndex,
          u = e;
        if ('undefined' === typeof u) {
          for (var p = 0; p < n.length; p += 1)
            'undefined' !== typeof n[p + 1]
              ? i >= n[p] && i < n[p + 1] - (n[p + 1] - n[p]) / 2
                ? (u = p)
                : i >= n[p] && i < n[p + 1] && (u = p + 1)
              : i >= n[p] && (u = p);
          a.normalizeSlideIndex && (u < 0 || 'undefined' === typeof u) && (u = 0);
        }
        if (s.indexOf(i) >= 0) t = s.indexOf(i);
        else {
          var f = Math.min(a.slidesPerGroupSkip, u);
          t = f + Math.floor((u - f) / a.slidesPerGroup);
        }
        if ((t >= s.length && (t = s.length - 1), u !== l)) {
          var v = parseInt(r.slides.eq(u).attr('data-swiper-slide-index') || u, 10);
          Object(o['c'])(r, { snapIndex: t, realIndex: v, previousIndex: l, activeIndex: u }),
            r.emit('activeIndexChange'),
            r.emit('snapIndexChange'),
            d !== v && r.emit('realIndexChange'),
            (r.initialized || r.params.runCallbacksOnInit) && r.emit('slideChange');
        } else t !== c && ((r.snapIndex = t), r.emit('snapIndexChange'));
      }
      function j(e) {
        var t,
          r = this,
          i = r.params,
          n = Object(a['a'])(e.target).closest('.' + i.slideClass)[0],
          s = !1;
        if (n)
          for (var o = 0; o < r.slides.length; o += 1)
            if (r.slides[o] === n) {
              (s = !0), (t = o);
              break;
            }
        if (!n || !s) return (r.clickedSlide = void 0), void (r.clickedIndex = void 0);
        (r.clickedSlide = n),
          r.virtual && r.params.virtual.enabled
            ? (r.clickedIndex = parseInt(Object(a['a'])(n).attr('data-swiper-slide-index'), 10))
            : (r.clickedIndex = t),
          i.slideToClickedSlide &&
            void 0 !== r.clickedIndex &&
            r.clickedIndex !== r.activeIndex &&
            r.slideToClickedSlide();
      }
      var L = {
        updateSize: T,
        updateSlides: E,
        updateAutoHeight: C,
        updateSlidesOffset: O,
        updateSlidesProgress: x,
        updateProgress: P,
        updateSlidesClasses: M,
        updateActiveIndex: k,
        updateClickedSlide: j,
      };
      function z(e) {
        void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
        var t = this,
          r = t.params,
          i = t.rtlTranslate,
          n = t.translate,
          s = t.$wrapperEl;
        if (r.virtualTranslate) return i ? -n : n;
        if (r.cssMode) return n;
        var a = Object(o['d'])(s[0], e);
        return i && (a = -a), a || 0;
      }
      function _(e, t) {
        var r,
          i = this,
          n = i.rtlTranslate,
          s = i.params,
          a = i.$wrapperEl,
          o = i.wrapperEl,
          l = i.progress,
          d = 0,
          c = 0,
          u = 0;
        i.isHorizontal() ? (d = n ? -e : e) : (c = e),
          s.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          s.cssMode
            ? (o[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -d : -c)
            : s.virtualTranslate ||
              a.transform('translate3d(' + d + 'px, ' + c + 'px, ' + u + 'px)'),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? d : c);
        var p = i.maxTranslate() - i.minTranslate();
        (r = 0 === p ? 0 : (e - i.minTranslate()) / p),
          r !== l && i.updateProgress(e),
          i.emit('setTranslate', i.translate, t);
      }
      function D() {
        return -this.snapGrid[0];
      }
      function A() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }
      function N(e, t, r, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === r && (r = !0),
          void 0 === i && (i = !0);
        var s = this,
          a = s.params,
          o = s.wrapperEl;
        if (s.animating && a.preventInteractionOnTransition) return !1;
        var l,
          d = s.minTranslate(),
          c = s.maxTranslate();
        if (((l = i && e > d ? d : i && e < c ? c : e), s.updateProgress(l), a.cssMode)) {
          var u,
            p = s.isHorizontal();
          if (0 === t) o[p ? 'scrollLeft' : 'scrollTop'] = -l;
          else if (o.scrollTo)
            o.scrollTo(((u = {}), (u[p ? 'left' : 'top'] = -l), (u.behavior = 'smooth'), u));
          else o[p ? 'scrollLeft' : 'scrollTop'] = -l;
          return !0;
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(l),
              r && (s.emit('beforeTransitionStart', t, n), s.emit('transitionEnd')))
            : (s.setTransition(t),
              s.setTranslate(l),
              r && (s.emit('beforeTransitionStart', t, n), s.emit('transitionStart')),
              s.animating ||
                ((s.animating = !0),
                s.onTranslateToWrapperTransitionEnd ||
                  (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        'transitionend',
                        s.onTranslateToWrapperTransitionEnd,
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        'webkitTransitionEnd',
                        s.onTranslateToWrapperTransitionEnd,
                      ),
                      (s.onTranslateToWrapperTransitionEnd = null),
                      delete s.onTranslateToWrapperTransitionEnd,
                      r && s.emit('transitionEnd'));
                  }),
                s.$wrapperEl[0].addEventListener(
                  'transitionend',
                  s.onTranslateToWrapperTransitionEnd,
                ),
                s.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  s.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      }
      var I = {
        getTranslate: z,
        setTranslate: _,
        minTranslate: D,
        maxTranslate: A,
        translateTo: N,
      };
      function B(e, t) {
        var r = this;
        r.params.cssMode || r.$wrapperEl.transition(e), r.emit('setTransition', e, t);
      }
      function G(e, t) {
        void 0 === e && (e = !0);
        var r = this,
          i = r.activeIndex,
          n = r.params,
          s = r.previousIndex;
        if (!n.cssMode) {
          n.autoHeight && r.updateAutoHeight();
          var a = t;
          if (
            (a || (a = i > s ? 'next' : i < s ? 'prev' : 'reset'),
            r.emit('transitionStart'),
            e && i !== s)
          ) {
            if ('reset' === a) return void r.emit('slideResetTransitionStart');
            r.emit('slideChangeTransitionStart'),
              'next' === a
                ? r.emit('slideNextTransitionStart')
                : r.emit('slidePrevTransitionStart');
          }
        }
      }
      function R(e, t) {
        void 0 === e && (e = !0);
        var r = this,
          i = r.activeIndex,
          n = r.previousIndex,
          s = r.params;
        if (((r.animating = !1), !s.cssMode)) {
          r.setTransition(0);
          var a = t;
          if (
            (a || (a = i > n ? 'next' : i < n ? 'prev' : 'reset'),
            r.emit('transitionEnd'),
            e && i !== n)
          ) {
            if ('reset' === a) return void r.emit('slideResetTransitionEnd');
            r.emit('slideChangeTransitionEnd'),
              'next' === a ? r.emit('slideNextTransitionEnd') : r.emit('slidePrevTransitionEnd');
          }
        }
      }
      var H = { setTransition: B, transitionStart: G, transitionEnd: R };
      function W(e, t, r, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === r && (r = !0),
          'number' !== typeof e && 'string' !== typeof e)
        )
          throw new Error(
            "The 'index' argument cannot have type other than 'number' or 'string'. [" +
              typeof e +
              '] given.',
          );
        if ('string' === typeof e) {
          var n = parseInt(e, 10),
            s = isFinite(n);
          if (!s)
            throw new Error(
              "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                e +
                '] given.',
            );
          e = n;
        }
        var a = this,
          o = e;
        o < 0 && (o = 0);
        var l = a.params,
          d = a.snapGrid,
          c = a.slidesGrid,
          u = a.previousIndex,
          p = a.activeIndex,
          f = a.rtlTranslate,
          v = a.wrapperEl;
        if (a.animating && l.preventInteractionOnTransition) return !1;
        var h = Math.min(a.params.slidesPerGroupSkip, o),
          m = h + Math.floor((o - h) / a.params.slidesPerGroup);
        m >= d.length && (m = d.length - 1),
          (p || l.initialSlide || 0) === (u || 0) && r && a.emit('beforeSlideChangeStart');
        var g,
          b = -d[m];
        if ((a.updateProgress(b), l.normalizeSlideIndex))
          for (var w = 0; w < c.length; w += 1) {
            var y = -Math.floor(100 * b),
              S = Math.floor(100 * c[w]),
              T = Math.floor(100 * c[w + 1]);
            'undefined' !== typeof c[w + 1]
              ? y >= S && y < T - (T - S) / 2
                ? (o = w)
                : y >= S && y < T && (o = w + 1)
              : y >= S && (o = w);
          }
        if (a.initialized && o !== p) {
          if (!a.allowSlideNext && b < a.translate && b < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (p || 0) !== o)
            return !1;
        }
        if (
          ((g = o > p ? 'next' : o < p ? 'prev' : 'reset'),
          (f && -b === a.translate) || (!f && b === a.translate))
        )
          return (
            a.updateActiveIndex(o),
            l.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            'slide' !== l.effect && a.setTranslate(b),
            'reset' !== g && (a.transitionStart(r, g), a.transitionEnd(r, g)),
            !1
          );
        if (l.cssMode) {
          var E,
            C = a.isHorizontal(),
            O = -b;
          if ((f && (O = v.scrollWidth - v.offsetWidth - O), 0 === t))
            v[C ? 'scrollLeft' : 'scrollTop'] = O;
          else if (v.scrollTo)
            v.scrollTo(((E = {}), (E[C ? 'left' : 'top'] = O), (E.behavior = 'smooth'), E));
          else v[C ? 'scrollLeft' : 'scrollTop'] = O;
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(b),
              a.updateActiveIndex(o),
              a.updateSlidesClasses(),
              a.emit('beforeTransitionStart', t, i),
              a.transitionStart(r, g),
              a.transitionEnd(r, g))
            : (a.setTransition(t),
              a.setTranslate(b),
              a.updateActiveIndex(o),
              a.updateSlidesClasses(),
              a.emit('beforeTransitionStart', t, i),
              a.transitionStart(r, g),
              a.animating ||
                ((a.animating = !0),
                a.onSlideToWrapperTransitionEnd ||
                  (a.onSlideToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        'transitionend',
                        a.onSlideToWrapperTransitionEnd,
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        'webkitTransitionEnd',
                        a.onSlideToWrapperTransitionEnd,
                      ),
                      (a.onSlideToWrapperTransitionEnd = null),
                      delete a.onSlideToWrapperTransitionEnd,
                      a.transitionEnd(r, g));
                  }),
                a.$wrapperEl[0].addEventListener('transitionend', a.onSlideToWrapperTransitionEnd),
                a.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  a.onSlideToWrapperTransitionEnd,
                ))),
          !0
        );
      }
      function V(e, t, r, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0);
        var n = this,
          s = e;
        return n.params.loop && (s += n.loopedSlides), n.slideTo(s, t, r, i);
      }
      function $(e, t, r) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          n = i.params,
          s = i.animating,
          a = i.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
        if (n.loop) {
          if (s && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return i.slideTo(i.activeIndex + a, e, t, r);
      }
      function F(e, t, r) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          n = i.params,
          s = i.animating,
          a = i.snapGrid,
          o = i.slidesGrid,
          l = i.rtlTranslate;
        if (n.loop) {
          if (s && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        var d = l ? i.translate : -i.translate;
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        var u,
          p = c(d),
          f = a.map(function (e) {
            return c(e);
          }),
          v = (a[f.indexOf(p)], a[f.indexOf(p) - 1]);
        return (
          'undefined' === typeof v &&
            n.cssMode &&
            a.forEach(function (e) {
              !v && p >= e && (v = e);
            }),
          'undefined' !== typeof v && ((u = o.indexOf(v)), u < 0 && (u = i.activeIndex - 1)),
          i.slideTo(u, e, t, r)
        );
      }
      function q(e, t, r) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this;
        return i.slideTo(i.activeIndex, e, t, r);
      }
      function X(e, t, r, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        var n = this,
          s = n.activeIndex,
          a = Math.min(n.params.slidesPerGroupSkip, s),
          o = a + Math.floor((s - a) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          var d = n.snapGrid[o],
            c = n.snapGrid[o + 1];
          l - d > (c - d) * i && (s += n.params.slidesPerGroup);
        } else {
          var u = n.snapGrid[o - 1],
            p = n.snapGrid[o];
          l - u <= (p - u) * i && (s -= n.params.slidesPerGroup);
        }
        return (
          (s = Math.max(s, 0)), (s = Math.min(s, n.slidesGrid.length - 1)), n.slideTo(s, e, t, r)
        );
      }
      function Y() {
        var e,
          t = this,
          r = t.params,
          i = t.$wrapperEl,
          n = 'auto' === r.slidesPerView ? t.slidesPerViewDynamic() : r.slidesPerView,
          s = t.clickedIndex;
        if (r.loop) {
          if (t.animating) return;
          (e = parseInt(Object(a['a'])(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
            r.centeredSlides
              ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2
                ? (t.loopFix(),
                  (s = i
                    .children(
                      '.' +
                        r.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        r.slideDuplicateClass +
                        ')',
                    )
                    .eq(0)
                    .index()),
                  Object(o['e'])(function () {
                    t.slideTo(s);
                  }))
                : t.slideTo(s)
              : s > t.slides.length - n
              ? (t.loopFix(),
                (s = i
                  .children(
                    '.' +
                      r.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      r.slideDuplicateClass +
                      ')',
                  )
                  .eq(0)
                  .index()),
                Object(o['e'])(function () {
                  t.slideTo(s);
                }))
              : t.slideTo(s);
        } else t.slideTo(s);
      }
      var U = {
        slideTo: W,
        slideToLoop: V,
        slideNext: $,
        slidePrev: F,
        slideReset: q,
        slideToClosest: X,
        slideToClickedSlide: Y,
      };
      function J() {
        var e = this,
          t = Object(l['a'])(),
          r = e.params,
          i = e.$wrapperEl;
        i.children('.' + r.slideClass + '.' + r.slideDuplicateClass).remove();
        var n = i.children('.' + r.slideClass);
        if (r.loopFillGroupWithBlank) {
          var s = r.slidesPerGroup - (n.length % r.slidesPerGroup);
          if (s !== r.slidesPerGroup) {
            for (var o = 0; o < s; o += 1) {
              var d = Object(a['a'])(t.createElement('div')).addClass(
                r.slideClass + ' ' + r.slideBlankClass,
              );
              i.append(d);
            }
            n = i.children('.' + r.slideClass);
          }
        }
        'auto' !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = n.length),
          (e.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10))),
          (e.loopedSlides += r.loopAdditionalSlides),
          e.loopedSlides > n.length && (e.loopedSlides = n.length);
        var c = [],
          u = [];
        n.each(function (t, r) {
          var i = Object(a['a'])(t);
          r < e.loopedSlides && u.push(t),
            r < n.length && r >= n.length - e.loopedSlides && c.push(t),
            i.attr('data-swiper-slide-index', r);
        });
        for (var p = 0; p < u.length; p += 1)
          i.append(Object(a['a'])(u[p].cloneNode(!0)).addClass(r.slideDuplicateClass));
        for (var f = c.length - 1; f >= 0; f -= 1)
          i.prepend(Object(a['a'])(c[f].cloneNode(!0)).addClass(r.slideDuplicateClass));
      }
      function K() {
        var e = this;
        e.emit('beforeLoopFix');
        var t,
          r = e.activeIndex,
          i = e.slides,
          n = e.loopedSlides,
          s = e.allowSlidePrev,
          a = e.allowSlideNext,
          o = e.snapGrid,
          l = e.rtlTranslate;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        var d = -o[r],
          c = d - e.getTranslate();
        if (r < n) {
          (t = i.length - 3 * n + r), (t += n);
          var u = e.slideTo(t, 0, !1, !0);
          u && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c);
        } else if (r >= i.length - n) {
          (t = -i.length + r + n), (t += n);
          var p = e.slideTo(t, 0, !1, !0);
          p && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = a), e.emit('loopFix');
      }
      function Z() {
        var e = this,
          t = e.$wrapperEl,
          r = e.params,
          i = e.slides;
        t
          .children(
            '.' +
              r.slideClass +
              '.' +
              r.slideDuplicateClass +
              ',.' +
              r.slideClass +
              '.' +
              r.slideBlankClass,
          )
          .remove(),
          i.removeAttr('data-swiper-slide-index');
      }
      var Q = { loopCreate: J, loopFix: K, loopDestroy: Z };
      function ee(e) {
        var t = this;
        if (
          !(
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
        ) {
          var r = t.el;
          (r.style.cursor = 'move'),
            (r.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
            (r.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
            (r.style.cursor = e ? 'grabbing' : 'grab');
        }
      }
      function te() {
        var e = this;
        e.support.touch ||
          (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          (e.el.style.cursor = '');
      }
      var re = { setGrabCursor: ee, unsetGrabCursor: te };
      function ie(e) {
        var t = this,
          r = t.$wrapperEl,
          i = t.params;
        if ((i.loop && t.loopDestroy(), 'object' === typeof e && 'length' in e))
          for (var n = 0; n < e.length; n += 1) e[n] && r.append(e[n]);
        else r.append(e);
        i.loop && t.loopCreate(), (i.observer && t.support.observer) || t.update();
      }
      function ne(e) {
        var t = this,
          r = t.params,
          i = t.$wrapperEl,
          n = t.activeIndex;
        r.loop && t.loopDestroy();
        var s = n + 1;
        if ('object' === typeof e && 'length' in e) {
          for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
          s = n + e.length;
        } else i.prepend(e);
        r.loop && t.loopCreate(),
          (r.observer && t.support.observer) || t.update(),
          t.slideTo(s, 0, !1);
      }
      function se(e, t) {
        var r = this,
          i = r.$wrapperEl,
          n = r.params,
          s = r.activeIndex,
          a = s;
        n.loop &&
          ((a -= r.loopedSlides), r.loopDestroy(), (r.slides = i.children('.' + n.slideClass)));
        var o = r.slides.length;
        if (e <= 0) r.prependSlide(t);
        else if (e >= o) r.appendSlide(t);
        else {
          for (var l = a > e ? a + 1 : a, d = [], c = o - 1; c >= e; c -= 1) {
            var u = r.slides.eq(c);
            u.remove(), d.unshift(u);
          }
          if ('object' === typeof t && 'length' in t) {
            for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
            l = a > e ? a + t.length : a;
          } else i.append(t);
          for (var f = 0; f < d.length; f += 1) i.append(d[f]);
          n.loop && r.loopCreate(),
            (n.observer && r.support.observer) || r.update(),
            n.loop ? r.slideTo(l + r.loopedSlides, 0, !1) : r.slideTo(l, 0, !1);
        }
      }
      function ae(e) {
        var t = this,
          r = t.params,
          i = t.$wrapperEl,
          n = t.activeIndex,
          s = n;
        r.loop &&
          ((s -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children('.' + r.slideClass)));
        var a,
          o = s;
        if ('object' === typeof e && 'length' in e) {
          for (var l = 0; l < e.length; l += 1)
            (a = e[l]), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
          o = Math.max(o, 0);
        } else
          (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
        r.loop && t.loopCreate(),
          (r.observer && t.support.observer) || t.update(),
          r.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
      }
      function oe() {
        for (var e = this, t = [], r = 0; r < e.slides.length; r += 1) t.push(r);
        e.removeSlide(t);
      }
      var le = {
        appendSlide: ie,
        prependSlide: ne,
        addSlide: se,
        removeSlide: ae,
        removeAllSlides: oe,
      };
      function de(e) {
        var t = this,
          r = Object(l['a'])(),
          i = Object(l['b'])(),
          n = t.touchEventsData,
          s = t.params,
          d = t.touches;
        if (!t.animating || !s.preventInteractionOnTransition) {
          var c = e;
          c.originalEvent && (c = c.originalEvent);
          var u = Object(a['a'])(c.target);
          if (
            ('wrapper' !== s.touchEventsTarget || u.closest(t.wrapperEl).length) &&
            ((n.isTouchEvent = 'touchstart' === c.type),
            (n.isTouchEvent || !('which' in c) || 3 !== c.which) &&
              !(!n.isTouchEvent && 'button' in c && c.button > 0) &&
              (!n.isTouched || !n.isMoved))
          ) {
            var p = !!s.noSwipingClass && '' !== s.noSwipingClass;
            if (
              (p &&
                c.target &&
                c.target.shadowRoot &&
                e.path &&
                e.path[0] &&
                (u = Object(a['a'])(e.path[0])),
              s.noSwiping &&
                u.closest(s.noSwipingSelector ? s.noSwipingSelector : '.' + s.noSwipingClass)[0])
            )
              t.allowClick = !0;
            else if (!s.swipeHandler || u.closest(s.swipeHandler)[0]) {
              (d.currentX = 'touchstart' === c.type ? c.targetTouches[0].pageX : c.pageX),
                (d.currentY = 'touchstart' === c.type ? c.targetTouches[0].pageY : c.pageY);
              var f = d.currentX,
                v = d.currentY,
                h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
              if (h && (f <= m || f >= i.innerWidth - m)) {
                if ('prevent' !== h) return;
                e.preventDefault();
              }
              if (
                (Object(o['c'])(n, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (d.startX = f),
                (d.startY = v),
                (n.touchStartTime = Object(o['f'])()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                s.threshold > 0 && (n.allowThresholdMove = !1),
                'touchstart' !== c.type)
              ) {
                var g = !0;
                u.is(n.formElements) && (g = !1),
                  r.activeElement &&
                    Object(a['a'])(r.activeElement).is(n.formElements) &&
                    r.activeElement !== u[0] &&
                    r.activeElement.blur();
                var b = g && t.allowTouchMove && s.touchStartPreventDefault;
                (!s.touchStartForcePreventDefault && !b) ||
                  u[0].isContentEditable ||
                  c.preventDefault();
              }
              t.emit('touchStart', c);
            }
          }
        }
      }
      function ce(e) {
        var t = Object(l['a'])(),
          r = this,
          i = r.touchEventsData,
          n = r.params,
          s = r.touches,
          d = r.rtlTranslate,
          c = e;
        if ((c.originalEvent && (c = c.originalEvent), i.isTouched)) {
          if (!i.isTouchEvent || 'touchmove' === c.type) {
            var u =
                'touchmove' === c.type &&
                c.targetTouches &&
                (c.targetTouches[0] || c.changedTouches[0]),
              p = 'touchmove' === c.type ? u.pageX : c.pageX,
              f = 'touchmove' === c.type ? u.pageY : c.pageY;
            if (c.preventedByNestedSwiper) return (s.startX = p), void (s.startY = f);
            if (!r.allowTouchMove)
              return (
                (r.allowClick = !1),
                void (
                  i.isTouched &&
                  (Object(o['c'])(s, { startX: p, startY: f, currentX: p, currentY: f }),
                  (i.touchStartTime = Object(o['f'])()))
                )
              );
            if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
              if (r.isVertical()) {
                if (
                  (f < s.startY && r.translate <= r.maxTranslate()) ||
                  (f > s.startY && r.translate >= r.minTranslate())
                )
                  return (i.isTouched = !1), void (i.isMoved = !1);
              } else if (
                (p < s.startX && r.translate <= r.maxTranslate()) ||
                (p > s.startX && r.translate >= r.minTranslate())
              )
                return;
            if (
              i.isTouchEvent &&
              t.activeElement &&
              c.target === t.activeElement &&
              Object(a['a'])(c.target).is(i.formElements)
            )
              return (i.isMoved = !0), void (r.allowClick = !1);
            if (
              (i.allowTouchCallbacks && r.emit('touchMove', c),
              !(c.targetTouches && c.targetTouches.length > 1))
            ) {
              (s.currentX = p), (s.currentY = f);
              var v = s.currentX - s.startX,
                h = s.currentY - s.startY;
              if (
                !(
                  r.params.threshold &&
                  Math.sqrt(Math.pow(v, 2) + Math.pow(h, 2)) < r.params.threshold
                )
              ) {
                var m;
                if ('undefined' === typeof i.isScrolling)
                  (r.isHorizontal() && s.currentY === s.startY) ||
                  (r.isVertical() && s.currentX === s.startX)
                    ? (i.isScrolling = !1)
                    : v * v + h * h >= 25 &&
                      ((m = (180 * Math.atan2(Math.abs(h), Math.abs(v))) / Math.PI),
                      (i.isScrolling = r.isHorizontal()
                        ? m > n.touchAngle
                        : 90 - m > n.touchAngle));
                if (
                  (i.isScrolling && r.emit('touchMoveOpposite', c),
                  'undefined' === typeof i.startMoving &&
                    ((s.currentX === s.startX && s.currentY === s.startY) || (i.startMoving = !0)),
                  i.isScrolling)
                )
                  i.isTouched = !1;
                else if (i.startMoving) {
                  (r.allowClick = !1),
                    !n.cssMode && c.cancelable && c.preventDefault(),
                    n.touchMoveStopPropagation && !n.nested && c.stopPropagation(),
                    i.isMoved ||
                      (n.loop && r.loopFix(),
                      (i.startTranslate = r.getTranslate()),
                      r.setTransition(0),
                      r.animating && r.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                      (i.allowMomentumBounce = !1),
                      !n.grabCursor ||
                        (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) ||
                        r.setGrabCursor(!0),
                      r.emit('sliderFirstMove', c)),
                    r.emit('sliderMove', c),
                    (i.isMoved = !0);
                  var g = r.isHorizontal() ? v : h;
                  (s.diff = g),
                    (g *= n.touchRatio),
                    d && (g = -g),
                    (r.swipeDirection = g > 0 ? 'prev' : 'next'),
                    (i.currentTranslate = g + i.startTranslate);
                  var b = !0,
                    w = n.resistanceRatio;
                  if (
                    (n.touchReleaseOnEdges && (w = 0),
                    g > 0 && i.currentTranslate > r.minTranslate()
                      ? ((b = !1),
                        n.resistance &&
                          (i.currentTranslate =
                            r.minTranslate() -
                            1 +
                            Math.pow(-r.minTranslate() + i.startTranslate + g, w)))
                      : g < 0 &&
                        i.currentTranslate < r.maxTranslate() &&
                        ((b = !1),
                        n.resistance &&
                          (i.currentTranslate =
                            r.maxTranslate() +
                            1 -
                            Math.pow(r.maxTranslate() - i.startTranslate - g, w))),
                    b && (c.preventedByNestedSwiper = !0),
                    !r.allowSlideNext &&
                      'next' === r.swipeDirection &&
                      i.currentTranslate < i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    !r.allowSlidePrev &&
                      'prev' === r.swipeDirection &&
                      i.currentTranslate > i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    r.allowSlidePrev || r.allowSlideNext || (i.currentTranslate = i.startTranslate),
                    n.threshold > 0)
                  ) {
                    if (!(Math.abs(g) > n.threshold || i.allowThresholdMove))
                      return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove)
                      return (
                        (i.allowThresholdMove = !0),
                        (s.startX = s.currentX),
                        (s.startY = s.currentY),
                        (i.currentTranslate = i.startTranslate),
                        void (s.diff = r.isHorizontal()
                          ? s.currentX - s.startX
                          : s.currentY - s.startY)
                      );
                  }
                  n.followFinger &&
                    !n.cssMode &&
                    ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) &&
                      (r.updateActiveIndex(), r.updateSlidesClasses()),
                    n.freeMode &&
                      (0 === i.velocities.length &&
                        i.velocities.push({
                          position: s[r.isHorizontal() ? 'startX' : 'startY'],
                          time: i.touchStartTime,
                        }),
                      i.velocities.push({
                        position: s[r.isHorizontal() ? 'currentX' : 'currentY'],
                        time: Object(o['f'])(),
                      })),
                    r.updateProgress(i.currentTranslate),
                    r.setTranslate(i.currentTranslate));
                }
              }
            }
          }
        } else i.startMoving && i.isScrolling && r.emit('touchMoveOpposite', c);
      }
      function ue(e) {
        var t = this,
          r = t.touchEventsData,
          i = t.params,
          n = t.touches,
          s = t.rtlTranslate,
          a = t.$wrapperEl,
          l = t.slidesGrid,
          d = t.snapGrid,
          c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          r.allowTouchCallbacks && t.emit('touchEnd', c),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        )
          return (
            r.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (r.isMoved = !1),
            void (r.startMoving = !1)
          );
        i.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var u,
          p = Object(o['f'])(),
          f = p - r.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(c),
            t.emit('tap click', c),
            f < 300 && p - r.lastClickTime < 300 && t.emit('doubleTap doubleClick', c)),
          (r.lastClickTime = Object(o['f'])()),
          Object(o['e'])(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            r.currentTranslate === r.startTranslate)
        )
          return (r.isTouched = !1), (r.isMoved = !1), void (r.startMoving = !1);
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (u = i.followFinger ? (s ? t.translate : -t.translate) : -r.currentTranslate),
          !i.cssMode)
        )
          if (i.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate())
              return void (t.slides.length < d.length
                ? t.slideTo(d.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (r.velocities.length > 1) {
                var v = r.velocities.pop(),
                  h = r.velocities.pop(),
                  m = v.position - h.position,
                  g = v.time - h.time;
                (t.velocity = m / g),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                  (g > 150 || Object(o['f'])() - v.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= i.freeModeMomentumVelocityRatio), (r.velocities.length = 0);
              var b = 1e3 * i.freeModeMomentumRatio,
                w = t.velocity * b,
                y = t.translate + w;
              s && (y = -y);
              var S,
                T,
                E = !1,
                C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (y < t.maxTranslate())
                i.freeModeMomentumBounce
                  ? (y + t.maxTranslate() < -C && (y = t.maxTranslate() - C),
                    (S = t.maxTranslate()),
                    (E = !0),
                    (r.allowMomentumBounce = !0))
                  : (y = t.maxTranslate()),
                  i.loop && i.centeredSlides && (T = !0);
              else if (y > t.minTranslate())
                i.freeModeMomentumBounce
                  ? (y - t.minTranslate() > C && (y = t.minTranslate() + C),
                    (S = t.minTranslate()),
                    (E = !0),
                    (r.allowMomentumBounce = !0))
                  : (y = t.minTranslate()),
                  i.loop && i.centeredSlides && (T = !0);
              else if (i.freeModeSticky) {
                for (var O, x = 0; x < d.length; x += 1)
                  if (d[x] > -y) {
                    O = x;
                    break;
                  }
                (y =
                  Math.abs(d[O] - y) < Math.abs(d[O - 1] - y) || 'next' === t.swipeDirection
                    ? d[O]
                    : d[O - 1]),
                  (y = -y);
              }
              if (
                (T &&
                  t.once('transitionEnd', function () {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((b = s
                    ? Math.abs((-y - t.translate) / t.velocity)
                    : Math.abs((y - t.translate) / t.velocity)),
                  i.freeModeSticky)
                ) {
                  var P = Math.abs((s ? -y : y) - t.translate),
                    M = t.slidesSizesGrid[t.activeIndex];
                  b = P < M ? i.speed : P < 2 * M ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && E
                ? (t.updateProgress(S),
                  t.setTransition(b),
                  t.setTranslate(y),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  a.transitionEnd(function () {
                    t &&
                      !t.destroyed &&
                      r.allowMomentumBounce &&
                      (t.emit('momentumBounce'),
                      t.setTransition(i.speed),
                      setTimeout(function () {
                        t.setTranslate(S),
                          a.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(y),
                  t.setTransition(b),
                  t.setTranslate(y),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    a.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : (t.emit('_freeModeNoMomentumRelease'), t.updateProgress(y)),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else {
              if (i.freeModeSticky) return void t.slideToClosest();
              i.freeMode && t.emit('_freeModeNoMomentumRelease');
            }
            (!i.freeModeMomentum || f >= i.longSwipesMs) &&
              (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          } else {
            for (
              var k = 0, j = t.slidesSizesGrid[0], L = 0;
              L < l.length;
              L += L < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
            ) {
              var z = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
              'undefined' !== typeof l[L + z]
                ? u >= l[L] && u < l[L + z] && ((k = L), (j = l[L + z] - l[L]))
                : u >= l[L] && ((k = L), (j = l[l.length - 1] - l[l.length - 2]));
            }
            var _ = (u - l[k]) / j,
              D = k < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (f > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              'next' === t.swipeDirection &&
                (_ >= i.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)),
                'prev' === t.swipeDirection &&
                  (_ > 1 - i.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              var A =
                t.navigation &&
                (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl);
              A
                ? c.target === t.navigation.nextEl
                  ? t.slideTo(k + D)
                  : t.slideTo(k)
                : ('next' === t.swipeDirection && t.slideTo(k + D),
                  'prev' === t.swipeDirection && t.slideTo(k));
            }
          }
      }
      function pe() {
        var e = this,
          t = e.params,
          r = e.el;
        if (!r || 0 !== r.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext,
            n = e.allowSlidePrev,
            s = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            (e.allowSlidePrev = n),
            (e.allowSlideNext = i),
            e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
        }
      }
      function fe(e) {
        var t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function ve() {
        var e,
          t = this,
          r = t.wrapperEl,
          i = t.rtlTranslate;
        (t.previousTranslate = t.translate),
          t.isHorizontal()
            ? (t.translate = i ? r.scrollWidth - r.offsetWidth - r.scrollLeft : -r.scrollLeft)
            : (t.translate = -r.scrollTop),
          -0 === t.translate && (t.translate = 0),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
        var n = t.maxTranslate() - t.minTranslate();
        (e = 0 === n ? 0 : (t.translate - t.minTranslate()) / n),
          e !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
          t.emit('setTranslate', t.translate, !1);
      }
      var he = !1;
      function me() {}
      function ge() {
        var e = this,
          t = Object(l['a'])(),
          r = e.params,
          i = e.touchEvents,
          n = e.el,
          s = e.wrapperEl,
          a = e.device,
          o = e.support;
        (e.onTouchStart = de.bind(e)),
          (e.onTouchMove = ce.bind(e)),
          (e.onTouchEnd = ue.bind(e)),
          r.cssMode && (e.onScroll = ve.bind(e)),
          (e.onClick = fe.bind(e));
        var d = !!r.nested;
        if (!o.touch && o.pointerEvents)
          n.addEventListener(i.start, e.onTouchStart, !1),
            t.addEventListener(i.move, e.onTouchMove, d),
            t.addEventListener(i.end, e.onTouchEnd, !1);
        else {
          if (o.touch) {
            var c = !('touchstart' !== i.start || !o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
            n.addEventListener(i.start, e.onTouchStart, c),
              n.addEventListener(
                i.move,
                e.onTouchMove,
                o.passiveListener ? { passive: !1, capture: d } : d,
              ),
              n.addEventListener(i.end, e.onTouchEnd, c),
              i.cancel && n.addEventListener(i.cancel, e.onTouchEnd, c),
              he || (t.addEventListener('touchstart', me), (he = !0));
          }
          ((r.simulateTouch && !a.ios && !a.android) || (r.simulateTouch && !o.touch && a.ios)) &&
            (n.addEventListener('mousedown', e.onTouchStart, !1),
            t.addEventListener('mousemove', e.onTouchMove, d),
            t.addEventListener('mouseup', e.onTouchEnd, !1));
        }
        (r.preventClicks || r.preventClicksPropagation) &&
          n.addEventListener('click', e.onClick, !0),
          r.cssMode && s.addEventListener('scroll', e.onScroll),
          r.updateOnWindowResize
            ? e.on(
                a.ios || a.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                pe,
                !0,
              )
            : e.on('observerUpdate', pe, !0);
      }
      function be() {
        var e = this,
          t = Object(l['a'])(),
          r = e.params,
          i = e.touchEvents,
          n = e.el,
          s = e.wrapperEl,
          a = e.device,
          o = e.support,
          d = !!r.nested;
        if (!o.touch && o.pointerEvents)
          n.removeEventListener(i.start, e.onTouchStart, !1),
            t.removeEventListener(i.move, e.onTouchMove, d),
            t.removeEventListener(i.end, e.onTouchEnd, !1);
        else {
          if (o.touch) {
            var c = !('onTouchStart' !== i.start || !o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
            n.removeEventListener(i.start, e.onTouchStart, c),
              n.removeEventListener(i.move, e.onTouchMove, d),
              n.removeEventListener(i.end, e.onTouchEnd, c),
              i.cancel && n.removeEventListener(i.cancel, e.onTouchEnd, c);
          }
          ((r.simulateTouch && !a.ios && !a.android) || (r.simulateTouch && !o.touch && a.ios)) &&
            (n.removeEventListener('mousedown', e.onTouchStart, !1),
            t.removeEventListener('mousemove', e.onTouchMove, d),
            t.removeEventListener('mouseup', e.onTouchEnd, !1));
        }
        (r.preventClicks || r.preventClicksPropagation) &&
          n.removeEventListener('click', e.onClick, !0),
          r.cssMode && s.removeEventListener('scroll', e.onScroll),
          e.off(
            a.ios || a.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            pe,
          );
      }
      var we = { attachEvents: ge, detachEvents: be };
      function ye() {
        var e = this,
          t = e.activeIndex,
          r = e.initialized,
          i = e.loopedSlides,
          n = void 0 === i ? 0 : i,
          s = e.params,
          a = e.$el,
          l = s.breakpoints;
        if (l && (!l || 0 !== Object.keys(l).length)) {
          var d = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
          if (d && e.currentBreakpoint !== d) {
            var c = d in l ? l[d] : void 0;
            c &&
              [
                'slidesPerView',
                'spaceBetween',
                'slidesPerGroup',
                'slidesPerGroupSkip',
                'slidesPerColumn',
              ].forEach(function (e) {
                var t = c[e];
                'undefined' !== typeof t &&
                  (c[e] =
                    'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                      ? 'slidesPerView' === e
                        ? parseFloat(t)
                        : parseInt(t, 10)
                      : 'auto');
              });
            var u = c || e.originalParams,
              p = s.slidesPerColumn > 1,
              f = u.slidesPerColumn > 1;
            p && !f
              ? (a.removeClass(
                  s.containerModifierClass +
                    'multirow ' +
                    s.containerModifierClass +
                    'multirow-column',
                ),
                e.emitContainerClasses())
              : !p &&
                f &&
                (a.addClass(s.containerModifierClass + 'multirow'),
                'column' === u.slidesPerColumnFill &&
                  a.addClass(s.containerModifierClass + 'multirow-column'),
                e.emitContainerClasses());
            var v = u.direction && u.direction !== s.direction,
              h = s.loop && (u.slidesPerView !== s.slidesPerView || v);
            v && r && e.changeDirection(),
              Object(o['c'])(e.params, u),
              Object(o['c'])(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
              (e.currentBreakpoint = d),
              e.emit('_beforeBreakpoint', u),
              h &&
                r &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - n + e.loopedSlides, 0, !1)),
              e.emit('breakpoint', u);
          }
        }
      }
      function Se(e, t, r) {
        if ((void 0 === t && (t = 'window'), e && ('container' !== t || r))) {
          var i = !1,
            n = Object(l['b'])(),
            s = 'window' === t ? n.innerWidth : r.clientWidth,
            a = 'window' === t ? n.innerHeight : r.clientHeight,
            o = Object.keys(e).map(function (e) {
              if ('string' === typeof e && 0 === e.indexOf('@')) {
                var t = parseFloat(e.substr(1)),
                  r = a * t;
                return { value: r, point: e };
              }
              return { value: e, point: e };
            });
          o.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });
          for (var d = 0; d < o.length; d += 1) {
            var c = o[d],
              u = c.point,
              p = c.value;
            p <= s && (i = u);
          }
          return i || 'max';
        }
      }
      var Te = { setBreakpoint: ye, getBreakpoint: Se };
      function Ee(e, t) {
        var r = [];
        return (
          e.forEach(function (e) {
            'object' === typeof e
              ? Object.keys(e).forEach(function (i) {
                  e[i] && r.push(t + i);
                })
              : 'string' === typeof e && r.push(t + e);
          }),
          r
        );
      }
      function Ce() {
        var e = this,
          t = e.classNames,
          r = e.params,
          i = e.rtl,
          n = e.$el,
          s = e.device,
          a = e.support,
          o = Ee(
            [
              'initialized',
              r.direction,
              { 'pointer-events': a.pointerEvents && !a.touch },
              { 'free-mode': r.freeMode },
              { autoheight: r.autoHeight },
              { rtl: i },
              { multirow: r.slidesPerColumn > 1 },
              { 'multirow-column': r.slidesPerColumn > 1 && 'column' === r.slidesPerColumnFill },
              { android: s.android },
              { ios: s.ios },
              { 'css-mode': r.cssMode },
            ],
            r.containerModifierClass,
          );
        t.push.apply(t, o), n.addClass([].concat(t).join(' ')), e.emitContainerClasses();
      }
      function Oe() {
        var e = this,
          t = e.$el,
          r = e.classNames;
        t.removeClass(r.join(' ')), e.emitContainerClasses();
      }
      var xe = { addClasses: Ce, removeClasses: Oe };
      function Pe(e, t, r, i, n, s) {
        var o,
          d = Object(l['b'])();
        function c() {
          s && s();
        }
        var u = Object(a['a'])(e).parent('picture')[0];
        u || (e.complete && n)
          ? c()
          : t
          ? ((o = new d.Image()),
            (o.onload = c),
            (o.onerror = c),
            i && (o.sizes = i),
            r && (o.srcset = r),
            t && (o.src = t))
          : c();
      }
      function Me() {
        var e = this;
        function t() {
          'undefined' !== typeof e &&
            null !== e &&
            e &&
            !e.destroyed &&
            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
            e.imagesLoaded === e.imagesToLoad.length &&
              (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
        }
        e.imagesToLoad = e.$el.find('img');
        for (var r = 0; r < e.imagesToLoad.length; r += 1) {
          var i = e.imagesToLoad[r];
          e.loadImage(
            i,
            i.currentSrc || i.getAttribute('src'),
            i.srcset || i.getAttribute('srcset'),
            i.sizes || i.getAttribute('sizes'),
            !0,
            t,
          );
        }
      }
      var ke = { loadImage: Pe, preloadImages: Me };
      function je() {
        var e = this,
          t = e.params,
          r = e.isLocked,
          i =
            e.slides.length > 0 &&
            t.slidesOffsetBefore +
              t.spaceBetween * (e.slides.length - 1) +
              e.slides[0].offsetWidth * e.slides.length;
        t.slidesOffsetBefore && t.slidesOffsetAfter && i
          ? (e.isLocked = i <= e.size)
          : (e.isLocked = 1 === e.snapGrid.length),
          (e.allowSlideNext = !e.isLocked),
          (e.allowSlidePrev = !e.isLocked),
          r !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
          r && r !== e.isLocked && ((e.isEnd = !1), e.navigation && e.navigation.update());
      }
      var Le = { checkOverflow: je },
        ze = {
          init: !0,
          direction: 'horizontal',
          touchEventsTarget: 'container',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !1,
          nested: !1,
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          breakpointsBase: 'window',
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'column',
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: 'swiper-container-',
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function _e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function De(e, t, r) {
        return t && _e(e.prototype, t), r && _e(e, r), e;
      }
      var Ae = {
          modular: y,
          eventsEmitter: S,
          update: L,
          translate: I,
          transition: H,
          slide: U,
          loop: Q,
          grabCursor: re,
          manipulation: le,
          events: we,
          breakpoints: Te,
          checkOverflow: Le,
          classes: xe,
          images: ke,
        },
        Ne = {},
        Ie = (function () {
          function e() {
            for (var t, r, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
              n[s] = arguments[s];
            if (
              (1 === n.length &&
              n[0].constructor &&
              'Object' === Object.prototype.toString.call(n[0]).slice(8, -1)
                ? (r = n[0])
                : ((t = n[0]), (r = n[1])),
              r || (r = {}),
              (r = Object(o['c'])({}, r)),
              t && !r.el && (r.el = t),
              r.el && Object(a['a'])(r.el).length > 1)
            ) {
              var l = [];
              return (
                Object(a['a'])(r.el).each(function (t) {
                  var i = Object(o['c'])({}, r, { el: t });
                  l.push(new e(i));
                }),
                l
              );
            }
            var d = this;
            (d.__swiper__ = !0),
              (d.support = c()),
              (d.device = p({ userAgent: r.userAgent })),
              (d.browser = v()),
              (d.eventsListeners = {}),
              (d.eventsAnyListeners = []),
              'undefined' === typeof d.modules && (d.modules = {}),
              Object.keys(d.modules).forEach(function (e) {
                var t = d.modules[e];
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                    n = t.params[i];
                  if ('object' !== typeof n || null === n) return;
                  if (!(i in r) || !('enabled' in n)) return;
                  !0 === r[i] && (r[i] = { enabled: !0 }),
                    'object' !== typeof r[i] || 'enabled' in r[i] || (r[i].enabled = !0),
                    r[i] || (r[i] = { enabled: !1 });
                }
              });
            var u = Object(o['c'])({}, ze);
            return (
              d.useParams(u),
              (d.params = Object(o['c'])({}, u, Ne, r)),
              (d.originalParams = Object(o['c'])({}, d.params)),
              (d.passedParams = Object(o['c'])({}, r)),
              d.params &&
                d.params.on &&
                Object.keys(d.params.on).forEach(function (e) {
                  d.on(e, d.params.on[e]);
                }),
              d.params && d.params.onAny && d.onAny(d.params.onAny),
              (d.$ = a['a']),
              Object(o['c'])(d, {
                el: t,
                classNames: [],
                slides: Object(a['a'])(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return 'horizontal' === d.params.direction;
                },
                isVertical: function () {
                  return 'vertical' === d.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: d.params.allowSlideNext,
                allowSlidePrev: d.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
                    t = ['mousedown', 'mousemove', 'mouseup'];
                  return (
                    d.support.pointerEvents && (t = ['pointerdown', 'pointermove', 'pointerup']),
                    (d.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                    (d.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                    d.support.touch || !d.params.simulateTouch
                      ? d.touchEventsTouch
                      : d.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements: 'input, select, option, textarea, button, video, label',
                  lastClickTime: Object(o['f'])(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: d.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              d.useModules(),
              d.emit('_swiper'),
              d.params.init && d.init(),
              d
            );
          }
          var t = e.prototype;
          return (
            (t.setProgress = function (e, t) {
              var r = this;
              e = Math.min(Math.max(e, 0), 1);
              var i = r.minTranslate(),
                n = r.maxTranslate(),
                s = (n - i) * e + i;
              r.translateTo(s, 'undefined' === typeof t ? 0 : t),
                r.updateActiveIndex(),
                r.updateSlidesClasses();
            }),
            (t.emitContainerClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(' ').filter(function (t) {
                  return (
                    0 === t.indexOf('swiper-container') ||
                    0 === t.indexOf(e.params.containerModifierClass)
                  );
                });
                e.emit('_containerClasses', t.join(' '));
              }
            }),
            (t.getSlideClasses = function (e) {
              var t = this;
              return e.className
                .split(' ')
                .filter(function (e) {
                  return 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass);
                })
                .join(' ');
            }),
            (t.emitSlidesClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each(function (r) {
                  var i = e.getSlideClasses(r);
                  t.push({ slideEl: r, classNames: i }), e.emit('_slideClass', r, i);
                }),
                  e.emit('_slideClasses', t);
              }
            }),
            (t.slidesPerViewDynamic = function () {
              var e = this,
                t = e.params,
                r = e.slides,
                i = e.slidesGrid,
                n = e.size,
                s = e.activeIndex,
                a = 1;
              if (t.centeredSlides) {
                for (var o, l = r[s].swiperSlideSize, d = s + 1; d < r.length; d += 1)
                  r[d] && !o && ((l += r[d].swiperSlideSize), (a += 1), l > n && (o = !0));
                for (var c = s - 1; c >= 0; c -= 1)
                  r[c] && !o && ((l += r[c].swiperSlideSize), (a += 1), l > n && (o = !0));
              } else for (var u = s + 1; u < r.length; u += 1) i[u] - i[s] < n && (a += 1);
              return a;
            }),
            (t.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var t,
                  r = e.snapGrid,
                  i = e.params;
                i.breakpoints && e.setBreakpoint(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.params.freeMode
                    ? (n(), e.params.autoHeight && e.updateAutoHeight())
                    : ((t =
                        ('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                        e.isEnd &&
                        !e.params.centeredSlides
                          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                          : e.slideTo(e.activeIndex, 0, !1, !0)),
                      t || n()),
                  i.watchOverflow && r !== e.snapGrid && e.checkOverflow(),
                  e.emit('update');
              }
              function n() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
              }
            }),
            (t.changeDirection = function (e, t) {
              void 0 === t && (t = !0);
              var r = this,
                i = r.params.direction;
              return (
                e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
                e === i ||
                  ('horizontal' !== e && 'vertical' !== e) ||
                  (r.$el
                    .removeClass('' + r.params.containerModifierClass + i)
                    .addClass('' + r.params.containerModifierClass + e),
                  r.emitContainerClasses(),
                  (r.params.direction = e),
                  r.slides.each(function (t) {
                    'vertical' === e ? (t.style.width = '') : (t.style.height = '');
                  }),
                  r.emit('changeDirection'),
                  t && r.update()),
                r
              );
            }),
            (t.mount = function (e) {
              var t = this;
              if (t.mounted) return !0;
              var r,
                i = Object(a['a'])(e || t.params.el);
              return (
                (e = i[0]),
                !!e &&
                  ((e.swiper = t),
                  e && e.shadowRoot && e.shadowRoot.querySelector
                    ? ((r = Object(a['a'])(
                        e.shadowRoot.querySelector('.' + t.params.wrapperClass),
                      )),
                      (r.children = function (e) {
                        return i.children(e);
                      }))
                    : (r = i.children('.' + t.params.wrapperClass)),
                  Object(o['c'])(t, {
                    $el: i,
                    el: e,
                    $wrapperEl: r,
                    wrapperEl: r[0],
                    mounted: !0,
                    rtl: 'rtl' === e.dir.toLowerCase() || 'rtl' === i.css('direction'),
                    rtlTranslate:
                      'horizontal' === t.params.direction &&
                      ('rtl' === e.dir.toLowerCase() || 'rtl' === i.css('direction')),
                    wrongRTL: '-webkit-box' === r.css('display'),
                  }),
                  !0)
              );
            }),
            (t.init = function (e) {
              var t = this;
              if (t.initialized) return t;
              var r = t.mount(e);
              return (
                !1 === r ||
                  (t.emit('beforeInit'),
                  t.params.breakpoints && t.setBreakpoint(),
                  t.addClasses(),
                  t.params.loop && t.loopCreate(),
                  t.updateSize(),
                  t.updateSlides(),
                  t.params.watchOverflow && t.checkOverflow(),
                  t.params.grabCursor && t.setGrabCursor(),
                  t.params.preloadImages && t.preloadImages(),
                  t.params.loop
                    ? t.slideTo(
                        t.params.initialSlide + t.loopedSlides,
                        0,
                        t.params.runCallbacksOnInit,
                      )
                    : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit),
                  t.attachEvents(),
                  (t.initialized = !0),
                  t.emit('init'),
                  t.emit('afterInit')),
                t
              );
            }),
            (t.destroy = function (e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var r = this,
                i = r.params,
                n = r.$el,
                s = r.$wrapperEl,
                a = r.slides;
              return (
                'undefined' === typeof r.params ||
                  r.destroyed ||
                  (r.emit('beforeDestroy'),
                  (r.initialized = !1),
                  r.detachEvents(),
                  i.loop && r.loopDestroy(),
                  t &&
                    (r.removeClasses(),
                    n.removeAttr('style'),
                    s.removeAttr('style'),
                    a &&
                      a.length &&
                      a
                        .removeClass(
                          [
                            i.slideVisibleClass,
                            i.slideActiveClass,
                            i.slideNextClass,
                            i.slidePrevClass,
                          ].join(' '),
                        )
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')),
                  r.emit('destroy'),
                  Object.keys(r.eventsListeners).forEach(function (e) {
                    r.off(e);
                  }),
                  !1 !== e && ((r.$el[0].swiper = null), Object(o['b'])(r)),
                  (r.destroyed = !0)),
                null
              );
            }),
            (e.extendDefaults = function (e) {
              Object(o['c'])(Ne, e);
            }),
            (e.installModule = function (t) {
              e.prototype.modules || (e.prototype.modules = {});
              var r = t.name || Object.keys(e.prototype.modules).length + '_' + Object(o['f'])();
              e.prototype.modules[r] = t;
            }),
            (e.use = function (t) {
              return Array.isArray(t)
                ? (t.forEach(function (t) {
                    return e.installModule(t);
                  }),
                  e)
                : (e.installModule(t), e);
            }),
            De(e, null, [
              {
                key: 'extendedDefaults',
                get: function () {
                  return Ne;
                },
              },
              {
                key: 'defaults',
                get: function () {
                  return ze;
                },
              },
            ]),
            e
          );
        })();
      Object.keys(Ae).forEach(function (e) {
        Object.keys(Ae[e]).forEach(function (t) {
          Ie.prototype[t] = Ae[e][t];
        });
      }),
        Ie.use([m, w]);
      t['a'] = Ie;
    },
    MjVI: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return T;
      });
      var i = r('xwgP'),
        n = r.n(i),
        s = r('HreP'),
        a = r('axFv'),
        o = [
          'init',
          '_direction',
          'touchEventsTarget',
          'initialSlide',
          '_speed',
          'cssMode',
          'updateOnWindowResize',
          'resizeObserver',
          'nested',
          '_width',
          '_height',
          'preventInteractionOnTransition',
          'userAgent',
          'url',
          '_edgeSwipeDetection',
          '_edgeSwipeThreshold',
          '_freeMode',
          '_freeModeMomentum',
          '_freeModeMomentumRatio',
          '_freeModeMomentumBounce',
          '_freeModeMomentumBounceRatio',
          '_freeModeMomentumVelocityRatio',
          '_freeModeSticky',
          '_freeModeMinimumVelocity',
          '_autoHeight',
          'setWrapperSize',
          'virtualTranslate',
          '_effect',
          'breakpoints',
          '_spaceBetween',
          '_slidesPerView',
          '_slidesPerColumn',
          '_slidesPerColumnFill',
          '_slidesPerGroup',
          '_slidesPerGroupSkip',
          '_centeredSlides',
          '_centeredSlidesBounds',
          '_slidesOffsetBefore',
          '_slidesOffsetAfter',
          'normalizeSlideIndex',
          '_centerInsufficientSlides',
          '_watchOverflow',
          'roundLengths',
          'touchRatio',
          'touchAngle',
          'simulateTouch',
          '_shortSwipes',
          '_longSwipes',
          'longSwipesRatio',
          'longSwipesMs',
          '_followFinger',
          'allowTouchMove',
          '_threshold',
          'touchMoveStopPropagation',
          'touchStartPreventDefault',
          'touchStartForcePreventDefault',
          'touchReleaseOnEdges',
          'uniqueNavElements',
          '_resistance',
          '_resistanceRatio',
          '_watchSlidesProgress',
          '_watchSlidesVisibility',
          '_grabCursor',
          'preventClicks',
          'preventClicksPropagation',
          '_slideToClickedSlide',
          '_preloadImages',
          'updateOnImagesReady',
          '_loop',
          '_loopAdditionalSlides',
          '_loopedSlides',
          '_loopFillGroupWithBlank',
          'loopPreventsSlide',
          '_allowSlidePrev',
          '_allowSlideNext',
          '_swipeHandler',
          '_noSwiping',
          'noSwipingClass',
          'noSwipingSelector',
          'passiveListeners',
          'containerModifierClass',
          'slideClass',
          'slideBlankClass',
          'slideActiveClass',
          'slideDuplicateActiveClass',
          'slideVisibleClass',
          'slideDuplicateClass',
          'slideNextClass',
          'slideDuplicateNextClass',
          'slidePrevClass',
          'slideDuplicatePrevClass',
          'wrapperClass',
          'runCallbacksOnInit',
          'observer',
          'observeParents',
          'observeSlideChildren',
          'a11y',
          'autoplay',
          '_controller',
          'coverflowEffect',
          'cubeEffect',
          'fadeEffect',
          'flipEffect',
          'hashNavigation',
          'history',
          'keyboard',
          'lazy',
          'mousewheel',
          '_navigation',
          '_pagination',
          'parallax',
          '_scrollbar',
          '_thumbs',
          'virtual',
          'zoom',
        ];
      function l(e) {
        void 0 === e && (e = {});
        var t = { on: {} },
          r = {},
          i = {};
        Object(a['a'])(t, s['a'].defaults),
          Object(a['a'])(t, s['a'].extendedDefaults),
          (t._emitClasses = !0),
          (t.init = !1);
        var n = {},
          l = o.map(function (e) {
            return e.replace(/_/, '');
          });
        return (
          Object.keys(e).forEach(function (s) {
            l.indexOf(s) >= 0
              ? Object(a['b'])(e[s])
                ? ((t[s] = {}), (i[s] = {}), Object(a['a'])(t[s], e[s]), Object(a['a'])(i[s], e[s]))
                : ((t[s] = e[s]), (i[s] = e[s]))
              : 0 === s.search(/on[A-Z]/) && 'function' === typeof e[s]
              ? (r['' + s[2].toLowerCase() + s.substr(3)] = e[s])
              : (n[s] = e[s]);
          }),
          ['navigation', 'pagination', 'scrollbar'].forEach(function (e) {
            !0 === t[e] && (t[e] = {});
          }),
          { params: t, passedParams: i, rest: n, events: r }
        );
      }
      function d(e) {
        return new s['a'](e);
      }
      function c(e, t) {
        var r = e.el,
          i = e.nextEl,
          n = e.prevEl,
          s = e.paginationEl,
          o = e.scrollbarEl,
          l = e.swiper;
        Object(a['c'])(t) &&
          i &&
          n &&
          ((l.params.navigation.nextEl = i),
          (l.originalParams.navigation.nextEl = i),
          (l.params.navigation.prevEl = n),
          (l.originalParams.navigation.prevEl = n)),
          Object(a['d'])(t) &&
            s &&
            ((l.params.pagination.el = s), (l.originalParams.pagination.el = s)),
          Object(a['e'])(t) &&
            o &&
            ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
          l.init(r);
      }
      function u(e, t) {
        var r = t.slidesPerView;
        if (t.breakpoints) {
          var i = s['a'].prototype.getBreakpoint(t.breakpoints),
            n = i in t.breakpoints ? t.breakpoints[i] : void 0;
          n && n.slidesPerView && (r = n.slidesPerView);
        }
        var a = Math.ceil(parseFloat(t.loopedSlides || r, 10));
        return (a += t.loopAdditionalSlides), a > e.length && (a = e.length), a;
      }
      function p(e, t, r) {
        var i = t.map(function (t, r) {
          return n.a.cloneElement(t, { swiper: e, 'data-swiper-slide-index': r });
        });
        function s(e, t, i) {
          return n.a.cloneElement(e, {
            key: e.key + '-duplicate-' + t + '-' + i,
            className: (e.props.className || '') + ' ' + r.slideDuplicateClass,
          });
        }
        if (r.loopFillGroupWithBlank) {
          var a = r.slidesPerGroup - (i.length % r.slidesPerGroup);
          if (a !== r.slidesPerGroup)
            for (var o = 0; o < a; o += 1) {
              var l = n.a.createElement('div', {
                className: r.slideClass + ' ' + r.slideBlankClass,
              });
              i.push(l);
            }
        }
        'auto' !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = i.length);
        var d = u(i, r),
          c = [],
          p = [];
        return (
          i.forEach(function (e, t) {
            t < d && p.push(s(e, t, 'prepend')),
              t < i.length && t >= i.length - d && c.push(s(e, t, 'append'));
          }),
          e && (e.loopedSlides = d),
          [].concat(c, i, p)
        );
      }
      function f(e, t, r, i) {
        var n = [];
        if (!t) return n;
        var s = function (e) {
            n.indexOf(e) < 0 && n.push(e);
          },
          l = i.map(function (e) {
            return e.key;
          }),
          d = r.map(function (e) {
            return e.key;
          });
        l.join('') !== d.join('') && s('children'), i.length !== r.length && s('children');
        var c = o
          .filter(function (e) {
            return '_' === e[0];
          })
          .map(function (e) {
            return e.replace(/_/, '');
          });
        return (
          c.forEach(function (r) {
            if (r in e && r in t)
              if (Object(a['b'])(e[r]) && Object(a['b'])(t[r])) {
                var i = Object.keys(e[r]),
                  n = Object.keys(t[r]);
                i.length !== n.length
                  ? s(r)
                  : (i.forEach(function (i) {
                      e[r][i] !== t[r][i] && s(r);
                    }),
                    n.forEach(function (i) {
                      e[r][i] !== t[r][i] && s(r);
                    }));
              } else e[r] !== t[r] && s(r);
          }),
          n
        );
      }
      function v(e) {
        var t = [];
        return (
          n.a.Children.toArray(e).forEach(function (e) {
            e.type && 'SwiperSlide' === e.type.displayName
              ? t.push(e)
              : e.props &&
                e.props.children &&
                v(e.props.children).forEach(function (e) {
                  return t.push(e);
                });
          }),
          t
        );
      }
      function h(e) {
        var t = [],
          r = {
            'container-start': [],
            'container-end': [],
            'wrapper-start': [],
            'wrapper-end': [],
          };
        return (
          n.a.Children.toArray(e).forEach(function (e) {
            if (e.type && 'SwiperSlide' === e.type.displayName) t.push(e);
            else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var i = v(e.props.children);
              i.length > 0
                ? i.forEach(function (e) {
                    return t.push(e);
                  })
                : r['container-end'].push(e);
            } else r['container-end'].push(e);
          }),
          { slides: t, slots: r }
        );
      }
      function m(e, t, r, i) {
        var n,
          s,
          o,
          l,
          d,
          c = i.filter(function (e) {
            return 'children' !== e && 'direction' !== e;
          }),
          u = e.params,
          p = e.pagination,
          f = e.navigation,
          v = e.scrollbar,
          h = e.virtual,
          m = e.thumbs;
        if (
          (i.includes('thumbs') &&
            r.thumbs &&
            r.thumbs.swiper &&
            u.thumbs &&
            !u.thumbs.swiper &&
            (n = !0),
          i.includes('controller') &&
            r.controller &&
            r.controller.control &&
            u.controller &&
            !u.controller.control &&
            (s = !0),
          i.includes('pagination') &&
            r.pagination &&
            r.pagination.el &&
            (u.pagination || !1 === u.pagination) &&
            p &&
            !p.el &&
            (o = !0),
          i.includes('scrollbar') &&
            r.scrollbar &&
            r.scrollbar.el &&
            (u.scrollbar || !1 === u.scrollbar) &&
            v &&
            !v.el &&
            (l = !0),
          i.includes('navigation') &&
            r.navigation &&
            r.navigation.prevEl &&
            r.navigation.nextEl &&
            (u.navigation || !1 === u.navigation) &&
            f &&
            !f.prevEl &&
            !f.nextEl &&
            (d = !0),
          c.forEach(function (e) {
            Object(a['b'])(u[e]) && Object(a['b'])(r[e])
              ? Object(a['a'])(u[e], r[e])
              : (u[e] = r[e]);
          }),
          i.includes('children') && h && u.virtual.enabled
            ? ((h.slides = t), h.update(!0))
            : i.includes('children') && e.lazy && e.params.lazy.enabled && e.lazy.load(),
          n)
        ) {
          var g = m.init();
          g && m.update(!0);
        }
        s && (e.controller.control = u.controller.control),
          o && (p.init(), p.render(), p.update()),
          l && (v.init(), v.updateSize(), v.setTranslate()),
          d && (f.init(), f.update()),
          i.includes('allowSlideNext') && (e.allowSlideNext = r.allowSlideNext),
          i.includes('allowSlidePrev') && (e.allowSlidePrev = r.allowSlidePrev),
          i.includes('direction') && e.changeDirection(r.direction, !1),
          e.update();
      }
      function g(e) {
        !e ||
          e.destroyed ||
          !e.params.virtual ||
          (e.params.virtual && !e.params.virtual.enabled) ||
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load());
      }
      function b(e, t, r) {
        var i;
        if (!r) return null;
        var s = e.isHorizontal()
          ? ((i = {}), (i[e.rtlTranslate ? 'right' : 'left'] = r.offset + 'px'), i)
          : { top: r.offset + 'px' };
        return t
          .filter(function (e, t) {
            return t >= r.from && t <= r.to;
          })
          .map(function (t) {
            return n.a.cloneElement(t, { swiper: e, style: s });
          });
      }
      var w = r('tpsa');
      function y() {
        return (
          (y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          y.apply(this, arguments)
        );
      }
      function S(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) (r = s[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n;
      }
      var T = Object(i['forwardRef'])(function (e, t) {
        var r = void 0 === e ? {} : e,
          s = r.className,
          o = r.tag,
          v = void 0 === o ? 'div' : o,
          T = r.wrapperTag,
          E = void 0 === T ? 'div' : T,
          C = r.children,
          O = r.onSwiper,
          x = S(r, ['className', 'tag', 'wrapperTag', 'children', 'onSwiper']),
          P = !1,
          M = Object(i['useState'])('swiper-container'),
          k = M[0],
          j = M[1],
          L = Object(i['useState'])(null),
          z = L[0],
          _ = L[1],
          D = Object(i['useState'])(!1),
          A = D[0],
          N = D[1],
          I = Object(i['useRef'])(!1),
          B = Object(i['useRef'])(null),
          G = Object(i['useRef'])(null),
          R = Object(i['useRef'])(null),
          H = Object(i['useRef'])(null),
          W = Object(i['useRef'])(null),
          V = Object(i['useRef'])(null),
          $ = Object(i['useRef'])(null),
          F = Object(i['useRef'])(null),
          q = l(x),
          X = q.params,
          Y = q.passedParams,
          U = q.rest,
          J = q.events,
          K = h(C),
          Z = K.slides,
          Q = K.slots,
          ee = function () {
            N(!A);
          };
        if (
          (Object.assign(X.on, {
            _containerClasses: function (e, t) {
              j(t);
            },
          }),
          !B.current &&
            (Object.assign(X.on, J),
            (P = !0),
            (G.current = d(X)),
            (G.current.loopCreate = function () {}),
            (G.current.loopDestroy = function () {}),
            X.loop && (G.current.loopedSlides = u(Z, X)),
            G.current.virtual && G.current.params.virtual.enabled))
        ) {
          G.current.virtual.slides = Z;
          var te = { cache: !1, renderExternal: _, renderExternalUpdate: !1 };
          Object(a['a'])(G.current.params.virtual, te),
            Object(a['a'])(G.current.originalParams.virtual, te);
        }
        G.current && G.current.on('_beforeBreakpoint', ee);
        var re = function () {
            !P &&
              J &&
              G.current &&
              Object.keys(J).forEach(function (e) {
                G.current.on(e, J[e]);
              });
          },
          ie = function () {
            J &&
              G.current &&
              Object.keys(J).forEach(function (e) {
                G.current.off(e, J[e]);
              });
          };
        function ne() {
          return X.virtual
            ? b(G.current, Z, z)
            : !X.loop || (G.current && G.current.destroyed)
            ? Z.map(function (e) {
                return n.a.cloneElement(e, { swiper: G.current });
              })
            : p(G.current, Z, X);
        }
        return (
          Object(i['useEffect'])(function () {
            return function () {
              G.current && G.current.off('_beforeBreakpoint', ee);
            };
          }),
          Object(i['useEffect'])(function () {
            !I.current && G.current && (G.current.emitSlidesClasses(), (I.current = !0));
          }),
          Object(w['a'])(function () {
            if ((t && (t.current = B.current), B.current))
              return (
                c(
                  {
                    el: B.current,
                    nextEl: W.current,
                    prevEl: V.current,
                    paginationEl: $.current,
                    scrollbarEl: F.current,
                    swiper: G.current,
                  },
                  X,
                ),
                O && O(G.current),
                function () {
                  G.current && !G.current.destroyed && G.current.destroy(!0, !1);
                }
              );
          }, []),
          Object(w['a'])(function () {
            re();
            var e = f(Y, R.current, Z, H.current);
            return (
              (R.current = Y),
              (H.current = Z),
              e.length && G.current && !G.current.destroyed && m(G.current, Z, Y, e),
              function () {
                ie();
              }
            );
          }),
          Object(w['a'])(
            function () {
              g(G.current);
            },
            [z],
          ),
          n.a.createElement(
            v,
            y({ ref: B, className: Object(a['f'])(k + (s ? ' ' + s : '')) }, U),
            Q['container-start'],
            Object(a['c'])(X) &&
              n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement('div', { ref: V, className: 'swiper-button-prev' }),
                n.a.createElement('div', { ref: W, className: 'swiper-button-next' }),
              ),
            Object(a['e'])(X) &&
              n.a.createElement('div', { ref: F, className: 'swiper-scrollbar' }),
            Object(a['d'])(X) &&
              n.a.createElement('div', { ref: $, className: 'swiper-pagination' }),
            n.a.createElement(
              E,
              { className: 'swiper-wrapper' },
              Q['wrapper-start'],
              ne(),
              Q['wrapper-end'],
            ),
            Q['container-end'],
          )
        );
      });
      T.displayName = 'Swiper';
    },
    OJ7w: function (e, t, r) {
      'use strict';
      function i(e) {
        return (
          null !== e && 'object' === typeof e && 'constructor' in e && e.constructor === Object
        );
      }
      function n(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (r) {
            'undefined' === typeof e[r]
              ? (e[r] = t[r])
              : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && n(e[r], t[r]);
          });
      }
      r.d(t, 'a', function () {
        return a;
      }),
        r.d(t, 'b', function () {
          return l;
        });
      var s = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: '' },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      };
      function a() {
        var e = 'undefined' !== typeof document ? document : {};
        return n(e, s), e;
      }
      var o = {
        document: s,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return '';
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return 'undefined' === typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          'undefined' !== typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        var e = 'undefined' !== typeof window ? window : {};
        return n(e, o), e;
      }
    },
    QKZ7: function (e, t, r) {
      'use strict';
      var i = r('bS4n'),
        n = r.n(i),
        s = r('6ato'),
        a = r.n(s),
        o = r('2dj7'),
        l = r.n(o),
        d = r('Xtzg'),
        c = r.n(d),
        u = r('0dFU'),
        p = r.n(u),
        f = r('jK+o'),
        v = r.n(f),
        h = r('xwgP'),
        m = r('2te2'),
        g = r('fK+4'),
        b = (function (e) {
          function t() {
            a()(this, t);
            var e = c()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return (e.state = { animatedWidth: 0, overflowWidth: 0 }), e;
          }
          return (
            p()(t, e),
            l()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._measureText(), this._startAnimation();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._measureText(), this._marqueeTimer || this._startAnimation();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._marqueeTimer);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.prefixCls,
                    i = t.className,
                    s = t.text,
                    a = n()(
                      {
                        position: 'relative',
                        right: this.state.animatedWidth,
                        whiteSpace: 'nowrap',
                        display: 'inline-block',
                      },
                      this.props.style,
                    );
                  return h['createElement'](
                    'div',
                    {
                      className: r + '-marquee-wrap ' + i,
                      style: { overflow: 'hidden' },
                      role: 'marquee',
                    },
                    h['createElement'](
                      'div',
                      {
                        ref: function (t) {
                          return (e.textRef = t);
                        },
                        className: r + '-marquee',
                        style: a,
                      },
                      s,
                    ),
                  );
                },
              },
              {
                key: '_startAnimation',
                value: function () {
                  var e = this;
                  this._marqueeTimer && window.clearTimeout(this._marqueeTimer);
                  var t = this.props.fps,
                    r = (1 / t) * 1e3,
                    i = 0 === this.state.animatedWidth,
                    n = i ? this.props.leading : r,
                    s = function t() {
                      var i = e.state.overflowWidth,
                        n = e.state.animatedWidth + 1,
                        s = n > i;
                      if (s) {
                        if (!e.props.loop) return;
                        n = 0;
                      }
                      s && e.props.trailing
                        ? (e._marqueeTimer = window.setTimeout(function () {
                            e.setState({ animatedWidth: n }),
                              (e._marqueeTimer = window.setTimeout(t, r));
                          }, e.props.trailing))
                        : (e.setState({ animatedWidth: n }),
                          (e._marqueeTimer = window.setTimeout(t, r)));
                    };
                  0 !== this.state.overflowWidth && (this._marqueeTimer = window.setTimeout(s, n));
                },
              },
              {
                key: '_measureText',
                value: function () {
                  var e = g['findDOMNode'](this),
                    t = this.textRef;
                  if (e && t) {
                    var r = e.offsetWidth,
                      i = t.offsetWidth,
                      n = i - r;
                    n !== this.state.overflowWidth && this.setState({ overflowWidth: n });
                  }
                },
              },
            ]),
            t
          );
        })(h['Component']),
        w = b;
      b.defaultProps = { text: '', loop: !1, leading: 500, trailing: 800, fps: 40, className: '' };
      var y = function (e, t) {
          var r = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
              t.indexOf(i[n]) < 0 && (r[i[n]] = e[i[n]]);
          }
          return r;
        },
        S = (function (e) {
          function t(e) {
            a()(this, t);
            var r = c()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (r.onClick = function () {
                var e = r.props,
                  t = e.mode,
                  i = e.onClick;
                i && i(), 'closable' === t && r.setState({ show: !1 });
              }),
              (r.state = { show: !0 }),
              r
            );
          }
          return (
            p()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mode,
                    r = e.icon,
                    i = e.onClick,
                    s = e.children,
                    a = e.className,
                    o = e.prefixCls,
                    l = e.action,
                    d = e.marqueeProps,
                    c = y(e, [
                      'mode',
                      'icon',
                      'onClick',
                      'children',
                      'className',
                      'prefixCls',
                      'action',
                      'marqueeProps',
                    ]),
                    u = {},
                    p = null;
                  'closable' === t
                    ? (p = h['createElement'](
                        'div',
                        {
                          className: o + '-operation',
                          onClick: this.onClick,
                          role: 'button',
                          'aria-label': 'close',
                        },
                        l || h['createElement'](m['a'], { type: 'cross', size: 'md' }),
                      ))
                    : ('link' === t &&
                        (p = h['createElement'](
                          'div',
                          {
                            className: o + '-operation',
                            role: 'button',
                            'aria-label': 'go to detail',
                          },
                          l || h['createElement'](m['a'], { type: 'right', size: 'md' }),
                        )),
                      (u.onClick = i));
                  var f = v()(o, a);
                  return this.state.show
                    ? h['createElement'](
                        'div',
                        n()({ className: f }, c, u, { role: 'alert' }),
                        r &&
                          h['createElement'](
                            'div',
                            { className: o + '-icon', 'aria-hidden': 'true' },
                            r,
                          ),
                        h['createElement'](
                          'div',
                          { className: o + '-content' },
                          h['createElement'](w, n()({ prefixCls: o, text: s }, d)),
                        ),
                        p,
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(h['Component']);
      t['a'] = S;
      S.defaultProps = {
        prefixCls: 'am-notice-bar',
        mode: '',
        icon: h['createElement'](m['a'], { type: 'voice', size: 'xxs' }),
        onClick: function () {},
      };
    },
    'U/Xo': function (e, t, r) {},
    YBjJ: function (e, t, r) {
      'use strict';
      var i = r('OJ7w');
      function n(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function s(e) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          s(e)
        );
      }
      function a(e, t) {
        return (
          (a =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          a(e, t)
        );
      }
      function o() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function l(e, t, r) {
        return (
          (l = o()
            ? Reflect.construct
            : function (e, t, r) {
                var i = [null];
                i.push.apply(i, t);
                var n = Function.bind.apply(e, i),
                  s = new n();
                return r && a(s, r.prototype), s;
              }),
          l.apply(null, arguments)
        );
      }
      function d(e) {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
      }
      function c(e) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (
          (c = function (e) {
            if (null === e || !d(e)) return e;
            if ('function' !== typeof e)
              throw new TypeError('Super expression must either be null or a function');
            if ('undefined' !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return l(e, arguments, s(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
              })),
              a(r, e)
            );
          }),
          c(e)
        );
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function p(e) {
        var t = e.__proto__;
        Object.defineProperty(e, '__proto__', {
          get: function () {
            return t;
          },
          set: function (e) {
            t.__proto__ = e;
          },
        });
      }
      var f = (function (e) {
        function t(t) {
          var r;
          return (r = e.call.apply(e, [this].concat(t)) || this), p(u(r)), r;
        }
        return n(t, e), t;
      })(c(Array));
      function v(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
          }),
          t
        );
      }
      function h(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function m(e) {
        for (var t = [], r = 0; r < e.length; r += 1) -1 === t.indexOf(e[r]) && t.push(e[r]);
        return t;
      }
      function g(e, t) {
        if ('string' !== typeof e) return [e];
        for (var r = [], i = t.querySelectorAll(e), n = 0; n < i.length; n += 1) r.push(i[n]);
        return r;
      }
      function b(e, t) {
        var r = Object(i['b'])(),
          n = Object(i['a'])(),
          s = [];
        if (!t && e instanceof f) return e;
        if (!e) return new f(s);
        if ('string' === typeof e) {
          var a = e.trim();
          if (a.indexOf('<') >= 0 && a.indexOf('>') >= 0) {
            var o = 'div';
            0 === a.indexOf('<li') && (o = 'ul'),
              0 === a.indexOf('<tr') && (o = 'tbody'),
              (0 !== a.indexOf('<td') && 0 !== a.indexOf('<th')) || (o = 'tr'),
              0 === a.indexOf('<tbody') && (o = 'table'),
              0 === a.indexOf('<option') && (o = 'select');
            var l = n.createElement(o);
            l.innerHTML = a;
            for (var d = 0; d < l.childNodes.length; d += 1) s.push(l.childNodes[d]);
          } else s = g(e.trim(), t || n);
        } else if (e.nodeType || e === r || e === n) s.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof f) return e;
          s = e;
        }
        return new f(m(s));
      }
      function w() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, i);
          }),
          this
        );
      }
      function y() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, i);
          }),
          this
        );
      }
      function S() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      }
      function T() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          h(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      }
      function E(e, t) {
        if (1 === arguments.length && 'string' === typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var r = 0; r < this.length; r += 1)
          if (2 === arguments.length) this[r].setAttribute(e, t);
          else for (var i in e) (this[r][i] = e[i]), this[r].setAttribute(i, e[i]);
        return this;
      }
      function C(e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      }
      function O(e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      }
      function x(e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration = 'string' !== typeof e ? e + 'ms' : e;
        return this;
      }
      function P() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = t[0],
          n = t[1],
          s = t[2],
          a = t[3];
        function o(e) {
          var t = e.target;
          if (t) {
            var r = e.target.dom7EventData || [];
            if ((r.indexOf(e) < 0 && r.unshift(e), b(t).is(n))) s.apply(t, r);
            else
              for (var i = b(t).parents(), a = 0; a < i.length; a += 1)
                b(i[a]).is(n) && s.apply(i[a], r);
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        'function' === typeof t[1] && ((i = t[0]), (s = t[1]), (a = t[2]), (n = void 0)),
          a || (a = !1);
        for (var d, c = i.split(' '), u = 0; u < this.length; u += 1) {
          var p = this[u];
          if (n)
            for (d = 0; d < c.length; d += 1) {
              var f = c[d];
              p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                p.dom7LiveListeners[f].push({ listener: s, proxyListener: o }),
                p.addEventListener(f, o, a);
            }
          else
            for (d = 0; d < c.length; d += 1) {
              var v = c[d];
              p.dom7Listeners || (p.dom7Listeners = {}),
                p.dom7Listeners[v] || (p.dom7Listeners[v] = []),
                p.dom7Listeners[v].push({ listener: s, proxyListener: l }),
                p.addEventListener(v, l, a);
            }
        }
        return this;
      }
      function M() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = t[0],
          n = t[1],
          s = t[2],
          a = t[3];
        'function' === typeof t[1] && ((i = t[0]), (s = t[1]), (a = t[2]), (n = void 0)),
          a || (a = !1);
        for (var o = i.split(' '), l = 0; l < o.length; l += 1)
          for (var d = o[l], c = 0; c < this.length; c += 1) {
            var u = this[c],
              p = void 0;
            if (
              (!n && u.dom7Listeners
                ? (p = u.dom7Listeners[d])
                : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]),
              p && p.length)
            )
              for (var f = p.length - 1; f >= 0; f -= 1) {
                var v = p[f];
                (s && v.listener === s) ||
                (s && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === s)
                  ? (u.removeEventListener(d, v.proxyListener, a), p.splice(f, 1))
                  : s || (u.removeEventListener(d, v.proxyListener, a), p.splice(f, 1));
              }
          }
        return this;
      }
      function k() {
        for (var e = Object(i['b'])(), t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        for (var s = r[0].split(' '), a = r[1], o = 0; o < s.length; o += 1)
          for (var l = s[o], d = 0; d < this.length; d += 1) {
            var c = this[d];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(l, { detail: a, bubbles: !0, cancelable: !0 });
              (c.dom7EventData = r.filter(function (e, t) {
                return t > 0;
              })),
                c.dispatchEvent(u),
                (c.dom7EventData = []),
                delete c.dom7EventData;
            }
          }
        return this;
      }
      function j(e) {
        var t = this;
        function r(i) {
          i.target === this && (e.call(this, i), t.off('transitionend', r));
        }
        return e && t.on('transitionend', r), this;
      }
      function L(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue('margin-right')) +
              parseFloat(t.getPropertyValue('margin-left'))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      }
      function z(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue('margin-top')) +
              parseFloat(t.getPropertyValue('margin-bottom'))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      }
      function _() {
        if (this.length > 0) {
          var e = Object(i['b'])(),
            t = Object(i['a'])(),
            r = this[0],
            n = r.getBoundingClientRect(),
            s = t.body,
            a = r.clientTop || s.clientTop || 0,
            o = r.clientLeft || s.clientLeft || 0,
            l = r === e ? e.scrollY : r.scrollTop,
            d = r === e ? e.scrollX : r.scrollLeft;
          return { top: n.top + l - a, left: n.left + d - o };
        }
        return null;
      }
      function D() {
        var e = Object(i['b'])();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      }
      function A(e, t) {
        var r,
          n = Object(i['b'])();
        if (1 === arguments.length) {
          if ('string' !== typeof e) {
            for (r = 0; r < this.length; r += 1) for (var s in e) this[r].style[s] = e[s];
            return this;
          }
          if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && 'string' === typeof e) {
          for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
          return this;
        }
        return this;
      }
      function N(e) {
        return e
          ? (this.forEach(function (t, r) {
              e.apply(t, [t, r]);
            }),
            this)
          : this;
      }
      function I(e) {
        var t = h(this, e);
        return b(t);
      }
      function B(e) {
        if ('undefined' === typeof e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      }
      function G(e) {
        if ('undefined' === typeof e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      }
      function R(e) {
        var t,
          r,
          n = Object(i['b'])(),
          s = Object(i['a'])(),
          a = this[0];
        if (!a || 'undefined' === typeof e) return !1;
        if ('string' === typeof e) {
          if (a.matches) return a.matches(e);
          if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
          if (a.msMatchesSelector) return a.msMatchesSelector(e);
          for (t = b(e), r = 0; r < t.length; r += 1) if (t[r] === a) return !0;
          return !1;
        }
        if (e === s) return a === s;
        if (e === n) return a === n;
        if (e.nodeType || e instanceof f) {
          for (t = e.nodeType ? [e] : e, r = 0; r < t.length; r += 1) if (t[r] === a) return !0;
          return !1;
        }
        return !1;
      }
      function H() {
        var e,
          t = this[0];
        if (t) {
          e = 0;
          while (null !== (t = t.previousSibling)) 1 === t.nodeType && (e += 1);
          return e;
        }
      }
      function W(e) {
        if ('undefined' === typeof e) return this;
        var t = this.length;
        if (e > t - 1) return b([]);
        if (e < 0) {
          var r = t + e;
          return b(r < 0 ? [] : [this[r]]);
        }
        return b([this[e]]);
      }
      function V() {
        for (var e, t = Object(i['a'])(), r = 0; r < arguments.length; r += 1) {
          e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          for (var n = 0; n < this.length; n += 1)
            if ('string' === typeof e) {
              var s = t.createElement('div');
              s.innerHTML = e;
              while (s.firstChild) this[n].appendChild(s.firstChild);
            } else if (e instanceof f)
              for (var a = 0; a < e.length; a += 1) this[n].appendChild(e[a]);
            else this[n].appendChild(e);
        }
        return this;
      }
      function $(e) {
        var t,
          r,
          n = Object(i['a'])();
        for (t = 0; t < this.length; t += 1)
          if ('string' === typeof e) {
            var s = n.createElement('div');
            for (s.innerHTML = e, r = s.childNodes.length - 1; r >= 0; r -= 1)
              this[t].insertBefore(s.childNodes[r], this[t].childNodes[0]);
          } else if (e instanceof f)
            for (r = 0; r < e.length; r += 1) this[t].insertBefore(e[r], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      }
      function F(e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && b(this[0].nextElementSibling).is(e)
              ? b([this[0].nextElementSibling])
              : b([])
            : this[0].nextElementSibling
            ? b([this[0].nextElementSibling])
            : b([])
          : b([]);
      }
      function q(e) {
        var t = [],
          r = this[0];
        if (!r) return b([]);
        while (r.nextElementSibling) {
          var i = r.nextElementSibling;
          e ? b(i).is(e) && t.push(i) : t.push(i), (r = i);
        }
        return b(t);
      }
      function X(e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && b(t.previousElementSibling).is(e)
              ? b([t.previousElementSibling])
              : b([])
            : t.previousElementSibling
            ? b([t.previousElementSibling])
            : b([]);
        }
        return b([]);
      }
      function Y(e) {
        var t = [],
          r = this[0];
        if (!r) return b([]);
        while (r.previousElementSibling) {
          var i = r.previousElementSibling;
          e ? b(i).is(e) && t.push(i) : t.push(i), (r = i);
        }
        return b(t);
      }
      function U(e) {
        for (var t = [], r = 0; r < this.length; r += 1)
          null !== this[r].parentNode &&
            (e
              ? b(this[r].parentNode).is(e) && t.push(this[r].parentNode)
              : t.push(this[r].parentNode));
        return b(t);
      }
      function J(e) {
        for (var t = [], r = 0; r < this.length; r += 1) {
          var i = this[r].parentNode;
          while (i) e ? b(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return b(t);
      }
      function K(e) {
        var t = this;
        return 'undefined' === typeof e ? b([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      }
      function Z(e) {
        for (var t = [], r = 0; r < this.length; r += 1)
          for (var i = this[r].querySelectorAll(e), n = 0; n < i.length; n += 1) t.push(i[n]);
        return b(t);
      }
      function Q(e) {
        for (var t = [], r = 0; r < this.length; r += 1)
          for (var i = this[r].children, n = 0; n < i.length; n += 1)
            (e && !b(i[n]).is(e)) || t.push(i[n]);
        return b(t);
      }
      function ee() {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      }
      b.fn = f.prototype;
      var te = 'resize scroll'.split(' ');
      function re(e) {
        function t() {
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
          if ('undefined' === typeof r[0]) {
            for (var n = 0; n < this.length; n += 1)
              te.indexOf(e) < 0 && (e in this[n] ? this[n][e]() : b(this[n]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(r));
        }
        return t;
      }
      re('click'),
        re('blur'),
        re('focus'),
        re('focusin'),
        re('focusout'),
        re('keyup'),
        re('keydown'),
        re('keypress'),
        re('submit'),
        re('change'),
        re('mousedown'),
        re('mousemove'),
        re('mouseup'),
        re('mouseenter'),
        re('mouseleave'),
        re('mouseout'),
        re('mouseover'),
        re('touchstart'),
        re('touchend'),
        re('touchmove'),
        re('resize'),
        re('scroll');
      var ie = {
        addClass: w,
        removeClass: y,
        hasClass: T,
        toggleClass: S,
        attr: E,
        removeAttr: C,
        transform: O,
        transition: x,
        on: P,
        off: M,
        trigger: k,
        transitionEnd: j,
        outerWidth: L,
        outerHeight: z,
        styles: D,
        offset: _,
        css: A,
        each: N,
        html: B,
        text: G,
        is: R,
        index: H,
        eq: W,
        append: V,
        prepend: $,
        next: F,
        nextAll: q,
        prev: X,
        prevAll: Y,
        parent: U,
        parents: J,
        closest: K,
        find: Z,
        children: Q,
        filter: I,
        remove: ee,
      };
      Object.keys(ie).forEach(function (e) {
        Object.defineProperty(b.fn, e, { value: ie[e], writable: !0 });
      });
      t['a'] = b;
    },
    alSR: function (e, t, r) {
      'use strict';
      r('zr+F'), r('kx6N');
    },
    axFv: function (e, t, r) {
      'use strict';
      function i(e) {
        return (
          'object' === typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function n(e, t) {
        var r = ['__proto__', 'constructor', 'prototype'];
        Object.keys(t)
          .filter(function (e) {
            return r.indexOf(e) < 0;
          })
          .forEach(function (r) {
            'undefined' === typeof e[r]
              ? (e[r] = t[r])
              : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0
              ? t[r].__swiper__
                ? (e[r] = t[r])
                : n(e[r], t[r])
              : (e[r] = t[r]);
          });
      }
      function s(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            'undefined' === typeof e.navigation.nextEl &&
            'undefined' === typeof e.navigation.prevEl
        );
      }
      function a(e) {
        return void 0 === e && (e = {}), e.pagination && 'undefined' === typeof e.pagination.el;
      }
      function o(e) {
        return void 0 === e && (e = {}), e.scrollbar && 'undefined' === typeof e.scrollbar.el;
      }
      function l(e) {
        void 0 === e && (e = '');
        var t = e
            .split(' ')
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          r = [];
        return (
          t.forEach(function (e) {
            r.indexOf(e) < 0 && r.push(e);
          }),
          r.join(' ')
        );
      }
      r.d(t, 'b', function () {
        return i;
      }),
        r.d(t, 'a', function () {
          return n;
        }),
        r.d(t, 'c', function () {
          return s;
        }),
        r.d(t, 'd', function () {
          return a;
        }),
        r.d(t, 'e', function () {
          return o;
        }),
        r.d(t, 'f', function () {
          return l;
        });
    },
    kx6N: function (e, t, r) {},
    s7TO: function (e, t, r) {},
    tVxf: function (e, t, r) {
      'use strict';
      var i = r('OJ7w'),
        n = r('YBjJ'),
        s = r('7H96');
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      var o = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              r = e.rtlTranslate,
              i = e.progress,
              n = t.dragSize,
              s = t.trackSize,
              a = t.$dragEl,
              o = t.$el,
              l = e.params.scrollbar,
              d = n,
              c = (s - n) * i;
            r
              ? ((c = -c), c > 0 ? ((d = n - c), (c = 0)) : -c + n > s && (d = s + c))
              : c < 0
              ? ((d = n + c), (c = 0))
              : c + n > s && (d = s - c),
              e.isHorizontal()
                ? (a.transform('translate3d(' + c + 'px, 0, 0)'), (a[0].style.width = d + 'px'))
                : (a.transform('translate3d(0px, ' + c + 'px, 0)'), (a[0].style.height = d + 'px')),
              l.hide &&
                (clearTimeout(e.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(function () {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          var t = this;
          t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              r = t.$dragEl,
              i = t.$el;
            (r[0].style.width = ''), (r[0].style.height = '');
            var n,
              a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              o = e.size / e.virtualSize,
              l = o * (a / e.size);
            (n =
              'auto' === e.params.scrollbar.dragSize
                ? a * o
                : parseInt(e.params.scrollbar.dragSize, 10)),
              e.isHorizontal() ? (r[0].style.width = n + 'px') : (r[0].style.height = n + 'px'),
              (i[0].style.display = o >= 1 ? 'none' : ''),
              e.params.scrollbar.hide && (i[0].style.opacity = 0),
              Object(s['c'])(t, { trackSize: a, divider: o, moveDivider: l, dragSize: n }),
              t.$el[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](
                e.params.scrollbar.lockClass,
              );
          }
        },
        getPointerPosition: function (e) {
          var t = this;
          return t.isHorizontal()
            ? 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition: function (e) {
          var t,
            r = this,
            i = r.scrollbar,
            n = r.rtlTranslate,
            s = i.$el,
            a = i.dragSize,
            o = i.trackSize,
            l = i.dragStartPos;
          (t =
            (i.getPointerPosition(e) -
              s.offset()[r.isHorizontal() ? 'left' : 'top'] -
              (null !== l ? l : a / 2)) /
            (o - a)),
            (t = Math.max(Math.min(t, 1), 0)),
            n && (t = 1 - t);
          var d = r.minTranslate() + (r.maxTranslate() - r.minTranslate()) * t;
          r.updateProgress(d), r.setTranslate(d), r.updateActiveIndex(), r.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this,
            r = t.params.scrollbar,
            i = t.scrollbar,
            n = t.$wrapperEl,
            s = i.$el,
            a = i.$dragEl;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === a[0] || e.target === a
                ? i.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[t.isHorizontal() ? 'left' : 'top']
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            n.transition(100),
            a.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            s.transition(0),
            r.hide && s.css('opacity', 1),
            t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
            t.emit('scrollbarDragStart', e);
        },
        onDragMove: function (e) {
          var t = this,
            r = t.scrollbar,
            i = t.$wrapperEl,
            n = r.$el,
            s = r.$dragEl;
          t.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            r.setDragPosition(e),
            i.transition(0),
            n.transition(0),
            s.transition(0),
            t.emit('scrollbarDragMove', e));
        },
        onDragEnd: function (e) {
          var t = this,
            r = t.params.scrollbar,
            i = t.scrollbar,
            n = t.$wrapperEl,
            a = i.$el;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode && (t.$wrapperEl.css('scroll-snap-type', ''), n.transition('')),
            r.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = Object(s['e'])(function () {
                a.css('opacity', 0), a.transition(400);
              }, 1e3))),
            t.emit('scrollbarDragEnd', e),
            r.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = Object(i['a'])(),
              r = e.scrollbar,
              n = e.touchEventsTouch,
              s = e.touchEventsDesktop,
              a = e.params,
              o = e.support,
              l = r.$el,
              d = l[0],
              c = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
              u = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
            d &&
              (o.touch
                ? (d.addEventListener(n.start, e.scrollbar.onDragStart, c),
                  d.addEventListener(n.move, e.scrollbar.onDragMove, c),
                  d.addEventListener(n.end, e.scrollbar.onDragEnd, u))
                : (d.addEventListener(s.start, e.scrollbar.onDragStart, c),
                  t.addEventListener(s.move, e.scrollbar.onDragMove, c),
                  t.addEventListener(s.end, e.scrollbar.onDragEnd, u)));
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = Object(i['a'])(),
              r = e.scrollbar,
              n = e.touchEventsTouch,
              s = e.touchEventsDesktop,
              a = e.params,
              o = e.support,
              l = r.$el,
              d = l[0],
              c = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
              u = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
            d &&
              (o.touch
                ? (d.removeEventListener(n.start, e.scrollbar.onDragStart, c),
                  d.removeEventListener(n.move, e.scrollbar.onDragMove, c),
                  d.removeEventListener(n.end, e.scrollbar.onDragEnd, u))
                : (d.removeEventListener(s.start, e.scrollbar.onDragStart, c),
                  t.removeEventListener(s.move, e.scrollbar.onDragMove, c),
                  t.removeEventListener(s.end, e.scrollbar.onDragEnd, u)));
          }
        },
        init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              r = e.$el,
              i = e.params.scrollbar,
              a = Object(n['a'])(i.el);
            e.params.uniqueNavElements &&
              'string' === typeof i.el &&
              a.length > 1 &&
              1 === r.find(i.el).length &&
              (a = r.find(i.el));
            var o = a.find('.' + e.params.scrollbar.dragClass);
            0 === o.length &&
              ((o = Object(n['a'])('<div class="' + e.params.scrollbar.dragClass + '"></div>')),
              a.append(o)),
              Object(s['c'])(t, { $el: a, el: a[0], $dragEl: o, dragEl: o[0] }),
              i.draggable && t.enableDraggable();
          }
        },
        destroy: function () {
          var e = this;
          e.scrollbar.disableDraggable();
        },
      };
      t['a'] = {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create: function () {
          var e = this;
          Object(s['a'])(e, {
            scrollbar: a({ isTouched: !1, timeout: null, dragTimeout: null }, o),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      };
    },
    tpsa: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return n;
      });
      var i = r('xwgP');
      function n(e, t) {
        return 'undefined' === typeof window
          ? Object(i['useEffect'])(e, t)
          : Object(i['useLayoutEffect'])(e, t);
      }
    },
  },
]);
