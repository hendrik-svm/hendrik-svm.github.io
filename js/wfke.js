function waitForKeyElements(e, t, a, n) {
    var o, r;
    (o = void 0 === n ? $(e) : $(n).contents().find(e)) && o.length > 0 ? (r = !0, o.each(function () {
        var e = $(this);
        e.data("alreadyFound") || !1 || (t(e) ? r = !1 : e.data("alreadyFound", !0))
    })) : r = !1;
    var l = waitForKeyElements.controlObj || {},
        i = e.replace(/[^\w]/g, "_"),
        c = l[i];
    r && a && c ? (clearInterval(c), delete l[i]) : c || (c = setInterval(function () {
        waitForKeyElements(e, t, a, n)
    }, 300), l[i] = c), waitForKeyElements.controlObj = l
}