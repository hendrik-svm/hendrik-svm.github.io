function j(s, Y) {
    s = s - 0x0;
    var V = d();
    var f = V[s];
    if (j['rNBtGN'] === undefined) {
        var b = function (O) {
            var n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            var m = '',
                E = '',
                U = m + b,
                C = ('' + function () {
                    return 0x0;
                })['indexOf']('\x0a') !== -0x1;
            for (var L = 0x0, R, q, y = 0x0; q = O['charAt'](y++); ~q && (R = L % 0x4 ? R * 0x40 + q : q, L++ % 0x4) ? m += C || U['charCodeAt'](y + 0xa) - 0xa !== 0x0 ? String['fromCharCode'](0xff & R >> (-0x2 * L & 0x6)) : L : 0x0) {
                q = n['indexOf'](q);
            }
            for (var K = 0x0, I = m['length']; K < I; K++) {
                E += '%' + ('00' + m['charCodeAt'](K)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(E);
        };
        j['vyXBOD'] = b, j['vWxbXF'] = {}, j['rNBtGN'] = !![];
    }
    var w = V[0x0],
        X = s + w,
        o = j['vWxbXF'][X];
    if (!o) {
        var O = function (n) {
            this['NudpcD'] = n, this['NaDWdN'] = [0x1, 0x0, 0x0], this['aMjzSh'] = function () {
                return 'newState';
            }, this['ENujAT'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*', this['PYVwjA'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
        };
        O['prototype']['cZfvIi'] = function () {
            var n = new RegExp(this['ENujAT'] + this['PYVwjA']),
                m = n['test'](this['aMjzSh']['toString']()) ? --this['NaDWdN'][0x1] : --this['NaDWdN'][0x0];
            return this['kQfREG'](m);
        }, O['prototype']['kQfREG'] = function (n) {
            if (!Boolean(~n)) return n;
            return this['HcVjFW'](this['NudpcD']);
        }, O['prototype']['HcVjFW'] = function (n) {
            for (var m = 0x0, E = this['NaDWdN']['length']; m < E; m++) {
                this['NaDWdN']['push'](Math['round'](Math['random']())), E = this['NaDWdN']['length'];
            }
            return n(this['NaDWdN'][0x0]);
        }, ('' + function () {
            return 0x0;
        })['indexOf']('\x0a') === -0x1 && new O(j)['cZfvIi'](), f = j['vyXBOD'](f), j['vWxbXF'][X] = f;
    } else f = o;
    return f;
}

function d() {
    var sq = ['mtHuyw5cvvq', 'muvOEhb6uq', 'nuXzDMrTCq', 'mJqXotHlr2D4t3u', 'mtiWmJy4ntzhz0Pwu3e', 'mtaYnJq5meXoB3njuW', 'mte0mxf5t0DlCq', 'ntC3nJy0ogvcz09uwq', 'ntu4nteXmZzqqMDUy2i', 'ndK4nZaXn1HKqNvzyq', 'mZeXmZqZnfPJs0HkDW'];
    d = function () {
        return sq;
    };
    return d();
}(function (s, Y) {
    var V = s();
    while (!![]) {
        try {
            var f = -parseInt(j(0x7)) / 0x1 * (parseInt(j(0x5)) / 0x2) + -parseInt(j(0x4)) / 0x3 + -parseInt(j(0x2)) / 0x4 * (-parseInt(j(0x8)) / 0x5) + -parseInt(j(0x9)) / 0x6 * (parseInt(j(0x1)) / 0x7) + -parseInt(j(0xa)) / 0x8 + -parseInt(j(0x6)) / 0x9 * (parseInt(j(0x0)) / 0xa) + parseInt(j(0x3)) / 0xb;
            if (f === Y) break;
            else V['push'](V['shift']());
        } catch (b) {
            V['push'](V['shift']());
        }
    }
}(d, 0xe4a00), (function () {
    var V = (function () {
            var J = !![];
            return function (H, i) {
                var u = J ? function () {
                    if (i) {
                        var M = i['apply'](H, arguments);
                        return i = null, M;
                    }
                } : function () {};
                return J = ![], u;
            };
        }()),
        f = V(this, function () {
            return f['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](f)['search']('(((.+)+)+)+$');
        });
    f();
    'use strict';
    var b = {
            'TGL1': 'sipd_data_tgl1',
            'TGL2': 'sipd_data_tgl2',
            'TGL1_DATE': 'sipd_tgl1_date',
            'TGL2_DATE': 'sipd_tgl2_date'
        },
        w = 0x320,
        X = 0x12c,
        o = ![],
        O = null,
        n = ![];

    function m(J) {
        if (!J) return '';
        J = String(J)['trim']()['replace'](/\s/g, '');
        if (J['indexOf']('1.') === 0x0) return '7.' + J['slice'](0x2);
        return J;
    }

    function E(J) {
        if (!J) return 0x0;
        return parseFloat(String(J)['replace'](/Rp\s?/g, '')['replace'](/\./g, '')['replace'](',', '.')) || 0x0;
    }

    function U(J) {
        if (J == null) return 'Rp0';
        return 'Rp' + Math['round'](J)['toLocaleString']('id-ID');
    }

    function C() {
        var J = document['querySelector']('input.flatpickr-input');
        return J ? J['value'] || null : null;
    }

    function L() {
        return window['location']['pathname']['indexOf']('/penatausahaan/dashboard') === 0x0;
    }

    function R() {
        return document['documentElement']['getAttribute']('data-theme') === 'dark';
    }

    function q(J) {
        var H = String(J)['split']('.');
        if (H['length'] !== 0x6) return ![];
        var u = [0x1, 0x1, 0x2, 0x2, 0x3, 0x5];
        for (var M = 0x0; M < 0x6; M++) {
            if (H[M]['length'] !== u[M]) return ![];
        }
        return !![];
    }

    function y(J) {
        if (q(J)) return 0x5;
        var H = String(J)['split']('.'),
            i = H['length'];
        if (i === 0x8) return 0x0;
        if (i <= 0x2) return 0x1;
        if (i === 0x3) return 0x2;
        if (i === 0x4) return 0x3;
        return 0x4;
    }

    function K(J) {
        var H = J['querySelector']('.text-sm.text-slate-800,\x20.text-sm.text-slate-300'),
            i = J['querySelector']('.txt-font-12');
        return (H ? H['innerText']['trim']() : 'NoName') + '||' + (i ? i['innerText']['trim']() : 'NoCode');
    }

    function I(J) {
        var H = new Set(),
            i = ![];

        function u() {
            if (i) return;
            i = !![];
            if (J) J();
        }

        function M() {
            if (n) {
                console['log']('[SIPD]\x20Dibatalkan\x20user'), u();
                return;
            }
            var s0 = document['querySelectorAll']('.cursor-pointer.grid.grid-cols-12'),
                s1 = null,
                s2 = '';
            for (var s3 = 0x0; s3 < s0['length']; s3++) {
                var s4 = K(s0[s3]);
                if (!H['has'](s4)) {
                    s1 = s0[s3], s2 = s4;
                    break;
                }
            }
            if (!s1) {
                setTimeout(function () {
                    if (n) {
                        u();
                        return;
                    }
                    var s6 = document['querySelectorAll']('.cursor-pointer.grid.grid-cols-12'),
                        s7 = ![];
                    for (var s8 = 0x0; s8 < s6['length']; s8++) {
                        if (!H['has'](K(s6[s8]))) {
                            s7 = !![];
                            break;
                        }
                    }
                    if (s7) setTimeout(M, w);
                    else {
                        console['log']('[SIPD]\x20Final\x20check\x20(polling)...'), S('Final\x20check...');
                        var s9 = 0x0,
                            ss = 0x11;

                        function sY() {
                            if (n) {
                                u();
                                return;
                            }
                            var sd = document['querySelectorAll']('.cursor-pointer.grid.grid-cols-12');
                            for (var sj = 0x0; sj < sd['length']; sj++) {
                                if (!H['has'](K(sd[sj]))) {
                                    console['log']('[SIPD]\x20Baris\x20baru\x20ditemukan\x20saat\x20polling'), setTimeout(M, w);
                                    return;
                                }
                            }
                            s9++, s9 < ss ? setTimeout(sY, 0x12c) : (console['log']('[SIPD]\x20Expand\x20selesai'), u());
                        }
                        setTimeout(sY, 0x0);
                    }
                }, X);
                return;
            }
            var s5 = document['querySelectorAll']('.grid.grid-cols-12')['length'];
            H['add'](s2), s1['scrollIntoView']({
                'behavior': 'instant',
                'block': 'center'
            }), s1['dispatchEvent'](new MouseEvent('click', {
                'bubbles': !![],
                'cancelable': !![],
                'view': window
            })), setTimeout(function () {
                if (n) {
                    u();
                    return;
                }
                var s6 = document['querySelectorAll']('.grid.grid-cols-12')['length'];
                if (s6 < s5) console['log']('[SIPD]\x20Re-expand:\x20' + s2), s1['dispatchEvent'](new MouseEvent('click', {
                    'bubbles': !![],
                    'cancelable': !![],
                    'view': window
                })), setTimeout(M, w);
                else s6 > s5 ? (console['log']('[SIPD]\x20Expand:\x20' + s2), setTimeout(M, w)) : (console['log']('[SIPD]\x20Leaf:\x20' + s2), setTimeout(M, X));
            }, w);
        }
        M();
    }

    function Q() {
        var J = document['querySelectorAll']('.grid.grid-cols-12'),
            H = {};
        for (var u = 0x0; u < J['length']; u++) {
            var M = J[u],
                s0 = M['querySelector']('.txt-font-12');
            if (!s0 || s0['textContent']['indexOf']('Kode:') === -0x1) continue;
            var s1 = m(s0['textContent']['replace']('Kode:', '')['trim']());
            if (!s1) continue;
            var s2 = M['querySelector']('.text-sm.text-slate-800,\x20.text-sm.text-slate-300');
            if (!s2) continue;
            var s3 = s2['textContent']['trim']();
            if (s3['indexOf']('...') === -0x1) continue;
            s2['dispatchEvent'](new MouseEvent('mouseenter', {
                'bubbles': !![],
                'cancelable': !![],
                'view': window
            }));
            var s4 = s2['getAttribute']('aria-describedby'),
                s5 = '';
            if (s4) {
                var s6 = document['getElementById'](s4);
                if (s6) {
                    var s7 = s6['querySelector']('.tippy-content') || s6;
                    s5 = s7['textContent']['replace'](/[\r\n]+/g, '\x20')['trim'](), s6['remove']();
                }
            }
            s2['dispatchEvent'](new MouseEvent('mouseleave', {
                'bubbles': !![],
                'cancelable': !![],
                'view': window
            }));
            if (!s5) {
                var s8 = document['querySelector']('[id^=\x22tippy-\x22][style*=\x22visible\x22],\x20[id^=\x22tippy-\x22]:not([style*=\x22display:\x20none\x22])');
                if (s8) {
                    var s7 = s8['querySelector']('.tippy-content') || s8;
                    s5 = s7['textContent']['replace'](/[\r\n]+/g, '\x20')['trim'](), s8['remove']();
                }
            }
            s5 && s5 !== s3 && (H[s1] = s5);
        }
        return H;
    }

    function a(J) {
        var H = J['parentElement'];
        while (H) {
            var i = H['querySelector']('.cursor-pointer.grid.grid-cols-12');
            if (i) {
                var u = i['querySelector']('.txt-font-12');
                if (u) {
                    var M = m(u['textContent']['replace']('Kode:', '')['trim']());
                    if (M && !q(M)) return M;
                }
            }
            H = H['parentElement'];
        }
        return '';
    }

    function Z(J) {
        var H = document['querySelectorAll']('.grid.grid-cols-12'),
            u = {};
        for (var M = 0x0; M < H['length']; M++) {
            var s0 = H[M],
                s1 = s0['querySelector']('.txt-font-12');
            if (!s1 || s1['textContent']['indexOf']('Kode:') === -0x1) continue;
            var s2 = m(s1['textContent']['replace']('Kode:', '')['trim']());
            if (!s2) continue;
            var s3 = s2,
                s4 = s2;
            if (q(s2)) {
                var s5 = a(s0);
                s5 && (s3 = s5 + '|' + s2);
            }
            var s6 = J && J[s2] || '';
            if (!s6) {
                var s7 = s0['querySelector']('.text-sm.text-slate-800,\x20.text-sm.text-slate-300');
                s6 = s7 ? s7['textContent']['trim']()['replace'](/\.\.\./g, '')['trim']() : '';
            }
            var s8 = 0x0,
                s9 = 0x0,
                ss = s0['querySelectorAll']('.container-table-td-2-column');
            for (var sY = 0x0; sY < ss['length']; sY++) {
                var sd = ss[sY],
                    sj = sd['querySelector']('span:last-child'),
                    sV = sd['querySelector']('span:first-child'),
                    sf = sj ? sj['textContent']['trim']() : '',
                    sb = sV ? sV['textContent']['trim']() : '';
                if (sf === 'Anggaran') s8 = E(sb);
                if (sf === 'Realisasi\x20Rill') s9 = E(sb);
            }
            u[s3] = {
                'kode': s3,
                'displayKode': s4,
                'uraian': s6,
                'anggaran': s8,
                'realisasi': s9
            };
        }
        return u;
    }

    function l(J, H) {
        if (J === 'A') {
            var i = localStorage['getItem'](b['TGL2_DATE']);
            if (i && H >= i) return t('Validasi\x20Tanggal', 'Tanggal\x20Awal\x20(' + H + ')\x20harus\x20lebih\x20kecil\x20dari\x20Tanggal\x20Akhir\x20(' + i + ').', 'OK'), ![];
        } else {
            if (J === 'B') {
                var u = localStorage['getItem'](b['TGL1_DATE']);
                if (u && u >= H) return t('Validasi\x20Tanggal', 'Tanggal\x20Akhir\x20(' + H + ')\x20harus\x20lebih\x20besar\x20dari\x20Tanggal\x20Awal\x20(' + u + ').', 'OK'), ![];
            }
        }
        return !![];
    }

    function W(J, H, i) {
        var u = J === 'A' ? b['TGL1'] : b['TGL2'],
            M = J === 'A' ? b['TGL1_DATE'] : b['TGL2_DATE'];
        localStorage['setItem'](u, JSON['stringify'](H)), localStorage['setItem'](M, i);
    }

    function v(J) {
        if (o) {
            t('Info', 'Sedang\x20memproses,\x20tunggu\x20selesai.', 'OK');
            return;
        }
        if (!L()) {
            t('Info', 'Buka\x20halaman\x20Dashboard\x20terlebih\x20dahulu.', 'OK');
            return;
        }
        var H = C();
        if (!H) {
            t('Info', 'Pilih\x20tanggal\x20terlebih\x20dahulu.', 'OK');
            return;
        }
        if (!l(J, H)) return;
        o = !![], n = ![], O = J;
        var i = J === 'A' ? 'Awal' : 'Akhir';
        S('Scan\x20' + i + '...'), k(), I(function () {
            if (n) {
                o = ![], G(), S('Dibatalkan'), console['log']('[SIPD]\x20Scan\x20dibatalkan\x20user');
                return;
            }
            var u = Q(),
                M = Z(u);
            W(J, M, H), o = ![], G(), x(J, H), T(), e(), S(i + '\x20selesai'), console['log']('[SIPD]\x20Scan\x20' + i + ':\x20' + Object['keys'](M)['length'] + '\x20item');
        });
    }

    function N() {
        var J = JSON['parse'](localStorage['getItem'](b['TGL1']) || 'null'),
            H = JSON['parse'](localStorage['getItem'](b['TGL2']) || 'null'),
            i = localStorage['getItem'](b['TGL1_DATE']) || 'Awal',
            u = localStorage['getItem'](b['TGL2_DATE']) || 'Akhir';
        if (!J || !H) {
            t('Error', 'Ambil\x20data\x20Tanggal\x20Awal\x20dan\x20Akhir\x20terlebih\x20dahulu.', 'OK');
            return;
        }
        var M = [],
            s0 = {};
        for (var s1 in J)
            if (J['hasOwnProperty'](s1)) s0[s1] = !![];
        for (var s1 in H)
            if (H['hasOwnProperty'](s1)) s0[s1] = !![];
        for (var s2 in s0) {
            var s3 = H[s2] || {
                    'kode': s2,
                    'uraian': J[s2] ? J[s2]['uraian'] : '',
                    'anggaran': 0x0,
                    'realisasi': 0x0
                },
                s4 = J[s2] || {
                    'realisasi': 0x0
                },
                s5 = s4['realisasi'] || 0x0,
                s6 = s3['realisasi'] || 0x0,
                s7 = s3['anggaran'] || s4['anggaran'] || 0x0,
                s8 = s3['uraian'] || s4['uraian'] || '',
                s9 = s6 - s5,
                ss = 0x0;
            s5 === 0x0 ? ss = s7 === 0x0 ? 0x0 : s9 / s7 * 0x64 : ss = s9 / s5 * 0x64;
            var sY = s7 === 0x0 ? 0x0 : s6 / s7 * 0x64;
            M['push']({
                'kode': s2,
                'displayKode': s3['displayKode'] || s2['split']('|')['pop']() || s2,
                'uraian': s8,
                'anggaran': s7,
                'realTgl1': s5,
                'realTgl2': s6,
                'selisih': s9,
                'persenTambahan': parseFloat(ss['toFixed'](0x2)),
                'persenTotal': parseFloat(sY['toFixed'](0x2))
            });
        }
        p(M, i, u);
    }

    function p(J, H, u) {
        var M = document['getElementById']('sipd-modal-c');
        if (M) M['remove']();
        var s0 = document['createElement']('div');
        s0['id'] = 'sipd-modal-c', s0['style']['cssText'] = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:center;font-family:system-ui,sans-serif;';
        var s1 = '';
        for (var s2 = 0x0; s2 < J['length']; s2++) {
            var s3 = J[s2],
                s4 = s3['displayKode'] || s3['kode'],
                s5 = q(s4),
                s6 = Math['round'](s3['selisih']),
                s7 = y(s4),
                s8 = s7 * 0x14,
                s9 = s7 * 0x10,
                ss = ['background:#f8fafc;', 'background:#fef3c7;', 'background:#fed7aa;', 'background:#bbf7d0;', 'background:#e9d5ff;', 'background:#bae6fd;'],
                sY = ss[Math['min'](s7, 0x5)] || '',
                sd = 'padding:6px\x208px;padding-left:' + s8 + 'px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:11px;' + (s5 ? 'font-weight:600;' : ''),
                sj = 'padding:6px\x208px;padding-left:' + s9 + 'px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:12px;',
                sV = 'padding:6px\x208px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:12px;text-align:right;';
            sV += s5 && s6 > 0x0 ? 'font-weight:700;' : 'font-weight:600;';
            s5 ? sV += 'color:#2563eb;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;' : sV += 'color:' + (s3['selisih'] >= 0x0 ? '#059669' : '#dc2626') + ';';
            var sf = s5 ? '\x20data-selisih=\x22' + s6 + '\x22' : '';
            s1 += '<tr\x20style=\x22' + sY + '\x22>' + '<td\x20style=\x22' + sd + '\x22>' + s4 + '</td>' + '<td\x20style=\x22' + sj + '\x22>' + s3['uraian'] + '</td>' + '<td\x20style=\x22padding:6px\x208px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:12px;text-align:right;\x22>' + U(s3['anggaran']) + '</td>' + '<td\x20style=\x22padding:6px\x208px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:12px;text-align:right;\x22>' + U(s3['realTgl1']) + '</td>' + '<td\x20style=\x22padding:6px\x208px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:12px;text-align:right;\x22>' + U(s3['realTgl2']) + '</td>' + '<td' + sf + '\x20style=\x22' + sV + '\x22>' + U(s3['selisih']) + '</td>' + '<td\x20style=\x22padding:6px\x208px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:12px;text-align:right;font-weight:600;color:' + (s3['persenTambahan'] >= 0x0 ? '#059669' : '#dc2626') + ';\x22>' + s3['persenTambahan']['toFixed'](0x2) + '%</td>' + '<td\x20style=\x22padding:6px\x208px;border-bottom:1px\x20solid\x20#e5e7eb;font-size:12px;text-align:right;\x22>' + s3['persenTotal']['toFixed'](0x2) + '%</td>' + '</tr>';
        }
        s0['innerHTML'] = '<div\x20style=\x22background:white;width:90vw;height:98vh;border-radius:12px;box-shadow:0\x2020px\x2060px\x20rgba(0,0,0,0.3);display:flex;flex-direction:column;\x22>' + '<div\x20style=\x22padding:16px\x2020px;border-bottom:1px\x20solid\x20#e5e7eb;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;\x22>' + '<div><span\x20style=\x22font-size:15px;font-weight:700;\x22>Hasil\x20Perbandingan</span>' + '<span\x20style=\x22font-size:13px;color:#6b7280;margin-left:16px;\x22>' + H + '\x20->\x20' + u + '</span>' + '<span\x20style=\x22font-size:13px;color:#6b7280;margin-left:12px;\x22>' + J['length'] + '\x20item</span></div>' + '<div\x20style=\x22display:flex;gap:8px;\x22>' + '<button\x20id=\x22sipd-export-btn\x22\x20style=\x22padding:8px\x2016px;background:#059669;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;\x22>Export\x20Excel</button>' + '<button\x20id=\x22sipd-close-c-btn\x22\x20style=\x22padding:8px\x2016px;background:#6b7280;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;\x22>Tutup</button>' + '</div></div>' + '<div\x20style=\x22overflow-x:auto;overflow-y:auto;flex:1;\x22\x20class=\x22sipd-table-wrapper\x22>' + '<table\x20style=\x22width:100%;border-collapse:collapse;min-width:900px;\x22>' + '<thead><tr\x20style=\x22position:sticky;top:0;background:#f3f4f6;\x22>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:left;\x22>Kode</th>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:left;\x22>Uraian</th>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;\x22>Anggaran</th>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;\x22>Real\x20' + H + '</th>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;\x22>Real\x20' + u + '</th>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;\x22>Selisih</th>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;\x22>%\x20Tambah</th>' + '<th\x20style=\x22padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;\x22>%\x20Total</th>' + '</tr></thead>' + '<tbody>' + s1 + '</tbody>' + '</table></div>' + '<div\x20style=\x22padding:10px\x2020px;border-top:1px\x20solid\x20#e5e7eb;font-size:11px;color:#9ca3af;text-align:center;\x22>*\x20&#x1f4cb;\x20Baris\x20biru\x20muda\x20=\x20klik\x20nilai\x20Selisih\x20untuk\x20copy\x20(contoh:\x20Rp81.142.319\x20=>\x2081142319).\x20%:\x20jika\x20Real\x20A=0\x20maka\x20(Selisih/Anggaran)\x20x\x20100</div>' + '</div>', document['body']['appendChild'](s0), document['getElementById']('sipd-close-c-btn')['addEventListener']('click', function () {
            s0['remove']();
        }), document['getElementById']('sipd-export-btn')['addEventListener']('click', function () {
            c(J, H, u);
        }), s0['addEventListener']('click', function (sX) {
            if (sX['target'] === s0) s0['remove']();
        });
        var sb = s0['querySelector']('tbody');
        sb['addEventListener']('click', function (sX) {
            var so = sX['target']['closest']('td[data-selisih]');
            if (!so) return;
            var sO = so['getAttribute']('data-selisih'),
                sn = ![];
            navigator['clipboard'] && navigator['clipboard']['writeText'] ? navigator['clipboard']['writeText'](sO)['then'](function () {
                sn = !![], sE(so);
            })['catch'](function () {
                sm(sO, so);
            }) : sm(sO, so);

            function sm(sU, sC) {
                var sL = document['createElement']('textarea');
                sL['value'] = sU, document['body']['appendChild'](sL), sL['select'](), document['execCommand']('copy'), document['body']['removeChild'](sL), sE(sC);
            }

            function sE(sU) {
                var sC = document['getElementById']('sipd-copy-tt');
                if (sC) sC['remove']();
                var sL = document['createElement']('div');
                sL['id'] = 'sipd-copy-tt', sL['textContent'] = 'Copied!', sL['style']['cssText'] = 'position:fixed;background:#059669;color:white;padding:4px\x2012px;border-radius:4px;font-size:12px;font-weight:600;z-index:100001;pointer-events:none;white-space:nowrap;box-shadow:0\x202px\x206px\x20rgba(0,0,0,0.2);';
                var sR = sU['getBoundingClientRect']();
                sL['style']['left'] = Math['max'](0x8, sR['left'] + sR['width'] / 0x2 - 0x20) + 'px', sL['style']['top'] = Math['max'](0x4, sR['top'] - 0x20) + 'px', document['body']['appendChild'](sL), setTimeout(function () {
                    document['getElementById']('sipd-copy-tt') && sL['remove']();
                }, 0x7d0);
            }
        });
        if (!document['getElementById']('sipd-tt-style')) {
            var sw = document['createElement']('style');
            sw['id'] = 'sipd-tt-style', sw['textContent'] = '#sipd-copy-tt{animation:sipd-fade-in\x200.15s\x20ease-out}@keyframes\x20sipd-fade-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}', document['head']['appendChild'](sw);
        }
    }

    function t(J, H, i) {
        var u = document['getElementById']('sipd-modal-s');
        if (u) u['remove']();
        var M = document['createElement']('div');
        M['id'] = 'sipd-modal-s', M['style']['cssText'] = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:flex-start;padding-top:80px;font-family:system-ui,sans-serif;', M['innerHTML'] = '<div\x20style=\x22background:white;border-radius:12px;box-shadow:0\x2020px\x2060px\x20rgba(0,0,0,0.3);width:440px;max-width:90vw;\x22>' + '<div\x20style=\x22padding:24px;\x22>' + '<h3\x20style=\x22margin:0\x200\x2016px;font-size:16px;font-weight:700;color:#111827;\x22>' + J + '</h3>' + '<p\x20style=\x22margin:0\x200\x2020px;font-size:14px;color:#374151;\x22>' + H + '</p>' + '<div\x20style=\x22text-align:right;\x22>' + '<button\x20id=\x22sipd-close-s-btn\x22\x20style=\x22padding:8px\x2020px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;\x22>' + (i || 'Tutup') + '</button>' + '</div></div></div>', document['body']['appendChild'](M), document['getElementById']('sipd-close-s-btn')['addEventListener']('click', function () {
            M['remove']();
        }), M['addEventListener']('click', function (s0) {
            if (s0['target'] === M) M['remove']();
        });
    }

    function k() {
        var J = document['getElementById']('sipd-loading-modal');
        if (J) J['remove']();
        if (!document['getElementById']('sipd-spin-style')) {
            var H = document['createElement']('style');
            H['id'] = 'sipd-spin-style', H['textContent'] = '@keyframes\x20sipd-spin{to{transform:rotate(360deg)}}', document['head']['appendChild'](H);
        }
        var i = O === 'A' ? 'Awal' : 'Akhir',
            u = document['createElement']('div');
        u['id'] = 'sipd-loading-modal', u['style']['cssText'] = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:center;font-family:system-ui,sans-serif;', u['innerHTML'] = '<div\x20style=\x22background:white;border-radius:12px;padding:24px\x2032px;box-shadow:0\x2020px\x2060px\x20rgba(0,0,0,0.3);text-align:center;\x22>' + '<div\x20style=\x22width:32px;height:32px;border:4px\x20solid\x20#3b82f6;border-top-color:transparent;border-radius:50%;animation:sipd-spin\x200.8s\x20linear\x20infinite;margin:0\x20auto\x2016px;\x22></div>' + '<p\x20style=\x22margin:0\x200\x2016px;font-size:14px;font-weight:600;color:#111827;\x22>Proses\x20Scanning\x20Data\x20Tanggal\x20' + i + '...</p>' + '<button\x20id=\x22sipd-batal-scan-btn\x22\x20style=\x22padding:6px\x2020px;background:#ef4444;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;\x22>Batal</button>' + '</div>', document['body']['appendChild'](u), document['getElementById']('sipd-batal-scan-btn')['addEventListener']('click', function () {
            n = !![];
        });
    }

    function G() {
        var J = document['getElementById']('sipd-loading-modal');
        if (J) J['remove']();
    }

    function x(J, H) {
        var i = document['getElementById']('sipd-modal-s');
        if (i) i['remove']();
        var u = J === 'A' ? 'Awal' : 'Akhir',
            M = document['createElement']('div');
        M['id'] = 'sipd-modal-s', M['style']['cssText'] = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:flex-start;padding-top:80px;font-family:system-ui,sans-serif;', M['innerHTML'] = '<div\x20style=\x22background:white;border-radius:12px;box-shadow:0\x2020px\x2060px\x20rgba(0,0,0,0.3);width:440px;max-width:90vw;\x22>' + '<div\x20style=\x22padding:24px;text-align:center;\x22>' + '<div\x20style=\x22font-size:40px;margin-bottom:12px;\x22>&#x2705;</div>' + '<h3\x20style=\x22margin:0\x200\x208px;font-size:16px;font-weight:700;color:#166534;\x22>Sukses\x20ambil\x20data</h3>' + '<p\x20style=\x22margin:0\x200\x2020px;font-size:14px;color:#374151;\x22>Tanggal\x20' + u + '\x20' + H + '</p>' + '<button\x20id=\x22sipd-close-s-btn\x22\x20style=\x22padding:8px\x2024px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;\x22>OK</button>' + '</div></div>', document['body']['appendChild'](M), document['getElementById']('sipd-close-s-btn')['addEventListener']('click', function () {
            M['remove']();
        }), M['addEventListener']('click', function (s0) {
            if (s0['target'] === M) M['remove']();
        }), setTimeout(function () {
            document['getElementById']('sipd-modal-s') && M['remove']();
        }, 0x1388);
    }

    function c(J, H, u) {
        var M = [];
        for (var s0 = 0x0; s0 < J['length']; s0++) {
            var s1 = J[s0],
                s2 = {};
            s2['Kode'] = s1['displayKode'] || s1['kode'], s2['Uraian'] = s1['uraian'], s2['Anggaran'] = s1['anggaran'], s2['Realisasi\x20' + H] = s1['realTgl1'], s2['Realisasi\x20' + u] = s1['realTgl2'], s2['Selisih'] = s1['selisih'], s2['%\x20Tambahan'] = s1['persenTambahan'], s2['%\x20Total'] = s1['persenTotal'], M['push'](s2);
        }
        var s3 = XLSX['utils']['json_to_sheet'](M);
        s3['!cols'] = [{
            'wch': 0x1c
        }, {
            'wch': 0x5a
        }, {
            'wch': 0x16
        }, {
            'wch': 0x16
        }, {
            'wch': 0x16
        }, {
            'wch': 0x16
        }, {
            'wch': 0x19
        }, {
            'wch': 0x16
        }];
        var s4 = XLSX['utils']['book_new']();
        XLSX['utils']['book_append_sheet'](s4, s3, 'Perbandingan'), XLSX['writeFile'](s4, 'Laporan_SIPD_' + u['replace'](/\//g, '-') + '.xlsx');
    }

    function S(J) {
        var H = document['getElementById']('sipd-status');
        if (H) H['textContent'] = J;
    }

    function T() {
        var J = localStorage['getItem'](b['TGL1_DATE']) || '-',
            H = localStorage['getItem'](b['TGL2_DATE']) || '-',
            i = document['getElementById']('sipd-lbl1'),
            u = document['getElementById']('sipd-lbl2');
        if (i) i['textContent'] = J;
        if (u) u['textContent'] = H;
    }

    function e() {
        var J = localStorage['getItem'](b['TGL1']),
            H = localStorage['getItem'](b['TGL2']),
            i = document['getElementById']('sipd-btn-cmp');
        i && (i['style']['display'] = J && H ? 'block' : 'none');
    }

    function z() {
        if (document['getElementById']('sipd-panel')) return;
        var J = R(),
            H = document['createElement']('div');
        H['id'] = 'sipd-panel', H['style']['cssText'] = 'position:fixed;bottom:70px;right:20px;z-index:99999;display:none;background:' + (J ? '#1f2937' : 'white') + ';border:1px\x20solid\x20' + (J ? '#374151' : '#e5e7eb') + ';border-radius:12px;padding:16px;box-shadow:0\x2010px\x2025px\x20rgba(0,0,0,0.15);width:240px;font-family:system-ui,sans-serif;', H['innerHTML'] = '<div\x20style=\x22display:flex;justify-content:space-between;margin-bottom:12px;\x22>' + '<b\x20style=\x22color:' + (J ? '#f3f4f6' : '#111827') + ';\x22>SIPD\x20Tools</b>' + '<button\x20id=\x22sipd-close-pn\x22\x20style=\x22background:none;border:none;cursor:pointer;font-size:18px;color:' + (J ? '#9ca3af' : '#6b7280') + ';\x22>&times;</button>' + '</div>' + '<div\x20style=\x22margin-bottom:4px;\x22>' + '<div\x20style=\x22font-size:12px;font-weight:600;color:' + (J ? '#d1d5db' : '#374151') + ';margin-bottom:2px;\x22>Tanggal\x20Awal</div>' + '<div\x20id=\x22sipd-lbl1\x22\x20style=\x22font-size:13px;color:' + (J ? '#9ca3af' : '#6b7280') + ';margin-bottom:6px;\x22>-</div>' + '<button\x20id=\x22sipd-btn-scan-a\x22\x20style=\x22width:100%;padding:8px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;\x22>Ambil\x20Data\x20Awal</button>' + '</div>' + '<div\x20style=\x22border-top:1px\x20solid\x20' + (J ? '#374151' : '#e5e7eb') + ';margin:10px\x200;\x22></div>' + '<div\x20style=\x22margin-bottom:4px;\x22>' + '<div\x20style=\x22font-size:12px;font-weight:600;color:' + (J ? '#d1d5db' : '#374151') + ';margin-bottom:2px;\x22>Tanggal\x20Akhir</div>' + '<div\x20id=\x22sipd-lbl2\x22\x20style=\x22font-size:13px;color:' + (J ? '#9ca3af' : '#6b7280') + ';margin-bottom:6px;\x22>-</div>' + '<button\x20id=\x22sipd-btn-scan-b\x22\x20style=\x22width:100%;padding:8px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;\x22>Ambil\x20Data\x20Akhir</button>' + '</div>' + '<div\x20style=\x22border-top:1px\x20solid\x20' + (J ? '#374151' : '#e5e7eb') + ';margin:10px\x200;\x22></div>' + '<button\x20id=\x22sipd-btn-cmp\x22\x20style=\x22width:100%;padding:10px;background:#059669;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:14px;display:none;\x22>Bandingkan</button>' + '<div\x20id=\x22sipd-status\x22\x20style=\x22font-size:11px;color:' + (J ? '#9ca3af' : '#6b7280') + ';text-align:center;margin-top:8px;\x22>Siap</div>', document['body']['appendChild'](H), document['getElementById']('sipd-btn-scan-a')['addEventListener']('click', function () {
            v('A');
        }), document['getElementById']('sipd-btn-scan-b')['addEventListener']('click', function () {
            v('B');
        }), document['getElementById']('sipd-btn-cmp')['addEventListener']('click', N), document['getElementById']('sipd-close-pn')['addEventListener']('click', function () {
            document['getElementById']('sipd-panel')['style']['display'] = 'none';
        }), T(), e();
    }

    function F() {
        var J = document['getElementById']('sipd-tog');
        if (J) J['remove']();
        var H = document['getElementById']('sipd-panel');
        if (H) H['remove']();
    }

    function P() {
        if (document['getElementById']('sipd-tog')) return;
        var J = document['createElement']('button');
        J['id'] = 'sipd-tog', J['innerHTML'] = '&#x26A1;', J['title'] = 'Panel\x20SIPD\x20Tools', J['style']['cssText'] = 'position:fixed;bottom:20px;right:20px;z-index:99998;background:#3b82f6;color:white;border:none;border-radius:50%;width:48px;height:48px;font-size:22px;cursor:pointer;box-shadow:0\x204px\x2012px\x20rgba(59,130,246,0.4);display:flex;align-items:center;justify-content:center;', J['addEventListener']('click', function () {
            var H = document['getElementById']('sipd-panel');
            if (H) {
                var i = H['style']['display'] === 'none' || H['style']['display'] === '';
                H['style']['display'] = i ? 'block' : 'none';
            }
        }), document['body']['appendChild'](J);
    }

    function D(J) {
        var H = document['querySelectorAll']('div.group');
        for (var u = 0x0; u < H['length']; u++) {
            var M = H[u]['getAttribute']('style') || '';
            M['indexOf']('position:\x20fixed') !== -0x1 && M['indexOf']('bottom:') !== -0x1 && (H[u]['style']['display'] = J ? 'none' : '');
        }
    }
    var A = '',
        B = null;

    function h() {
        L() ? (P(), z(), T(), e(), D(!![]), !B && (B = setInterval(function () {
            if (L()) D(!![]);
        }, 0x7d0))) : (F(), D(![]), B && (clearInterval(B), B = null));
    }

    function g() {
        A = window['location']['pathname'], setInterval(function () {
            window['location']['pathname'] !== A && (A = window['location']['pathname'], h());
        }, 0x1f4), window['addEventListener']('popstate', function () {
            A = window['location']['pathname'], setTimeout(h, 0x64);
        });
    }

    function r() {
        console['log']('[SIPD]\x20Initializing\x20v9...'), h(), g(), console['log']('[SIPD]\x20Siap!');
    }
    document['readyState'] === 'loading' ? document['addEventListener']('DOMContentLoaded', r) : r();
}()));