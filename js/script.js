function _0x2900(_0x92af03, _0x347669) {
    const _0xa4c4a9 = _0xa4c4();
    return _0x2900 = function (_0x2900c3, _0x5c365b) {
        _0x2900c3 = _0x2900c3 - 0x1f1;
        let _0x51d83b = _0xa4c4a9[_0x2900c3];
        return _0x51d83b;
    }, _0x2900(_0x92af03, _0x347669);
}(function (_0x53abef, _0x35c099) {
    const _0x1c0192 = _0x2900,
        _0x4e6459 = _0x53abef();
    while (!![]) {
        try {
            const _0x422d6c = -parseInt(_0x1c0192(0x311)) / 0x1 * (-parseInt(_0x1c0192(0x315)) / 0x2) + parseInt(_0x1c0192(0x2e6)) / 0x3 + -parseInt(_0x1c0192(0x231)) / 0x4 * (parseInt(_0x1c0192(0x245)) / 0x5) + parseInt(_0x1c0192(0x2e7)) / 0x6 + parseInt(_0x1c0192(0x2f4)) / 0x7 * (parseInt(_0x1c0192(0x243)) / 0x8) + -parseInt(_0x1c0192(0x23d)) / 0x9 * (-parseInt(_0x1c0192(0x307)) / 0xa) + -parseInt(_0x1c0192(0x298)) / 0xb;
            if (_0x422d6c === _0x35c099) break;
            else _0x4e6459['push'](_0x4e6459['shift']());
        } catch (_0x271267) {
            _0x4e6459['push'](_0x4e6459['shift']());
        }
    }
}(_0xa4c4, 0x9e108), (function () {
    'use strict';
    $(document)['ready'](function () {
        const _0x667f74 = _0x2900,
            _0x1697c0 = location[_0x667f74(0x2ba)],
            _0x39f5ce = document['querySelector'](_0x667f74(0x2bd))['textContent'][_0x667f74(0x20b)]();
        if (_0x4ddb56 == null) {
            var _0x4ddb56 = {
                'apiKey': _0x667f74(0x1fc),
                'authDomain': _0x667f74(0x2a7),
                'databaseURL': _0x667f74(0x2dd),
                'projectId': 'hendrik-svm',
                'storageBucket': _0x667f74(0x303),
                'messagingSenderId': _0x667f74(0x310),
                'appId': _0x667f74(0x2cb),
                'measurementId': _0x667f74(0x27b)
            };
            !firebase['apps'][_0x667f74(0x22d)] && firebase[_0x667f74(0x2b6)](_0x4ddb56);
            var _0xcbd1f1 = firebase[_0x667f74(0x28e)]();
        }
        const _0x3952a9 = _0xcbd1f1[_0x667f74(0x2ff)]('ekin_pegawai_2024'),
            _0x28347d = _0xcbd1f1['collection']('ekin_tpp_2024');
        localStorage[_0x667f74(0x24a)] == null && (localStorage['uraianTugas'] = '', localStorage[_0x667f74(0x24e)] = '', localStorage['analisisTugas'] = '', localStorage['valAnalisisTugas'] = '', localStorage[_0x667f74(0x2b9)] = '', localStorage[_0x667f74(0x274)] = '', localStorage['valTanggal'] = '', localStorage['jam'] = '', localStorage['nilaiJam'] = '', localStorage['valJam'] = '', localStorage[_0x667f74(0x20d)] = '', localStorage[_0x667f74(0x270)] = '', localStorage[_0x667f74(0x2e1)] = '', localStorage[_0x667f74(0x228)] = '', localStorage[_0x667f74(0x23e)] = '', localStorage['rbTipePegawai'] = '');
        var _0x323484 = {
            'uraianTugas': localStorage[_0x667f74(0x24a)],
            'valUraianTugas': localStorage[_0x667f74(0x24e)],
            'analisisTugas': localStorage[_0x667f74(0x256)],
            'valAnalisisTugas': localStorage[_0x667f74(0x302)],
            'tanggal': localStorage[_0x667f74(0x2b9)],
            'nilaiTanggal': localStorage[_0x667f74(0x274)],
            'valTanggal': localStorage['valTanggal'],
            'jam': localStorage[_0x667f74(0x2f8)],
            'nilaiJam': localStorage[_0x667f74(0x2d8)],
            'valJam': localStorage[_0x667f74(0x23a)],
            'durasi': localStorage['durasi'],
            'namaPekerjaan': localStorage[_0x667f74(0x270)],
            'hasilPekerjaan': localStorage['hasilPekerjaan'],
            'tmpUraianTugas': '',
            'tmpValUraianTugas': '',
            'tmpAnalisisTugas': '',
            'tmpValAnalisisTugas': '',
            'tmpTanggal': '',
            'tmpJam': '',
            'tmpMenit': '',
            'tmpDurasi': '',
            'cek1': ![],
            'cek2': ![],
            'uraianTugasArray': '',
            'total': 0x0,
            'dataPeg': ''
        };
        localStorage[_0x667f74(0x24a)] = _0x323484[_0x667f74(0x24a)], localStorage[_0x667f74(0x24e)] = _0x323484['valUraianTugas'], localStorage[_0x667f74(0x256)] = _0x323484[_0x667f74(0x256)], localStorage[_0x667f74(0x302)] = _0x323484[_0x667f74(0x302)], localStorage[_0x667f74(0x2b9)] = _0x323484[_0x667f74(0x2b9)], localStorage[_0x667f74(0x274)] = _0x323484['nilaiTanggal'], localStorage[_0x667f74(0x28c)] = _0x323484[_0x667f74(0x28c)], localStorage['jam'] = _0x323484[_0x667f74(0x2f8)], localStorage[_0x667f74(0x2d8)] = _0x323484[_0x667f74(0x2d8)], localStorage[_0x667f74(0x23a)] = _0x323484[_0x667f74(0x23a)], localStorage['durasi'] = _0x323484[_0x667f74(0x20d)], localStorage[_0x667f74(0x270)] = _0x323484[_0x667f74(0x270)], localStorage['hasilPekerjaan'] = _0x323484[_0x667f74(0x2e1)];

        function _0x140d9d(_0x35e8eb, _0x2fe9b2) {
            return new Date(_0x2fe9b2, _0x35e8eb, 0x0)['getDate']();
        }

        function _0x3aa3b8() {
            const _0xc8788c = _0x667f74;
            localStorage[_0xc8788c(0x24a)] = '', localStorage[_0xc8788c(0x24e)] = '', localStorage[_0xc8788c(0x256)] = '', localStorage[_0xc8788c(0x302)] = '', localStorage['tanggal'] = '', localStorage[_0xc8788c(0x274)] = '', localStorage[_0xc8788c(0x28c)] = '', localStorage['jam'] = '', localStorage[_0xc8788c(0x2d8)] = '', localStorage[_0xc8788c(0x23a)] = '', localStorage[_0xc8788c(0x290)] = '', localStorage[_0xc8788c(0x262)] = '', localStorage[_0xc8788c(0x20d)] = '', localStorage[_0xc8788c(0x270)] = '', localStorage[_0xc8788c(0x2e1)] = '', _0x323484[_0xc8788c(0x24a)] = localStorage[_0xc8788c(0x24a)], _0x323484[_0xc8788c(0x24e)] = localStorage[_0xc8788c(0x24e)], _0x323484[_0xc8788c(0x256)] = localStorage[_0xc8788c(0x256)], _0x323484[_0xc8788c(0x302)] = localStorage['valAnalisisTugas'], _0x323484[_0xc8788c(0x2b9)] = localStorage[_0xc8788c(0x2b9)], _0x323484[_0xc8788c(0x274)] = localStorage[_0xc8788c(0x274)], _0x323484['valTanggal'] = localStorage[_0xc8788c(0x28c)], _0x323484['jam'] = localStorage[_0xc8788c(0x2f8)], _0x323484[_0xc8788c(0x2d8)] = localStorage['nilaiJam'], _0x323484[_0xc8788c(0x23a)] = localStorage[_0xc8788c(0x23a)], _0x323484[_0xc8788c(0x290)] = localStorage[_0xc8788c(0x290)], _0x323484['nMenit'] = localStorage[_0xc8788c(0x262)], _0x323484[_0xc8788c(0x20d)] = localStorage['durasi'], _0x323484['namaPekerjaan'] = localStorage['namaPekerjaan'], _0x323484[_0xc8788c(0x2e1)] = localStorage[_0xc8788c(0x2e1)];
        }
        $(_0x667f74(0x209))[_0x667f74(0x2c4)](_0x667f74(0x202));
        document[_0x667f74(0x20a)](_0x667f74(0x2bd)) != null && (localStorage['nip'] == null || localStorage['nip'] == '' ? (localStorage['nip'] = _0x39f5ce, !isNaN(parseInt(_0x39f5ce)) && window[_0x667f74(0x2cf)][_0x667f74(0x2fb)](_0x667f74(0x292))) : localStorage[_0x667f74(0x261)] != _0x39f5ce && (localStorage[_0x667f74(0x261)] = _0x39f5ce, !isNaN(parseInt(_0x39f5ce)) && window['location'][_0x667f74(0x2fb)](_0x667f74(0x292))));
        if (!isNaN(parseInt(_0x39f5ce))) {
            if ($(_0x667f74(0x27a)) != '') {
                if ($('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content-header\x20>\x20h1')[_0x667f74(0x26f)]()[_0x667f74(0x20b)]() == _0x667f74(0x229)) {
                    let _0x41a158 = {
                        'nama': $('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.container-fluid\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(1)\x20>\x20td:nth-child(3)')[_0x667f74(0x26f)]()['trim'](),
                        'nip': $(_0x667f74(0x2ce))[_0x667f74(0x26f)]()[_0x667f74(0x20b)](),
                        'pangkat': $(_0x667f74(0x2d9))['text']()[_0x667f74(0x20b)](),
                        'jabatan': $(_0x667f74(0x2a6))['text']()[_0x667f74(0x20b)](),
                        'unit': $('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.container-fluid\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(5)\x20>\x20td:nth-child(3)')['text']()[_0x667f74(0x20b)](),
                        'atasan': $('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.container-fluid\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(6)\x20>\x20td:nth-child(3)')[_0x667f74(0x26f)]()[_0x667f74(0x20b)]()
                    };
                    _0x41a158['nip'] != '' && _0x41a158[_0x667f74(0x2e0)] != '' && _0x3952a9[_0x667f74(0x22f)]('nip', '==', _0x41a158[_0x667f74(0x261)])[_0x667f74(0x22f)](_0x667f74(0x2e0), '==', _0x41a158[_0x667f74(0x2e0)])['get']()[_0x667f74(0x2bb)](_0x24b46e => {
                        const _0x5973e1 = _0x667f74;
                        !_0x24b46e[_0x5973e1(0x211)][_0x5973e1(0x2a9)] && (_0x24b46e[_0x5973e1(0x2b0)] && _0x3952a9[_0x5973e1(0x227)]({
                            'nama': _0x41a158['nama'],
                            'nip': _0x41a158[_0x5973e1(0x261)],
                            'pangkat': _0x41a158[_0x5973e1(0x25a)],
                            'jabatan': _0x41a158[_0x5973e1(0x2e0)],
                            'unit': _0x41a158[_0x5973e1(0x2b1)],
                            'atasan': _0x41a158[_0x5973e1(0x2ad)],
                            'OPD': '',
                            'created_at': _0x57f823(),
                            'updated_at': _0x57f823()
                        })[_0x5973e1(0x2bb)](() => {
                            const _0x3aba1c = _0x5973e1;
                            localStorage[_0x3aba1c(0x261)] = _0x41a158['nip'], localStorage[_0x3aba1c(0x2e0)] = _0x41a158[_0x3aba1c(0x2e0)];
                        })['catch'](_0x1059fc => {}));
                    });
                }
            }
        }
        if ($(_0x667f74(0x27a)) != '') {
            if ($(_0x667f74(0x27a))[_0x667f74(0x26f)]()[_0x667f74(0x20b)]() == _0x667f74(0x2ed)) {
                $(_0x667f74(0x267))[_0x667f74(0x244)](_0x667f74(0x247)), $(_0x667f74(0x24f))[_0x667f74(0x2c4)](_0x667f74(0x2de)), $('#tgl_input')['after']('\x0a<div\x20id=\x22tgl_indo\x22\x20style=\x22color:blue\x22></div>\x0a');
                var _0x329bc5 = new Vue({
                    'el': _0x667f74(0x1fa),
                    'data': _0x323484,
                    'methods': {
                        'tanggalHapus': function () {
                            const _0x22d434 = _0x667f74;
                            document[_0x22d434(0x20a)](_0x22d434(0x208))[_0x22d434(0x2df)] = ![], document[_0x22d434(0x20a)]('#tanggalNext')[_0x22d434(0x2df)] = ![];
                        },
                        'jamHapus': () => {
                            const _0x528721 = _0x667f74;
                            document[_0x528721(0x20a)]('#jamTetap')[_0x528721(0x2df)] = ![], document['querySelector'](_0x528721(0x29b))[_0x528721(0x2df)] = ![];
                        },
                        'setKegiatan': () => {},
                        'saveKegiatan': () => {
                            const _0x291f18 = _0x667f74;
                            $(_0x291f18(0x1f6))[_0x291f18(0x25d)]() == '' && (Swal[_0x291f18(0x25b)]({
                                'icon': 'error',
                                'title': _0x291f18(0x2f5),
                                'text': _0x291f18(0x214)
                            }), e[_0x291f18(0x305)]);
                            localStorage['uraianTugas'] = $(_0x291f18(0x281))['text'](), localStorage[_0x291f18(0x24e)] = $(_0x291f18(0x2ae))[_0x291f18(0x25d)]()[_0x291f18(0x260)]('@')[0x0], localStorage['analisisTugas'] = $('#m_analisis_tugas\x20option:selected')['text'](), localStorage[_0x291f18(0x302)] = $(_0x291f18(0x1f6))[_0x291f18(0x25d)]()[_0x291f18(0x260)]('@')[0x0], localStorage['durasi'] = $('#m_durasi_input')[_0x291f18(0x25d)](), _0x323484[_0x291f18(0x24a)] = $(_0x291f18(0x281))['text'](), _0x323484['valUraianTugas'] = $(_0x291f18(0x2ae))['val']()[_0x291f18(0x260)]('@')[0x0], _0x323484[_0x291f18(0x256)] = $(_0x291f18(0x238))[_0x291f18(0x26f)](), _0x323484['valAnalisisTugas'] = $(_0x291f18(0x1f6))[_0x291f18(0x25d)]()['split']('@')[0x0], _0x323484[_0x291f18(0x20d)] = $(_0x291f18(0x216))[_0x291f18(0x25d)]();
                            if (document[_0x291f18(0x20a)](_0x291f18(0x208))['checked'] == !![]) localStorage[_0x291f18(0x28c)] = document[_0x291f18(0x20a)](_0x291f18(0x208))['value'], localStorage[_0x291f18(0x274)] = _0x323484[_0x291f18(0x2c2)], localStorage['tanggal'] = '(\x20' + _0x267675(_0x323484[_0x291f18(0x2c2)]) + '\x20)\x20Lock\x20Tanggal', _0x323484[_0x291f18(0x28c)] = localStorage[_0x291f18(0x28c)], _0x323484[_0x291f18(0x274)] = localStorage[_0x291f18(0x274)], _0x323484['tanggal'] = localStorage['tanggal'];
                            else document[_0x291f18(0x20a)]('#tanggalTetap')[_0x291f18(0x2df)] == ![] && document[_0x291f18(0x20a)](_0x291f18(0x294))[_0x291f18(0x2df)] == !![] ? (localStorage[_0x291f18(0x28c)] = document[_0x291f18(0x20a)](_0x291f18(0x294))['value'], localStorage[_0x291f18(0x274)] = _0x323484[_0x291f18(0x2c2)], localStorage[_0x291f18(0x2b9)] = _0x291f18(0x2c0), _0x323484[_0x291f18(0x28c)] = localStorage[_0x291f18(0x28c)], _0x323484['nilaiTanggal'] = localStorage[_0x291f18(0x274)], _0x323484[_0x291f18(0x2b9)] = localStorage[_0x291f18(0x2b9)]) : (localStorage['valTanggal'] = '', localStorage['nilaiTanggal'] = '', localStorage[_0x291f18(0x2b9)] = '', _0x323484['valTanggal'] = localStorage[_0x291f18(0x28c)], _0x323484[_0x291f18(0x274)] = localStorage[_0x291f18(0x274)], _0x323484[_0x291f18(0x2b9)] = localStorage[_0x291f18(0x2b9)]);
                            if (document[_0x291f18(0x20a)]('#jamTetap')[_0x291f18(0x2df)] == !![]) localStorage['valJam'] = document[_0x291f18(0x20a)](_0x291f18(0x239))['value'], localStorage[_0x291f18(0x2d8)] = _0x323484['tmpJam'], localStorage['jam'] = '(\x20' + _0x323484[_0x291f18(0x30a)] + _0x291f18(0x23f), _0x323484[_0x291f18(0x23a)] = localStorage[_0x291f18(0x23a)], _0x323484[_0x291f18(0x2d8)] = localStorage[_0x291f18(0x2d8)], _0x323484['jam'] = localStorage[_0x291f18(0x2f8)];
                            else document[_0x291f18(0x20a)]('#jamTetap')[_0x291f18(0x2df)] == ![] && document[_0x291f18(0x20a)](_0x291f18(0x29b))[_0x291f18(0x2df)] == !![] ? (localStorage[_0x291f18(0x23a)] = document[_0x291f18(0x20a)](_0x291f18(0x29b))[_0x291f18(0x219)], localStorage['nilaiJam'] = _0x323484[_0x291f18(0x30a)], localStorage[_0x291f18(0x20d)] = _0x323484[_0x291f18(0x2ca)], localStorage['jam'] = _0x291f18(0x29a) + localStorage[_0x291f18(0x20d)] + _0x291f18(0x25e), localStorage[_0x291f18(0x290)] = localStorage[_0x291f18(0x2d8)][_0x291f18(0x260)](':')[0x0], localStorage['nMenit'] = localStorage[_0x291f18(0x2d8)]['split'](':')[0x1], _0x323484[_0x291f18(0x23a)] = localStorage['valJam'], _0x323484[_0x291f18(0x2d8)] = localStorage['nilaiJam'], _0x323484[_0x291f18(0x20d)] = localStorage['durasi'], _0x323484['jam'] = localStorage[_0x291f18(0x2f8)], _0x323484[_0x291f18(0x290)] = localStorage[_0x291f18(0x290)], _0x323484[_0x291f18(0x262)] = localStorage[_0x291f18(0x262)]) : (localStorage['valJam'] = '', localStorage[_0x291f18(0x2d8)] = '', localStorage['jam'] = '', _0x323484['valJam'] = localStorage[_0x291f18(0x23a)], _0x323484[_0x291f18(0x2d8)] = localStorage[_0x291f18(0x2d8)], _0x323484[_0x291f18(0x2f8)] = localStorage[_0x291f18(0x2f8)]);
                            localStorage[_0x291f18(0x270)] = $(_0x291f18(0x25c))[_0x291f18(0x25d)]()['trim'](), localStorage['hasilPekerjaan'] = $('#m_hasil_pekerjaan')['val']()[_0x291f18(0x20b)](), _0x323484['namaPekerjaan'] = localStorage[_0x291f18(0x270)], _0x323484[_0x291f18(0x2e1)] = localStorage[_0x291f18(0x2e1)], localStorage[_0x291f18(0x274)] != '' && $(_0x291f18(0x2c6))[_0x291f18(0x25d)](localStorage[_0x291f18(0x274)]), localStorage[_0x291f18(0x2d8)] != '' && $(_0x291f18(0x280))[_0x291f18(0x25d)](localStorage[_0x291f18(0x2d8)]), localStorage['valUraianTugas'] != '' && ($(_0x291f18(0x287))[_0x291f18(0x25d)](localStorage[_0x291f18(0x24e)]), get_cek_uraian_by_tgl_mutasi(), $('#analisis_tugas_temp')[_0x291f18(0x25d)](localStorage[_0x291f18(0x302)]), get_analisis_tugas_by_uraian()), $(_0x291f18(0x263))[_0x291f18(0x25d)](localStorage[_0x291f18(0x270)]), $('#hasil_pekerjaan')[_0x291f18(0x25d)](localStorage[_0x291f18(0x2e1)]), localStorage['durasi'] != '' && $(_0x291f18(0x203))[_0x291f18(0x25d)](localStorage[_0x291f18(0x20d)]), $('#tgl_indo')[_0x291f18(0x26f)](_0x48a3dc($(_0x291f18(0x2c6))[_0x291f18(0x25d)]()) + ',\x20' + _0x267675($(_0x291f18(0x2c6))[_0x291f18(0x25d)]())), $('#btnClose')[_0x291f18(0x2ef)]();
                        },
                        'unLock': () => {
                            _0x3aa3b8();
                        },
                        'libur': _0x334580 => {
                            const _0x2e63b7 = _0x667f74;
                            let _0x2f8ff5 = new Date(_0x334580),
                                _0xaba3f5 = new Array(0x7);
                            _0xaba3f5[0x0] = 'Minggu', _0xaba3f5[0x1] = 'Senin', _0xaba3f5[0x2] = 'Selasa', _0xaba3f5[0x3] = 'Rabu', _0xaba3f5[0x4] = _0x2e63b7(0x1fd), _0xaba3f5[0x5] = _0x2e63b7(0x2d5), _0xaba3f5[0x6] = 'Sabtu';
                            let _0x52174e = _0xaba3f5[_0x2f8ff5[_0x2e63b7(0x289)]()];
                            return _0x52174e == _0x2e63b7(0x2a0) || _0x52174e == _0x2e63b7(0x234) ? !![] : ![];
                        },
                        'clearTanggal': () => {
                            const _0x40c278 = _0x667f74;
                            document[_0x40c278(0x20a)](_0x40c278(0x208))[_0x40c278(0x2df)] = ![], document[_0x40c278(0x20a)](_0x40c278(0x294))[_0x40c278(0x2df)] = ![];
                        },
                        'clearJam': () => {
                            const _0x226c1a = _0x667f74;
                            document['querySelector'](_0x226c1a(0x239))['checked'] = ![], document['querySelector'](_0x226c1a(0x29b))[_0x226c1a(0x2df)] = ![], _0x1bbbca();
                        },
                        'tgl_to_indo': _0x2f6438 => {
                            return _0x267675(_0x2f6438);
                        }
                    }
                });
                $(_0x667f74(0x223))['on'](_0x667f74(0x26e), () => {
                    const _0x1c8813 = _0x667f74;
                    $(_0x1c8813(0x266))['val'](_0x57f823()), $('#m_tgl_indo')[_0x1c8813(0x26f)](_0x48a3dc($(_0x1c8813(0x266))[_0x1c8813(0x25d)]()) + ',\x20' + _0x267675($(_0x1c8813(0x266))[_0x1c8813(0x25d)]())), $(_0x1c8813(0x2a4))['val'](_0x21174b()), $(_0x1c8813(0x2ae))[_0x1c8813(0x2cc)](_0x1c8813(0x232)), $(_0x1c8813(0x1f6))['html'](_0x1c8813(0x2b4)), _0x323484[_0x1c8813(0x2c2)] = $(_0x1c8813(0x266))[_0x1c8813(0x25d)](), _0x323484[_0x1c8813(0x2ca)] = '', $('#m_durasi_input')[_0x1c8813(0x25d)](0x0), $('#maxDurasi')['text'](''), _0x56e8de(), $[_0x1c8813(0x275)](base_url + _0x1c8813(0x24c), {
                        'selected_tgl_input': $(_0x1c8813(0x266))[_0x1c8813(0x25d)]()
                    })[_0x1c8813(0x2bb)](function (_0x18df0c) {
                        const _0x5a1439 = _0x1c8813;
                        $[_0x5a1439(0x2f1)](_0x18df0c, function (_0x18a43d, _0x333437) {
                            const _0x17cd46 = _0x5a1439;
                            $(_0x17cd46(0x2ae))[_0x17cd46(0x2c4)]('<option\x20value=\x22' + _0x333437['id'] + '@' + _0x333437['id_pekerjaan_encrypt'] + '\x22>' + _0x333437['nama_pekerjaan'] + _0x17cd46(0x273));
                        }), _0x323484['uraianTugasArray'] = _0x18df0c;
                    });
                });
                let _0x12f365 = $('#tgl_input')[_0x667f74(0x25d)]()[_0x667f74(0x260)]('-')[0x0],
                    _0x17f2a8 = $(_0x667f74(0x2c6))[_0x667f74(0x25d)]()['split']('-')[0x1];
                $(_0x667f74(0x2c6))[_0x667f74(0x279)](() => {
                    const _0x389966 = _0x667f74;
                    let _0x2b7b90 = $(_0x389966(0x2c6))[_0x389966(0x25d)]()[_0x389966(0x260)]('-')[0x0],
                        _0xe3e83f = $(_0x389966(0x2c6))[_0x389966(0x25d)]()[_0x389966(0x260)]('-')[0x1];
                    (_0x2b7b90 != _0x12f365 || _0xe3e83f != _0x17f2a8) && (_0xa43bd5(_0x2b7b90, _0xe3e83f), _0x12f365 = $(_0x389966(0x2c6))[_0x389966(0x25d)]()['split']('-')[0x0], _0x17f2a8 = $('#tgl_input')[_0x389966(0x25d)]()[_0x389966(0x260)]('-')[0x1]), $('#tgl_indo')[_0x389966(0x26f)](_0x48a3dc($('#tgl_input')[_0x389966(0x25d)]()) + ',\x20' + _0x267675($(_0x389966(0x2c6))[_0x389966(0x25d)]()));
                });
                if (localStorage[_0x667f74(0x274)] != '') _0xa43bd5(localStorage[_0x667f74(0x274)][_0x667f74(0x260)]('-')[0x0], localStorage[_0x667f74(0x274)][_0x667f74(0x260)]('-')[0x1]);
                else {
                    let _0x2a283c = $('#tgl_input')[_0x667f74(0x25d)]()[_0x667f74(0x260)]('-')[0x0],
                        _0x10bd50 = $(_0x667f74(0x2c6))[_0x667f74(0x25d)]()['split']('-')[0x1];
                    _0xa43bd5(_0x2a283c, _0x10bd50);
                }
                $(_0x667f74(0x266))[_0x667f74(0x279)](() => {
                    const _0x102403 = _0x667f74;
                    $('#m_tgl_indo')[_0x102403(0x26f)](_0x48a3dc($(_0x102403(0x266))[_0x102403(0x25d)]()) + ',\x20' + _0x267675($(_0x102403(0x266))['val']())), $[_0x102403(0x275)](base_url + _0x102403(0x24c), {
                        'selected_tgl_input': $(_0x102403(0x266))[_0x102403(0x25d)]()
                    })[_0x102403(0x2bb)](function (_0x13a872) {
                        const _0x308038 = _0x102403;
                        _0x13a872['length'] == _0x323484['uraianTugasArray'][_0x308038(0x22d)] ? _0x323484['tmpTanggal'] = $(_0x308038(0x266))[_0x308038(0x25d)]() : ($(_0x308038(0x2ae))['html'](_0x308038(0x232)), $('#m_analisis_tugas')[_0x308038(0x2cc)](_0x308038(0x2b4)), _0x323484['tmpTanggal'] = $(_0x308038(0x266))[_0x308038(0x25d)](), _0x323484[_0x308038(0x2ca)] = '', $(_0x308038(0x216))[_0x308038(0x25d)](0x0), $('#maxDurasi')[_0x308038(0x26f)](''), $[_0x308038(0x2f1)](_0x13a872, function (_0x21be45, _0x4a9b47) {
                            const _0x4b43ce = _0x308038;
                            $('#m_uraian_tugas')[_0x4b43ce(0x2c4)]('<option\x20value=\x22' + _0x4a9b47['id'] + '@' + _0x4a9b47[_0x4b43ce(0x22a)] + '\x22>' + _0x4a9b47[_0x4b43ce(0x28a)] + _0x4b43ce(0x273));
                        }), _0x323484[_0x308038(0x2d6)] = _0x13a872);
                    });
                }), $(_0x667f74(0x2a4))[_0x667f74(0x279)](() => {
                    _0x56e8de();
                }), $(_0x667f74(0x29b))[_0x667f74(0x2ef)](() => {
                    _0x1bbbca();
                }), $('#jamTetap')['click'](() => {
                    _0x1bbbca();
                }), $(_0x667f74(0x2ae))[_0x667f74(0x279)](() => {
                    const _0x12c8f4 = _0x667f74;
                    $(_0x12c8f4(0x1f6))[_0x12c8f4(0x2cc)](_0x12c8f4(0x28d)), $(_0x12c8f4(0x216))[_0x12c8f4(0x25d)](0x0), $(_0x12c8f4(0x2e4))['text'](''), _0x323484['tmpDurasi'] = '';
                    let _0x157c3f = $(_0x12c8f4(0x2ae))[_0x12c8f4(0x25d)]()['split']('@')[0x1],
                        _0x585181 = $(_0x12c8f4(0x2ae))[_0x12c8f4(0x25d)]()[_0x12c8f4(0x260)]('@')[0x0];
                    $[_0x12c8f4(0x275)](base_url + _0x12c8f4(0x1f4), {
                        'selected_uraian_tugas_add': _0x157c3f,
                        'selected_uraian_tugas_edit': _0x585181
                    })[_0x12c8f4(0x2bb)](function (_0xcfa84b) {
                        $['each'](_0xcfa84b, function (_0xc33b7a, _0x270b3f) {
                            const _0x3274a4 = _0x2900;
                            $(_0x3274a4(0x1f6))['append'](_0x3274a4(0x26a) + _0x270b3f['id'] + '@' + _0x270b3f[_0x3274a4(0x297)] + '\x22>' + _0x270b3f[_0x3274a4(0x2f6)] + _0x3274a4(0x230) + _0x3274a4(0x27f) + _0x270b3f[_0x3274a4(0x306)] + _0x3274a4(0x25e) + '\x20|\x20' + _0x270b3f[_0x3274a4(0x30f)] + _0x3274a4(0x273));
                        });
                    });
                }), $(_0x667f74(0x1f6))[_0x667f74(0x279)](() => {
                    const _0x399a3f = _0x667f74;
                    let _0x4523b9 = $(_0x399a3f(0x1f6))[_0x399a3f(0x25d)]()['split']('@')[0x1];
                    $[_0x399a3f(0x275)](base_url + '/api/get_jam_byanalisis_tugas', {
                        'selected_analisis_tugas': _0x4523b9
                    })[_0x399a3f(0x2bb)](function (_0x168241) {
                        $['each'](_0x168241, function (_0x2ba04f, _0x4c3523) {
                            const _0x5301b4 = _0x2900;
                            $('#m_durasi_input')[_0x5301b4(0x25d)](_0x4c3523[_0x5301b4(0x306)]), _0x323484[_0x5301b4(0x2ca)] = $(_0x5301b4(0x216))[_0x5301b4(0x25d)](), $('#maxDurasi')[_0x5301b4(0x26f)]('maksimal\x20' + _0x4c3523[_0x5301b4(0x306)] + _0x5301b4(0x2fd)), _0x1bbbca();
                        });
                    });
                }), $('#jam_input')[_0x667f74(0x2ef)](() => {
                    const _0x3287d3 = _0x667f74;
                    let _0x2d740a = document[_0x3287d3(0x2b5)][_0x3287d3(0x2aa)] * 0x37 / 0x64;
                    document[_0x3287d3(0x237)](_0x3287d3(0x29e))[0x0][_0x3287d3(0x314)][_0x3287d3(0x23b)] = _0x2d740a + 'px';
                }), $(_0x667f74(0x2a4))[_0x667f74(0x2ef)](() => {
                    const _0x3f0dcc = _0x667f74;
                    let _0x11f681 = window[_0x3f0dcc(0x2dc)],
                        _0x207f50 = document['documentElement'][_0x3f0dcc(0x253)],
                        _0x1cdcaa = _0x11f681 / 0x2 - 0xa0,
                        _0x236e2e = _0x207f50 + 0xe6;
                    document[_0x3f0dcc(0x237)]('body\x20>\x20div.main_container__1GGJE.main_grey__26yKi')[0x1][_0x3f0dcc(0x314)]['left'] = _0x1cdcaa + 'px', document[_0x3f0dcc(0x237)]('body\x20>\x20div.main_container__1GGJE.main_grey__26yKi')[0x1][_0x3f0dcc(0x314)][_0x3f0dcc(0x23b)] = _0x236e2e + 'px';
                }), $(_0x667f74(0x216))[_0x667f74(0x279)](() => {
                    const _0x4e29c8 = _0x667f74;
                    _0x323484['tmpDurasi'] = $('#m_durasi_input')[_0x4e29c8(0x25d)]();
                }), $(_0x667f74(0x233))[_0x667f74(0x2ef)](() => {
                    const _0x434987 = _0x667f74;
                    waitForKeyElements(_0x434987(0x2d0), _0x391031);

                    function _0x391031() {
                        const _0x1bdd84 = _0x434987;
                        m_uraian_tugas, $('m_uraian_tugas')[_0x1bdd84(0x25d)](localStorage['valUraianTugas']), get_cek_uraian_by_tgl_mutasi(), $('#analisis_tugas_temp')[_0x1bdd84(0x25d)](localStorage[_0x1bdd84(0x302)]), get_analisis_tugas_by_uraian();
                    }
                }), $(_0x667f74(0x22b))[_0x667f74(0x26f)](_0x48a3dc($(_0x667f74(0x2c6))[_0x667f74(0x25d)]()) + ',\x20' + _0x267675($(_0x667f74(0x2c6))['val']()));
                localStorage[_0x667f74(0x274)] != '' && $(_0x667f74(0x2c6))['val'](localStorage[_0x667f74(0x274)]);
                localStorage['nilaiJam'] != '' && $(_0x667f74(0x280))[_0x667f74(0x25d)](localStorage[_0x667f74(0x2d8)]);
                localStorage[_0x667f74(0x24e)] != '' && ($(_0x667f74(0x287))[_0x667f74(0x25d)](localStorage[_0x667f74(0x24e)]), get_cek_uraian_by_tgl_mutasi(), $(_0x667f74(0x21c))[_0x667f74(0x25d)](localStorage['valAnalisisTugas']), get_analisis_tugas_by_uraian());
                localStorage['durasi'] != '' && $(_0x667f74(0x203))[_0x667f74(0x25d)](localStorage[_0x667f74(0x20d)]);
                $(_0x667f74(0x263))[_0x667f74(0x25d)](localStorage[_0x667f74(0x270)]), $(_0x667f74(0x278))[_0x667f74(0x25d)](localStorage[_0x667f74(0x2e1)]);
                document[_0x667f74(0x20a)](_0x667f74(0x268)) != null && Swal[_0x667f74(0x25b)]({
                    'icon': _0x667f74(0x217),
                    'title': _0x667f74(0x204),
                    'text': _0x667f74(0x1f7)
                });
                $('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div.box.box-primary\x20>\x20form\x20>\x20div.box-footer\x20>\x20button')['unbind']()[_0x667f74(0x2ef)](_0x32b711 => {
                    const _0x5585c6 = _0x667f74;
                    $(_0x5585c6(0x207))[_0x5585c6(0x25d)]() == '' && (Swal['fire']({
                        'icon': _0x5585c6(0x217),
                        'title': _0x5585c6(0x2f5),
                        'text': _0x5585c6(0x214)
                    }), _0x32b711[_0x5585c6(0x305)]);
                    const _0x154c77 = $(_0x5585c6(0x2c6))[_0x5585c6(0x25d)]()['replace'](/-/g, '');
                    if (_0x329bc5[_0x5585c6(0x316)]($(_0x5585c6(0x2c6))[_0x5585c6(0x25d)]()) == !![] || typeof hariLibur[_0x154c77] !== _0x5585c6(0x2d2)) Swal[_0x5585c6(0x25b)]({
                        'icon': _0x5585c6(0x217),
                        'title': _0x5585c6(0x2f5),
                        'text': _0x5585c6(0x1ff) + _0x267675($('#tgl_input')[_0x5585c6(0x25d)]()) + _0x5585c6(0x1f1)
                    }), _0x32b711[_0x5585c6(0x305)]();
                    else {
                        if (_0x154c77 == 0x134d7b9 || _0x154c77 == 0x134d7ba || _0x154c77 == 0x134d7bb || _0x154c77 == 0x134d7be || _0x154c77 == 0x134d7bf || _0x154c77 == 0x134d7c0 || _0x154c77 == 0x134d7c1 || _0x154c77 == 0x134d7c2 || _0x154c77 == 0x134d7c5 || _0x154c77 == 0x134d7c6 || _0x154c77 == 0x134d7c7 || _0x154c77 == 0x134d7c8 || _0x154c77 == 0x134d811 || _0x154c77 == 0x134d812 || _0x154c77 == 0x134d813 || _0x154c77 == 0x134d814 || _0x154c77 == 0x134d815) {
                            let _0xf9b07d = _0x48a3dc($(_0x5585c6(0x2c6))[_0x5585c6(0x25d)]());
                            if (_0xf9b07d == _0x5585c6(0x2d5)) {
                                if (_0x5f2944(_0x5585c6(0x30c), _0x5585c6(0x317), $(_0x5585c6(0x280))[_0x5585c6(0x25d)]()) == ![] || _0x5f2944(_0x5585c6(0x221), '12:29', $('#jam_input')['val']()) == !![]) Swal[_0x5585c6(0x25b)]({
                                    'icon': _0x5585c6(0x217),
                                    'title': 'Oops...\x20\x20BULAN\x20RAMADHAN',
                                    'text': 'Jam\x20' + $(_0x5585c6(0x280))[_0x5585c6(0x25d)]() + _0x5585c6(0x2af)
                                }), _0x32b711[_0x5585c6(0x305)]();
                                else {
                                    let _0x26eaf0 = _0x12014f($('#jam_input')['val'](), $(_0x5585c6(0x203))[_0x5585c6(0x25d)]());
                                    (_0x5f2944('08:00', '15:30', _0x26eaf0) == ![] || _0x5f2944('11:31', _0x5585c6(0x225), _0x26eaf0) == !![]) && (Swal[_0x5585c6(0x25b)]({
                                        'icon': _0x5585c6(0x217),
                                        'title': _0x5585c6(0x293),
                                        'text': _0x5585c6(0x258)
                                    }), _0x32b711[_0x5585c6(0x305)]());
                                }
                            } else {
                                if (_0x5f2944('08:00', _0x5585c6(0x2fe), $(_0x5585c6(0x280))['val']()) == ![] || _0x5f2944(_0x5585c6(0x304), _0x5585c6(0x283), $(_0x5585c6(0x280))[_0x5585c6(0x25d)]()) == !![]) Swal[_0x5585c6(0x25b)]({
                                    'icon': _0x5585c6(0x217),
                                    'title': _0x5585c6(0x293),
                                    'text': _0x5585c6(0x200) + $(_0x5585c6(0x280))[_0x5585c6(0x25d)]() + '\x20diluar\x20jam\x20kerja'
                                }), _0x32b711[_0x5585c6(0x305)]();
                                else {
                                    let _0x33c930 = _0x12014f($(_0x5585c6(0x280))['val'](), $(_0x5585c6(0x203))[_0x5585c6(0x25d)]());
                                    (_0x5f2944('08:00', _0x5585c6(0x2fe), _0x33c930) == ![] || _0x5f2944(_0x5585c6(0x25f), _0x5585c6(0x225), _0x33c930) == !![]) && (Swal[_0x5585c6(0x25b)]({
                                        'icon': 'error',
                                        'title': _0x5585c6(0x293),
                                        'text': 'Inputan\x20diluar\x20jam\x20kerja,\x20cek\x20kembali'
                                    }), _0x32b711['preventDefault']());
                                }
                            }
                        } else {
                            let _0x1cbe55 = _0x48a3dc($('#tgl_input')[_0x5585c6(0x25d)]());
                            if (_0x1cbe55 == 'Jum\x27at') {
                                if (_0x5f2944(_0x5585c6(0x222), '16:30', $(_0x5585c6(0x280))[_0x5585c6(0x25d)]()) == ![] || _0x5f2944(_0x5585c6(0x313), _0x5585c6(0x283), $(_0x5585c6(0x280))[_0x5585c6(0x25d)]()) == !![]) Swal[_0x5585c6(0x25b)]({
                                    'icon': _0x5585c6(0x217),
                                    'title': _0x5585c6(0x2f5),
                                    'text': _0x5585c6(0x200) + $('#jam_input')[_0x5585c6(0x25d)]() + '\x20diluar\x20jam\x20kerja'
                                }), _0x32b711['preventDefault']();
                                else {
                                    let _0xfd92d1 = _0x12014f($(_0x5585c6(0x280))[_0x5585c6(0x25d)](), $(_0x5585c6(0x203))[_0x5585c6(0x25d)]());
                                    (_0x5f2944(_0x5585c6(0x222), _0x5585c6(0x21b), _0xfd92d1) == ![] || _0x5f2944('11:01', _0x5585c6(0x225), _0xfd92d1) == !![]) && (Swal[_0x5585c6(0x25b)]({
                                        'icon': _0x5585c6(0x217),
                                        'title': _0x5585c6(0x2f5),
                                        'text': 'Inputan\x20diluar\x20jam\x20kerja,\x20cek\x20kembali'
                                    }), _0x32b711[_0x5585c6(0x305)]());
                                }
                            } else {
                                if (_0x5f2944(_0x5585c6(0x222), _0x5585c6(0x269), $('#jam_input')[_0x5585c6(0x25d)]()) == ![] || _0x5f2944(_0x5585c6(0x304), _0x5585c6(0x2d1), $(_0x5585c6(0x280))['val']()) == !![]) Swal[_0x5585c6(0x25b)]({
                                    'icon': _0x5585c6(0x217),
                                    'title': _0x5585c6(0x2f5),
                                    'text': 'Jam\x20' + $(_0x5585c6(0x280))[_0x5585c6(0x25d)]() + _0x5585c6(0x2af)
                                }), _0x32b711[_0x5585c6(0x305)]();
                                else {
                                    let _0x1818b4 = _0x12014f($('#jam_input')[_0x5585c6(0x25d)](), $(_0x5585c6(0x203))[_0x5585c6(0x25d)]());
                                    (_0x5f2944(_0x5585c6(0x222), _0x5585c6(0x269), _0x1818b4) == ![] || _0x5f2944('12:01', '13:00', _0x1818b4) == !![]) && (Swal[_0x5585c6(0x25b)]({
                                        'icon': _0x5585c6(0x217),
                                        'title': _0x5585c6(0x2f5),
                                        'text': _0x5585c6(0x258)
                                    }), _0x32b711[_0x5585c6(0x305)]());
                                }
                            }
                        }
                    }
                    localStorage[_0x5585c6(0x28c)] == 'tanggalNext' && (localStorage[_0x5585c6(0x274)] = $('#tgl_input')[_0x5585c6(0x25d)](), _0x323484['nilaiTanggal'] = localStorage[_0x5585c6(0x274)]), localStorage['valJam'] == _0x5585c6(0x1f3) && (localStorage[_0x5585c6(0x2d8)] = $(_0x5585c6(0x280))[_0x5585c6(0x25d)](), _0x323484[_0x5585c6(0x2d8)] = localStorage[_0x5585c6(0x2d8)]);
                }), waitForKeyElements('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div.box.box-primary\x20>\x20form\x20>\x20div.box-body\x20>\x20div.alert.alert-success.alert-dismissible', _0x2b847a);

                function _0x2b847a() {
                    const _0x4d1e47 = _0x667f74;
                    if (localStorage['valTanggal'] == _0x4d1e47(0x22c)) document['querySelector'](_0x4d1e47(0x2c6))['value'] = localStorage[_0x4d1e47(0x274)];
                    else {
                        if (localStorage[_0x4d1e47(0x28c)] == _0x4d1e47(0x2d3)) {
                            let _0x36908a = localStorage[_0x4d1e47(0x274)]['split']('-'),
                                _0x558c04 = _0x140d9d(_0x36908a[0x1], _0x36908a[0x0]);
                            _0x36908a[0x2] < _0x558c04 && (_0x36908a[0x2] = parseInt(_0x36908a[0x2]) + 0x1, _0x36908a[0x2]['toString']()[_0x4d1e47(0x22d)] == 0x1 ? _0x36908a[0x2] = '0' + _0x36908a[0x2]['toString']() : _0x36908a[0x2][_0x4d1e47(0x24d)](), localStorage[_0x4d1e47(0x274)] = _0x36908a[0x0] + '-' + _0x36908a[0x1] + '-' + _0x36908a[0x2]), document[_0x4d1e47(0x20a)](_0x4d1e47(0x2c6))[_0x4d1e47(0x219)] = localStorage[_0x4d1e47(0x274)];
                        }
                    }
                    $('#tgl_indo')[_0x4d1e47(0x26f)](_0x48a3dc($(_0x4d1e47(0x2c6))[_0x4d1e47(0x25d)]()) + ',\x20' + _0x267675($(_0x4d1e47(0x2c6))['val']()));
                    if (localStorage[_0x4d1e47(0x23a)] == 'jamTetap') document['querySelector'](_0x4d1e47(0x280))[_0x4d1e47(0x219)] = localStorage[_0x4d1e47(0x2d8)];
                    else {
                        if (localStorage['valJam'] == _0x4d1e47(0x1f3)) {
                            let _0x3f96ce = localStorage[_0x4d1e47(0x2d8)][_0x4d1e47(0x260)](':')[0x0],
                                _0x35742c = localStorage['nilaiJam'][_0x4d1e47(0x260)](':')[0x1];
                            _0x323484[_0x4d1e47(0x20d)] = parseInt(localStorage['durasi']), _0x3f96ce = parseInt(_0x3f96ce), _0x35742c = parseInt(_0x35742c), _0x35742c < 0x3c && (_0x35742c = _0x35742c + _0x323484[_0x4d1e47(0x20d)], _0x35742c >= 0x3c && (_0x35742c = _0x35742c % 0x3c, _0x3f96ce < 0x17 && (_0x3f96ce = _0x3f96ce + 0x1))), localStorage[_0x4d1e47(0x20d)] = _0x323484[_0x4d1e47(0x20d)]['toString'](), _0x3f96ce = _0x3f96ce[_0x4d1e47(0x24d)](), _0x35742c = _0x35742c[_0x4d1e47(0x24d)](), _0x35742c[_0x4d1e47(0x22d)] == 0x1 && (_0x35742c = '0' + _0x35742c), localStorage[_0x4d1e47(0x2d8)] = _0x3f96ce + ':' + _0x35742c, document[_0x4d1e47(0x20a)](_0x4d1e47(0x280))[_0x4d1e47(0x219)] = localStorage[_0x4d1e47(0x2d8)];
                        }
                    }
                    Swal[_0x4d1e47(0x25b)]({
                        'icon': _0x4d1e47(0x299),
                        'title': _0x4d1e47(0x2c8),
                        'showConfirmButton': ![],
                        'timer': 0x5dc
                    }), document[_0x4d1e47(0x20a)](_0x4d1e47(0x263))['focus'](), window[_0x4d1e47(0x259)](0x0, document['body'][_0x4d1e47(0x27c)]);
                }
            }
        }
        if ($(_0x667f74(0x27a)) != '') {
            const _0x5e4113 = $(_0x667f74(0x27a))[_0x667f74(0x26f)]()['trim']();
            if (_0x5e4113 == 'Kegiatan\x20Belum\x20Diperiksa' || _0x5e4113 == _0x667f74(0x30b)) {
                waitForKeyElements(_0x667f74(0x220), _0xf42fe4);

                function _0xf42fe4() {
                    const _0x202b95 = _0x667f74;
                    let _0x2b2904 = $(_0x202b95(0x21e))[_0x202b95(0x25d)](),
                        _0x3bc00c = $('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div:nth-child(2)\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20div\x20>\x20select')[_0x202b95(0x25d)]();
                    _0x3bc00c[_0x202b95(0x22d)] == 0x1 && (_0x3bc00c = '0' + _0x3bc00c), _0xa43bd5(_0x2b2904, _0x3bc00c);
                }
            }
        }
        if ($('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content-header\x20>\x20h1') != null) {
            const _0x5281ea = $(_0x667f74(0x27a))[_0x667f74(0x26f)]()[_0x667f74(0x20b)]();
            !isNaN(parseInt(localStorage['nip'])) && ((_0x5281ea == _0x667f74(0x295) || _0x5281ea == _0x667f74(0x312)) && _0x3952a9[_0x667f74(0x22f)](_0x667f74(0x261), '==', localStorage[_0x667f74(0x261)])[_0x667f74(0x22f)](_0x667f74(0x2e0), '==', localStorage[_0x667f74(0x2e0)])[_0x667f74(0x275)]()['then'](function (_0x2f01bd) {
                const _0x4b3680 = _0x667f74;
                if (!_0x2f01bd[_0x4b3680(0x211)][_0x4b3680(0x2a9)]) {
                    if (_0x2f01bd['empty'] == ![]) {
                        let _0x12146c;
                        _0x2f01bd[_0x4b3680(0x249)](function (_0x3d50e9) {
                            _0x12146c = _0x3d50e9['id'];
                        });
                        if (_0x5281ea == _0x4b3680(0x295)) localStorage['OPD'] = document[_0x4b3680(0x20a)](_0x4b3680(0x276))[_0x4b3680(0x2c9)], _0x3952a9[_0x4b3680(0x2e3)](_0x12146c)[_0x4b3680(0x286)]({
                            'OPD': localStorage[_0x4b3680(0x264)]
                        });
                        else _0x5281ea == _0x4b3680(0x312) && (localStorage[_0x4b3680(0x264)] = document[_0x4b3680(0x20a)](_0x4b3680(0x254))[_0x4b3680(0x2c9)], _0x3952a9[_0x4b3680(0x2e3)](_0x12146c)[_0x4b3680(0x286)]({
                            'OPD': localStorage[_0x4b3680(0x264)]
                        }));
                    }
                }
            }));
        }
        if (document['querySelector']('body\x20>\x20div.wrapper\x20>\x20header\x20>\x20nav\x20>\x20div\x20>\x20ul\x20>\x20li\x20>\x20a\x20>\x20span') != null) {
            if (_0x39f5ce == 'lada') {
                if (_0x1697c0 == 'https://ekinerja.kotawaringinbaratkab.go.id/dashboard/ketidakhadiran.html') {
                    document[_0x667f74(0x28b)] = 'Ketidakhadiran';

                    function _0x52cf13(_0x3daddd) {
                        const _0x46d27f = _0x667f74;
                        var _0x23906d;
                        if (typeof _0x3daddd !== _0x46d27f(0x2cd)) throw new Error(_0x46d27f(0x309));
                        _0x23906d = document[_0x46d27f(0x271)](_0x46d27f(0x2e2)), _0x23906d[_0x46d27f(0x288)] = _0x3daddd, _0x23906d['src'] = _0x46d27f(0x226), document[_0x46d27f(0x2e5)][_0x46d27f(0x29f)](_0x23906d);
                    }
                    _0x52cf13(function () {
                        const _0x4ca4e9 = _0x667f74;
                        document['querySelector'](_0x4ca4e9(0x248))['selectedIndex'] = localStorage[_0x4ca4e9(0x228)], document['querySelector']('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.ng-scope\x20>\x20div\x20>\x20div.box-header\x20>\x20div\x20>\x20div.col-md-10\x20>\x20div\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20select')[_0x4ca4e9(0x236)](new Event(_0x4ca4e9(0x279))), document[_0x4ca4e9(0x20a)](_0x4ca4e9(0x301))[_0x4ca4e9(0x2e9)] = localStorage[_0x4ca4e9(0x2db)], document['querySelector'](_0x4ca4e9(0x301))[_0x4ca4e9(0x236)](new Event(_0x4ca4e9(0x279)));
                    }), waitForKeyElements('home\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.ng-scope\x20>\x20div\x20>\x20div.box-body\x20>\x20div\x20>\x20table\x20>\x20tbody:nth-child(2)\x20>\x20tr:nth-child(1)', _0x2b84a3);

                    function _0x2b84a3() {}
                }
                if (_0x1697c0 == _0x667f74(0x2f7)) {
                    document[_0x667f74(0x28b)] = _0x667f74(0x2c5);

                    function _0x25fc16(_0x5cd2ff) {
                        const _0x17e0a2 = _0x667f74;
                        var _0xd323bf;
                        if (typeof _0x5cd2ff !== _0x17e0a2(0x2cd)) throw new Error(_0x17e0a2(0x309));
                        _0xd323bf = document['createElement']('script'), _0xd323bf[_0x17e0a2(0x288)] = _0x5cd2ff, _0xd323bf[_0x17e0a2(0x212)] = _0x17e0a2(0x226), document[_0x17e0a2(0x2e5)]['appendChild'](_0xd323bf);
                    }
                    _0x25fc16(function () {
                        const _0x218356 = _0x667f74;
                        document[_0x218356(0x20a)](_0x218356(0x24b))[_0x218356(0x2e9)] = localStorage[_0x218356(0x228)], document[_0x218356(0x20a)]('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header\x20>\x20div\x20>\x20div.col-md-10\x20>\x20div\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20select')['dispatchEvent'](new Event(_0x218356(0x279))), document[_0x218356(0x20a)](_0x218356(0x301))['selectedIndex'] = localStorage[_0x218356(0x2db)], document['querySelector'](_0x218356(0x301))[_0x218356(0x236)](new Event(_0x218356(0x279)));
                    }), waitForKeyElements(_0x667f74(0x2fa), _0x32c1a7);

                    function _0x32c1a7() {
                        const _0x254223 = _0x667f74;
                        let _0xe801a7 = document[_0x254223(0x20a)](_0x254223(0x1f9)),
                            _0xcb893a = document[_0x254223(0x20a)](_0x254223(0x2bf));
                        if (_0xe801a7[_0x254223(0x219)] == _0x254223(0x26d)) _0xe801a7['value'] = _0x254223(0x2ab);
                        else {
                            if (_0xe801a7['value'] == _0x254223(0x317)) {
                                const _0x7261aa = _0x48a3dc(_0xcb893a[_0x254223(0x219)][_0x254223(0x260)]('-')['reverse']()['join']('-'));
                                _0x7261aa == _0x254223(0x2d5) ? _0xe801a7[_0x254223(0x219)] = _0x254223(0x2f9) : _0xe801a7['value'] = _0x254223(0x1f5);
                            }
                        }
                    }
                }
                if (_0x1697c0 == _0x667f74(0x27e)) {
                    waitForKeyElements(_0x667f74(0x277), _0xb2aae7), document['title'] = _0x667f74(0x295), document[_0x667f74(0x20a)](_0x667f74(0x284))[_0x667f74(0x2e9)] = localStorage[_0x667f74(0x228)], document[_0x667f74(0x20a)](_0x667f74(0x2b2))[_0x667f74(0x2e9)] = localStorage['rbTahun'], document['querySelector'](_0x667f74(0x224))[_0x667f74(0x2e9)] = localStorage[_0x667f74(0x2db)], document[_0x667f74(0x20a)]('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20select')[_0x667f74(0x236)](new Event(_0x667f74(0x279)));

                    function _0xb2aae7() {
                        const _0x52b01f = _0x667f74;
                        document[_0x52b01f(0x20a)]('#datatableRB_length\x20>\x20label\x20>\x20select')['selectedIndex'] = 0x3, document[_0x52b01f(0x20a)](_0x52b01f(0x20c))['dispatchEvent'](new Event(_0x52b01f(0x279)));
                        if (document[_0x52b01f(0x237)]('#datatableRB\x20>\x20tbody\x20>\x20tr')[0x0][_0x52b01f(0x29c)][0x0][_0x52b01f(0x219)] == _0x52b01f(0x240)) {
                            document[_0x52b01f(0x20a)](_0x52b01f(0x2ac)) == null && ($(_0x52b01f(0x26c))[_0x52b01f(0x2c4)]('<button\x20id=\x22cek\x22\x20class=\x22btn\x20btn-danger\x22\x20style=\x22margin-left:\x205px\x22>Cek</button>'), $(_0x52b01f(0x26c))[_0x52b01f(0x2c4)](_0x52b01f(0x2ee)));
                            document['querySelector'](_0x52b01f(0x213)) == null && (localStorage[_0x52b01f(0x228)] != '' && localStorage[_0x52b01f(0x23e)] != '' && localStorage[_0x52b01f(0x2db)] != '' && $(_0x52b01f(0x26c))[_0x52b01f(0x2c4)]('<button\x20id=\x22ref\x22\x20class=\x22btn\x20btn-success\x22\x20style=\x22margin-left:\x205px\x22>Refresh</button>'));
                            const _0x3e0da9 = document[_0x52b01f(0x237)]('#datatableRB\x20>\x20tbody\x20>\x20tr')[_0x52b01f(0x22d)],
                                _0x3e9a9c = document[_0x52b01f(0x237)](_0x52b01f(0x2ec))[0x0][_0x52b01f(0x282)]['length'];
                            $(_0x52b01f(0x205))[_0x52b01f(0x1f8)]();
                            let _0x1e1890 = [],
                                _0x2fa73f = [];
                            for (let _0x5c4267 = 0x0; _0x5c4267 < _0x3e0da9; _0x5c4267++) {
                                let _0x4cbb42 = '',
                                    _0x43fee0 = [];
                                for (let _0x50a13c = 0x2; _0x50a13c < _0x3e9a9c; _0x50a13c++) {
                                    const _0x8d1759 = document[_0x52b01f(0x237)](_0x52b01f(0x2ec))[_0x5c4267][_0x52b01f(0x282)][_0x50a13c][_0x52b01f(0x2c9)][_0x52b01f(0x260)]('\x0a');
                                    if (_0x8d1759[0x2] == '-') {
                                        const _0x412769 = document[_0x52b01f(0x237)]('#datatableRB\x20>\x20tbody\x20>\x20tr')[_0x5c4267][_0x52b01f(0x1fb)][_0x50a13c][_0x52b01f(0x1fb)][0x0][_0x52b01f(0x1fb)][0x0][_0x52b01f(0x1fb)][0x0][_0x52b01f(0x257)][_0x52b01f(0x29c)][0x0]['nodeValue'],
                                            _0x51db46 = document['querySelectorAll'](_0x52b01f(0x2ec))[_0x5c4267][_0x52b01f(0x1fb)][_0x50a13c][_0x52b01f(0x1fb)][0x0][_0x52b01f(0x1fb)][0x2][_0x52b01f(0x1fb)][0x0]['parentElement'][_0x52b01f(0x29c)][0x0][_0x52b01f(0x201)];
                                        if (_0x412769 == _0x52b01f(0x21a) || _0x51db46 == _0x52b01f(0x21a)) {
                                            _0x4cbb42 = document[_0x52b01f(0x237)]('#datatableRB\x20>\x20tbody\x20>\x20tr')[_0x5c4267][_0x52b01f(0x1fb)][0x1][_0x52b01f(0x2c9)]['split']('\x0a')[0x0];
                                            let _0xc87380 = _0x50a13c - 0x1;
                                            _0x43fee0[_0x52b01f(0x235)](_0x52b01f(0x27d) + _0xc87380 + _0x52b01f(0x2be));
                                        }
                                    } else {
                                        if (_0x8d1759[0x2] == 'DD') {
                                            _0x4cbb42 = document[_0x52b01f(0x237)](_0x52b01f(0x2ec))[_0x5c4267][_0x52b01f(0x1fb)][0x1][_0x52b01f(0x2c9)]['split']('\x0a')[0x0];
                                            let _0x50cd6a = _0x50a13c - 0x1;
                                            _0x43fee0[_0x52b01f(0x235)](_0x52b01f(0x2c3) + _0x50cd6a + _0x52b01f(0x246)), (_0x8d1759[0x0] != '-' || _0x8d1759[0x1] != '-') && _0x43fee0[_0x52b01f(0x235)](_0x52b01f(0x2e8) + _0x50cd6a + _0x52b01f(0x2c7));
                                        } else {
                                            if (_0x8d1759[0x2] == 'DL') {
                                                _0x4cbb42 = document[_0x52b01f(0x237)](_0x52b01f(0x2ec))[_0x5c4267][_0x52b01f(0x1fb)][0x1]['outerText'][_0x52b01f(0x260)]('\x0a')[0x0];
                                                let _0x4c2e13 = _0x50a13c - 0x1;
                                                _0x43fee0[_0x52b01f(0x235)]('<span\x20style=\x22color:green;\x22>' + _0x4c2e13 + _0x52b01f(0x241)), (_0x8d1759[0x0] != '-' || _0x8d1759[0x1] != '-') && _0x43fee0[_0x52b01f(0x235)](_0x52b01f(0x2e8) + _0x4c2e13 + _0x52b01f(0x2c7));
                                            } else {
                                                if (_0x8d1759[0x2] == 'CT') {
                                                    _0x4cbb42 = document[_0x52b01f(0x237)](_0x52b01f(0x2ec))[_0x5c4267]['childNodes'][0x1][_0x52b01f(0x2c9)]['split']('\x0a')[0x0];
                                                    let _0x3ab666 = _0x50a13c - 0x1;
                                                    _0x43fee0[_0x52b01f(0x235)]('<span\x20style=\x22color:purple;\x22>' + _0x3ab666 + _0x52b01f(0x2b8)), (_0x8d1759[0x0] != '-' || _0x8d1759[0x1] != '-') && _0x43fee0['push']('<strong\x20style=\x22color:red;\x22>' + _0x3ab666 + _0x52b01f(0x2c7));
                                                } else {
                                                    if (_0x8d1759[0x2] == 'CS') {
                                                        _0x4cbb42 = document['querySelectorAll'](_0x52b01f(0x2ec))[_0x5c4267][_0x52b01f(0x1fb)][0x1][_0x52b01f(0x2c9)][_0x52b01f(0x260)]('\x0a')[0x0];
                                                        let _0xd8155f = _0x50a13c - 0x1;
                                                        _0x43fee0['push'](_0x52b01f(0x206) + _0xd8155f + _0x52b01f(0x2a2)), (_0x8d1759[0x0] != '-' || _0x8d1759[0x1] != '-') && _0x43fee0[_0x52b01f(0x235)](_0x52b01f(0x2e8) + _0xd8155f + '\x20-\x20HAPUS\x20ABSEN</strong>');
                                                    } else {
                                                        if (_0x8d1759[0x2] == _0x52b01f(0x2eb)) {
                                                            _0x4cbb42 = document[_0x52b01f(0x237)](_0x52b01f(0x2ec))[_0x5c4267]['childNodes'][0x1][_0x52b01f(0x2c9)]['split']('\x0a')[0x0];
                                                            let _0x264fd0 = _0x50a13c - 0x1;
                                                            _0x43fee0[_0x52b01f(0x235)](_0x52b01f(0x206) + _0x264fd0 + '\x20-\x20Cuti\x20Alasan\x20Penting</strong>'), (_0x8d1759[0x0] != '-' || _0x8d1759[0x1] != '-') && _0x43fee0[_0x52b01f(0x235)]('<strong\x20style=\x22color:red;\x22>' + _0x264fd0 + _0x52b01f(0x2c7));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                _0x4cbb42 != '' && _0x1e1890[_0x52b01f(0x235)](_0x4cbb42), _0x43fee0['length'] >= 0x1 && _0x2fa73f[_0x52b01f(0x235)](_0x43fee0);
                            }
                            $('#datatableRB_wrapper\x20>\x20div:nth-child(2)')[_0x52b01f(0x30d)](_0x52b01f(0x2fc));
                            let _0x2ace30 = 0x1;
                            _0x1e1890[_0x52b01f(0x249)](function (_0x5af2b0) {
                                const _0x930d80 = _0x52b01f;
                                $('#tr')[_0x930d80(0x2c4)](_0x930d80(0x20e) + _0x2ace30++ + _0x930d80(0x300) + _0x5af2b0 + _0x930d80(0x1fe));
                            }), _0x2fa73f[_0x52b01f(0x249)](function (_0x3e4312, _0x2f42af) {
                                _0x3e4312['forEach'](function (_0x405643) {
                                    const _0x7c3cf0 = _0x2900;
                                    $(_0x7c3cf0(0x285) + (_0x2f42af + 0x1) + ')\x20>\x20td:nth-child(3)')[_0x7c3cf0(0x2c4)](_0x405643 + '<br>');
                                });
                            }), $(_0x52b01f(0x2ac))[_0x52b01f(0x2ef)](function () {
                                const _0x2d35d4 = _0x52b01f;
                                for (let _0x2ce09a = 0x0; _0x2ce09a < _0x3e0da9; _0x2ce09a++) {
                                    for (let _0x5ec26c = 0x2; _0x5ec26c < _0x3e9a9c; _0x5ec26c++) {
                                        const _0x8bd035 = document[_0x2d35d4(0x237)](_0x2d35d4(0x2ec))[_0x2ce09a][_0x2d35d4(0x282)][_0x5ec26c][_0x2d35d4(0x2c9)][_0x2d35d4(0x260)]('\x0a');
                                        if (_0x8bd035[0x2] == 'TKS') document[_0x2d35d4(0x237)](_0x2d35d4(0x2ec))[_0x2ce09a][_0x2d35d4(0x282)][_0x5ec26c][_0x2d35d4(0x250)](_0x2d35d4(0x314), 'background-color:\x20red');
                                        else _0x8bd035[0x2] == '-' && ((_0x8bd035[0x0] == '-' || _0x8bd035[0x1] == '-') && document['querySelectorAll'](_0x2d35d4(0x2ec))[_0x2ce09a][_0x2d35d4(0x282)][_0x5ec26c]['setAttribute'](_0x2d35d4(0x314), _0x2d35d4(0x28f)));
                                    }
                                }
                            }), $(_0x52b01f(0x213))[_0x52b01f(0x2ef)](function () {
                                const _0x4d8158 = _0x52b01f;
                                document['querySelector']('body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div:nth-child(1)\x20>\x20div\x20>\x20select')[_0x4d8158(0x2e9)] = localStorage[_0x4d8158(0x228)], document[_0x4d8158(0x20a)](_0x4d8158(0x2b2))[_0x4d8158(0x2e9)] = localStorage[_0x4d8158(0x23e)], document[_0x4d8158(0x20a)](_0x4d8158(0x224))['selectedIndex'] = localStorage[_0x4d8158(0x2db)], document[_0x4d8158(0x20a)](_0x4d8158(0x224))['dispatchEvent'](new Event(_0x4d8158(0x279)));
                            }), $(_0x52b01f(0x26b))['click'](function () {
                                const _0x4d51bc = _0x52b01f;
                                var _0x1a1628 = document[_0x4d51bc(0x20a)](_0x4d51bc(0x205));
                                _0x1a1628[_0x4d51bc(0x314)][_0x4d51bc(0x2f3)] === 'none' ? _0x1a1628['style'][_0x4d51bc(0x2f3)] = _0x4d51bc(0x255) : _0x1a1628[_0x4d51bc(0x314)][_0x4d51bc(0x2f3)] = _0x4d51bc(0x215);
                            });
                        }
                    }
                }
            }
        }

        function _0x56e8de() {
            const _0x394128 = _0x667f74;
            _0x323484[_0x394128(0x30a)] = $(_0x394128(0x2a4))[_0x394128(0x25d)]();
        }

        function _0x21174b() {
            const _0x39eacc = _0x667f74;
            let _0x52f288 = new Date()[_0x39eacc(0x242)](),
                _0xcd9900 = new Date()[_0x39eacc(0x210)]();
            return _0x52f288[_0x39eacc(0x2d7)]()[_0x39eacc(0x22d)] == 0x1 && (_0x52f288 = '0' + _0x52f288), _0xcd9900[_0x39eacc(0x2d7)]()[_0x39eacc(0x22d)] == 0x1 && (_0xcd9900 = '0' + _0xcd9900), _0x52f288 + ':' + _0xcd9900;
        }

        function _0x5f2944(_0x46038a, _0x43d7e4, _0x35c520) {
            const _0x2bb0b7 = _0x667f74;
            let _0x4ebbaf = _0x35c520[_0x2bb0b7(0x260)](':'),
                _0x2dddd0 = _0x4ebbaf[0x0],
                _0x170b31 = _0x4ebbaf[0x1];
            _0x2dddd0['length'] == '1' && (_0x2dddd0 = '0' + _0x2dddd0);
            _0x4ebbaf = _0x2dddd0 + ':' + _0x170b31;
            var _0x453d41 = Date[_0x2bb0b7(0x308)]($(_0x2bb0b7(0x2c6))[_0x2bb0b7(0x25d)]() + 'T' + _0x46038a),
                _0x31b077 = Date['parse']($(_0x2bb0b7(0x2c6))['val']() + 'T' + _0x43d7e4),
                _0x273504 = Date[_0x2bb0b7(0x308)]($(_0x2bb0b7(0x2c6))[_0x2bb0b7(0x25d)]() + 'T' + _0x4ebbaf);
            return _0x273504 >= _0x453d41 && _0x273504 <= _0x31b077 ? !![] : ![];
        }

        function _0x12014f(_0x14d369, _0x5ac733) {
            const _0xa7f456 = _0x667f74;
            let _0x15b425 = _0x14d369[_0xa7f456(0x260)](':')[0x0],
                _0x2d4ad6 = _0x14d369[_0xa7f456(0x260)](':')[0x1];
            return _0x15b425 = parseInt(_0x15b425), _0x2d4ad6 = parseInt(_0x2d4ad6), _0x5ac733 = parseInt(_0x5ac733), _0x2d4ad6 < 0x3c && (_0x2d4ad6 = _0x2d4ad6 + _0x5ac733, _0x2d4ad6 >= 0x3c && (_0x2d4ad6 = _0x2d4ad6 % 0x3c, _0x15b425 < 0x17 && (_0x15b425 = _0x15b425 + 0x1))), _0x15b425 = _0x15b425[_0xa7f456(0x24d)](), _0x2d4ad6 = _0x2d4ad6[_0xa7f456(0x24d)](), _0x15b425[_0xa7f456(0x22d)] == 0x1 && (_0x15b425 = '0' + _0x15b425), _0x2d4ad6[_0xa7f456(0x22d)] == 0x1 && (_0x2d4ad6 = '0' + _0x2d4ad6), _0x15b425 + ':' + _0x2d4ad6;
        }

        function _0x48a3dc(_0x5036b9) {
            const _0x3aa2e6 = _0x667f74;
            let _0x180821 = new Date(_0x5036b9),
                _0x3286bf = new Array(0x7);
            return _0x3286bf[0x0] = _0x3aa2e6(0x234), _0x3286bf[0x1] = _0x3aa2e6(0x218), _0x3286bf[0x2] = _0x3aa2e6(0x2a3), _0x3286bf[0x3] = 'Rabu', _0x3286bf[0x4] = _0x3aa2e6(0x1fd), _0x3286bf[0x5] = _0x3aa2e6(0x2d5), _0x3286bf[0x6] = _0x3aa2e6(0x2a0), _0x3286bf[_0x180821[_0x3aa2e6(0x289)]()];
        }

        function _0x2a452c(_0x4d7b02) {
            const _0x11cdd6 = _0x667f74;
            let _0x161e8d = new Date(_0x4d7b02),
                _0x3674d1 = new Array(0xc);
            return _0x3674d1[0x0] = _0x11cdd6(0x1f2), _0x3674d1[0x1] = _0x11cdd6(0x291), _0x3674d1[0x2] = 'Maret', _0x3674d1[0x3] = _0x11cdd6(0x2a8), _0x3674d1[0x4] = _0x11cdd6(0x2bc), _0x3674d1[0x5] = _0x11cdd6(0x2f2), _0x3674d1[0x6] = _0x11cdd6(0x2f0), _0x3674d1[0x7] = _0x11cdd6(0x2b3), _0x3674d1[0x8] = _0x11cdd6(0x2da), _0x3674d1[0x9] = 'Oktober', _0x3674d1[0xa] = _0x11cdd6(0x21d), _0x3674d1[0xb] = _0x11cdd6(0x22e), _0x3674d1[_0x161e8d['getMonth']()];
        }

        function _0x57f823() {
            const _0x32df43 = _0x667f74;
            var _0x39764f = new Date(),
                _0x3dd3af = String(_0x39764f['getDate']())['padStart'](0x2, '0'),
                _0x266baf = String(_0x39764f['getMonth']() + 0x1)['padStart'](0x2, '0'),
                _0x280ea9 = _0x39764f[_0x32df43(0x272)]();
            return _0x280ea9 + '-' + _0x266baf + '-' + _0x3dd3af;
        }

        function _0xa43bd5(_0x5cec36, _0x348daf) {
            const _0x5a108e = _0x667f74;
            var _0x668bd4 = 0x0,
                _0x495e81 = 0x0;
            let _0x12ca76 = '',
                _0x1409af = ![];
            const _0x3a61ab = $(_0x5a108e(0x27a))[_0x5a108e(0x26f)]()['trim']();
            $[_0x5a108e(0x275)](base_url + _0x5a108e(0x30e), {
                'selected_year': _0x5cec36,
                'selected_month': _0x348daf,
                'selected_day': _0x12ca76
            })['then'](function (_0x424974) {
                const _0x5e30a6 = _0x5a108e;
                $['each'](_0x424974, function (_0x1c93ab, _0x30c5b9) {
                    _0x668bd4 = parseInt(_0x668bd4) + parseInt(_0x30c5b9['norma_waktu']);
                }), _0x3a61ab == 'Tambah\x20Kegiatan\x20Belum\x20Diperiksa' && ($('#bulan')['text'](_0x2a452c($(_0x5e30a6(0x2c6))[_0x5e30a6(0x25d)]())[_0x5e30a6(0x2b7)]() + '\x20' + _0x5cec36), $(_0x5e30a6(0x21f))[_0x5e30a6(0x26f)](_0x668bd4), _0x424974[_0x5e30a6(0x22d)] >= 0x1 && (_0x3952a9[_0x5e30a6(0x22f)](_0x5e30a6(0x261), '==', _0x39f5ce)[_0x5e30a6(0x275)]()[_0x5e30a6(0x2bb)](function (_0x649c4b) {
                    const _0x121e6e = _0x5e30a6;
                    if (!_0x649c4b[_0x121e6e(0x211)][_0x121e6e(0x2a9)]) {
                        if (_0x649c4b[_0x121e6e(0x2b0)] == ![]) {
                            let _0x5a67fa;
                            _0x649c4b[_0x121e6e(0x249)](function (_0x2cda95) {
                                _0x5a67fa = _0x2cda95['id'];
                            }), _0x3952a9['doc'](_0x5a67fa)[_0x121e6e(0x286)]({
                                'updated_at': _0x57f823()
                            });
                        }
                    }
                }), _0x28347d[_0x5e30a6(0x22f)](_0x5e30a6(0x261), '==', _0x39f5ce)[_0x5e30a6(0x22f)](_0x5e30a6(0x2e0), '==', localStorage[_0x5e30a6(0x2e0)])[_0x5e30a6(0x22f)]('bulan', '==', _0x348daf)[_0x5e30a6(0x22f)](_0x5e30a6(0x296), '==', _0x5cec36)[_0x5e30a6(0x275)]()[_0x5e30a6(0x2bb)](function (_0x401907) {
                    const _0x535d4e = _0x5e30a6;
                    if (!_0x401907['metadata'][_0x535d4e(0x2a9)]) {
                        if (_0x401907[_0x535d4e(0x2b0)] == ![]) {
                            let _0x2f8b7d;
                            _0x401907[_0x535d4e(0x249)](function (_0xa7eaca) {
                                _0x2f8b7d = _0xa7eaca['id'];
                            }), _0x28347d[_0x535d4e(0x2e3)](_0x2f8b7d)[_0x535d4e(0x286)]({
                                'updated_at': _0x57f823(),
                                'belum_diperiksa': _0x668bd4
                            });
                        } else _0x1409af == ![] && (_0x28347d[_0x535d4e(0x227)]({
                            'nip': localStorage[_0x535d4e(0x261)],
                            'jabatan': localStorage[_0x535d4e(0x2e0)],
                            'bulan': _0x348daf,
                            'tahun': _0x5cec36,
                            'updated_at': _0x57f823(),
                            'belum_diperiksa': _0x668bd4
                        }), _0x1409af = !![]);
                    }
                }))), (_0x3a61ab == _0x5e30a6(0x2ea) || _0x3a61ab == 'Kegiatan\x20Disetujui') && (_0x424974[_0x5e30a6(0x22d)] >= 0x1 && _0x28347d['where'](_0x5e30a6(0x261), '==', _0x39f5ce)['where']('jabatan', '==', localStorage[_0x5e30a6(0x2e0)])['where'](_0x5e30a6(0x2c1), '==', _0x348daf)[_0x5e30a6(0x22f)](_0x5e30a6(0x296), '==', _0x5cec36)[_0x5e30a6(0x275)]()[_0x5e30a6(0x2bb)](function (_0x427d4a) {
                    const _0x3c6978 = _0x5e30a6;
                    if (!_0x427d4a['metadata'][_0x3c6978(0x2a9)]) {
                        if (_0x427d4a[_0x3c6978(0x2b0)] == ![]) {
                            let _0x5e3806;
                            _0x427d4a[_0x3c6978(0x249)](function (_0x5ecdd0) {
                                _0x5e3806 = _0x5ecdd0['id'];
                            }), _0x28347d[_0x3c6978(0x2e3)](_0x5e3806)['update']({
                                'data_belum_periksa': _0x424974
                            });
                        } else _0x1409af == ![] && (_0x28347d['add']({
                            'nip': _0x39f5ce,
                            'jabatan': localStorage[_0x3c6978(0x2e0)],
                            'bulan': _0x348daf,
                            'tahun': _0x5cec36,
                            'updated_at': _0x57f823(),
                            'data_belum_periksa': _0x424974
                        }), _0x1409af = !![]);
                    }
                }));
            });
            let _0x3a795d = _0x5a108e(0x2a5);
            $[_0x5a108e(0x275)](base_url + _0x5a108e(0x29d), {
                'selected_year': _0x5cec36,
                'selected_month': _0x348daf,
                'selected_penilai': _0x3a795d
            })[_0x5a108e(0x2bb)](function (_0x3c3361) {
                const _0xdf67a6 = _0x5a108e;
                $[_0xdf67a6(0x2f1)](_0x3c3361, function (_0x4bce9b, _0x419319) {
                    const _0x558eeb = _0xdf67a6;
                    _0x495e81 = parseInt(_0x495e81) + parseInt(_0x419319[_0x558eeb(0x306)]);
                }), _0x3a61ab == _0xdf67a6(0x2ed) && ($('#setuju')[_0xdf67a6(0x26f)](_0x495e81), _0x3c3361[_0xdf67a6(0x22d)] >= 0x1 && _0x28347d[_0xdf67a6(0x22f)](_0xdf67a6(0x261), '==', _0x39f5ce)[_0xdf67a6(0x22f)](_0xdf67a6(0x2e0), '==', localStorage['jabatan'])[_0xdf67a6(0x22f)](_0xdf67a6(0x2c1), '==', _0x348daf)[_0xdf67a6(0x22f)]('tahun', '==', _0x5cec36)['get']()[_0xdf67a6(0x2bb)](function (_0xb0e1e4) {
                    const _0x178116 = _0xdf67a6;
                    if (!_0xb0e1e4[_0x178116(0x211)][_0x178116(0x2a9)]) {
                        if (_0xb0e1e4[_0x178116(0x2b0)] == ![]) {
                            let _0x333d78;
                            _0xb0e1e4['forEach'](function (_0x49079c) {
                                _0x333d78 = _0x49079c['id'];
                            }), _0x28347d[_0x178116(0x2e3)](_0x333d78)[_0x178116(0x286)]({
                                'sudah_diperiksa': _0x495e81
                            });
                        } else _0x1409af == ![] && (_0x28347d[_0x178116(0x227)]({
                            'nip': localStorage[_0x178116(0x261)],
                            'jabatan': localStorage[_0x178116(0x2e0)],
                            'bulan': _0x348daf,
                            'tahun': _0x5cec36,
                            'updated_at': _0x57f823(),
                            'sudah_diperiksa': _0x495e81
                        }), _0x1409af = !![]);
                    }
                })), (_0x3a61ab == _0xdf67a6(0x2ea) || _0x3a61ab == _0xdf67a6(0x30b)) && (_0x3c3361['length'] >= 0x1 && _0x28347d[_0xdf67a6(0x22f)](_0xdf67a6(0x261), '==', _0x39f5ce)['where']('jabatan', '==', localStorage[_0xdf67a6(0x2e0)])[_0xdf67a6(0x22f)](_0xdf67a6(0x2c1), '==', _0x348daf)[_0xdf67a6(0x22f)](_0xdf67a6(0x296), '==', _0x5cec36)[_0xdf67a6(0x275)]()[_0xdf67a6(0x2bb)](function (_0x3776ca) {
                    const _0x32a832 = _0xdf67a6;
                    if (!_0x3776ca[_0x32a832(0x211)][_0x32a832(0x2a9)]) {
                        if (_0x3776ca['empty'] == ![]) {
                            let _0x3fe7be;
                            _0x3776ca[_0x32a832(0x249)](function (_0x4e2539) {
                                _0x3fe7be = _0x4e2539['id'];
                            }), _0x28347d['doc'](_0x3fe7be)[_0x32a832(0x286)]({
                                'data_sudah_periksa': _0x3c3361
                            });
                        } else _0x1409af == ![] && (_0x28347d[_0x32a832(0x227)]({
                            'nip': _0x39f5ce,
                            'jabatan': localStorage[_0x32a832(0x2e0)],
                            'bulan': _0x348daf,
                            'tahun': _0x5cec36,
                            'updated_at': _0x57f823(),
                            'data_sudah_periksa': _0x3c3361
                        }), _0x1409af = !![]);
                    }
                }));
            });
        }

        function _0x1bbbca() {
            const _0x3f564b = _0x667f74;
            document[_0x3f564b(0x20a)](_0x3f564b(0x29b))[_0x3f564b(0x2df)] == !![] ? ($(_0x3f564b(0x216))[_0x3f564b(0x23c)](_0x3f564b(0x251), ![]), $(_0x3f564b(0x2e4))['removeAttr'](_0x3f564b(0x2d4), ![])) : ($('#m_durasi_input')['attr']('disabled', !![]), $(_0x3f564b(0x2e4))[_0x3f564b(0x2a1)]('hidden', !![]));
        }

        function _0x267675(_0x29936b) {
            const _0x3fcbc8 = _0x667f74;
            let _0x1313ff = _0x29936b[_0x3fcbc8(0x260)]('-')[0x2],
                _0x1ac2f9 = _0x29936b[_0x3fcbc8(0x260)]('-')[0x0],
                _0x4273e8 = _0x2a452c(_0x29936b);
            return _0x1313ff + '\x20' + _0x4273e8 + '\x20' + _0x1ac2f9;
        }
        if (document[_0x667f74(0x20a)](_0x667f74(0x2a4)) != null) {
            var _0x5d3081 = new TimePicker(_0x667f74(0x2a4), {
                'lang': _0x667f74(0x265),
                'theme': 'dark'
            });
            _0x5d3081['on'](_0x667f74(0x279), function (_0x2bca2c) {
                const _0x35b82f = _0x667f74;
                var _0x56b086 = (_0x2bca2c[_0x35b82f(0x20f)] || '00') + ':' + (_0x2bca2c[_0x35b82f(0x252)] || '00');
                _0x2bca2c['element']['value'] = _0x56b086, _0x56e8de();
            });
        }
    });
}()));

function _0xa4c4() {
    const _0x5dda7b = ['durasi', '\x0a\x09\x09\x09\x09\x09\x09\x09\x09<tr>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09<th\x20scope=\x22row\x22>', 'hour', 'getMinutes', 'metadata', 'src', '#ref', 'Analisis\x20Tugas\x20belum\x20dipilih', 'none', '#m_durasi_input', 'error', 'Senin', 'value', 'color:#FF9900;font-style:italic;', '16:30', '#analisis_tugas_temp', 'November', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div:nth-child(2)\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div:nth-child(1)\x20>\x20div\x20>\x20select', '#periksa', '#datatableKegiatan\x20>\x20tbody\x20>\x20tr:nth-child(1)\x20>\x20td:nth-child(1)', '11:30', '07:30', '#myModal', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20select', '12:30', 'https://ekinerja.kotawaringinbaratkab.go.id', 'add', 'rbBulan', 'Dashboard', 'id_pekerjaan_encrypt', '#tgl_indo', 'tanggalTetap', 'length', 'Desember', 'where', '\x20|\x20', '12SMYIxw', '<option\x20value=\x22\x22>-\x20Pilih\x20Uraian\x20Tugas\x20-</option>', '#tes', 'Minggu', 'push', 'dispatchEvent', 'querySelectorAll', '#m_analisis_tugas\x20option:selected', '#jamTetap', 'valJam', 'top', 'removeAttr', '580059EhnUpm', 'rbTahun', '\x20)\x20Lock\x20Jam', 'row', '\x20-\x20SPD\x20Luar\x20Daerah</strong>', 'getHours', '32gymywa', 'after', '1846345SRKdVE', '\x20-\x20SPD\x20Dalam\x20Daerah</strong>', '\x0a<!--\x20Hendrik\x20Svm\x20-->\x0a<span\x20id=\x22span1\x22>\x0a<div\x20id=\x22div1\x22\x20class=\x22box\x20px-4\x22>\x0a<table\x20border=\x220\x22\x20width=\x22100%\x22\x20style=\x22table-layout:\x20fixed;\x22>\x0a<tbody>\x0a<tr>\x0a<td\x20width=\x2210%\x22>Uraian\x20Tugas\x0a</td>\x0a<td\x20width=\x221%\x22>:</td>\x0a<td\x20style=\x22color:\x20red;\x22>{{uraianTugas}}</td>\x0a</tr>\x0a<tr>\x0a<td>Analisis\x20Tugas</td>\x0a<td>:</td>\x0a<td\x20style=\x22color:\x20red;\x22>{{analisisTugas}}</td>\x0a</tr>\x0a<tr>\x0a<td>Tanggal</td>\x0a<td>:</td>\x0a<td\x20style=\x22color:\x20red;\x22>{{tanggal}}</td>\x0a</tr>\x0a<tr>\x0a<td>Jam</td>\x0a<td>:</td>\x0a<td\x20style=\x22color:\x20red;\x22>{{jam}}</td>\x0a</tr>\x0a<tr>\x0a<td>Nama\x20Pekerjaan</td>\x0a<td>:</td>\x0a<td\x20style=\x22color:\x20red;\x22>{{namaPekerjaan}}</td>\x0a</tr>\x0a<tr>\x0a<td>Hasil\x20Pekerjaan</td>\x0a<td>:</td>\x0a<td\x20style=\x22color:\x20red;\x22>{{hasilPekerjaan}}</td>\x0a</tr>\x0a</tbody>\x0a</table>\x20<button\x20id=\x22btnSetKegiatan\x22\x20v-on:click=\x22setKegiatan\x22\x20type=\x22button\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#myModal\x22\x0adata-backdrop=\x22static\x22\x20data-keyboard=\x22false\x22\x20class=\x22btn\x20btn-danger\x22>Set\x0aKegiatan</button>\x0a<button\x20v-on:click=\x22unLock\x22\x20type=\x22button\x22\x20id=\x22btnUnLock\x22\x20class=\x22btn\x20btn-primary\x22>Unlock</button>\x0a<a\x20href=\x22https://youtu.be/U41iFdX7lXY\x22\x0atarget=\x22_blank\x22\x20style=\x22float:\x20right;\x22><strong>VIDEO\x20TUTORIAL</strong></a>\x0a\x0a</div>\x0a<div\x20id=\x22myModal\x22\x20tabindex=\x22-1\x22\x20role=\x22dialog\x22\x20aria-labelledby=\x22myLargeModalLabel\x22\x20class=\x22modal\x20fade\x22\x0astyle=\x22display:\x20none;\x22>\x0a<div\x20role=\x22document\x22\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a<div\x20class=\x22modal-content\x22>\x0a<div\x20class=\x22modal-body\x22>\x0a<div\x20class=\x22row\x22>\x0a<div\x20class=\x22col-md-12\x22><label\x20for=\x22m_uraian_tugas\x22>Uraian\x20Tugas</label>\x0a<select\x20id=\x22m_uraian_tugas\x22\x20class=\x22form-control\x22>\x0a</select></div>\x0a</div>\x0a<div\x20class=\x22row\x22>\x0a<div\x20class=\x22col-md-12\x20col-\x22><label\x20for=\x22m_analisis_tugas\x22>Analisis\x20Tugas</label>\x0a<select\x20id=\x22m_analisis_tugas\x22\x20class=\x22form-control\x22>\x0a</select>\x0a</div>\x0a</div>\x0a<div\x20class=\x22row\x22\x20style=\x22margin-top:\x2010px;\x20margin-bottom:\x2010px;\x22>\x0a<div\x20class=\x22col-md-4\x22>\x0a<label\x20for=\x22m_tgl_input\x22>Tanggal\x20<span\x20id=\x22m_tgl_indo\x22\x20style=\x22color:blue\x22></span></label>\x0a<input\x20type=\x22date\x22\x20id=\x22m_tgl_input\x22\x20placeholder=\x22Tanggal\x22\x20value=\x222021-01-31\x22\x0aclass=\x22form-control\x22\x20style=\x22width:\x20190px;\x22>\x0a<div\x20class=\x22radio\x22>\x0a<label>\x0a<input\x20type=\x22radio\x22\x20name=\x22r_tanggal\x22\x20id=\x22tanggalTetap\x22\x0avalue=\x22tanggalTetap\x22>\x0a(\x20{{tgl_to_indo(tmpTanggal)}}\x20)\x20Lock\x20Tanggal\x0a</label>\x0a</div>\x0a<div\x20class=\x22radio\x22>\x0a<label>\x0a<input\x20type=\x22radio\x22\x20name=\x22r_tanggal\x22\x20id=\x22tanggalNext\x22\x0avalue=\x22tanggalNext\x22>\x0aAuto\x20Set\x20Tanggal\x20+\x201\x20hari\x0a</label>\x0a</div>\x0a<button\x20v-on:click=\x22clearTanggal\x22>Clear\x20Checked</button>\x0a</div>\x0a<div\x20class=\x22col-md-4\x22><label\x20for=\x22jam_input\x22>Jam\x0aMulai</label>\x20<input\x20type=\x22text\x22\x20name=\x22m_jam_input\x22\x20id=\x22m_jam_input\x22\x0aplaceholder=\x22Jam\x22\x20value=\x2217:38\x22\x20class=\x22form-control\x22\x0astyle=\x22width:\x2040%;\x22>\x0a<div\x20class=\x22radio\x22>\x0a<label>\x0a<input\x20type=\x22radio\x22\x20name=\x22r_jam\x22\x20id=\x22jamTetap\x22\x20value=\x22jamTetap\x22>\x0a(\x20{{tmpJam}}\x20)\x20Lock\x20Jam\x0a</label>\x0a</div>\x0a<div\x20class=\x22radio\x22>\x0a<label>\x0a<input\x20type=\x22radio\x22\x20name=\x22r_jam\x22\x20id=\x22jamNext\x22\x20value=\x22jamNext\x22>\x0aAuto\x20Set\x20Jam\x20+\x20{{tmpDurasi}}\x20Menit\x0a</label>\x0a</div>\x0a<button\x20v-on:click=\x22clearJam\x22>Clear\x20Checked</button>\x0a</div>\x0a<div\x20class=\x22col-md-4\x22>\x0a<label\x20for=\x22durasi_input\x22>Durasi\x20(Menit)</label>\x20<input\x20type=\x22text\x22\x0aid=\x22m_durasi_input\x22\x20placeholder=\x22Durasi\x22\x20value=\x220\x22\x20class=\x22form-control\x22\x0astyle=\x22width:\x2065px;\x22\x20disabled>\x0a<p\x20id=\x22maxDurasi\x22\x20style=\x22color:\x20red;\x22></p>\x0a</div>\x0a</div>\x0a<div\x20class=\x22row\x22>\x0a<div\x20class=\x22col-md-12\x22><label\x20for=\x22m_nama_kegiatan\x22>Nama\x20Pekerjaan</label>\x0a<textarea\x20id=\x22m_nama_kegiatan\x22\x20placeholder=\x22Nama\x20Pekerjaan\x22\x20cols=\x2230\x22\x0arows=\x222\x22\x20class=\x22form-control\x22></textarea>\x0a</div>\x0a</div>\x0a<div\x20class=\x22row\x22>\x0a<div\x20class=\x22col-md-12\x22><label\x20for=\x22m_hasil_pekerjaan\x22>Hasil\x20Pekerjaan</label>\x0a<textarea\x20id=\x22m_hasil_pekerjaan\x22\x20placeholder=\x22Hasil\x20Pekerjaan\x22\x20cols=\x2230\x22\x0arows=\x222\x22\x20class=\x22form-control\x22></textarea>\x0a</div>\x0a</div>\x0a</div>\x0a<div\x20class=\x22modal-footer\x22>\x0a<button\x20id=\x22btnClose\x22\x20type=\x22button\x22\x20data-dismiss=\x22modal\x22\x20class=\x22btn\x20btn-default\x22>Close</button>\x0a<button\x20v-on:click=\x22saveKegiatan\x22\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x22>Simpan</button></div>\x0a</div>\x0a</div>\x0a</div>\x0a</span>\x0a', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.ng-scope\x20>\x20div\x20>\x20div.box-header\x20>\x20div\x20>\x20div.col-md-10\x20>\x20div\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20select', 'forEach', 'uraianTugas', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header\x20>\x20div\x20>\x20div.col-md-10\x20>\x20div\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20select', '/api/get_cek_uraian_bytglmutasi', 'toString', 'valUraianTugas', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div.box.box-primary\x20>\x20form\x20>\x20div.box-body\x20>\x20.row:first', 'setAttribute', 'disabled', 'minute', 'scrollTop', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div.box\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20select', 'block', 'analisisTugas', 'parentElement', 'Inputan\x20diluar\x20jam\x20kerja,\x20cek\x20kembali', 'scrollTo', 'pangkat', 'fire', '#m_nama_kegiatan', 'val', '\x20Menit', '12:01', 'split', 'nip', 'nMenit', '#nama_kegiatan', 'OPD', 'idn', '#m_tgl_input', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div:nth-child(1)', '.form-group.has-error', '16:00', '<option\x20value=\x22', '#berkas', '#datatableRB_length', '07:00', 'shown.bs.modal', 'text', 'namaPekerjaan', 'createElement', 'getFullYear', '</option>', 'nilaiTanggal', 'get', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div.col-md-4\x20>\x20div\x20>\x20select', '#datatableRB\x20>\x20tbody\x20>\x20tr:nth-child(1)', '#hasil_pekerjaan', 'change', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content-header\x20>\x20h1', 'G-Z85NTX31QC', 'scrollHeight', '<span\x20style=\x22color:blue;\x22>', 'https://ekinerja.kotawaringinbaratkab.go.id/dashboard/rekap-bulanan.html', 'Maksimal\x20', '#jam_input', '#m_uraian_tugas\x20option:selected', 'cells', '12:29', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div:nth-child(1)\x20>\x20div\x20>\x20select', '#tr\x20>\x20tr:nth-child(', 'update', '#uraian_tugas_temp', 'onload', 'getDay', 'nama_pekerjaan', 'title', 'valTanggal', '<option\x20value=\x22\x22>-\x20Pilih\x20Analisis\x20Tugas\x20-</option>', 'firestore', 'background-color:\x20yellow', 'nJam', 'Februari', 'https://ekinerja.kotawaringinbaratkab.go.id/dashboard', 'Oops...\x20BULAN\x20RAMADHAN', '#tanggalNext', 'Rekap\x20Bulanan', 'tahun', 'id_rincian_pekerjaan_encrypt', '12204885dWqZkP', 'success', 'Auto\x20Set\x20Jam\x20+\x20', '#jamNext', 'attributes', '/dashboard/kegiatan_disetujui/get_data', 'body\x20>\x20div.main_container__1GGJE.main_grey__26yKi', 'appendChild', 'Sabtu', 'attr', '\x20-\x20Cuti\x20SaKit</strong>', 'Selasa', '#m_jam_input', 'Atasan\x20Langsung', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.container-fluid\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(4)\x20>\x20td:nth-child(3)', 'hendrik-svm.firebaseapp.com', 'April', 'fromCache', 'offsetHeight', '###07:30###', '#cek', 'atasan', '#m_uraian_tugas', '\x20diluar\x20jam\x20kerja', 'empty', 'unit', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content\x20>\x20div\x20>\x20div.box-header.with-border\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20div\x20>\x20select', 'Agustus', '<option\x20value=\x22\x22>-\x20Pilih\x20analisis\x20Tugas\x20-</option>', 'documentElement', 'initializeApp', 'toUpperCase', '\x20-\x20Cuti\x20Tahunan</strong>', 'tanggal', 'href', 'then', 'Mei', 'body\x20>\x20div.wrapper\x20>\x20header\x20>\x20nav\x20>\x20div\x20>\x20ul\x20>\x20li\x20>\x20a\x20>\x20span', '\x20-\x20Surat\x20Tugas</strong>', 'body\x20>\x20div.modal.fade.ng-scope.ng-isolate-scope.in\x20>\x20div\x20>\x20div\x20>\x20div.modal-body.ng-scope\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(1)\x20>\x20td:nth-child(3)\x20>\x20input', 'Auto\x20Set\x20Tanggal\x20+\x201\x20hari', 'bulan', 'tmpTanggal', '<span\x20style=\x22color:green;\x22>', 'append', 'Entry\x20Manual', '#tgl_input', '\x20-\x20HAPUS\x20ABSEN</strong>', 'Pekerjaan\x20Sukses\x20tersimpan', 'outerText', 'tmpDurasi', '1:968242211940:web:bb274c8760de582253c371', 'html', 'function', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.container-fluid\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(2)\x20>\x20td:nth-child(3)', 'location', '#myModal\x20>\x20div\x20>\x20div\x20>\x20div.modal-footer\x20>\x20button.btn.btn-success', '12:59', 'undefined', 'tanggalNext', 'hidden', 'Jum\x27at', 'uraianTugasArray', 'toLocaleString', 'nilaiJam', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.container-fluid\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(3)\x20>\x20td:nth-child(3)', 'September', 'rbTipePegawai', 'innerWidth', 'https://hendrik-svm.firebaseio.com', '\x0a<style\x20type=\x22text/css\x22>\x0a@media\x20(min-width:\x20800px)\x20{\x0a.modal-dialog\x20{\x0awidth:\x201000px;\x0amargin:\x2030px\x20auto;\x0a}\x0a}\x0a\x0a.tg\x20{\x0aborder-collapse:\x20collapse;\x0aborder-spacing:\x200;\x0a}\x0a\x0a.tg\x20td\x20{\x0aborder-color:\x20black;\x0aborder-style:\x20solid;\x0aborder-width:\x201px;\x0afont-family:\x20Arial,\x20sans-serif;\x0afont-size:\x2014px;\x0aoverflow:\x20hidden;\x0apadding:\x202;\x0aword-break:\x20normal;\x0a}\x0a\x0a.tg\x20th\x20{\x0aborder-color:\x20black;\x0aborder-style:\x20solid;\x0aborder-width:\x201px;\x0afont-family:\x20Arial,\x20sans-serif;\x0afont-size:\x2014px;\x0afont-weight:\x20normal;\x0aoverflow:\x20hidden;\x0apadding:\x202px;\x0aword-break:\x20normal;\x0a}\x0a\x0a.tg\x20.tg-baqh\x20{\x0atext-align:\x20center;\x0avertical-align:\x20top\x0a}\x0a\x0a.tg\x20.tg-6qw1\x20{\x0abackground-color:\x20#c0c0c0;\x0atext-align:\x20center;\x0avertical-align:\x20top\x0a}\x0a</style>\x0a\x0a<div\x20class=\x22col-md-4\x22\x20style=\x22margin-left:\x2050px\x22>\x0a<table\x20class=\x22tg\x22\x20style=\x22undefined;table-layout:\x20fixed;\x20width:\x20297px\x22>\x0a<colgroup>\x0a<col\x20style=\x22width:\x20137px\x22>\x0a<col\x20style=\x22width:\x20160px\x22>\x0a</colgroup>\x0a<thead>\x0a<tr>\x0a<th\x20class=\x22tg-baqh\x22\x20colspan=\x222\x22><span\x20style=\x22font-weight:bold\x22\x20id=\x22bulan\x22></span></th>\x0a</tr>\x0a</thead>\x0a<tbody>\x0a<tr>\x0a<td\x20class=\x22tg-6qw1\x22><span\x20style=\x22font-weight:bold\x22>KEGIATAN</span></td>\x0a<td\x20class=\x22tg-6qw1\x22><span\x20style=\x22font-weight:bold\x22>MENIT</span></td>\x0a</tr>\x0a<tr>\x0a<td\x20class=\x22tg-baqh\x22>Belum\x20Diperiksa</td>\x0a<td\x20class=\x22tg-baqh\x22\x20id=\x22periksa\x22></td>\x0a</tr>\x0a<tr>\x0a<td\x20class=\x22tg-baqh\x22>Sudah\x20Disetujui</td>\x0a<td\x20class=\x22tg-baqh\x22\x20id=\x22setuju\x22></td>\x0a</tr>\x0a</tbody>\x0a</table>\x0a</div>\x0a', 'checked', 'jabatan', 'hasilPekerjaan', 'script', 'doc', '#maxDurasi', 'head', '965151FCopLT', '6071760PaIUCs', '<strong\x20style=\x22color:red;\x22>', 'selectedIndex', 'Kegiatan\x20Belum\x20Diperiksa', 'CAP', '#datatableRB\x20>\x20tbody\x20>\x20tr', 'Tambah\x20Kegiatan\x20Belum\x20Diperiksa', '<button\x20id=\x22berkas\x22\x20class=\x22btn\x20btn-primary\x22\x20style=\x22margin-left:\x205px\x22>Berkas</button>', 'click', 'Juli', 'each', 'Juni', 'display', '431655HwIlPv', 'Oops...', 'nama_rincian', 'https://ekinerja.kotawaringinbaratkab.go.id/dashboard/entry-manual.html', 'jam', '###16:30###', 'body\x20>\x20div.modal.fade.ng-scope.ng-isolate-scope.in\x20>\x20div\x20>\x20div', 'assign', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22table_berkas\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-bordered\x20table-sm\x20table-responsive\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22>#</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22>Nama</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22>Berkas</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22tr\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20menit', '15:00', 'collection', '</th>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09<td>', 'body\x20>\x20div.wrapper\x20>\x20div\x20>\x20section.content.ng-scope\x20>\x20div\x20>\x20div.box-header\x20>\x20div\x20>\x20div.col-md-10\x20>\x20div\x20>\x20div.col-md-3\x20>\x20div\x20>\x20select', 'valAnalisisTugas', 'hendrik-svm.appspot.com', '12:00', 'preventDefault', 'norma_waktu', '190OByOMP', 'parse', 'Not\x20a\x20valid\x20callback', 'tmpJam', 'Kegiatan\x20Disetujui', '08:00', 'before', '/dashboard/kegiatan/get_data', 'nm_satuan', '968242211940', '9978rRDKHU', 'TPP\x20Gabungan', '11:00', 'style', '12NawpUt', 'libur', '15:30', '\x20hari\x20libur', 'Januari', 'jamNext', '/api/get_analisis_tugas_byuraian', '###16:00###', '#m_analisis_tugas', 'ada\x20yang\x20salah\x20dalam\x20inputan,\x20cek\x20kembali', 'remove', 'body\x20>\x20div.modal.fade.ng-scope.ng-isolate-scope.in\x20>\x20div\x20>\x20div\x20>\x20div.modal-body.ng-scope\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(4)\x20>\x20td:nth-child(3)\x20>\x20div\x20>\x20input', '#span1', 'childNodes', 'AIzaSyByYHD032O_OWUSfbOa78orCIiHzI3BDCc', 'Kamis', '</td>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09<td></td>\x0a\x09\x09\x09\x09\x09\x09\x09\x09</tr>\x0a\x09\x09\x09\x09\x09\x09\x09\x09', 'tanggal\x20', 'Jam\x20', 'nodeValue', '<span\x20style=\x22color:red\x22\x20id=\x22div1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mod\x20Ekin2020\x20v.4\x20By\x20:\x20Hendrik\x20Svm\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>', '#durasi_input', 'Gagal\x20Menyimpan', '#table_berkas', '<span\x20style=\x22color:purple;\x22>', '#analisis_tugas', '#tanggalTetap', 'body\x20>\x20div.wrapper\x20>\x20footer', 'querySelector', 'trim', '#datatableRB_length\x20>\x20label\x20>\x20select'];
    _0xa4c4 = function () {
        return _0x5dda7b;
    };
    return _0xa4c4();
}