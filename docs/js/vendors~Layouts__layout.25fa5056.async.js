(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    '1/M5': function (t, e, n) {
      n('u4Or');
      var r = n('zpmP').Object;
      t.exports = function (t, e) {
        return r.getOwnPropertyDescriptor(t, e);
      };
    },
    '15ye': function (t, e, n) {
      'use strict';
      var r = n('Xp5O'),
        a = n('S5+y'),
        o = n('lGtr'),
        i = n('DMUv'),
        s = n('MhL/'),
        c = n('bAmN'),
        u = Object.assign;
      t.exports =
        !u ||
        n('mf7F')(function () {
          var t = {},
            e = {},
            n = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (t[n] = 7),
            r.split('').forEach(function (t) {
              e[t] = t;
            }),
            7 != u({}, t)[n] || Object.keys(u({}, e)).join('') != r
          );
        })
          ? function (t, e) {
              var n = s(t),
                u = arguments.length,
                l = 1,
                f = o.f,
                p = i.f;
              while (u > l) {
                var h,
                  v = c(arguments[l++]),
                  b = f ? a(v).concat(f(v)) : a(v),
                  d = b.length,
                  g = 0;
                while (d > g) (h = b[g++]), (r && !p.call(v, h)) || (n[h] = v[h]);
              }
              return n;
            }
          : u;
    },
    '1eom': function (t, e, n) {
      'use strict';
      var r = n('bS4n'),
        a = n.n(r),
        o = n('/umX'),
        i = n.n(o),
        s = n('6ato'),
        c = n.n(s),
        u = n('2dj7'),
        l = n.n(u),
        f = n('Xtzg'),
        p = n.n(f),
        h = n('0dFU'),
        v = n.n(h),
        b = n('jK+o'),
        d = n.n(b),
        g = n('xwgP'),
        m = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
              e.indexOf(r[a]) < 0 && (n[r[a]] = t[r[a]]);
          }
          return n;
        },
        T = (function (t) {
          function e() {
            return (
              c()(this, e),
              p()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            );
          }
          return (
            v()(e, t),
            l()(e, [
              {
                key: 'render',
                value: function () {
                  var t,
                    e,
                    n = this.props,
                    r = n.className,
                    o = n.prefixCls,
                    s = n.children,
                    c = n.text,
                    u = n.size,
                    l = n.overflowCount,
                    f = n.dot,
                    p = n.corner,
                    h = n.hot,
                    v = m(n, [
                      'className',
                      'prefixCls',
                      'children',
                      'text',
                      'size',
                      'overflowCount',
                      'dot',
                      'corner',
                      'hot',
                    ]);
                  (l = l), (c = 'number' === typeof c && c > l ? l + '+' : c), f && (c = '');
                  var b = d()(
                      ((t = {}),
                      i()(t, o + '-dot', f),
                      i()(t, o + '-dot-large', f && 'large' === u),
                      i()(t, o + '-text', !f && !p),
                      i()(t, o + '-corner', p),
                      i()(t, o + '-corner-large', p && 'large' === u),
                      t),
                    ),
                    T = d()(
                      o,
                      r,
                      ((e = {}),
                      i()(e, o + '-not-a-wrapper', !s),
                      i()(e, o + '-corner-wrapper', p),
                      i()(e, o + '-hot', !!h),
                      i()(e, o + '-corner-wrapper-large', p && 'large' === u),
                      e),
                    );
                  return g['createElement'](
                    'span',
                    { className: T },
                    s,
                    (c || f) && g['createElement']('sup', a()({ className: b }, v), c),
                  );
                },
              },
            ]),
            e
          );
        })(g['Component']);
      (e['a'] = T),
        (T.defaultProps = {
          prefixCls: 'am-badge',
          size: 'small',
          overflowCount: 99,
          dot: !1,
          corner: !1,
        });
    },
    '3FWR': function (t, e, n) {},
    '6ZY3': function (t, e, n) {
      t.exports = { default: n('n1sw'), __esModule: !0 };
    },
    AYeB: function (t, e, n) {
      'use strict';
      var r = n('bS4n'),
        a = n.n(r),
        o = n('6ato'),
        i = n.n(o),
        s = n('2dj7'),
        c = n.n(s),
        u = n('Xtzg'),
        l = n.n(u),
        f = n('0dFU'),
        p = n.n(f),
        h = n('xwgP'),
        v = n.n(h),
        b = 1,
        d = 2,
        g = 4,
        m = 8,
        T = 16,
        y = d | g,
        P = m | T,
        C = y | P,
        x = { time: 251 },
        S = { threshold: 10, velocity: 0.3 };
      function k(t, e) {
        return Math.sqrt(t * t + e * e);
      }
      function O(t, e) {
        var n = Math.atan2(e, t);
        return 180 / (Math.PI / n);
      }
      function E() {
        return Date.now();
      }
      function w(t) {
        if (!(t.length < 2)) {
          var e = t[0],
            n = e.x,
            r = e.y,
            a = t[1],
            o = a.x,
            i = a.y,
            s = o - n,
            c = i - r;
          return { x: s, y: c, z: k(s, c), angle: O(s, c) };
        }
      }
      function _(t, e, n) {
        var r = t[0],
          a = r.x,
          o = r.y,
          i = e[0],
          s = i.x,
          c = i.y,
          u = s - a,
          l = c - o,
          f = k(u, l);
        return { x: u, y: l, z: f, time: n, velocity: f / n, angle: O(u, l) };
      }
      function B(t, e) {
        var n = t.angle,
          r = e.angle;
        return r - n;
      }
      function M(t, e) {
        return t + e[0].toUpperCase() + e.slice(1);
      }
      function I(t, e) {
        return Math.abs(t) >= S.threshold && Math.abs(e) > S.velocity;
      }
      function j(t, e) {
        return !!(e & t);
      }
      function G(t, e) {
        var n = t.x,
          r = t.y,
          a = e.x,
          o = e.y,
          i = a - n,
          s = o - r;
        return 0 === i && 0 === s
          ? b
          : Math.abs(i) >= Math.abs(s)
          ? i < 0
            ? d
            : g
          : s < 0
          ? m
          : T;
      }
      function N(t) {
        var e = void 0;
        switch (t) {
          case b:
            break;
          case d:
            e = 'left';
            break;
          case g:
            e = 'right';
            break;
          case m:
            e = 'up';
            break;
          case T:
            e = 'down';
            break;
          default:
        }
        return e;
      }
      var A = { all: C, vertical: P, horizontal: y },
        z = (function (t) {
          function e(t) {
            i()(this, e);
            var n = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
              (n.state = {}),
              (n.triggerEvent = function (t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
                  r[a - 1] = arguments[a];
                var o = n.props[t];
                'function' === typeof o && o.apply(void 0, [n.getGestureState()].concat(r));
              }),
              (n.triggerCombineEvent = function (t, e) {
                for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                  a[o - 2] = arguments[o];
                n.triggerEvent.apply(n, [t].concat(a)),
                  n.triggerSubEvent.apply(n, [t, e].concat(a));
              }),
              (n.triggerSubEvent = function (t, e) {
                for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                  a[o - 2] = arguments[o];
                if (e) {
                  var i = M(t, e);
                  n.triggerEvent.apply(n, [i].concat(a));
                }
              }),
              (n.triggerPinchEvent = function (t, e) {
                for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                  a[o - 2] = arguments[o];
                var i = n.gesture.scale;
                'move' === e &&
                  'number' === typeof i &&
                  (i > 1 && n.triggerEvent('onPinchOut'), i < 1 && n.triggerEvent('onPinchIn')),
                  n.triggerCombineEvent.apply(n, [t, e].concat(a));
              }),
              (n.initPressTimer = function () {
                n.cleanPressTimer(),
                  (n.pressTimer = setTimeout(function () {
                    n.setGestureState({ press: !0 }), n.triggerEvent('onPress');
                  }, x.time));
              }),
              (n.cleanPressTimer = function () {
                n.pressTimer && clearTimeout(n.pressTimer);
              }),
              (n.setGestureState = function (t) {
                n.gesture || (n.gesture = {}),
                  n.gesture.touches && (n.gesture.preTouches = n.gesture.touches),
                  (n.gesture = a()({}, n.gesture, t));
              }),
              (n.getGestureState = function () {
                return n.gesture ? a()({}, n.gesture) : n.gesture;
              }),
              (n.cleanGestureState = function () {
                delete n.gesture;
              }),
              (n.getTouches = function (t) {
                return Array.prototype.slice.call(t.touches).map(function (t) {
                  return { x: t.screenX, y: t.screenY };
                });
              }),
              (n.triggerUserCb = function (t, e) {
                var r = M('onTouch', t);
                r in n.props && n.props[r](e);
              }),
              (n._handleTouchStart = function (t) {
                n.triggerUserCb('start', t),
                  (n.event = t),
                  t.touches.length > 1 && t.preventDefault(),
                  n.initGestureStatus(t),
                  n.initPressTimer(),
                  n.checkIfMultiTouchStart();
              }),
              (n.initGestureStatus = function (t) {
                n.cleanGestureState();
                var e = n.getTouches(t),
                  r = E(),
                  a = w(e);
                n.setGestureState({
                  startTime: r,
                  startTouches: e,
                  startMutliFingerStatus: a,
                  time: r,
                  touches: e,
                  mutliFingerStatus: a,
                  srcEvent: n.event,
                });
              }),
              (n.checkIfMultiTouchStart = function () {
                var t = n.props,
                  e = t.enablePinch,
                  r = t.enableRotate,
                  a = n.gesture.touches;
                if (a.length > 1 && (e || r)) {
                  if (e) {
                    var o = w(a);
                    n.setGestureState({ startMutliFingerStatus: o, pinch: !0, scale: 1 }),
                      n.triggerCombineEvent('onPinch', 'start');
                  }
                  r &&
                    (n.setGestureState({ rotate: !0, rotation: 0 }),
                    n.triggerCombineEvent('onRotate', 'start'));
                }
              }),
              (n._handleTouchMove = function (t) {
                n.triggerUserCb('move', t),
                  (n.event = t),
                  n.gesture &&
                    (n.cleanPressTimer(),
                    n.updateGestureStatus(t),
                    n.checkIfSingleTouchMove(),
                    n.checkIfMultiTouchMove());
              }),
              (n.checkIfMultiTouchMove = function () {
                var t = n.gesture,
                  e = t.pinch,
                  r = t.rotate,
                  a = t.touches,
                  o = t.startMutliFingerStatus,
                  i = t.mutliFingerStatus;
                if (e || r) {
                  if (a.length < 2)
                    return (
                      n.setGestureState({ pinch: !1, rotate: !1 }),
                      e && n.triggerCombineEvent('onPinch', 'cancel'),
                      void (r && n.triggerCombineEvent('onRotate', 'cancel'))
                    );
                  if (e) {
                    var s = i.z / o.z;
                    n.setGestureState({ scale: s }), n.triggerPinchEvent('onPinch', 'move');
                  }
                  if (r) {
                    var c = B(o, i);
                    n.setGestureState({ rotation: c }), n.triggerCombineEvent('onRotate', 'move');
                  }
                }
              }),
              (n.allowGesture = function () {
                return j(n.gesture.direction, n.directionSetting);
              }),
              (n.checkIfSingleTouchMove = function () {
                var t = n.gesture,
                  e = t.pan,
                  r = t.touches,
                  a = t.moveStatus,
                  o = t.preTouches,
                  i = t.availablePan,
                  s = void 0 === i || i;
                if (r.length > 1)
                  return (
                    n.setGestureState({ pan: !1 }),
                    void (e && n.triggerCombineEvent('onPan', 'cancel'))
                  );
                if (a && s) {
                  var c = G(o[0], r[0]);
                  n.setGestureState({ direction: c });
                  var u = N(c);
                  if (!n.allowGesture()) return void (e || n.setGestureState({ availablePan: !1 }));
                  e
                    ? (n.triggerCombineEvent('onPan', u), n.triggerSubEvent('onPan', 'move'))
                    : (n.triggerCombineEvent('onPan', 'start'),
                      n.setGestureState({ pan: !0, availablePan: !0 }));
                }
              }),
              (n.checkIfMultiTouchEnd = function (t) {
                var e = n.gesture,
                  r = e.pinch,
                  a = e.rotate;
                r && n.triggerCombineEvent('onPinch', t), a && n.triggerCombineEvent('onRotate', t);
              }),
              (n.updateGestureStatus = function (t) {
                var e = E();
                if ((n.setGestureState({ time: e }), t.touches && t.touches.length)) {
                  var r = n.gesture,
                    a = r.startTime,
                    o = r.startTouches,
                    i = r.pinch,
                    s = r.rotate,
                    c = n.getTouches(t),
                    u = _(o, c, e - a),
                    l = void 0;
                  (i || s) && (l = w(c)),
                    n.setGestureState({ touches: c, mutliFingerStatus: l, moveStatus: u });
                }
              }),
              (n._handleTouchEnd = function (t) {
                n.triggerUserCb('end', t),
                  (n.event = t),
                  n.gesture &&
                    (n.cleanPressTimer(),
                    n.updateGestureStatus(t),
                    n.doSingleTouchEnd('end'),
                    n.checkIfMultiTouchEnd('end'));
              }),
              (n._handleTouchCancel = function (t) {
                n.triggerUserCb('cancel', t),
                  (n.event = t),
                  n.gesture &&
                    (n.cleanPressTimer(),
                    n.updateGestureStatus(t),
                    n.doSingleTouchEnd('cancel'),
                    n.checkIfMultiTouchEnd('cancel'));
              }),
              (n.triggerAllowEvent = function (t, e) {
                n.allowGesture() ? n.triggerCombineEvent(t, e) : n.triggerSubEvent(t, e);
              }),
              (n.doSingleTouchEnd = function (t) {
                var e = n.gesture,
                  r = e.moveStatus,
                  a = e.pinch,
                  o = e.rotate,
                  i = e.press,
                  s = e.pan,
                  c = e.direction;
                if (!a && !o) {
                  if (r) {
                    var u = r.z,
                      l = r.velocity,
                      f = I(u, l);
                    if (
                      (n.setGestureState({ swipe: f }), s && n.triggerAllowEvent('onPan', t), f)
                    ) {
                      var p = N(c);
                      return void n.triggerAllowEvent('onSwipe', p);
                    }
                  }
                  i ? n.triggerEvent('onPressUp') : n.triggerEvent('onTap');
                }
              }),
              (n.getTouchAction = function () {
                var t = n.props,
                  e = t.enablePinch,
                  r = t.enableRotate,
                  a = n.directionSetting;
                return e || r || a === C
                  ? 'pan-x pan-y'
                  : a === P
                  ? 'pan-x'
                  : a === y
                  ? 'pan-y'
                  : 'auto';
              }),
              (n.directionSetting = A[t.direction]),
              n
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.cleanPressTimer();
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props.children,
                    e = v.a.Children.only(t),
                    n = this.getTouchAction(),
                    r = {
                      onTouchStart: this._handleTouchStart,
                      onTouchMove: this._handleTouchMove,
                      onTouchCancel: this._handleTouchCancel,
                      onTouchEnd: this._handleTouchEnd,
                    };
                  return v.a.cloneElement(
                    e,
                    a()({}, r, { style: a()({ touchAction: n }, e.props.style || {}) }),
                  );
                },
              },
            ]),
            e
          );
        })(h['Component']);
      e['a'] = z;
      z.defaultProps = { enableRotate: !1, enablePinch: !1, direction: 'all' };
    },
    BBVc: function (t, e, n) {
      'use strict';
      n('zr+F'), n('3FWR'), n('knoH'), n('xx5R');
    },
    Ds8w: function (t, e, n) {
      t.exports = { default: n('XXnF'), __esModule: !0 };
    },
    XXnF: function (t, e, n) {
      n('vvQG'), (t.exports = n('zpmP').Object.getPrototypeOf);
    },
    bS4n: function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var r = n('6ZY3'),
        a = o(r);
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default =
        a.default ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
    },
    fL18: function (t, e, n) {
      t.exports = { default: n('1/M5'), __esModule: !0 };
    },
    gAgb: function (t, e, n) {
      var r = n('fCtq');
      r(r.S + r.F, 'Object', { assign: n('15ye') });
    },
    k6n4: function (t, e, n) {
      var r = n('fCtq'),
        a = n('zpmP'),
        o = n('mf7F');
      t.exports = function (t, e) {
        var n = (a.Object || {})[t] || Object[t],
          i = {};
        (i[t] = e(n)),
          r(
            r.S +
              r.F *
                o(function () {
                  n(1);
                }),
            'Object',
            i,
          );
      };
    },
    knoH: function (t, e, n) {},
    lT7c: function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var r = n('Ds8w'),
        a = s(r),
        o = n('fL18'),
        i = s(o);
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = function t(e, n, r) {
        null === e && (e = Function.prototype);
        var o = (0, i.default)(e, n);
        if (void 0 === o) {
          var s = (0, a.default)(e);
          return null === s ? void 0 : t(s, n, r);
        }
        if ('value' in o) return o.value;
        var c = o.get;
        return void 0 !== c ? c.call(r) : void 0;
      };
    },
    n1sw: function (t, e, n) {
      n('gAgb'), (t.exports = n('zpmP').Object.assign);
    },
    qkV3: function (t, e, n) {
      'use strict';
      var r = n('bS4n'),
        a = n.n(r),
        o = n('6ato'),
        i = n.n(o),
        s = n('2dj7'),
        c = n.n(s),
        u = n('Xtzg'),
        l = n.n(u),
        f = n('0dFU'),
        p = n.n(f),
        h = n('xwgP'),
        v = n.n(h),
        b = n('zCLS'),
        d = n('lT7c'),
        g = n.n(d),
        m = n('AYeB');
      function T(t) {
        return { transform: t, WebkitTransform: t, MozTransform: t };
      }
      function y(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'px',
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          (t = n ? '0px, ' + t + e + ', 0px' : '' + t + e + ', 0px, 0px'), 'translate3d(' + t + ')'
        );
      }
      function P(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'px',
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        a ? (r ? (t.style.top = '' + e + n) : (t.style.left = '' + e + n)) : C(t.style, y(e, n, r));
      }
      function C(t, e) {
        (t.transform = e), (t.webkitTransform = e), (t.mozTransform = e);
      }
      var x = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
              e.indexOf(r[a]) < 0 && (n[r[a]] = t[r[a]]);
          }
          return n;
        },
        S = (function (t) {
          function e() {
            i()(this, e);
            var t = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            return (
              (t.offsetX = 0),
              (t.offsetY = 0),
              (t.setLayout = function (e) {
                t.layout = e;
              }),
              t
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'componentWillReceiveProps',
                value: function (t) {
                  this.props.active !== t.active &&
                    (t.active
                      ? ((this.offsetX = 0), (this.offsetY = 0))
                      : ((this.offsetX = this.layout.scrollLeft),
                        (this.offsetY = this.layout.scrollTop)));
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = (t.active, t.fixX),
                    n = t.fixY,
                    r = x(t, ['active', 'fixX', 'fixY']),
                    o = a()(
                      {},
                      e && this.offsetX ? T(y(-this.offsetX, 'px', !1)) : {},
                      n && this.offsetY ? T(y(-this.offsetY, 'px', !0)) : {},
                    );
                  return v.a.createElement(
                    'div',
                    a()({}, r, { style: o, ref: this.setLayout }),
                    r.children,
                  );
                },
              },
            ]),
            e
          );
        })(v.a.PureComponent);
      S.defaultProps = { fixX: !0, fixY: !0 };
      var k = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
              e.indexOf(r[a]) < 0 && (n[r[a]] = t[r[a]]);
          }
          return n;
        },
        O = function t() {
          i()(this, t),
            (this.transform = ''),
            (this.isMoving = !1),
            (this.showPrev = !1),
            (this.showNext = !1);
        },
        E = (function (t) {
          function e(t) {
            i()(this, e);
            var n = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
              (n.onPan = (function () {
                var t = 0,
                  e = 0,
                  r = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : n.isTabBarVertical(),
                      r = +('' + t).replace('%', '');
                    return (
                      ('' + t).indexOf('%') >= 0 &&
                        ((r /= 100), (r *= e ? n.layout.clientHeight : n.layout.clientWidth)),
                      r
                    );
                  };
                return {
                  onPanStart: function () {
                    n.setState({ isMoving: !0 });
                  },
                  onPanMove: function (t) {
                    if (t.moveStatus && n.layout) {
                      var a = n.isTabBarVertical(),
                        o = r() + (a ? t.moveStatus.y : t.moveStatus.x),
                        i = a
                          ? -n.layout.scrollHeight + n.layout.clientHeight
                          : -n.layout.scrollWidth + n.layout.clientWidth;
                      (o = Math.min(o, 0)),
                        (o = Math.max(o, i)),
                        P(n.layout, o, 'px', a),
                        (e = o),
                        n.setState({ showPrev: -o > 0, showNext: o > i });
                    }
                  },
                  onPanEnd: function () {
                    var r = n.isTabBarVertical();
                    (t = e), n.setState({ isMoving: !1, transform: y(e, 'px', r) });
                  },
                  setCurrentOffset: function (e) {
                    return (t = e);
                  },
                };
              })()),
              (n.getTransformByIndex = function (t) {
                var e = t.activeTab,
                  r = t.tabs,
                  a = t.page,
                  o = void 0 === a ? 0 : a,
                  i = n.isTabBarVertical(),
                  s = n.getTabSize(o, r.length),
                  c = o / 2,
                  u = Math.min(e, r.length - c - 0.5),
                  l = Math.min(-(u - c + 0.5) * s, 0);
                return (
                  n.onPan.setCurrentOffset(l + '%'),
                  {
                    transform: y(l, '%', i),
                    showPrev: e > c - 0.5 && r.length > o,
                    showNext: e < r.length - c - 0.5 && r.length > o,
                  }
                );
              }),
              (n.onPress = function (t) {
                var e = n.props,
                  r = e.goToTab,
                  a = e.onTabClick,
                  o = e.tabs;
                a && a(o[t], t), r && r(t);
              }),
              (n.isTabBarVertical = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n.props.tabBarPosition;
                return 'left' === t || 'right' === t;
              }),
              (n.renderTab = function (t, e, r, o) {
                var i = n.props,
                  s = i.prefixCls,
                  c = i.renderTab,
                  u = i.activeTab,
                  l = i.tabBarTextStyle,
                  f = i.tabBarActiveTextColor,
                  p = i.tabBarInactiveTextColor,
                  h = i.instanceId,
                  b = a()({}, l),
                  d = s + '-tab',
                  g = !1;
                return (
                  u === e
                    ? ((d += ' ' + d + '-active'), (g = !0), f && (b.color = f))
                    : p && (b.color = p),
                  v.a.createElement(
                    'div',
                    {
                      key: 't_' + e,
                      style: a()({}, b, o ? { height: r + '%' } : { width: r + '%' }),
                      id: 'm-tabs-' + h + '-' + e,
                      role: 'tab',
                      'aria-selected': g,
                      className: d,
                      onClick: function () {
                        return n.onPress(e);
                      },
                    },
                    c ? c(t) : t.title,
                  )
                );
              }),
              (n.setContentLayout = function (t) {
                n.layout = t;
              }),
              (n.getTabSize = function (t, e) {
                return 100 / Math.min(t, e);
              }),
              (n.state = a()({}, new O(), n.getTransformByIndex(t))),
              n
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'componentWillReceiveProps',
                value: function (t) {
                  (this.props.activeTab === t.activeTab &&
                    this.props.tabs === t.tabs &&
                    this.props.tabs.length === t.tabs.length) ||
                    this.setState(a()({}, this.getTransformByIndex(t)));
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.prefixCls,
                    r = e.animated,
                    o = e.tabs,
                    i = void 0 === o ? [] : o,
                    s = e.page,
                    c = void 0 === s ? 0 : s,
                    u = e.activeTab,
                    l = void 0 === u ? 0 : u,
                    f = e.tabBarBackgroundColor,
                    p = e.tabBarUnderlineStyle,
                    h = e.tabBarPosition,
                    b = e.renderUnderline,
                    d = this.state,
                    g = d.isMoving,
                    y = d.transform,
                    P = d.showNext,
                    C = d.showPrev,
                    x = this.isTabBarVertical(),
                    S = i.length > c,
                    O = this.getTabSize(c, i.length),
                    E = i.map(function (e, n) {
                      return t.renderTab(e, n, O, x);
                    }),
                    w = n;
                  r && !g && (w += ' ' + n + '-animated');
                  var _ = { backgroundColor: f || '' },
                    B = S ? a()({}, T(y)) : {},
                    M = this.onPan,
                    I = (M.setCurrentOffset, k(M, ['setCurrentOffset'])),
                    j = {
                      style: a()(
                        {},
                        x ? { height: O + '%' } : { width: O + '%' },
                        x ? { top: O * l + '%' } : { left: O * l + '%' },
                        p,
                      ),
                      className: n + '-underline',
                    };
                  return v.a.createElement(
                    'div',
                    { className: w + ' ' + n + '-' + h, style: _ },
                    C && v.a.createElement('div', { className: n + '-prevpage' }),
                    v.a.createElement(
                      m['a'],
                      a()({}, I, { direction: x ? 'vertical' : 'horizontal' }),
                      v.a.createElement(
                        'div',
                        {
                          role: 'tablist',
                          className: n + '-content',
                          style: B,
                          ref: this.setContentLayout,
                        },
                        E,
                        b ? b(j) : v.a.createElement('div', j),
                      ),
                    ),
                    P && v.a.createElement('div', { className: n + '-nextpage' }),
                  );
                },
              },
            ]),
            e
          );
        })(v.a.PureComponent);
      E.defaultProps = {
        prefixCls: 'rmc-tabs-tab-bar',
        animated: !0,
        tabs: [],
        goToTab: function () {},
        activeTab: 0,
        page: 5,
        tabBarUnderlineStyle: {},
        tabBarBackgroundColor: '#fff',
        tabBarActiveTextColor: '',
        tabBarInactiveTextColor: '',
        tabBarTextStyle: {},
      };
      var w = function t() {
          i()(this, t);
        },
        _ = 0,
        B = (function (t) {
          function e(t) {
            i()(this, e);
            var n = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
              (n.tabCache = {}),
              (n.isTabVertical = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n.props.tabDirection;
                return 'vertical' === t;
              }),
              (n.shouldRenderTab = function (t) {
                var e = n.props.prerenderingSiblingsNumber,
                  r = void 0 === e ? 0 : e,
                  a = n.state.currentTab,
                  o = void 0 === a ? 0 : a;
                return o - r <= t && t <= o + r;
              }),
              (n.getOffsetIndex = function (t, e) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : n.props.distanceToChangeTab || 0,
                  a = Math.abs(t / e),
                  o = a > n.state.currentTab ? '<' : '>',
                  i = Math.floor(a);
                switch (o) {
                  case '<':
                    return a - i > r ? i + 1 : i;
                  case '>':
                    return 1 - a + i > r ? i : i + 1;
                  default:
                    return Math.round(a);
                }
              }),
              (n.getSubElements = function () {
                var t = n.props.children,
                  e = {};
                return function () {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '$i$-',
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '$ALL$';
                  return (
                    Array.isArray(t)
                      ? t.forEach(function (t, r) {
                          t.key && (e[t.key] = t), (e['' + n + r] = t);
                        })
                      : t && (e[r] = t),
                    e
                  );
                };
              }),
              (n.state = { currentTab: n.getTabIndex(t) }),
              (n.nextCurrentTab = n.state.currentTab),
              (n.instanceId = _++),
              n
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'getTabIndex',
                value: function (t) {
                  var e = t.page,
                    n = t.initialPage,
                    r = t.tabs,
                    a = (void 0 !== e ? e : n) || 0,
                    o = 0;
                  return (
                    'string' === typeof a
                      ? r.forEach(function (t, e) {
                          t.key === a && (o = e);
                        })
                      : (o = a || 0),
                    o < 0 ? 0 : o
                  );
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function (t) {
                  this.props.page !== t.page &&
                    void 0 !== t.page &&
                    this.goToTab(this.getTabIndex(t), !0, {}, t);
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.prevCurrentTab = this.state.currentTab;
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.prevCurrentTab = this.state.currentTab;
                },
              },
              {
                key: 'goToTab',
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.props;
                  if (!e && this.nextCurrentTab === t) return !1;
                  this.nextCurrentTab = t;
                  var o = r.tabs,
                    i = r.onChange;
                  if (t >= 0 && t < o.length) {
                    if (!e && (i && i(o[t], t), void 0 !== r.page)) return !1;
                    this.setState(a()({ currentTab: t }, n));
                  }
                  return !0;
                },
              },
              {
                key: 'tabClickGoToTab',
                value: function (t) {
                  this.goToTab(t);
                },
              },
              {
                key: 'getTabBarBaseProps',
                value: function () {
                  var t = this.state.currentTab,
                    e = this.props,
                    n = e.animated,
                    r = e.onTabClick,
                    a = e.tabBarActiveTextColor,
                    o = e.tabBarBackgroundColor,
                    i = e.tabBarInactiveTextColor,
                    s = e.tabBarPosition,
                    c = e.tabBarTextStyle,
                    u = e.tabBarUnderlineStyle,
                    l = e.tabs;
                  return {
                    activeTab: t,
                    animated: !!n,
                    goToTab: this.tabClickGoToTab.bind(this),
                    onTabClick: r,
                    tabBarActiveTextColor: a,
                    tabBarBackgroundColor: o,
                    tabBarInactiveTextColor: i,
                    tabBarPosition: s,
                    tabBarTextStyle: c,
                    tabBarUnderlineStyle: u,
                    tabs: l,
                    instanceId: this.instanceId,
                  };
                },
              },
              {
                key: 'renderTabBar',
                value: function (t, e) {
                  var n = this.props.renderTabBar;
                  return !1 === n ? null : n ? n(t) : v.a.createElement(e, t);
                },
              },
              {
                key: 'getSubElement',
                value: function (t, e, n) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '$i$-',
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '$ALL$',
                    o = t.key || '' + r + e,
                    i = n(r, a),
                    s = i[o] || i[a];
                  return s instanceof Function && (s = s(t, e)), s || null;
                },
              },
            ]),
            e
          );
        })(v.a.PureComponent);
      B.defaultProps = {
        tabBarPosition: 'top',
        initialPage: 0,
        swipeable: !0,
        animated: !0,
        prerenderingSiblingsNumber: 1,
        tabs: [],
        destroyInactiveTab: !1,
        usePaged: !0,
        tabDirection: 'horizontal',
        distanceToChangeTab: 0.3,
      };
      var M = function (t) {
          switch (t) {
            case 2:
            case 4:
              return 'horizontal';
            case 8:
            case 16:
              return 'vertical';
            default:
              return 'none';
          }
        },
        I = (function (t) {
          function e() {
            i()(this, e);
            var t = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            return (t.contentPos = ''), (t.isMoving = !1), t;
          }
          return p()(e, t), e;
        })(w),
        j = (function (t) {
          function e(t) {
            i()(this, e);
            var n = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
              (n.onPan = (function () {
                var t = 0,
                  e = 0,
                  r = void 0,
                  a = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : n.isTabVertical(),
                      r = +('' + t).replace('%', '');
                    return (
                      ('' + t).indexOf('%') >= 0 &&
                        ((r /= 100), (r *= e ? n.layout.clientHeight : n.layout.clientWidth)),
                      r
                    );
                  };
                return {
                  onPanStart: function (t) {
                    n.props.swipeable &&
                      n.props.animated &&
                      ((r = M(t.direction)), n.setState({ isMoving: !0 }));
                  },
                  onPanMove: function (t) {
                    var o = n.props,
                      i = o.swipeable,
                      s = o.animated,
                      c = o.useLeftInsteadTransform;
                    if (t.moveStatus && n.layout && i && s) {
                      var u = n.isTabVertical(),
                        l = a();
                      l += u
                        ? 'horizontal' === r
                          ? 0
                          : t.moveStatus.y
                        : 'vertical' === r
                        ? 0
                        : t.moveStatus.x;
                      var f = u
                        ? -n.layout.scrollHeight + n.layout.clientHeight
                        : -n.layout.scrollWidth + n.layout.clientWidth;
                      (l = Math.min(l, 0)),
                        (l = Math.max(l, f)),
                        P(n.layout, l, 'px', u, c),
                        (e = l);
                    }
                  },
                  onPanEnd: function () {
                    if (n.props.swipeable && n.props.animated) {
                      t = e;
                      var r = n.isTabVertical(),
                        a = n.getOffsetIndex(e, r ? n.layout.clientHeight : n.layout.clientWidth);
                      n.setState({ isMoving: !1 }),
                        a === n.state.currentTab
                          ? n.props.usePaged &&
                            C(
                              n.layout.style,
                              n.getContentPosByIndex(
                                a,
                                n.isTabVertical(),
                                n.props.useLeftInsteadTransform,
                              ),
                            )
                          : n.goToTab(a);
                    }
                  },
                  setCurrentOffset: function (e) {
                    return (t = e);
                  },
                };
              })()),
              (n.onSwipe = function (t) {
                var e = n.props,
                  r = e.tabBarPosition,
                  a = e.swipeable,
                  o = e.usePaged;
                if (a && o && !n.isTabVertical())
                  switch (r) {
                    case 'top':
                    case 'bottom':
                      switch (t.direction) {
                        case 2:
                          n.isTabVertical() || n.goToTab(n.prevCurrentTab + 1);
                        case 8:
                          n.isTabVertical() && n.goToTab(n.prevCurrentTab + 1);
                          break;
                        case 4:
                          n.isTabVertical() || n.goToTab(n.prevCurrentTab - 1);
                        case 16:
                          n.isTabVertical() && n.goToTab(n.prevCurrentTab - 1);
                          break;
                      }
                      break;
                  }
              }),
              (n.setContentLayout = function (t) {
                n.layout = t;
              }),
              (n.state = a()({}, n.state, new I(), {
                contentPos: n.getContentPosByIndex(
                  n.getTabIndex(t),
                  n.isTabVertical(t.tabDirection),
                  t.useLeftInsteadTransform,
                ),
              })),
              n
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'goToTab',
                value: function (t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.props.usePaged,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.props,
                    o = a.tabDirection,
                    i = a.useLeftInsteadTransform,
                    s = {};
                  return (
                    r &&
                      (s = { contentPos: this.getContentPosByIndex(t, this.isTabVertical(o), i) }),
                    g()(
                      e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                      'goToTab',
                      this,
                    ).call(this, t, n, s, a)
                  );
                },
              },
              {
                key: 'tabClickGoToTab',
                value: function (t) {
                  this.goToTab(t, !1, !0);
                },
              },
              {
                key: 'getContentPosByIndex',
                value: function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = 100 * -t + '%';
                  if ((this.onPan.setCurrentOffset(r), n)) return '' + r;
                  var a = e ? '0px, ' + r : r + ', 0px';
                  return 'translate3d(' + a + ', 1px)';
                },
              },
              {
                key: 'renderContent',
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.getSubElements(),
                    n = this.props,
                    r = n.prefixCls,
                    o = n.tabs,
                    i = n.animated,
                    s = n.destroyInactiveTab,
                    c = n.useLeftInsteadTransform,
                    u = this.state,
                    l = u.currentTab,
                    f = u.isMoving,
                    p = u.contentPos,
                    h = this.isTabVertical(),
                    b = r + '-content-wrap';
                  i && !f && (b += ' ' + b + '-animated');
                  var d = i
                      ? c
                        ? a()(
                            { position: 'relative' },
                            this.isTabVertical() ? { top: p } : { left: p },
                          )
                        : T(p)
                      : a()(
                          { position: 'relative' },
                          this.isTabVertical() ? { top: 100 * -l + '%' } : { left: 100 * -l + '%' },
                        ),
                    g = this.getTabBarBaseProps(),
                    m = g.instanceId;
                  return v.a.createElement(
                    'div',
                    { className: b, style: d, ref: this.setContentLayout },
                    o.map(function (n, a) {
                      var o = r + '-pane-wrap';
                      t.state.currentTab === a
                        ? (o += ' ' + o + '-active')
                        : (o += ' ' + o + '-inactive');
                      var i = n.key || 'tab_' + a;
                      return (
                        t.shouldRenderTab(a)
                          ? (t.tabCache[a] = t.getSubElement(n, a, e))
                          : s && (t.tabCache[a] = void 0),
                        v.a.createElement(
                          S,
                          {
                            key: i,
                            className: o,
                            active: l === a,
                            role: 'tabpanel',
                            'aria-hidden': l !== a,
                            'aria-labelledby': 'm-tabs-' + m + '-' + a,
                            fixX: h,
                            fixY: !h,
                          },
                          t.tabCache[a],
                        )
                      );
                    }),
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.prefixCls,
                    n = t.tabBarPosition,
                    r = t.tabDirection,
                    o = t.useOnPan,
                    i = t.noRenderContent,
                    s = this.isTabVertical(r),
                    c = a()({}, this.getTabBarBaseProps()),
                    u = !s && o ? this.onPan : {},
                    l = [
                      v.a.createElement(
                        'div',
                        { key: 'tabBar', className: e + '-tab-bar-wrap' },
                        this.renderTabBar(c, E),
                      ),
                      !i &&
                        v.a.createElement(
                          m['a'],
                          a()({ key: '$content', onSwipe: this.onSwipe }, u),
                          this.renderContent(),
                        ),
                    ];
                  return v.a.createElement(
                    'div',
                    { className: e + ' ' + e + '-' + r + ' ' + e + '-' + n },
                    'top' === n || 'left' === n ? l : l.reverse(),
                  );
                },
              },
            ]),
            e
          );
        })(B);
      (j.DefaultTabBar = E),
        (j.defaultProps = a()({}, B.defaultProps, { prefixCls: 'rmc-tabs', useOnPan: !0 }));
      var G = (function (t) {
        function e() {
          return (
            i()(this, e),
            l()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
          );
        }
        return p()(e, t), e;
      })(E);
      G.defaultProps = a()({}, E.defaultProps, { prefixCls: 'am-tabs-default-bar' });
      var N = (function (t) {
          function e() {
            i()(this, e);
            var t = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            return (
              (t.renderTabBar = function (e) {
                var n = t.props.renderTab;
                return h['createElement'](G, a()({}, e, { renderTab: n }));
              }),
              t
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'render',
                value: function () {
                  return h['createElement'](
                    j,
                    a()({ renderTabBar: this.renderTabBar }, this.props),
                  );
                },
              },
            ]),
            e
          );
        })(h['PureComponent']),
        A = N;
      (N.DefaultTabBar = G), (N.defaultProps = { prefixCls: 'am-tabs' });
      var z = n('1eom'),
        V = (function (t) {
          function e() {
            i()(this, e);
            var t = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            return (
              (t.renderIcon = function () {
                var e = t.props,
                  n = e.dot,
                  r = e.badge,
                  a = e.selected,
                  o = e.selectedIcon,
                  i = e.icon,
                  s = e.title,
                  c = e.prefixCls,
                  u = a ? o : i,
                  l = h['isValidElement'](u)
                    ? u
                    : h['createElement']('img', {
                        className: c + '-image',
                        src: u ? u.uri : u,
                        alt: s,
                      });
                return r
                  ? h['createElement'](
                      z['a'],
                      { text: r, className: c + '-badge tab-badge' },
                      ' ',
                      l,
                      ' ',
                    )
                  : n
                  ? h['createElement'](z['a'], { dot: !0, className: c + '-badge tab-dot' }, l)
                  : l;
              }),
              (t.onClick = function () {
                var e = t.props.onClick;
                e && e();
              }),
              t
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.title,
                    n = t.prefixCls,
                    r = t.selected,
                    o = t.unselectedTintColor,
                    i = t.tintColor,
                    s = r ? i : o;
                  return h['createElement'](
                    'div',
                    a()({}, this.props.dataAttrs, { onClick: this.onClick, className: '' + n }),
                    h['createElement'](
                      'div',
                      { className: n + '-icon', style: { color: s } },
                      this.renderIcon(),
                    ),
                    h['createElement'](
                      'p',
                      { className: n + '-title', style: { color: r ? i : o } },
                      e,
                    ),
                  );
                },
              },
            ]),
            e
          );
        })(h['PureComponent']),
        L = V,
        F = (function (t) {
          function e() {
            return (
              i()(this, e),
              l()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            );
          }
          return (
            p()(e, t),
            c()(e, [
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.prefixCls,
                    n = t.style;
                  return h['createElement']('div', { className: e, style: n }, this.props.children);
                },
              },
            ]),
            e
          );
        })(h['Component']);
      F.defaultProps = { prefixCls: 'am-tab-bar-item', title: '' };
      var R = (function (t) {
        function e() {
          i()(this, e);
          var t = l()(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return (
            (t.getTabs = function () {
              var e = [];
              return (
                h['Children'].forEach(t.props.children, function (t) {
                  t && e.push(a()({}, t.props));
                }),
                e
              );
            }),
            (t.renderTabBar = function () {
              var e = t.props,
                n = e.barTintColor,
                r = e.prefixCls,
                a = e.tintColor,
                o = e.unselectedTintColor,
                i = e.hidden,
                s = e.tabBarPosition,
                c = t.getTabs(),
                u = Array.isArray(c)
                  ? c.map(function (e, n) {
                      return h['createElement'](L, {
                        key: n,
                        prefixCls: t.props.prefixCls + '-tab',
                        badge: e.badge,
                        dot: e.dot,
                        selected: e.selected,
                        icon: e.icon,
                        selectedIcon: e.selectedIcon,
                        title: e.title,
                        tintColor: a,
                        unselectedTintColor: o,
                        dataAttrs: Object(b['a'])(e),
                        onClick: function () {
                          return e.onPress && e.onPress();
                        },
                      });
                    })
                  : null,
                l = r + '-bar';
              return (
                i && (l += ' ' + r + '-bar-hidden-' + s),
                h['createElement']('div', { className: l, style: { backgroundColor: n } }, u)
              );
            }),
            t
          );
        }
        return (
          p()(e, t),
          c()(e, [
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.prefixCls,
                  n = t.children,
                  r = t.animated,
                  a = t.swipeable,
                  o = t.noRenderContent,
                  i = t.prerenderingSiblingsNumber,
                  s = t.tabBarPosition,
                  c = this.getTabs(),
                  u = 0;
                return (
                  Array.isArray(c) &&
                    c.forEach(function (t, e) {
                      t.selected && (u = e);
                    }),
                  h['createElement'](
                    'div',
                    { className: e },
                    h['createElement'](
                      A,
                      {
                        tabs: c,
                        renderTabBar: this.renderTabBar,
                        tabBarPosition: s,
                        page: u < 0 ? void 0 : u,
                        animated: r,
                        swipeable: a,
                        noRenderContent: o,
                        prerenderingSiblingsNumber: i,
                      },
                      n,
                    ),
                  )
                );
              },
            },
          ]),
          e
        );
      })(h['Component']);
      (R.defaultProps = {
        prefixCls: 'am-tab-bar',
        barTintColor: 'white',
        tintColor: '#108ee9',
        hidden: !1,
        unselectedTintColor: '#888',
        placeholder: '\u6b63\u5728\u52a0\u8f7d',
        animated: !1,
        swipeable: !1,
        prerenderingSiblingsNumber: 1,
        tabBarPosition: 'bottom',
      }),
        (R.Item = F);
      e['a'] = R;
    },
    tJT9: function (t, e, n) {},
    u4Or: function (t, e, n) {
      var r = n('iorM'),
        a = n('N7Rc').f;
      n('k6n4')('getOwnPropertyDescriptor', function () {
        return function (t, e) {
          return a(r(t), e);
        };
      });
    },
    vvQG: function (t, e, n) {
      var r = n('MhL/'),
        a = n('9BGc');
      n('k6n4')('getPrototypeOf', function () {
        return function (t) {
          return a(r(t));
        };
      });
    },
    xx5R: function (t, e, n) {
      'use strict';
      n('zr+F'), n('tJT9');
    },
    zCLS: function (t, e, n) {
      'use strict';
      e['a'] = function (t) {
        return Object.keys(t).reduce(function (e, n) {
          return (
            ('aria-' !== n.substr(0, 5) && 'data-' !== n.substr(0, 5) && 'role' !== n) ||
              (e[n] = t[n]),
            e
          );
        }, {});
      };
    },
  },
]);
