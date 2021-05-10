(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    '0lfv': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return n;
      }),
        a.d(t, 'c', function () {
          return c;
        }),
        a.d(t, 'd', function () {
          return o;
        }),
        a.d(t, 'a', function () {
          return r;
        });
      var n = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        c = (e, t) => {
          var a = n(),
            c = Object.keys(a).find((t) => a[t].author === e) || '',
            o = a[c].apps || [];
          return o.find((e) => e.name === t);
        },
        o = (e) => localStorage.setItem('dataSource', JSON.stringify(e)),
        r = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
    },
    '9wEh': function (e, t, a) {
      e.exports = {
        tabBarIcon: 'tabBarIcon___2UzHF',
        homeIcon: 'homeIcon___2Ufcb',
        subscribe: 'subscribe___1hRv8',
        my: 'my___qSs-Y',
        'fixed-bottom': 'fixed-bottom___3SOa0',
        avatar: 'avatar___cLhLo',
      };
    },
    t3KT: function (e, t, a) {
      'use strict';
      a.r(t);
      a('BBVc');
      var n = a('qkV3'),
        c = a('Wval'),
        o = a('xwgP'),
        r = a.n(o),
        i = a('9kvl'),
        l = a('9wEh'),
        s = a.n(l),
        u = a('0lfv'),
        m = (e) => {
          var t = e.icon;
          return r.a.createElement('div', {
            className: ''.concat(s.a.tabBarIcon, ' ').concat(s.a[t]),
          });
        },
        b = [
          {
            title: '\u9996\u9875',
            link: '/menu',
            icon: r.a.createElement(m, { icon: 'homeIcon' }),
          },
          {
            title: '\u8ba2\u9605',
            link: '/menu/subscribe',
            icon: r.a.createElement(m, { icon: 'subscribe' }),
          },
          { title: '', link: '/menu/myInfo', icon: r.a.createElement(m, { icon: '' }) },
        ],
        d = (e) => {
          var t = e.children,
            a = e.location,
            l = a.query,
            m = l.scriptable,
            d = Object(i['d'])('initialiseModel', (e) => e),
            f = d.setScriptable,
            p = d.isScriptable,
            _ = Object(i['d'])('boxjsModel', (e) => e),
            h = Object(o['useState'])([]),
            v = Object(c['a'])(h, 2),
            k = v[0],
            E = v[1];
          return (
            Object(o['useEffect'])(() => {
              !!m === p || p || f(!!m);
              var e = _.data.usercfgs ? _.data.usercfgs.icon : u['a'];
              (b[2].icon = r.a.createElement('img', {
                alt: '\u5934\u50cf',
                src: e,
                className: s.a.avatar,
              })),
                E(b);
            }, [_.data, p, m, f]),
            r.a.createElement(
              r.a.Fragment,
              null,
              t,
              r.a.createElement(
                'footer',
                { className: s.a['fixed-bottom'] },
                r.a.createElement(
                  n['a'],
                  {
                    unselectedTintColor: '#949494',
                    tintColor: '#33A3F4',
                    barTintColor: 'white',
                    noRenderContent: !0,
                  },
                  k.map((e) =>
                    r.a.createElement(n['a'].Item, {
                      title: e.title,
                      key: e.link,
                      icon: e.icon,
                      selectedIcon: e.icon,
                      selected: a.pathname === e.link,
                      onPress: () => {
                        a.pathname !== e.link && i['a'].push(e.link);
                      },
                    }),
                  ),
                ),
              ),
            )
          );
        };
      t['default'] = d;
    },
  },
]);
