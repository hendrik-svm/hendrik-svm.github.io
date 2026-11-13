var e = "sipd_data_tgl1",
  t = "sipd_data_tgl2",
  n = "sipd_tgl1_date",
  i = "sipd_tgl2_date",
  a = 800,
  o = !1,
  r = null,
  d = !1,
  s = [];
function l() {
  (window._sipdOrigXhrOpen &&
    ((XMLHttpRequest.prototype.open = window._sipdOrigXhrOpen),
    delete window._sipdOrigXhrOpen),
    window._sipdOrigXhrSend &&
      ((XMLHttpRequest.prototype.send = window._sipdOrigXhrSend),
      delete window._sipdOrigXhrSend),
    window._sipdOrigFetch &&
      ((window.fetch = window._sipdOrigFetch), delete window._sipdOrigFetch));
}
function p(e) {
  return null == e ? "Rp0" : "Rp" + Math.round(e).toLocaleString("id-ID");
}
function c(e, t) {
  if (!t || !e) return e || "";
  var n = String(e);
  if (-1 !== n.indexOf("|")) return n;
  var i = n.split("."),
    a = String(t).split(".")[0];
  return i[0] === a ? n : ((i[0] = a), i.join("."));
}
function u(e) {
  var t = String(e),
    n = t.indexOf("|");
  if (-1 !== n) {
    var i = t.substring(0, n),
      a = t.substring(n + 1);
    return (
      i
        .split(".")
        .map(function (e) {
          return ("000000000000000" + e).slice(-15);
        })
        .join(".") +
      "/" +
      a
        .split(".")
        .map(function (e) {
          return ("000000000000000" + e).slice(-15);
        })
        .join(".")
    );
  }
  return t
    .split(".")
    .map(function (e) {
      return ("000000000000000" + e).slice(-15);
    })
    .join(".");
}
function g() {
  return 0 === window.location.pathname.indexOf("/penatausahaan/dashboard");
}
function f(e) {
  if (!e) return null;
  var t = {
      januari: 0,
      februari: 1,
      maret: 2,
      april: 3,
      mei: 4,
      juni: 5,
      juli: 6,
      agustus: 7,
      september: 8,
      oktober: 9,
      november: 10,
      desember: 11,
    },
    n = e.match(/^\w+\s+\((\d{1,2})\s+(\w+)\s+(\d{4})\)$/);
  if (n && void 0 !== t[n[2].toLowerCase()])
    return new Date(parseInt(n[3]), t[n[2].toLowerCase()], parseInt(n[1]));
  var i = new Date(e + "T00:00:00");
  if (!isNaN(i.getTime())) return i;
  var a = e.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (a) return new Date(parseInt(a[3]), parseInt(a[2]) - 1, parseInt(a[1]));
  var o = e.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (o) return new Date(parseInt(o[3]), parseInt(o[2]) - 1, parseInt(o[1]));
  var r = e.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/i);
  return r && void 0 !== t[r[2].toLowerCase()]
    ? new Date(parseInt(r[3]), t[r[2].toLowerCase()], parseInt(r[1]))
    : null;
}
function b(e) {
  var t = f(e);
  return t
    ? ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][
        t.getDay()
      ] +
        " (" +
        t.getDate() +
        " " +
        [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ][t.getMonth()] +
        " " +
        t.getFullYear() +
        ")"
    : e;
}
function m(e) {
  var t = String(e).split(".");
  return 6 === t.length && "5" === t[0];
}
function x(e) {
  if (m(e)) return 5;
  var t = String(e).split(".").length;
  return 8 === t ? 0 : t <= 2 ? 1 : 3 === t ? 2 : 5 === t ? 3 : 4;
}
function h() {
  var e = Date.now();
  localStorage.setItem("lastActivity", e.toString());
  var t = new MouseEvent("mousemove", {
    view: window,
    bubbles: !0,
    cancelable: !0,
    clientX: Math.random() * window.innerWidth,
    clientY: Math.random() * window.innerHeight,
  });
  document.dispatchEvent(t);
}
function y(e) {
  var t = e.querySelector(".text-sm.text-slate-800, .text-sm.text-slate-300"),
    n = e.querySelector(".txt-font-12");
  return (
    (t ? t.innerText.trim() : "NoName") +
    "||" +
    (n ? n.innerText.trim() : "NoCode")
  );
}
function v(p) {
  if (o) k("Info", "Sedang memproses, tunggu selesai.", "OK");
  else if (g()) {
    var u,
      x =
        ((u = document.querySelector("input.flatpickr-input")) && u.value) ||
        null;
    if (x) {
      if (
        (function (e) {
          var t = f(e);
          if (!t) return !0;
          var n = t.getFullYear(),
            i = (function () {
              for (
                var e = document.querySelectorAll("span"), t = 0;
                t < e.length;
                t++
              ) {
                var n = e[t].textContent.trim().match(/^Tahun\s+(\d{4})$/);
                if (n) return parseInt(n[1], 10);
              }
              return null;
            })();
          return (
            null === i ||
            n === i ||
            ((function (e) {
              var t = document.getElementById("sipd-modal-w");
              t && t.remove();
              var n = document.createElement("div");
              ((n.id = "sipd-modal-w"),
                (n.style.cssText =
                  "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:flex-start;padding-top:80px;font-family:system-ui,sans-serif;"),
                (n.innerHTML =
                  '<div style="background:white;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);width:440px;max-width:90vw;"><div style="padding:24px;text-align:center;"><div style="font-size:48px;margin-bottom:8px;">&#x26A0;&#xFE0F;</div><h3 style="margin:0 0 12px;font-size:16px;font-weight:700;color:#92400e;">Peringatan</h3><p style="margin:0 0 20px;font-size:14px;color:#374151;line-height:1.5;">' +
                  e +
                  '</p><button id="sipd-close-w-btn" style="padding:8px 24px;background:#ef4444;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">Exit</button></div></div>'),
                document.body.appendChild(n),
                document
                  .getElementById("sipd-close-w-btn")
                  .addEventListener("click", function () {
                    n.remove();
                  }),
                n.addEventListener("click", function (e) {
                  e.target === n && n.remove();
                }));
            })(
              "Tanggal yang dipilih (" +
                b(e) +
                ") tidak sesuai dengan tahun login SIPD (" +
                i +
                ").<br><br>Silakan pilih tanggal yang sesuai dengan tahun " +
                i +
                ".",
            ),
            !1)
          );
        })(x) &&
        (function (e, t) {
          var a = f(t);
          if (!a) return !0;
          if ("A" === e) {
            var o = localStorage.getItem(i);
            if (o) {
              var r = f(o);
              if (r && a >= r)
                return (
                  k(
                    "Validasi Tanggal",
                    "Tanggal Awal " +
                      b(t) +
                      " harus lebih kecil dari Tanggal Akhir " +
                      b(o) +
                      ".",
                    "OK",
                  ),
                  !1
                );
            }
          } else if ("B" === e) {
            var d = localStorage.getItem(n);
            if (d) {
              var s = f(d);
              if (s && s >= a)
                return (
                  k(
                    "Validasi Tanggal",
                    "Tanggal Akhir " +
                      b(t) +
                      " harus lebih besar dari Tanggal Awal " +
                      b(d) +
                      ".",
                    "OK",
                  ),
                  !1
                );
            }
          }
          return !0;
        })(p, x)
      ) {
        var h = "A" === p ? "Awal" : "Akhir";
        E(
          "Yakin ingin ambil data Tanggal " + h + " " + b(x) + "?",
          function () {
            !(function (e) {
              var t = document.querySelector(
                  'button[aria-label="Hari berikutnya"]',
                ),
                n = document.querySelector(
                  'button[aria-label="Hari sebelumnya"]',
                );
              if (t && n)
                (t.click(),
                  setTimeout(function () {
                    (n.click(),
                      console.log(
                        "UI dipaksa refresh dengan simulasi navigasi bolak-balik.",
                      ),
                      e && e());
                  }, 800));
              else {
                var i = document.querySelector(".dm-seg__btn.is-on");
                (i && i.click(),
                  console.log(
                    "UI dipaksa refresh dengan klik ulang tab aktif.",
                  ),
                  e && e());
              }
            })(function () {
              var u;
              ((o = !0),
                (d = !1),
                (r = p),
                S("Scan " + h + "..."),
                (function (e) {
                  var t = document.getElementById("sipd-loading-modal");
                  if (
                    (t && t.remove(),
                    !document.getElementById("sipd-spin-style"))
                  ) {
                    var n = document.createElement("style");
                    ((n.id = "sipd-spin-style"),
                      (n.textContent =
                        "@keyframes sipd-spin{to{transform:rotate(360deg)}}"),
                      document.head.appendChild(n));
                  }
                  var i = "A" === r ? "Awal" : "Akhir",
                    a = b(e),
                    o = document.createElement("div");
                  ((o.id = "sipd-loading-modal"),
                    (o.style.cssText =
                      "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:center;font-family:system-ui,sans-serif;"),
                    (o.innerHTML =
                      '<div style="background:white;border-radius:12px;padding:24px 32px;box-shadow:0 20px 60px rgba(0,0,0,0.3);text-align:center;"><div style="width:32px;height:32px;border:4px solid #3b82f6;border-top-color:transparent;border-radius:50%;animation:sipd-spin 0.8s linear infinite;margin:0 auto 16px;"></div><p style="margin:0 0 16px;font-size:14px;font-weight:600;color:#111827;">Proses Scanning Data Tanggal ' +
                      i +
                      " " +
                      a +
                      '...</p><button id="sipd-batal-scan-btn" style="padding:6px 20px;background:#ef4444;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">Batal</button></div>'),
                    document.body.appendChild(o),
                    document
                      .getElementById("sipd-batal-scan-btn")
                      .addEventListener("click", function () {
                        d = !0;
                      }));
                })(x),
                (u = function () {
                  var r;
                  ((s = []),
                    window._sipdOrigXhrOpen ||
                      ((window._sipdOrigXhrOpen =
                        XMLHttpRequest.prototype.open),
                      (window._sipdOrigXhrSend = XMLHttpRequest.prototype.send),
                      (XMLHttpRequest.prototype.open = function (e, t) {
                        return (
                          (this._sipdUrl = t),
                          (this._sipdMethod = e),
                          window._sipdOrigXhrOpen.apply(this, arguments)
                        );
                      }),
                      (XMLHttpRequest.prototype.send = function (e) {
                        if (!this._sipdUrl)
                          return window._sipdOrigXhrSend.apply(this, arguments);
                        var t = this;
                        return (
                          this.addEventListener("load", function () {
                            try {
                              if (
                                -1 ===
                                (
                                  t.getResponseHeader("content-type") || ""
                                ).indexOf("json")
                              )
                                return;
                              var e;
                              if (
                                !(e =
                                  "json" === t.responseType ||
                                  "" === t.responseType
                                    ? t.responseText ||
                                      (t.response
                                        ? JSON.stringify(t.response)
                                        : "")
                                    : t.responseText || "")
                              )
                                return;
                              var n = JSON.parse(e);
                              Array.isArray(n) &&
                                n.length > 0 &&
                                void 0 !== n[0].id_skpd &&
                                s.push(n);
                            } catch (e) {}
                          }),
                          window._sipdOrigXhrSend.apply(this, arguments)
                        );
                      })),
                    window._sipdOrigFetch ||
                      ((window._sipdOrigFetch = window.fetch),
                      (window.fetch = function (e, t) {
                        return window._sipdOrigFetch
                          .apply(this, arguments)
                          .then(function (e) {
                            return (
                              (e.headers.get("content-type") || "").indexOf(
                                "json",
                              ) > -1 &&
                                e
                                  .clone()
                                  .text()
                                  .then(function (e) {
                                    try {
                                      var t = JSON.parse(e);
                                      Array.isArray(t) &&
                                        t.length > 0 &&
                                        void 0 !== t[0].id_skpd &&
                                        s.push(t);
                                    } catch (e) {}
                                  }),
                              e
                            );
                          });
                      })),
                    (r = function () {
                      !(function (e) {
                        var t = new Set(),
                          n = !1;
                        function i() {
                          n || ((n = !0), e && e());
                        }
                        !(function e() {
                          if (d) i();
                          else {
                            for (
                              var n = document.querySelectorAll(
                                  ".cursor-pointer.grid.grid-cols-12",
                                ),
                                o = null,
                                r = "",
                                s = 0;
                              s < n.length;
                              s++
                            ) {
                              var l = y(n[s]);
                              if (!t.has(l)) {
                                ((o = n[s]), (r = l));
                                break;
                              }
                            }
                            if (o) {
                              var p,
                                c = o.querySelector(".txt-font-12"),
                                u = m(
                                  (c ? c.innerText.trim() : "").replace(
                                    /^[^\d]*/,
                                    "",
                                  ),
                                ),
                                g =
                                  document.querySelectorAll(
                                    ".grid.grid-cols-12",
                                  ).length;
                              if (
                                (p = o.querySelector(
                                  "button.dm-skpd__toggle",
                                )) &&
                                "true" === p.getAttribute("aria-expanded")
                              )
                                return (t.add(r), void setTimeout(e, 10));
                              (t.add(r),
                                o.scrollIntoView({
                                  behavior: "instant",
                                  block: "center",
                                }),
                                o.dispatchEvent(
                                  new MouseEvent("click", {
                                    bubbles: !0,
                                    cancelable: !0,
                                    view: window,
                                  }),
                                ),
                                u
                                  ? setTimeout(function () {
                                      d ? i() : setTimeout(e, 10);
                                    }, 10)
                                  : setTimeout(function () {
                                      d
                                        ? i()
                                        : document.querySelectorAll(
                                              ".grid.grid-cols-12",
                                            ).length < g
                                          ? (o.dispatchEvent(
                                              new MouseEvent("click", {
                                                bubbles: !0,
                                                cancelable: !0,
                                                view: window,
                                              }),
                                            ),
                                            setTimeout(e, a))
                                          : setTimeout(e, a);
                                    }, 800));
                            } else
                              setTimeout(function () {
                                if (d) i();
                                else {
                                  for (
                                    var n = document.querySelectorAll(
                                        ".cursor-pointer.grid.grid-cols-12",
                                      ),
                                      o = !1,
                                      r = 0;
                                    r < n.length;
                                    r++
                                  )
                                    if (!t.has(y(n[r]))) {
                                      o = !0;
                                      break;
                                    }
                                  if (o) setTimeout(e, a);
                                  else {
                                    S("Final check...");
                                    var s = 0;
                                    function l() {
                                      if (d) i();
                                      else {
                                        for (
                                          var n = document.querySelectorAll(
                                              ".cursor-pointer.grid.grid-cols-12",
                                            ),
                                            o = 0;
                                          o < n.length;
                                          o++
                                        )
                                          if (!t.has(y(n[o])))
                                            return void setTimeout(e, a);
                                        ++s < 17 ? setTimeout(l, 300) : i();
                                      }
                                    }
                                    setTimeout(l, 0);
                                  }
                                }
                              }, 10);
                          }
                        })();
                      })(function () {
                        if (d)
                          return (l(), (o = !1), _(), void S("Dibatalkan"));
                        l();
                        var a = (function () {
                          for (
                            var e = {},
                              t = {},
                              n = {
                                bidang: {},
                                program: {},
                                kegiatan: {},
                                subGiat: {},
                              },
                              i = 0;
                            i < s.length;
                            i++
                          )
                            for (var a = s[i], o = 0; o < a.length; o++) {
                              var r = a[o];
                              if (void 0 !== r.id_akun) {
                                var d = t[r.id_sub_giat] || "",
                                  l = String(r.kode_akun || "").trim();
                                if (!l) continue;
                                var p = d ? d + "|" + l : l;
                                e[p] = {
                                  kode: p,
                                  displayKode: l,
                                  uraian: r.nama_akun || "",
                                  anggaran: r.anggaran || 0,
                                  realisasi: r.realisasi_rill || 0,
                                };
                              } else if (
                                void 0 !== r.id_sub_giat &&
                                r.kode_sub_giat
                              ) {
                                var u = c(
                                  String(r.kode_sub_giat).trim(),
                                  n.kegiatan[r.id_giat] ||
                                    n.program[r.id_program],
                                );
                                ((n.subGiat[r.id_sub_giat] = u),
                                  (t[r.id_sub_giat] = u),
                                  (e[u] = {
                                    kode: u,
                                    displayKode: u,
                                    uraian: r.nama_sub_giat || "",
                                    anggaran: r.anggaran || 0,
                                    realisasi: r.realisasi_rill || 0,
                                  }));
                              } else if (void 0 !== r.id_giat && r.kode_giat) {
                                var g = c(
                                  String(r.kode_giat).trim(),
                                  n.program[r.id_program] || "",
                                );
                                ((n.kegiatan[r.id_giat] = g),
                                  (e[g] = {
                                    kode: g,
                                    displayKode: g,
                                    uraian: r.nama_giat || "",
                                    anggaran: r.anggaran || 0,
                                    realisasi: r.realisasi_rill || 0,
                                  }));
                              } else if (
                                void 0 !== r.id_program &&
                                r.kode_program
                              ) {
                                var f = c(
                                  String(r.kode_program).trim(),
                                  n.bidang[r.id_bidang_urusan] || "",
                                );
                                ((n.program[r.id_program] = f),
                                  (e[f] = {
                                    kode: f,
                                    displayKode: f,
                                    uraian: r.nama_program || "",
                                    anggaran: r.anggaran || 0,
                                    realisasi: r.realisasi_rill || 0,
                                  }));
                              } else if (
                                void 0 !== r.id_bidang_urusan &&
                                r.kode_bidang_urusan
                              ) {
                                var b = c(
                                  String(r.kode_bidang_urusan).trim(),
                                  n.bidang._skpd || "",
                                );
                                ((n.bidang[r.id_bidang_urusan] = b),
                                  (e[b] = {
                                    kode: b,
                                    displayKode: b,
                                    uraian: r.nama_bidang_urusan || "",
                                    anggaran: r.anggaran || 0,
                                    realisasi: r.realisasi_rill || 0,
                                  }));
                              } else if (void 0 !== r.id_skpd) {
                                var m = String(r.kode_sub_skpd || "").trim();
                                if (!m) continue;
                                ((n.bidang._skpd = m),
                                  e[m] ||
                                    (e[m] = {
                                      kode: m,
                                      displayKode: m,
                                      uraian: r.nama_sub_skpd || "",
                                      anggaran: r.anggaran || 0,
                                      realisasi: r.realisasi_rill || 0,
                                    }));
                              }
                            }
                          return e;
                        })();
                        (!(function (a, o, r) {
                          var d = "A" === a ? e : t,
                            s = "A" === a ? n : i;
                          (localStorage.setItem(d, JSON.stringify(o)),
                            localStorage.setItem(s, r));
                        })(p, a, x),
                          (o = !1),
                          _(),
                          (function (e, t) {
                            var n = document.getElementById("sipd-modal-s");
                            n && n.remove();
                            var i = "A" === e ? "Awal" : "Akhir",
                              a = document.createElement("div");
                            ((a.id = "sipd-modal-s"),
                              (a.style.cssText =
                                "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:flex-start;padding-top:80px;font-family:system-ui,sans-serif;"),
                              (a.innerHTML =
                                '<div style="background:white;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);width:440px;max-width:90vw;"><div style="padding:24px;text-align:center;"><div style="font-size:40px;margin-bottom:12px;">&#x2705;</div><h3 style="margin:0 0 8px;font-size:16px;font-weight:700;color:#166534;">Sukses ambil data</h3><p style="margin:0 0 20px;font-size:14px;color:#374151;">Tanggal ' +
                                i +
                                " " +
                                b(t) +
                                '</p><button id="sipd-close-s-btn" style="padding:8px 24px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">OK</button></div></div>'),
                              document.body.appendChild(a),
                              document
                                .getElementById("sipd-close-s-btn")
                                .addEventListener("click", function () {
                                  a.remove();
                                }),
                              a.addEventListener("click", function (e) {
                                e.target === a && a.remove();
                              }));
                          })(p, x),
                          T(),
                          z(),
                          S(h + " selesai"));
                      });
                    }),
                    (function e() {
                      var t = document.querySelectorAll(
                        'button.dm-skpd__toggle[aria-expanded="false"]',
                      );
                      0 !== t.length
                        ? (t[0].click(), setTimeout(e, 600))
                        : r && r();
                    })());
                }),
                (function e() {
                  var t = document.querySelectorAll(
                    'button.dm-skpd__toggle[aria-expanded="true"]',
                  );
                  0 !== t.length
                    ? (t[0].click(), setTimeout(e, 600))
                    : u && u();
                })());
            });
          },
        );
      }
    } else k("Info", "Pilih tanggal terlebih dahulu.", "OK");
  } else k("Info", "Buka halaman Dashboard terlebih dahulu.", "OK");
}
function w() {
  var a = JSON.parse(localStorage.getItem(e) || "null"),
    o = JSON.parse(localStorage.getItem(t) || "null"),
    r = localStorage.getItem(n) || "Awal",
    d = localStorage.getItem(i) || "Akhir";
  if (a && o) {
    var s = [],
      l = {};
    for (var c in a) a.hasOwnProperty(c) && (l[c] = !0);
    for (var c in o) o.hasOwnProperty(c) && (l[c] = !0);
    for (var g in l) {
      var h = o[g] || {
          kode: g,
          uraian: a[g] ? a[g].uraian : "",
          anggaran: 0,
          realisasi: 0,
        },
        y = a[g] || { realisasi: 0 },
        v = y.realisasi || 0,
        w = h.realisasi || 0,
        E = h.anggaran || y.anggaran || 0,
        _ = h.uraian || y.uraian || "",
        I = w - v,
        S = 0 === E ? 0 : (I / E) * 100,
        T = 0 === E ? 0 : (w / E) * 100;
      s.push({
        kode: g,
        displayKode: h.displayKode || g.split("|").pop() || g,
        uraian: _,
        anggaran: E,
        realTgl1: v,
        realTgl2: w,
        selisih: I,
        persenTambahan: parseFloat(S.toFixed(2)),
        persenTotal: parseFloat(T.toFixed(2)),
        sortKey: u(g),
      });
    }
    (s.sort(function (e, t) {
      return e.sortKey < t.sortKey ? -1 : e.sortKey > t.sortKey ? 1 : 0;
    }),
      (function (e, t, n) {
        var i = document.getElementById("sipd-modal-c");
        i && i.remove();
        var a = document.createElement("div");
        if (
          ((a.id = "sipd-modal-c"),
          (a.style.cssText =
            "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:center;font-family:system-ui,sans-serif;"),
          !document.getElementById("sipd-comp-hover-style"))
        ) {
          var o = document.createElement("style");
          ((o.id = "sipd-comp-hover-style"),
            (o.textContent =
              '#sipd-modal-c tbody tr[data-level="0"]:hover{background:#e2e8f0!important}#sipd-modal-c tbody tr[data-level="1"]:hover{background:#fde68a!important}#sipd-modal-c tbody tr[data-level="2"]:hover{background:#fdba74!important}#sipd-modal-c tbody tr[data-level="3"]:hover{background:#a7f3d0!important}#sipd-modal-c tbody tr[data-level="4"]:hover{background:#d8b4fe!important}#sipd-modal-c tbody tr[data-level="5"]:hover{background:#7dd3fc!important}'),
            document.head.appendChild(o));
        }
        for (var r = "", d = 0; d < e.length; d++) {
          var s = e[d],
            l = s.displayKode || s.kode,
            c = m(l),
            u = Math.round(s.selisih),
            g = x(l),
            h = 20 * g,
            y = 16 * g,
            v =
              [
                "background:#f8fafc;",
                "background:#fef3c7;",
                "background:#fed7aa;",
                "background:#bbf7d0;",
                "background:#e9d5ff;",
                "background:#bae6fd;",
              ][Math.min(g, 5)] || "",
            w =
              "padding:6px 8px;padding-left:" +
              h +
              "px;border-bottom:1px solid #e5e7eb;font-size:11px;" +
              (c ? "font-weight:600;" : ""),
            k =
              "padding:6px 8px;padding-left:" +
              y +
              "px;border-bottom:1px solid #e5e7eb;font-size:12px;",
            E =
              "padding:6px 8px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;";
          ((E += c && u > 0 ? "font-weight:700;" : "font-weight:600;"),
            (E += c
              ? "color:#2563eb;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;"
              : "color:" + (s.selisih >= 0 ? "#059669" : "#dc2626") + ";"));
          var _ = c ? ' data-selisih="' + u + '"' : "";
          r +=
            '<tr style="' +
            v +
            '" data-level="' +
            g +
            '"><td style="' +
            w +
            '">' +
            l +
            '</td><td style="' +
            k +
            '">' +
            s.uraian +
            '</td><td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;white-space:nowrap;">' +
            p(s.anggaran) +
            '</td><td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;white-space:nowrap;">' +
            p(s.realTgl1) +
            '</td><td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;white-space:nowrap;">' +
            p(s.realTgl2) +
            "</td><td" +
            _ +
            ' style="' +
            E +
            'white-space:nowrap;">' +
            p(s.selisih) +
            '</td><td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;font-weight:600;white-space:nowrap;color:' +
            (s.persenTambahan >= 0 ? "#059669" : "#dc2626") +
            ';">' +
            s.persenTambahan.toFixed(2) +
            '%</td><td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;font-size:12px;text-align:right;white-space:nowrap;">' +
            s.persenTotal.toFixed(2) +
            "%</td></tr>";
        }
        if (
          ((a.innerHTML =
            '<div style="background:white;width:90vw;height:98vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);display:flex;flex-direction:column;"><div style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;"><div><span style="font-size:15px;font-weight:700;">Hasil Perbandingan</span><span style="font-size:13px;color:#6b7280;margin-left:16px;">' +
            t +
            " -> " +
            n +
            '</span><span style="font-size:13px;color:#6b7280;margin-left:12px;">' +
            e.length +
            ' item</span></div><div style="display:flex;gap:8px;"><button id="sipd-export-btn" style="padding:8px 16px;background:#059669;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">Export Excel</button><button id="sipd-close-c-btn" style="padding:8px 16px;background:#6b7280;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">Tutup</button></div></div><div style="overflow-x:auto;overflow-y:auto;flex:1;" class="sipd-table-wrapper"><table style="width:100%;border-collapse:collapse;min-width:900px;"><thead><tr style="position:sticky;top:0;background:#f3f4f6;"><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:left;">Kode</th><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:left;">Uraian</th><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;white-space:nowrap;">Anggaran</th><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;white-space:nowrap;">Realisasi<br><span style="font-weight:400;font-size:10px;white-space:nowrap;">' +
            b(t) +
            '</span></th><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;white-space:nowrap;">Realisasi<br><span style="font-weight:400;font-size:10px;white-space:nowrap;">' +
            b(n) +
            '</span></th><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;white-space:nowrap;">Selisih</th><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;white-space:nowrap;">% Tambah</th><th style="padding:8px;font-size:11px;font-weight:700;color:#374151;text-align:right;white-space:nowrap;">% Total</th></tr></thead><tbody>' +
            r +
            '</tbody></table></div><div style="padding:10px 20px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af;text-align:center;">* &#x1f4cb; Baris biru muda = klik nilai Selisih untuk copy (contoh: Rp81.142.319 => 81142319). % Tambah = selisih dibagi anggaran x 100 | % Total = realisasi akhir dibagi anggaran x 100</div></div>'),
          document.body.appendChild(a),
          document
            .getElementById("sipd-close-c-btn")
            .addEventListener("click", function () {
              a.remove();
            }),
          document
            .getElementById("sipd-export-btn")
            .addEventListener("click", function () {
              !(function (e, t, n) {
                for (var i = [], a = 0; a < e.length; a++) {
                  var o = e[a],
                    r = {};
                  ((r.Kode = o.displayKode || o.kode),
                    (r.Uraian = o.uraian),
                    (r.Anggaran = o.anggaran),
                    (r["Realisasi " + t] = o.realTgl1),
                    (r["Realisasi " + n] = o.realTgl2),
                    (r.Selisih = o.selisih),
                    (r["% Tambahan"] = o.persenTambahan),
                    (r["% Total"] = o.persenTotal),
                    i.push(r));
                }
                var d = XLSX.utils.json_to_sheet(i);
                d["!cols"] = [
                  { wch: 28 },
                  { wch: 90 },
                  { wch: 22 },
                  { wch: 22 },
                  { wch: 22 },
                  { wch: 22 },
                  { wch: 25 },
                  { wch: 22 },
                ];
                var s = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(s, d, "Perbandingan");
                var l = function (e) {
                    var t = f(e);
                    if (!t) return e;
                    return (
                      t.getDate() +
                      " " +
                      [
                        "Januari",
                        "Februari",
                        "Maret",
                        "April",
                        "Mei",
                        "Juni",
                        "Juli",
                        "Agustus",
                        "September",
                        "Oktober",
                        "November",
                        "Desember",
                      ][t.getMonth()] +
                      " " +
                      t.getFullYear()
                    );
                  },
                  p =
                    "Realisasi Keuangan SIPD " + l(t) + " - " + l(n) + ".xlsx";
                XLSX.writeFile(s, p);
              })(e, t, n);
            }),
          a.addEventListener("click", function (e) {
            e.target === a && a.remove();
          }),
          a.querySelector("tbody").addEventListener("click", function (e) {
            var t = e.target.closest("td[data-selisih]");
            if (t) {
              var n = t.getAttribute("data-selisih");
              navigator.clipboard && navigator.clipboard.writeText
                ? navigator.clipboard
                    .writeText(n)
                    .then(function () {
                      a(t);
                    })
                    .catch(function () {
                      i(n, t);
                    })
                : i(n, t);
            }
            function i(e, t) {
              var n = document.createElement("textarea");
              ((n.value = e),
                document.body.appendChild(n),
                n.select(),
                document.execCommand("copy"),
                document.body.removeChild(n),
                a(t));
            }
            function a(e) {
              var t = document.getElementById("sipd-copy-tt");
              t && t.remove();
              var n = document.createElement("div");
              ((n.id = "sipd-copy-tt"),
                (n.textContent = "Copied!"),
                (n.style.cssText =
                  "position:fixed;background:#059669;color:white;padding:4px 12px;border-radius:4px;font-size:12px;font-weight:600;z-index:100001;pointer-events:none;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.2);"));
              var i = e.getBoundingClientRect();
              ((n.style.left = Math.max(8, i.left + i.width / 2 - 32) + "px"),
                (n.style.top = Math.max(4, i.top - 32) + "px"),
                document.body.appendChild(n),
                setTimeout(function () {
                  document.getElementById("sipd-copy-tt") && n.remove();
                }, 2e3));
            }
          }),
          !document.getElementById("sipd-tt-style"))
        ) {
          var I = document.createElement("style");
          ((I.id = "sipd-tt-style"),
            (I.textContent =
              "#sipd-copy-tt{animation:sipd-fade-in 0.15s ease-out}@keyframes sipd-fade-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}"),
            document.head.appendChild(I));
        }
      })(s, r, d));
  } else k("Error", "Ambil data Tanggal Awal dan Akhir terlebih dahulu.", "OK");
}
function k(e, t, n) {
  var i = document.getElementById("sipd-modal-s");
  i && i.remove();
  var a = document.createElement("div");
  ((a.id = "sipd-modal-s"),
    (a.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:flex-start;padding-top:80px;font-family:system-ui,sans-serif;"),
    (a.innerHTML =
      '<div style="background:white;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);width:440px;max-width:90vw;"><div style="padding:24px;"><h3 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#111827;">' +
      e +
      '</h3><p style="margin:0 0 20px;font-size:14px;color:#374151;">' +
      t +
      '</p><div style="text-align:right;"><button id="sipd-close-s-btn" style="padding:8px 20px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">' +
      (n || "Tutup") +
      "</button></div></div></div>"),
    document.body.appendChild(a),
    document
      .getElementById("sipd-close-s-btn")
      .addEventListener("click", function () {
        a.remove();
      }),
    a.addEventListener("click", function (e) {
      e.target === a && a.remove();
    }));
}
function E(e, t, n) {
  var i = document.getElementById("sipd-modal-cf");
  i && i.remove();
  var a = document.createElement("div");
  ((a.id = "sipd-modal-cf"),
    (a.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:flex-start;padding-top:80px;font-family:system-ui,sans-serif;"),
    (a.innerHTML =
      '<div style="background:white;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);width:440px;max-width:90vw;"><div style="padding:24px;"><h3 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#111827;">Konfirmasi</h3><p style="margin:0 0 20px;font-size:14px;color:#374151;">' +
      e +
      '</p><div style="text-align:right;display:flex;gap:8px;justify-content:flex-end;"><button id="sipd-cf-no" style="padding:8px 20px;background:#6b7280;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">Tidak</button><button id="sipd-cf-yes" style="padding:8px 20px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">Ya</button></div></div></div>'),
    document.body.appendChild(a),
    document
      .getElementById("sipd-cf-yes")
      .addEventListener("click", function () {
        (a.remove(), t && t());
      }),
    document
      .getElementById("sipd-cf-no")
      .addEventListener("click", function () {
        (a.remove(), n && n());
      }),
    a.addEventListener("click", function (e) {
      e.target === a && (a.remove(), n && n());
    }));
}
function _() {
  var e = document.getElementById("sipd-loading-modal");
  e && e.remove();
}
function I() {
  E("Yakin ingin menghapus semua data (tanggal awal dan akhir)?", function () {
    (localStorage.removeItem(e),
      localStorage.removeItem(t),
      localStorage.removeItem(n),
      localStorage.removeItem(i),
      T(),
      z(),
      (function () {
        var e = document.getElementById("sipd-modal-s");
        e && e.remove();
        var t = document.createElement("div");
        ((t.id = "sipd-modal-s"),
          (t.style.cssText =
            "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100000;display:flex;justify-content:center;align-items:flex-start;padding-top:80px;font-family:system-ui,sans-serif;"),
          (t.innerHTML =
            '<div style="background:white;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);width:440px;max-width:90vw;"><div style="padding:24px;text-align:center;"><div style="font-size:40px;margin-bottom:12px;">&#x1f5d1;</div><h3 style="margin:0 0 8px;font-size:16px;font-weight:700;color:#374151;">Data berhasil dihapus</h3><p style="margin:0 0 20px;font-size:14px;color:#6b7280;">Tanggal awal dan akhir telah dihapus dari sistem.</p><button id="sipd-close-s-btn" style="padding:8px 24px;background:#3b82f6;color:white;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">OK</button></div></div>'),
          document.body.appendChild(t),
          document
            .getElementById("sipd-close-s-btn")
            .addEventListener("click", function () {
              t.remove();
            }),
          t.addEventListener("click", function (e) {
            e.target === t && t.remove();
          }));
      })());
  });
}
function S(e) {
  var t = document.getElementById("sipd-status");
  t && (t.textContent = e);
}
function T() {
  var e = localStorage.getItem(n) || "-",
    t = localStorage.getItem(i) || "-",
    a = document.getElementById("sipd-lbl1"),
    o = document.getElementById("sipd-lbl2");
  (a && (a.textContent = e), o && (o.textContent = t));
}
function z() {
  var n = localStorage.getItem(e),
    i = localStorage.getItem(t),
    a = n && i,
    o = n || i,
    r = document.getElementById("sipd-btn-cmp");
  r &&
    ((r.disabled = !a),
    (r.style.opacity = a ? "1" : "0.5"),
    (r.style.cursor = a ? "pointer" : "not-allowed"),
    (r.style.background = "#059669"));
  var d = document.getElementById("sipd-btn-clear");
  d &&
    ((d.disabled = !o),
    (d.style.opacity = o ? "1" : "0.5"),
    (d.style.cursor = o ? "pointer" : "not-allowed"),
    (d.style.background = "#ef4444"));
}
var L = "";
function A() {
  g()
    ? ((function () {
        if (!document.getElementById("sipd-tog")) {
          var e = document.createElement("button");
          ((e.id = "sipd-tog"),
            (e.innerHTML = "&#x26A1;"),
            (e.title = "Panel SIPD Tools"),
            (e.style.cssText =
              "position:fixed;bottom:100px;right:40px;z-index:99998;background:#3b82f6;color:white;border:none;border-radius:50%;width:48px;height:48px;font-size:22px;cursor:pointer;box-shadow:0 4px 12px rgba(59,130,246,0.4);display:flex;align-items:center;justify-content:center;"),
            e.addEventListener("click", function () {
              var e = document.getElementById("sipd-panel");
              if (e) {
                var t = "none" === e.style.display || "" === e.style.display;
                e.style.display = t ? "flex" : "none";
              }
            }),
            document.body.appendChild(e));
        }
      })(),
      (function () {
        if (!document.getElementById("sipd-panel")) {
          var e =
              "dark" === document.documentElement.getAttribute("data-theme"),
            t = document.createElement("div");
          t.id = "sipd-panel";
          var n = e ? "#1e293b" : "#ffffff",
            i = e ? "#0f172a" : "#f8fafc",
            a = e ? "#0f172a" : "#f8fafc",
            o = e ? "#1e293b" : "#f1f5f9",
            r = e ? "#334155" : "#e2e8f0",
            d = e ? "#94a3b8" : "#64748b",
            s = e ? "#f8fafc" : "#0f172a",
            l = e ? "#e2e8f0" : "#334155",
            p = e ? "#1e3a5f" : "#eff6ff",
            c = e ? "#60a5fa" : "#2563eb",
            u = e ? "#2e1065" : "#eef2ff",
            g = e ? "#818cf8" : "#4f46e5",
            f = "#2563eb",
            b = "#1d4ed8",
            m = "#059669",
            x = e ? "#1e3a5f" : "#eff6ff",
            h = e
              ? "inset 0 0 0 1px rgba(96, 165, 250, 0.2)"
              : "inset 0 0 0 1px rgba(59, 130, 246, 0.1)";
          t.style.cssText =
            "position:fixed;bottom:10px;right:100px;left:auto;z-index:99999;display:none;flex-direction:column;background:" +
            n +
            ";border:1px solid " +
            r +
            ";border-radius:16px;padding:0px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.1),0 8px 10px -6px rgba(0,0,0,0.1);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;width:360px;box-sizing:border-box;overflow:hidden;";
          var y =
              '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 14px;background:' +
              i +
              ";border-bottom:1px solid " +
              r +
              ';box-sizing:border-box;"><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:14px;background:' +
              x +
              ";width:22px;height:22px;display:flex;align-items:center;justify-content:center;border-radius:5px;box-shadow:" +
              h +
              ';">&#x26A1;</span><div style="display:flex;flex-direction:column;line-height:1.2;"><b style="font-size:12px;color:' +
              s +
              ';font-weight:800;letter-spacing:-0.01em;">SIPD Tools</b><span style="font-size:8px;color:' +
              d +
              ';font-weight:500;">build version ' +
              (localStorage.getItem("build") || "-") +
              '</span></div></div><div style="display:flex;align-items:center;gap:4px;"><button id="sipd-btn-settings" title="Pengaturan" style="display:none;background:none;border:none;cursor:pointer;font-size:14px;color:' +
              d +
              ';padding:3px;line-height:1;border-radius:5px;display:none;align-items:center;justify-content:center;transition:background 0.2s,color 0.2s;">&#x2699;</button><button id="sipd-close-pn" style="background:none;border:none;cursor:pointer;font-size:16px;color:' +
              d +
              ';padding:1px 5px;line-height:1;border-radius:5px;transition:background 0.2s,color 0.2s;">&times;</button></div></div>',
            k =
              '<div style="display:flex;flex-direction:column;gap:6px;padding:10px 14px;box-sizing:border-box;"><div style="display:flex;align-items:center;justify-content:space-between;background:' +
              a +
              ";border:1px solid " +
              o +
              ';border-radius:8px;padding:6px 10px;gap:10px;box-sizing:border-box;"><div style="display:flex;align-items:center;gap:6px;flex:1;min-width:0;"><span style="font-size:9px;font-weight:700;color:' +
              c +
              ";background:" +
              p +
              ';padding:2px 5px;border-radius:4px;text-transform:uppercase;letter-spacing:0.03em;text-align:center;display:inline-block;">Awal</span><span id="sipd-lbl1" style="font-size:11px;font-weight:600;color:' +
              l +
              ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">-</span></div><button id="sipd-btn-scan-a" style="padding:5px 10px;background:' +
              f +
              ';color:white;border:none;border-radius:5px;font-weight:600;cursor:pointer;font-size:10px;line-height:1.4;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);transition:background 0.15s,transform 0.1s;white-space:nowrap;">Ambil Data</button></div><div style="display:flex;align-items:center;justify-content:space-between;background:' +
              a +
              ";border:1px solid " +
              o +
              ';border-radius:8px;padding:6px 10px;gap:10px;box-sizing:border-box;"><div style="display:flex;align-items:center;gap:6px;flex:1;min-width:0;"><span style="font-size:9px;font-weight:700;color:' +
              g +
              ";background:" +
              u +
              ';padding:2px 5px;border-radius:4px;text-transform:uppercase;letter-spacing:0.03em;text-align:center;display:inline-block;">Akhir</span><span id="sipd-lbl2" style="font-size:11px;font-weight:600;color:' +
              l +
              ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">-</span></div><button id="sipd-btn-scan-b" style="padding:5px 10px;background:' +
              f +
              ';color:white;border:none;border-radius:5px;font-weight:600;cursor:pointer;font-size:10px;line-height:1.4;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);transition:background 0.15s,transform 0.1s;white-space:nowrap;">Ambil Data</button></div><button id="sipd-btn-cmp" disabled style="width:100%;padding:6px 12px;background:' +
              m +
              ';color:white;border:none;border-radius:5px;font-weight:600;cursor:not-allowed;font-size:11px;line-height:1.4;transition:background 0.15s,transform 0.1s;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);text-align:center;box-sizing:border-box;opacity:0.5;">Bandingkan Data</button><button id="sipd-btn-clear" disabled style="width:100%;padding:6px 12px;background:#ef4444;color:white;border:none;border-radius:5px;font-weight:600;cursor:not-allowed;font-size:11px;line-height:1.4;transition:background 0.15s,transform 0.1s;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);text-align:center;box-sizing:border-box;opacity:0.5;">Clear Data</button></div>';
          ((t.innerHTML = y + k), document.body.appendChild(t));
          var E = document.getElementById("sipd-btn-settings");
          (E.addEventListener("mouseenter", function () {
            ((this.style.background = e ? "#1e293b" : "#f1f5f9"),
              (this.style.color = e ? "#f1f5f9" : "#0f172a"));
          }),
            E.addEventListener("mouseleave", function () {
              ((this.style.background = "none"), (this.style.color = d));
            }));
          var _ = document.getElementById("sipd-close-pn");
          (_.addEventListener("mouseenter", function () {
            ((this.style.background = "#fee2e2"),
              (this.style.color = "#ef4444"));
          }),
            _.addEventListener("mouseleave", function () {
              ((this.style.background = "none"), (this.style.color = d));
            }),
            A("sipd-btn-scan-a", b, f),
            A("sipd-btn-scan-b", b, f));
          var S = document.getElementById("sipd-btn-cmp");
          S &&
            (S.addEventListener("mouseenter", function () {
              this.disabled || (this.style.background = "#047857");
            }),
            S.addEventListener("mouseleave", function () {
              ((this.style.background = m),
                (this.style.transform = "scale(1)"));
            }),
            S.addEventListener("mousedown", function () {
              this.disabled || (this.style.transform = "scale(0.98)");
            }),
            S.addEventListener("mouseup", function () {
              this.style.transform = "scale(1)";
            }));
          var L = document.getElementById("sipd-btn-clear");
          (L &&
            (L.addEventListener("mouseenter", function () {
              this.disabled || (this.style.background = "#dc2626");
            }),
            L.addEventListener("mouseleave", function () {
              ((this.style.background = "#ef4444"),
                (this.style.transform = "scale(1)"));
            }),
            L.addEventListener("mousedown", function () {
              this.disabled || (this.style.transform = "scale(0.98)");
            }),
            L.addEventListener("mouseup", function () {
              this.style.transform = "scale(1)";
            })),
            document
              .getElementById("sipd-btn-scan-a")
              .addEventListener("click", function () {
                v("A");
              }),
            document
              .getElementById("sipd-btn-scan-b")
              .addEventListener("click", function () {
                v("B");
              }),
            document
              .getElementById("sipd-btn-cmp")
              .addEventListener("click", w),
            document
              .getElementById("sipd-btn-clear")
              .addEventListener("click", I),
            document
              .getElementById("sipd-close-pn")
              .addEventListener("click", function () {
                document.getElementById("sipd-panel").style.display = "none";
              }),
            T(),
            z());
        }
        function A(e, t, n) {
          var i = document.getElementById(e);
          i &&
            (i.addEventListener("mouseenter", function () {
              this.style.background = t;
            }),
            i.addEventListener("mouseleave", function () {
              ((this.style.background = n),
                (this.style.transform = "scale(1)"));
            }),
            i.addEventListener("mousedown", function () {
              this.style.transform = "scale(0.96)";
            }),
            i.addEventListener("mouseup", function () {
              this.style.transform = "scale(1)";
            }));
        }
      })(),
      T(),
      z())
    : (function () {
        var e = document.getElementById("sipd-tog");
        e && e.remove();
        var t = document.getElementById("sipd-panel");
        t && t.remove();
      })();
}
function B() {
  (A(),
    (L = window.location.pathname),
    setInterval(function () {
      window.location.pathname !== L && ((L = window.location.pathname), A());
    }, 500),
    window.addEventListener("popstate", function () {
      ((L = window.location.pathname), setTimeout(A, 100));
    }),
    h(),
    setInterval(h, 3e4));
}
"loading" === document.readyState
  ? document.addEventListener("DOMContentLoaded", B)
  : B();
