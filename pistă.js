/*
Copyright (c) 2015 Horatiu Sandokan Demetrescu and family.

Many thanks to all my friends from my village who helped with coding this awesome tool
(thank you - TRAIAN, TEODOR, RAMON - you were awesome)!

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


if (typeof __stalkee.loaded != 'boolean') {
    var __stalkeesetjqueryback = false;
    if (typeof jQuery != "undefined") {
        __stalkeesetjqueryback = jQuery;
    }

    var __stalkeesetdollarback = false;
    if (typeof $ != "undefined") {
        __stalkeesetdollarback = $;
    }

    if (typeof jQuery != "undefined") jQuery.noConflict(true);

    '{{ jquery }}';

    var $i = $i || jQuery.noConflict(true);

    if (__stalkeesetjqueryback !== false) {
        jQuery = __stalkeesetjqueryback;
    }

    if (__stalkeesetdollarback !== false) {
        $ = __stalkeesetdollarback;
    }

    function __stalkeehvc() {
        __stalkeeipr && (__stalkee.initInsp(), __stalkeeipr = !1)
    }

    // Fragment 1
    if (function() {
            function e(e, t, n) {
                n = (n || 0) - 1;
                for (var i = e ? e.length : 0; ++n < i;)
                    if (e[n] === t) return n;
                return -1
            }

            function t(t, n) {
                var i = typeof n;
                if (t = t.l, "boolean" == i || null == n) return t[n] ? 0 : -1;
                "number" != i && "string" != i && (i = "object");
                var r = "number" == i ? n : m + n;
                return t = (t = t[i]) && t[r], "object" == i ? t && -1 < e(t, n) ? 0 : -1 : t ? 0 : -1
            }

            function n(e) {
                var t = this.l,
                    n = typeof e;
                if ("boolean" == n || null == e) t[e] = !0;
                else {
                    "number" != n && "string" != n && (n = "object");
                    var i = "number" == n ? e : m + e,
                        t = t[n] || (t[n] = {});
                    "object" == n ? (t[i] || (t[i] = [])).push(e) : t[i] = !0
                }
            }

            function i(e) {
                return e.charCodeAt(0)
            }

            function r(e, t) {
                for (var n = e.m, i = t.m, r = -1, s = n.length; ++r < s;) {
                    var a = n[r],
                        o = i[r];
                    if (a !== o) {
                        if (a > o || "undefined" == typeof a) return 1;
                        if (o > a || "undefined" == typeof o) return -1
                    }
                }
                return e.n - t.n
            }

            function s(e) {
                var t = -1,
                    i = e.length,
                    r = e[0],
                    s = e[0 | i / 2],
                    a = e[i - 1];
                if (r && "object" == typeof r && s && "object" == typeof s && a && "object" == typeof a) return !1;
                for (r = u(), r["false"] = r["null"] = r["true"] = r.undefined = !1, s = u(), s.k = e, s.l = r, s.push = n; ++t < i;) s.push(e[t]);
                return s
            }

            function a(e) {
                return "\\" + H[e]
            }

            function o() {
                return d.pop() || []
            }

            function u() {
                return h.pop() || {
                    k: null,
                    l: null,
                    m: null,
                    "false": !1,
                    n: 0,
                    "null": !1,
                    number: null,
                    object: null,
                    push: null,
                    string: null,
                    "true": !1,
                    undefined: !1,
                    o: null
                }
            }

            function p(e) {
                e.length = 0, d.length < b && d.push(e)
            }

            function c(e) {
                var t = e.l;
                t && c(t), e.k = e.l = e.m = e.object = e.number = e.string = e.o = null, h.length < b && h.push(e)
            }

            function l(e, t, n) {
                t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
                var i = -1;
                n = n - t || 0;
                for (var r = Array(0 > n ? 0 : n); ++i < n;) r[i] = e[t + i];
                return r
            }

            function _(n) {
                function d(e, t, n) {
                    if (!e || !B[typeof e]) return e;
                    t = t && "undefined" == typeof n ? t : tt(t, n, 3);
                    for (var i = -1, r = B[typeof e] && Ln(e), s = r ? r.length : 0; ++i < s && (n = r[i], !1 !== t(e[n], n, e)););
                    return e
                }

                function h(e, t, n) {
                    var i;
                    if (!e || !B[typeof e]) return e;
                    t = t && "undefined" == typeof n ? t : tt(t, n, 3);
                    for (i in e)
                        if (!1 === t(e[i], i, e)) break;
                    return e
                }

                function b(e, t, n) {
                    var i, r = e,
                        s = r;
                    if (!r) return s;
                    for (var a = arguments, o = 0, u = "number" == typeof n ? 2 : a.length; ++o < u;)
                        if ((r = a[o]) && B[typeof r])
                            for (var p = -1, c = B[typeof r] && Ln(r), l = c ? c.length : 0; ++p < l;) i = c[p], "undefined" == typeof s[i] && (s[i] = r[i]);
                    return s
                }

                function H(e, t, n) {
                    var i, r = e,
                        s = r;
                    if (!r) return s;
                    var a = arguments,
                        o = 0,
                        u = "number" == typeof n ? 2 : a.length;
                    if (u > 3 && "function" == typeof a[u - 2]) var p = tt(a[--u - 1], a[u--], 2);
                    else u > 2 && "function" == typeof a[u - 1] && (p = a[--u]);
                    for (; ++o < u;)
                        if ((r = a[o]) && B[typeof r])
                            for (var c = -1, l = B[typeof r] && Ln(r), _ = l ? l.length : 0; ++c < _;) i = l[c], s[i] = p ? p(s[i], r[i]) : r[i];
                    return s
                }

                function Y(e) {
                    var t, n = [];
                    if (!e || !B[typeof e]) return n;
                    for (t in e) vn.call(e, t) && n.push(t);
                    return n
                }

                function J(e) {
                    return e && "object" == typeof e && !Dn(e) && vn.call(e, "__wrapped__") ? e : new K(e)
                }

                function K(e, t) {
                    this.__chain__ = !!t, this.__wrapped__ = e
                }

                function Z(e) {
                    function t() {
                        if (i) {
                            var e = l(i);
                            bn.apply(e, arguments)
                        }
                        if (this instanceof t) {
                            var s = et(n.prototype),
                                e = n.apply(s, e || arguments);
                            return wt(e) ? e : s
                        }
                        return n.apply(r, e || arguments)
                    }
                    var n = e[0],
                        i = e[2],
                        r = e[4];
                    return Mn(t, e), t
                }

                function G(e, t, n, i, r) {
                    if (n) {
                        var s = n(e);
                        if ("undefined" != typeof s) return s
                    }
                    if (!wt(e)) return e;
                    var a = ln.call(e);
                    if (!U[a]) return e;
                    var u = Pn[a];
                    switch (a) {
                        case M:
                        case D:
                            return new u(+e);
                        case R:
                        case V:
                            return new u(e);
                        case z:
                            return s = u(e.source, x.exec(e)), s.lastIndex = e.lastIndex, s
                    }
                    if (a = Dn(e), t) {
                        var c = !i;
                        i || (i = o()), r || (r = o());
                        for (var _ = i.length; _--;)
                            if (i[_] == e) return r[_];
                        s = a ? u(e.length) : {}
                    } else s = a ? l(e) : H({}, e);
                    return a && (vn.call(e, "index") && (s.index = e.index), vn.call(e, "input") && (s.input = e.input)), t ? (i.push(e), r.push(s), (a ? It : d)(e, function(e, a) {
                        s[a] = G(e, t, n, i, r)
                    }), c && (p(i), p(r)), s) : s
                }

                function et(e) {
                    return wt(e) ? Nn(e) : {}
                }

                function tt(e, t, n) {
                    if ("function" != typeof e) return Ht;
                    if ("undefined" == typeof t || !("prototype" in e)) return e;
                    var i = e.__bindData__;
                    if ("undefined" == typeof i && ($n.funcNames && (i = !e.name), i = i || !$n.funcDecomp, !i)) {
                        var r = gn.call(e);
                        $n.funcNames || (i = !E.test(r)), i || (i = j.test(r), Mn(e, i))
                    }
                    if (!1 === i || !0 !== i && 1 & i[1]) return e;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, i) {
                                return e.call(t, n, i)
                            };
                        case 3:
                            return function(n, i, r) {
                                return e.call(t, n, i, r)
                            };
                        case 4:
                            return function(n, i, r, s) {
                                return e.call(t, n, i, r, s)
                            }
                    }
                    return Wt(e, t)
                }

                function nt(e) {
                    function t() {
                        var e = u ? a : this;
                        if (r) {
                            var d = l(r);
                            bn.apply(d, arguments)
                        }
                        return (s || c) && (d || (d = l(arguments)), s && bn.apply(d, s), c && d.length < o) ? (i |= 16, nt([n, _ ? i : -4 & i, d, null, a, o])) : (d || (d = arguments), p && (n = e[f]), this instanceof t ? (e = et(n.prototype), d = n.apply(e, d), wt(d) ? d : e) : n.apply(e, d))
                    }
                    var n = e[0],
                        i = e[1],
                        r = e[2],
                        s = e[3],
                        a = e[4],
                        o = e[5],
                        u = 1 & i,
                        p = 2 & i,
                        c = 4 & i,
                        _ = 8 & i,
                        f = n;
                    return Mn(t, e), t
                }

                function it(n, i) {
                    var r = -1,
                        a = _t(),
                        o = n ? n.length : 0,
                        u = o >= v && a === e,
                        p = [];
                    if (u) {
                        var l = s(i);
                        l ? (a = t, i = l) : u = !1
                    }
                    for (; ++r < o;) l = n[r], 0 > a(i, l) && p.push(l);
                    return u && c(i), p
                }

                function rt(e, t, n, i) {
                    i = (i || 0) - 1;
                    for (var r = e ? e.length : 0, s = []; ++i < r;) {
                        var a = e[i];
                        if (a && "object" == typeof a && "number" == typeof a.length && (Dn(a) || gt(a))) {
                            t || (a = rt(a, t, n));
                            var o = -1,
                                u = a.length,
                                p = s.length;
                            for (s.length += u; ++o < u;) s[p++] = a[o]
                        } else n || s.push(a)
                    }
                    return s
                }

                function st(e, t, n, i, r, s) {
                    if (n) {
                        var a = n(e, t);
                        if ("undefined" != typeof a) return !!a
                    }
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (e === e && !(e && B[typeof e] || t && B[typeof t])) return !1;
                    if (null == e || null == t) return e === t;
                    var u = ln.call(e),
                        c = ln.call(t);
                    if (u == P && (u = q), c == P && (c = q), u != c) return !1;
                    switch (u) {
                        case M:
                        case D:
                            return +e == +t;
                        case R:
                            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                        case z:
                        case V:
                            return e == an(t)
                    }
                    if (c = u == $, !c) {
                        var l = vn.call(e, "__wrapped__"),
                            _ = vn.call(t, "__wrapped__");
                        if (l || _) return st(l ? e.__wrapped__ : e, _ ? t.__wrapped__ : t, n, i, r, s);
                        if (u != q) return !1;
                        if (u = e.constructor, l = t.constructor, u != l && !(yt(u) && u instanceof u && yt(l) && l instanceof l) && "constructor" in e && "constructor" in t) return !1
                    }
                    for (u = !r, r || (r = o()), s || (s = o()), l = r.length; l--;)
                        if (r[l] == e) return s[l] == t;
                    var f = 0,
                        a = !0;
                    if (r.push(e), s.push(t), c) {
                        if (l = e.length, f = t.length, (a = f == l) || i)
                            for (; f--;)
                                if (c = l, _ = t[f], i)
                                    for (; c-- && !(a = st(e[c], _, n, i, r, s)););
                                else if (!(a = st(e[f], _, n, i, r, s))) break
                    } else h(t, function(t, o, u) {
                        return vn.call(u, o) ? (f++, a = vn.call(e, o) && st(e[o], t, n, i, r, s)) : void 0
                    }), a && !i && h(e, function(e, t, n) {
                        return vn.call(n, t) ? a = -1 < --f : void 0
                    });
                    return r.pop(), s.pop(), u && (p(r), p(s)), a
                }

                function at(e, t, n, i, r) {
                    (Dn(t) ? It : d)(t, function(t, s) {
                        var a, o, u = t,
                            p = e[s];
                        if (t && ((o = Dn(t)) || Un(t))) {
                            for (u = i.length; u--;)
                                if (a = i[u] == t) {
                                    p = r[u];
                                    break
                                }
                            if (!a) {
                                var c;
                                n && (u = n(p, t), c = "undefined" != typeof u) && (p = u), c || (p = o ? Dn(p) ? p : [] : Un(p) ? p : {}), i.push(t), r.push(p), c || at(p, t, n, i, r)
                            }
                        } else n && (u = n(p, t), "undefined" == typeof u && (u = t)), "undefined" != typeof u && (p = u);
                        e[s] = p
                    })
                }

                function ot(e, t) {
                    return e + hn(Tn() * (t - e + 1))
                }

                function ut(n, i, r) {
                    var a = -1,
                        u = _t(),
                        l = n ? n.length : 0,
                        _ = [],
                        f = !i && l >= v && u === e,
                        d = r || f ? o() : _;
                    for (f && (d = s(d), u = t); ++a < l;) {
                        var h = n[a],
                            g = r ? r(h, a, n) : h;
                        (i ? !a || d[d.length - 1] !== g : 0 > u(d, g)) && ((r || f) && d.push(g), _.push(h))
                    }
                    return f ? (p(d.k), c(d)) : r && p(d), _
                }

                function pt(e) {
                    return function(t, n, i) {
                        var r = {};
                        n = J.createCallback(n, i, 3), i = -1;
                        var s = t ? t.length : 0;
                        if ("number" == typeof s)
                            for (; ++i < s;) {
                                var a = t[i];
                                e(r, a, n(a, i, t), t)
                            } else d(t, function(t, i, s) {
                                e(r, t, n(t, i, s), s)
                            });
                        return r
                    }
                }

                function ct(e, t, n, i, r, s) {
                    var a = 1 & t,
                        o = 4 & t,
                        u = 16 & t,
                        p = 32 & t;
                    if (!(2 & t || yt(e))) throw new on;
                    u && !n.length && (t &= -17, u = n = !1), p && !i.length && (t &= -33, p = i = !1);
                    var c = e && e.__bindData__;
                    return c && !0 !== c ? (c = l(c), c[2] && (c[2] = l(c[2])), c[3] && (c[3] = l(c[3])), !a || 1 & c[1] || (c[4] = r), !a && 1 & c[1] && (t |= 8), !o || 4 & c[1] || (c[5] = s), u && bn.apply(c[2] || (c[2] = []), n), p && kn.apply(c[3] || (c[3] = []), i), c[1] |= t, ct.apply(null, c)) : (1 == t || 17 === t ? Z : nt)([e, t, n, i, r, s])
                }

                function lt(e) {
                    return Rn[e]
                }

                function _t() {
                    var t = (t = J.indexOf) === Rt ? e : t;
                    return t
                }

                function ft(e) {
                    return "function" == typeof e && _n.test(e)
                }

                function dt(e) {
                    var t, n;
                    return e && ln.call(e) == q && (t = e.constructor, !yt(t) || t instanceof t) ? (h(e, function(e, t) {
                        n = t
                    }), "undefined" == typeof n || vn.call(e, n)) : !1
                }

                function ht(e) {
                    return qn[e]
                }

                function gt(e) {
                    return e && "object" == typeof e && "number" == typeof e.length && ln.call(e) == P || !1
                }

                function mt(e, t, n) {
                    var i = Ln(e),
                        r = i.length;
                    for (t = tt(t, n, 3); r-- && (n = i[r], !1 !== t(e[n], n, e)););
                    return e
                }

                function vt(e) {
                    var t = [];
                    return h(e, function(e, n) {
                        yt(e) && t.push(n)
                    }), t.sort()
                }

                function bt(e) {
                    for (var t = -1, n = Ln(e), i = n.length, r = {}; ++t < i;) {
                        var s = n[t];
                        r[e[s]] = s
                    }
                    return r
                }

                function yt(e) {
                    return "function" == typeof e
                }

                function wt(e) {
                    return !(!e || !B[typeof e])
                }

                function kt(e) {
                    return "number" == typeof e || e && "object" == typeof e && ln.call(e) == R || !1
                }

                function Ct(e) {
                    return "string" == typeof e || e && "object" == typeof e && ln.call(e) == V || !1
                }

                function Nt(e) {
                    for (var t = -1, n = Ln(e), i = n.length, r = Zt(i); ++t < i;) r[t] = e[n[t]];
                    return r
                }

                function xt(e, t, n) {
                    var i = -1,
                        r = _t(),
                        s = e ? e.length : 0,
                        a = !1;
                    return n = (0 > n ? In(0, s + n) : n) || 0, Dn(e) ? a = -1 < r(e, t, n) : "number" == typeof s ? a = -1 < (Ct(e) ? e.indexOf(t, n) : r(e, t, n)) : d(e, function(e) {
                        return ++i < n ? void 0 : !(a = e === t)
                    }), a
                }

                function Et(e, t, n) {
                    var i = !0;
                    t = J.createCallback(t, n, 3), n = -1;
                    var r = e ? e.length : 0;
                    if ("number" == typeof r)
                        for (; ++n < r && (i = !!t(e[n], n, e)););
                    else d(e, function(e, n, r) {
                        return i = !!t(e, n, r)
                    });
                    return i
                }

                function Ot(e, t, n) {
                    var i = [];
                    t = J.createCallback(t, n, 3), n = -1;
                    var r = e ? e.length : 0;
                    if ("number" == typeof r)
                        for (; ++n < r;) {
                            var s = e[n];
                            t(s, n, e) && i.push(s)
                        } else d(e, function(e, n, r) {
                            t(e, n, r) && i.push(e)
                        });
                    return i
                }

                function St(e, t, n) {
                    t = J.createCallback(t, n, 3), n = -1;
                    var i = e ? e.length : 0;
                    if ("number" != typeof i) {
                        var r;
                        return d(e, function(e, n, i) {
                            return t(e, n, i) ? (r = e, !1) : void 0
                        }), r
                    }
                    for (; ++n < i;) {
                        var s = e[n];
                        if (t(s, n, e)) return s
                    }
                }

                function It(e, t, n) {
                    var i = -1,
                        r = e ? e.length : 0;
                    if (t = t && "undefined" == typeof n ? t : tt(t, n, 3), "number" == typeof r)
                        for (; ++i < r && !1 !== t(e[i], i, e););
                    else d(e, t);
                    return e
                }

                function jt(e, t, n) {
                    var i = e ? e.length : 0;
                    if (t = t && "undefined" == typeof n ? t : tt(t, n, 3), "number" == typeof i)
                        for (; i-- && !1 !== t(e[i], i, e););
                    else {
                        var r = Ln(e),
                            i = r.length;
                        d(e, function(e, n, s) {
                            return n = r ? r[--i] : --i, t(s[n], n, s)
                        })
                    }
                    return e
                }

                function At(e, t, n) {
                    var i = -1,
                        r = e ? e.length : 0;
                    if (t = J.createCallback(t, n, 3), "number" == typeof r)
                        for (var s = Zt(r); ++i < r;) s[i] = t(e[i], i, e);
                    else s = [], d(e, function(e, n, r) {
                        s[++i] = t(e, n, r)
                    });
                    return s
                }

                function Tt(e, t, n) {
                    var r = -1 / 0,
                        s = r;
                    if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Dn(e)) {
                        n = -1;
                        for (var a = e.length; ++n < a;) {
                            var o = e[n];
                            o > s && (s = o)
                        }
                    } else t = null == t && Ct(e) ? i : J.createCallback(t, n, 3), It(e, function(e, n, i) {
                        n = t(e, n, i), n > r && (r = n, s = e)
                    });
                    return s
                }

                function Pt(e, t, n, i) {
                    if (!e) return n;
                    var r = 3 > arguments.length;
                    t = J.createCallback(t, i, 4);
                    var s = -1,
                        a = e.length;
                    if ("number" == typeof a)
                        for (r && (n = e[++s]); ++s < a;) n = t(n, e[s], s, e);
                    else d(e, function(e, i, s) {
                        n = r ? (r = !1, e) : t(n, e, i, s)
                    });
                    return n
                }

                function $t(e, t, n, i) {
                    var r = 3 > arguments.length;
                    return t = J.createCallback(t, i, 4), jt(e, function(e, i, s) {
                        n = r ? (r = !1, e) : t(n, e, i, s)
                    }), n
                }

                function Mt(e) {
                    var t = -1,
                        n = e ? e.length : 0,
                        i = Zt("number" == typeof n ? n : 0);
                    return It(e, function(e) {
                        var n = ot(0, ++t);
                        i[t] = i[n], i[n] = e
                    }), i
                }

                function Dt(e, t, n) {
                    var i;
                    t = J.createCallback(t, n, 3), n = -1;
                    var r = e ? e.length : 0;
                    if ("number" == typeof r)
                        for (; ++n < r && !(i = t(e[n], n, e)););
                    else d(e, function(e, n, r) {
                        return !(i = t(e, n, r))
                    });
                    return !!i
                }

                function Lt(e, t, n) {
                    var i = 0,
                        r = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var s = -1;
                        for (t = J.createCallback(t, n, 3); ++s < r && t(e[s], s, e);) i++
                    } else if (i = t, null == i || n) return e ? e[0] : f;
                    return l(e, 0, jn(In(0, i), r))
                }

                function Rt(t, n, i) {
                    if ("number" == typeof i) {
                        var r = t ? t.length : 0;
                        i = 0 > i ? In(0, r + i) : i || 0
                    } else if (i) return i = zt(t, n), t[i] === n ? i : -1;
                    return e(t, n, i)
                }

                function qt(e, t, n) {
                    if ("number" != typeof t && null != t) {
                        var i = 0,
                            r = -1,
                            s = e ? e.length : 0;
                        for (t = J.createCallback(t, n, 3); ++r < s && t(e[r], r, e);) i++
                    } else i = null == t || n ? 1 : In(0, t);
                    return l(e, i)
                }

                function zt(e, t, n, i) {
                    var r = 0,
                        s = e ? e.length : r;
                    for (n = n ? J.createCallback(n, i, 1) : Ht, t = n(t); s > r;) i = r + s >>> 1, n(e[i]) < t ? r = i + 1 : s = i;
                    return r
                }

                function Vt(e, t, n, i) {
                    return "boolean" != typeof t && null != t && (i = n, n = "function" != typeof t && i && i[t] === e ? null : t, t = !1), null != n && (n = J.createCallback(n, i, 3)), ut(e, t, n)
                }

                function Ut() {
                    for (var e = 1 < arguments.length ? arguments : arguments[0], t = -1, n = e ? Tt(Hn(e, "length")) : 0, i = Zt(0 > n ? 0 : n); ++t < n;) i[t] = Hn(e, t);
                    return i
                }

                function Ft(e, t) {
                    var n = -1,
                        i = e ? e.length : 0,
                        r = {};
                    for (t || !i || Dn(e[0]) || (t = []); ++n < i;) {
                        var s = e[n];
                        t ? r[s] = t[n] : s && (r[s[0]] = s[1])
                    }
                    return r
                }

                function Wt(e, t) {
                    return 2 < arguments.length ? ct(e, 17, l(arguments, 2), null, t) : ct(e, 1, null, null, t)
                }

                function Bt(e, t, n) {
                    function i() {
                        c && dn(c), a = c = l = f, (h || d !== t) && (_ = Xn(), o = e.apply(p, s), c || a || (s = p = null))
                    }

                    function r() {
                        var n = t - (Xn() - u);
                        n > 0 ? c = yn(r, n) : (a && dn(a), n = l, a = c = l = f, n && (_ = Xn(), o = e.apply(p, s), c || a || (s = p = null)))
                    }
                    var s, a, o, u, p, c, l, _ = 0,
                        d = !1,
                        h = !0;
                    if (!yt(e)) throw new on;
                    if (t = In(0, t) || 0, !0 === n) var g = !0,
                        h = !1;
                    else wt(n) && (g = n.leading, d = "maxWait" in n && (In(t, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
                    return function() {
                        if (s = arguments, u = Xn(), p = this, l = h && (c || !g), !1 === d) var n = g && !c;
                        else {
                            a || g || (_ = u);
                            var f = d - (u - _),
                                m = 0 >= f;
                            m ? (a && (a = dn(a)), _ = u, o = e.apply(p, s)) : a || (a = yn(i, f))
                        }
                        return m && c ? c = dn(c) : c || t === d || (c = yn(r, t)), n && (m = !0, o = e.apply(p, s)), !m || c || a || (s = p = null), o
                    }
                }

                function Ht(e) {
                    return e
                }

                function Xt(e, t, n) {
                    var i = !0,
                        r = t && vt(t);
                    t && (n || r.length) || (null == n && (n = t), s = K, t = e, e = J, r = vt(t)), !1 === n ? i = !1 : wt(n) && "chain" in n && (i = n.chain);
                    var s = e,
                        a = yt(s);
                    It(r, function(n) {
                        var r = e[n] = t[n];
                        a && (s.prototype[n] = function() {
                            var t = this.__chain__,
                                n = this.__wrapped__,
                                a = [n];
                            if (bn.apply(a, arguments), a = r.apply(e, a), i || t) {
                                if (n === a && wt(a)) return this;
                                a = new s(a), a.__chain__ = t
                            }
                            return a
                        })
                    })
                }

                function Yt() {}

                function Jt(e) {
                    return function(t) {
                        return t[e]
                    }
                }

                function Kt() {
                    return this.__wrapped__
                }
                n = n ? Q.defaults(X.Object(), n, Q.pick(X, T)) : X;
                var Zt = n.Array,
                    Qt = n.Boolean,
                    Gt = n.Date,
                    en = n.Function,
                    tn = n.Math,
                    nn = n.Number,
                    rn = n.Object,
                    sn = n.RegExp,
                    an = n.String,
                    on = n.TypeError,
                    un = [],
                    pn = rn.prototype,
                    cn = n._,
                    ln = pn.toString,
                    _n = sn("^" + an(ln).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                    fn = tn.ceil,
                    dn = n.clearTimeout,
                    hn = tn.floor,
                    gn = en.prototype.toString,
                    mn = ft(mn = rn.getPrototypeOf) && mn,
                    vn = pn.hasOwnProperty,
                    bn = un.push,
                    yn = n.setTimeout,
                    wn = un.splice,
                    kn = un.unshift,
                    Cn = function() {
                        try {
                            var e = {},
                                t = ft(t = rn.defineProperty) && t,
                                n = t(e, e, e) && t
                        } catch (i) {}
                        return n
                    }(),
                    Nn = ft(Nn = rn.create) && Nn,
                    xn = ft(xn = Zt.isArray) && xn,
                    En = n.isFinite,
                    On = n.isNaN,
                    Sn = ft(Sn = rn.keys) && Sn,
                    In = tn.max,
                    jn = tn.min,
                    An = n.parseInt,
                    Tn = tn.random,
                    Pn = {};
                Pn[$] = Zt, Pn[M] = Qt, Pn[D] = Gt, Pn[L] = en, Pn[q] = rn, Pn[R] = nn, Pn[z] = sn, Pn[V] = an, K.prototype = J.prototype;
                var $n = J.support = {};
                $n.funcDecomp = !ft(n.a) && j.test(_), $n.funcNames = "string" == typeof en.name, J.templateSettings = {
                    escape: /<%-([\s\S]+?)%>/g,
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: O,
                    variable: "",
                    imports: {
                        _: J
                    }
                }, Nn || (et = function() {
                    function e() {}
                    return function(t) {
                        if (wt(t)) {
                            e.prototype = t;
                            var i = new e;
                            e.prototype = null
                        }
                        return i || n.Object()
                    }
                }());
                var Mn = Cn ? function(e, t) {
                        W.value = t, Cn(e, "__bindData__", W)
                    } : Yt,
                    Dn = xn || function(e) {
                        return e && "object" == typeof e && "number" == typeof e.length && ln.call(e) == $ || !1
                    },
                    Ln = Sn ? function(e) {
                        return wt(e) ? Sn(e) : []
                    } : Y,
                    Rn = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    qn = bt(Rn),
                    zn = sn("(" + Ln(qn).join("|") + ")", "g"),
                    Vn = sn("[" + Ln(Rn).join("") + "]", "g"),
                    Un = mn ? function(e) {
                        if (!e || ln.call(e) != q) return !1;
                        var t = e.valueOf,
                            n = ft(t) && (n = mn(t)) && mn(n);
                        return n ? e == n || mn(e) == n : dt(e)
                    } : dt,
                    Fn = pt(function(e, t, n) {
                        vn.call(e, n) ? e[n]++ : e[n] = 1
                    }),
                    Wn = pt(function(e, t, n) {
                        (vn.call(e, n) ? e[n] : e[n] = []).push(t)
                    }),
                    Bn = pt(function(e, t, n) {
                        e[n] = t
                    }),
                    Hn = At,
                    Xn = ft(Xn = Gt.now) && Xn || function() {
                        return (new Gt).getTime()
                    },
                    Yn = 8 == An(y + "08") ? An : function(e, t) {
                        return An(Ct(e) ? e.replace(S, "") : e, t || 0)
                    };
                return J.after = function(e, t) {
                    if (!yt(t)) throw new on;
                    return function() {
                        return 1 > --e ? t.apply(this, arguments) : void 0
                    }
                }, J.assign = H, J.at = function(e) {
                    for (var t = arguments, n = -1, i = rt(t, !0, !1, 1), t = t[2] && t[2][t[1]] === e ? 1 : i.length, r = Zt(t); ++n < t;) r[n] = e[i[n]];
                    return r
                }, J.bind = Wt, J.bindAll = function(e) {
                    for (var t = 1 < arguments.length ? rt(arguments, !0, !1, 1) : vt(e), n = -1, i = t.length; ++n < i;) {
                        var r = t[n];
                        e[r] = ct(e[r], 1, null, null, e)
                    }
                    return e
                }, J.bindKey = function(e, t) {
                    return 2 < arguments.length ? ct(t, 19, l(arguments, 2), null, e) : ct(t, 3, null, null, e)
                }, J.chain = function(e) {
                    return e = new K(e), e.__chain__ = !0, e
                }, J.compact = function(e) {
                    for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                        var r = e[t];
                        r && i.push(r)
                    }
                    return i
                }, J.compose = function() {
                    for (var e = arguments, t = e.length; t--;)
                        if (!yt(e[t])) throw new on;
                    return function() {
                        for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                        return t[0]
                    }
                }, J.constant = function(e) {
                    return function() {
                        return e
                    }
                }, J.countBy = Fn, J.create = function(e, t) {
                    var n = et(e);
                    return t ? H(n, t) : n
                }, J.createCallback = function(e, t, n) {
                    var i = typeof e;
                    if (null == e || "function" == i) return tt(e, t, n);
                    if ("object" != i) return Jt(e);
                    var r = Ln(e),
                        s = r[0],
                        a = e[s];
                    return 1 != r.length || a !== a || wt(a) ? function(t) {
                        for (var n = r.length, i = !1; n-- && (i = st(t[r[n]], e[r[n]], null, !0)););
                        return i
                    } : function(e) {
                        return e = e[s], a === e && (0 !== a || 1 / a == 1 / e)
                    }
                }, J.curry = function(e, t) {
                    return t = "number" == typeof t ? t : +t || e.length, ct(e, 4, null, null, null, t)
                }, J.debounce = Bt, J.defaults = b, J.defer = function(e) {
                    if (!yt(e)) throw new on;
                    var t = l(arguments, 1);
                    return yn(function() {
                        e.apply(f, t)
                    }, 1)
                }, J.delay = function(e, t) {
                    if (!yt(e)) throw new on;
                    var n = l(arguments, 2);
                    return yn(function() {
                        e.apply(f, n)
                    }, t)
                }, J.difference = function(e) {
                    return it(e, rt(arguments, !0, !0, 1))
                }, J.filter = Ot, J.flatten = function(e, t, n, i) {
                    return "boolean" != typeof t && null != t && (i = n, n = "function" != typeof t && i && i[t] === e ? null : t, t = !1), null != n && (e = At(e, n, i)), rt(e, t)
                }, J.forEach = It, J.forEachRight = jt, J.forIn = h, J.forInRight = function(e, t, n) {
                    var i = [];
                    h(e, function(e, t) {
                        i.push(t, e)
                    });
                    var r = i.length;
                    for (t = tt(t, n, 3); r-- && !1 !== t(i[r--], i[r], e););
                    return e
                }, J.forOwn = d, J.forOwnRight = mt, J.functions = vt, J.groupBy = Wn, J.indexBy = Bn, J.initial = function(e, t, n) {
                    var i = 0,
                        r = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var s = r;
                        for (t = J.createCallback(t, n, 3); s-- && t(e[s], s, e);) i++
                    } else i = null == t || n ? 1 : t || i;
                    return l(e, 0, jn(In(0, r - i), r))
                }, J.intersection = function() {
                    for (var n = [], i = -1, r = arguments.length, a = o(), u = _t(), l = u === e, _ = o(); ++i < r;) {
                        var f = arguments[i];
                        (Dn(f) || gt(f)) && (n.push(f), a.push(l && f.length >= v && s(i ? n[i] : _)))
                    }
                    var l = n[0],
                        d = -1,
                        h = l ? l.length : 0,
                        g = [];
                    e: for (; ++d < h;) {
                        var m = a[0],
                            f = l[d];
                        if (0 > (m ? t(m, f) : u(_, f))) {
                            for (i = r, (m || _).push(f); --i;)
                                if (m = a[i], 0 > (m ? t(m, f) : u(n[i], f))) continue e;
                            g.push(f)
                        }
                    }
                    for (; r--;)(m = a[r]) && c(m);
                    return p(a), p(_), g
                }, J.invert = bt, J.invoke = function(e, t) {
                    var n = l(arguments, 2),
                        i = -1,
                        r = "function" == typeof t,
                        s = e ? e.length : 0,
                        a = Zt("number" == typeof s ? s : 0);
                    return It(e, function(e) {
                        a[++i] = (r ? t : e[t]).apply(e, n)
                    }), a
                }, J.keys = Ln, J.map = At, J.mapValues = function(e, t, n) {
                    var i = {};
                    return t = J.createCallback(t, n, 3), d(e, function(e, n, r) {
                        i[n] = t(e, n, r)
                    }), i
                }, J.max = Tt, J.memoize = function(e, t) {
                    function n() {
                        var i = n.cache,
                            r = t ? t.apply(this, arguments) : m + arguments[0];
                        return vn.call(i, r) ? i[r] : i[r] = e.apply(this, arguments)
                    }
                    if (!yt(e)) throw new on;
                    return n.cache = {}, n
                }, J.merge = function(e) {
                    var t = arguments,
                        n = 2;
                    if (!wt(e)) return e;
                    if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var i = tt(t[--n - 1], t[n--], 2);
                    else n > 2 && "function" == typeof t[n - 1] && (i = t[--n]);
                    for (var t = l(arguments, 1, n), r = -1, s = o(), a = o(); ++r < n;) at(e, t[r], i, s, a);
                    return p(s), p(a), e
                }, J.min = function(e, t, n) {
                    var r = 1 / 0,
                        s = r;
                    if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Dn(e)) {
                        n = -1;
                        for (var a = e.length; ++n < a;) {
                            var o = e[n];
                            s > o && (s = o)
                        }
                    } else t = null == t && Ct(e) ? i : J.createCallback(t, n, 3), It(e, function(e, n, i) {
                        n = t(e, n, i), r > n && (r = n, s = e)
                    });
                    return s
                }, J.omit = function(e, t, n) {
                    var i = {};
                    if ("function" != typeof t) {
                        var r = [];
                        h(e, function(e, t) {
                            r.push(t)
                        });
                        for (var r = it(r, rt(arguments, !0, !1, 1)), s = -1, a = r.length; ++s < a;) {
                            var o = r[s];
                            i[o] = e[o]
                        }
                    } else t = J.createCallback(t, n, 3), h(e, function(e, n, r) {
                        t(e, n, r) || (i[n] = e)
                    });
                    return i
                }, J.once = function(e) {
                    var t, n;
                    if (!yt(e)) throw new on;
                    return function() {
                        return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                    }
                }, J.pairs = function(e) {
                    for (var t = -1, n = Ln(e), i = n.length, r = Zt(i); ++t < i;) {
                        var s = n[t];
                        r[t] = [s, e[s]]
                    }
                    return r
                }, J.partial = function(e) {
                    return ct(e, 16, l(arguments, 1))
                }, J.partialRight = function(e) {
                    return ct(e, 32, null, l(arguments, 1))
                }, J.pick = function(e, t, n) {
                    var i = {};
                    if ("function" != typeof t)
                        for (var r = -1, s = rt(arguments, !0, !1, 1), a = wt(e) ? s.length : 0; ++r < a;) {
                            var o = s[r];
                            o in e && (i[o] = e[o])
                        } else t = J.createCallback(t, n, 3), h(e, function(e, n, r) {
                            t(e, n, r) && (i[n] = e)
                        });
                    return i
                }, J.pluck = Hn, J.property = Jt, J.pull = function(e) {
                    for (var t = arguments, n = 0, i = t.length, r = e ? e.length : 0; ++n < i;)
                        for (var s = -1, a = t[n]; ++s < r;) e[s] === a && (wn.call(e, s--, 1), r--);
                    return e
                }, J.range = function(e, t, n) {
                    e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                    var i = -1;
                    t = In(0, fn((t - e) / (n || 1)));
                    for (var r = Zt(t); ++i < t;) r[i] = e, e += n;
                    return r
                }, J.reject = function(e, t, n) {
                    return t = J.createCallback(t, n, 3), Ot(e, function(e, n, i) {
                        return !t(e, n, i)
                    })
                }, J.remove = function(e, t, n) {
                    var i = -1,
                        r = e ? e.length : 0,
                        s = [];
                    for (t = J.createCallback(t, n, 3); ++i < r;) n = e[i], t(n, i, e) && (s.push(n), wn.call(e, i--, 1), r--);
                    return s
                }, J.rest = qt, J.shuffle = Mt, J.sortBy = function(e, t, n) {
                    var i = -1,
                        s = Dn(t),
                        a = e ? e.length : 0,
                        l = Zt("number" == typeof a ? a : 0);
                    for (s || (t = J.createCallback(t, n, 3)), It(e, function(e, n, r) {
                            var a = l[++i] = u();
                            s ? a.m = At(t, function(t) {
                                return e[t]
                            }) : (a.m = o())[0] = t(e, n, r), a.n = i, a.o = e
                        }), a = l.length, l.sort(r); a--;) e = l[a], l[a] = e.o, s || p(e.m), c(e);
                    return l
                }, J.tap = function(e, t) {
                    return t(e), e
                }, J.throttle = function(e, t, n) {
                    var i = !0,
                        r = !0;
                    if (!yt(e)) throw new on;
                    return !1 === n ? i = !1 : wt(n) && (i = "leading" in n ? n.leading : i, r = "trailing" in n ? n.trailing : r), F.leading = i, F.maxWait = t, F.trailing = r, Bt(e, t, F)
                }, J.times = function(e, t, n) {
                    e = -1 < (e = +e) ? e : 0;
                    var i = -1,
                        r = Zt(e);
                    for (t = tt(t, n, 1); ++i < e;) r[i] = t(i);
                    return r
                }, J.toArray = function(e) {
                    return e && "number" == typeof e.length ? l(e) : Nt(e)
                }, J.transform = function(e, t, n, i) {
                    var r = Dn(e);
                    if (null == n)
                        if (r) n = [];
                        else {
                            var s = e && e.constructor;
                            n = et(s && s.prototype)
                        }
                    return t && (t = J.createCallback(t, i, 4), (r ? It : d)(e, function(e, i, r) {
                        return t(n, e, i, r)
                    })), n
                }, J.union = function() {
                    return ut(rt(arguments, !0, !0))
                }, J.uniq = Vt, J.values = Nt, J.where = Ot, J.without = function(e) {
                    return it(e, l(arguments, 1))
                }, J.wrap = function(e, t) {
                    return ct(t, 16, [e])
                }, J.xor = function() {
                    for (var e = -1, t = arguments.length; ++e < t;) {
                        var n = arguments[e];
                        if (Dn(n) || gt(n)) var i = i ? ut(it(i, n).concat(it(n, i))) : n
                    }
                    return i || []
                }, J.zip = Ut, J.zipObject = Ft, J.collect = At, J.drop = qt, J.each = It, J.eachRight = jt, J.extend = H, J.methods = vt, J.object = Ft, J.select = Ot, J.tail = qt, J.unique = Vt, J.unzip = Ut, Xt(J), J.clone = function(e, t, n, i) {
                    return "boolean" != typeof t && null != t && (i = n, n = t, t = !1), G(e, t, "function" == typeof n && tt(n, i, 1))
                }, J.cloneDeep = function(e, t, n) {
                    return G(e, !0, "function" == typeof t && tt(t, n, 1))
                }, J.contains = xt, J.escape = function(e) {
                    return null == e ? "" : an(e).replace(Vn, lt)
                }, J.every = Et, J.find = St, J.findIndex = function(e, t, n) {
                    var i = -1,
                        r = e ? e.length : 0;
                    for (t = J.createCallback(t, n, 3); ++i < r;)
                        if (t(e[i], i, e)) return i;
                    return -1
                }, J.findKey = function(e, t, n) {
                    var i;
                    return t = J.createCallback(t, n, 3), d(e, function(e, n, r) {
                        return t(e, n, r) ? (i = n, !1) : void 0
                    }), i
                }, J.findLast = function(e, t, n) {
                    var i;
                    return t = J.createCallback(t, n, 3), jt(e, function(e, n, r) {
                        return t(e, n, r) ? (i = e, !1) : void 0
                    }), i
                }, J.findLastIndex = function(e, t, n) {
                    var i = e ? e.length : 0;
                    for (t = J.createCallback(t, n, 3); i--;)
                        if (t(e[i], i, e)) return i;
                    return -1
                }, J.findLastKey = function(e, t, n) {
                    var i;
                    return t = J.createCallback(t, n, 3), mt(e, function(e, n, r) {
                        return t(e, n, r) ? (i = n, !1) : void 0
                    }), i
                }, J.has = function(e, t) {
                    return e ? vn.call(e, t) : !1
                }, J.identity = Ht, J.indexOf = Rt, J.isArguments = gt, J.isArray = Dn, J.isBoolean = function(e) {
                    return !0 === e || !1 === e || e && "object" == typeof e && ln.call(e) == M || !1
                }, J.isDate = function(e) {
                    return e && "object" == typeof e && ln.call(e) == D || !1
                }, J.isElement = function(e) {
                    return e && 1 === e.nodeType || !1
                }, J.isEmpty = function(e) {
                    var t = !0;
                    if (!e) return t;
                    var n = ln.call(e),
                        i = e.length;
                    return n == $ || n == V || n == P || n == q && "number" == typeof i && yt(e.splice) ? !i : (d(e, function() {
                        return t = !1
                    }), t)
                }, J.isEqual = function(e, t, n, i) {
                    return st(e, t, "function" == typeof n && tt(n, i, 2))
                }, J.isFinite = function(e) {
                    return En(e) && !On(parseFloat(e))
                }, J.isFunction = yt, J.isNaN = function(e) {
                    return kt(e) && e != +e
                }, J.isNull = function(e) {
                    return null === e
                }, J.isNumber = kt, J.isObject = wt, J.isPlainObject = Un, J.isRegExp = function(e) {
                    return e && "object" == typeof e && ln.call(e) == z || !1
                }, J.isString = Ct, J.isUndefined = function(e) {
                    return "undefined" == typeof e
                }, J.lastIndexOf = function(e, t, n) {
                    var i = e ? e.length : 0;
                    for ("number" == typeof n && (i = (0 > n ? In(0, i + n) : jn(n, i - 1)) + 1); i--;)
                        if (e[i] === t) return i;
                    return -1
                }, J.mixin = Xt, J.noConflict = function() {
                    return n._ = cn, this
                }, J.noop = Yt, J.now = Xn, J.parseInt = Yn, J.random = function(e, t, n) {
                    var i = null == e,
                        r = null == t;
                    return null == n && ("boolean" == typeof e && r ? (n = e, e = 1) : r || "boolean" != typeof t || (n = t, r = !0)), i && r && (t = 1), e = +e || 0, r ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1 ? (n = Tn(), jn(e + n * (t - e + parseFloat("1e-" + ((n + "").length - 1))), t)) : ot(e, t)
                }, J.reduce = Pt, J.reduceRight = $t, J.result = function(e, t) {
                    if (e) {
                        var n = e[t];
                        return yt(n) ? e[t]() : n
                    }
                }, J.runInContext = _, J.size = function(e) {
                    var t = e ? e.length : 0;
                    return "number" == typeof t ? t : Ln(e).length
                }, J.some = Dt, J.sortedIndex = zt, J.template = function(e, t, n) {
                    var i = J.templateSettings;
                    e = an(e || ""), n = b({}, n, i);
                    var r, s = b({}, n.imports, i.imports),
                        i = Ln(s),
                        s = Nt(s),
                        o = 0,
                        u = n.interpolate || I,
                        p = "__p+='",
                        u = sn((n.escape || I).source + "|" + u.source + "|" + (u === O ? N : I).source + "|" + (n.evaluate || I).source + "|$", "g");
                    e.replace(u, function(t, n, i, s, u, c) {
                        return i || (i = s), p += e.slice(o, c).replace(A, a), n && (p += "'+__e(" + n + ")+'"), u && (r = !0, p += "';" + u + ";\n__p+='"), i && (p += "'+((__t=(" + i + "))==null?'':__t)+'"), o = c + t.length, t
                    }), p += "';", u = n = n.variable, u || (n = "obj", p = "with(" + n + "){" + p + "}"), p = (r ? p.replace(w, "") : p).replace(k, "$1").replace(C, "$1;"), p = "function(" + n + "){" + (u ? "" : n + "||(" + n + "={});") + "var __t,__p='',__e=_.escape" + (r ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + p + "return __p}";
                    try {
                        var c = en(i, "return " + p).apply(f, s)
                    } catch (l) {
                        throw l.source = p, l
                    }
                    return t ? c(t) : (c.source = p, c)
                }, J.unescape = function(e) {
                    return null == e ? "" : an(e).replace(zn, ht)
                }, J.uniqueId = function(e) {
                    var t = ++g;
                    return an(null == e ? "" : e) + t
                }, J.all = Et, J.any = Dt, J.detect = St, J.findWhere = St, J.foldl = Pt, J.foldr = $t, J.include = xt, J.inject = Pt, Xt(function() {
                    var e = {};
                    return d(J, function(t, n) {
                        J.prototype[n] || (e[n] = t)
                    }), e
                }(), !1), J.first = Lt, J.last = function(e, t, n) {
                    var i = 0,
                        r = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var s = r;
                        for (t = J.createCallback(t, n, 3); s-- && t(e[s], s, e);) i++
                    } else if (i = t, null == i || n) return e ? e[r - 1] : f;
                    return l(e, In(0, r - i))
                }, J.sample = function(e, t, n) {
                    return e && "number" != typeof e.length && (e = Nt(e)), null == t || n ? e ? e[ot(0, e.length - 1)] : f : (e = Mt(e), e.length = jn(In(0, t), e.length), e)
                }, J.take = Lt, J.head = Lt, d(J, function(e, t) {
                    var n = "sample" !== t;
                    J.prototype[t] || (J.prototype[t] = function(t, i) {
                        var r = this.__chain__,
                            s = e(this.__wrapped__, t, i);
                        return r || null != t && (!i || n && "function" == typeof t) ? new K(s, r) : s
                    })
                }), J.VERSION = "2.4.1", J.prototype.chain = function() {
                    return this.__chain__ = !0, this
                }, J.prototype.toString = function() {
                    return an(this.__wrapped__)
                }, J.prototype.value = Kt, J.prototype.valueOf = Kt, It(["join", "pop", "shift"], function(e) {
                    var t = un[e];
                    J.prototype[e] = function() {
                        var e = this.__chain__,
                            n = t.apply(this.__wrapped__, arguments);
                        return e ? new K(n, e) : n
                    }
                }), It(["push", "reverse", "sort", "unshift"], function(e) {
                    var t = un[e];
                    J.prototype[e] = function() {
                        return t.apply(this.__wrapped__, arguments), this
                    }
                }), It(["concat", "slice", "splice"], function(e) {
                    var t = un[e];
                    J.prototype[e] = function() {
                        return new K(t.apply(this.__wrapped__, arguments), this.__chain__)
                    }
                }), J
            }
            var f, d = [],
                h = [],
                g = 0,
                m = +new Date + "",
                v = 75,
                b = 40,
                y = " 	\fÃ‚ Ã¯Â»Â¿\n\r\u2028\u2029Ã¡Å¡â‚¬Ã¡ Å½Ã¢â‚¬â‚¬Ã¢â‚¬ÂÃ¢â‚¬â€šÃ¢â‚¬Æ’Ã¢â‚¬â€žÃ¢â‚¬â€¦Ã¢â‚¬â€ Ã¢â‚¬â€¡Ã¢â‚¬Ë†Ã¢â‚¬â€°Ã¢â‚¬Å Ã¢â‚¬Â¯Ã¢ÂÅ¸Ã£â‚¬â‚¬",
                w = /\b__p\+='';/g,
                k = /\b(__p\+=)''\+/g,
                C = /(__e\(.*?\)|\b__t\))\+'';/g,
                N = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                x = /\w*$/,
                E = /^\s*function[ \n\r\t]+\w/,
                O = /<%=([\s\S]+?)%>/g,
                S = RegExp("^[" + y + "]*0+(?=.$)"),
                I = /($^)/,
                j = /\bthis\b/,
                A = /['\n\r\t\u2028\u2029\\]/g,
                T = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),
                P = "[object Arguments]",
                $ = "[object Array]",
                M = "[object Boolean]",
                D = "[object Date]",
                L = "[object Function]",
                R = "[object Number]",
                q = "[object Object]",
                z = "[object RegExp]",
                V = "[object String]",
                U = {};
            U[L] = !1, U[P] = U[$] = U[M] = U[D] = U[R] = U[q] = U[z] = U[V] = !0;
            var F = {
                    leading: !1,
                    maxWait: 0,
                    trailing: !1
                },
                W = {
                    configurable: !1,
                    enumerable: !1,
                    value: null,
                    writable: !1
                },
                B = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                },
                H = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                X = B[typeof window] && window || this,
                Y = B[typeof exports] && exports && !exports.nodeType && exports,
                J = B[typeof module] && module && !module.nodeType && module,
                K = J && J.exports === Y && Y,
                Z = B[typeof global] && global;
            !Z || Z.global !== Z && Z.window !== Z || (X = Z);
            var Q = _();
            "function" == typeof define && "object" == typeof define.amd && define.amd ? X._ = Q : Y && J ? K ? (J.exports = Q)._ = Q : Y._ = Q : X._ = Q
        }.call(this), window.__stalkee_ = _.noConflict(), $i.browser.msie) {
        var root = this;
        ! function(e) {
            root.XDomainRequest && e.ajaxTransport(function(t) {
                if (t.crossDomain && t.async) {
                    t.timeout && (t.xdrTimeout = t.timeout, delete t.timeout);
                    var n;
                    return {
                        send: function(i, r) {
                            function s(t, i, s, a) {
                                n.onload = n.onerror = n.ontimeout = e.noop, n = void 0, r(t, i, s, a)
                            }
                            if (n = new XDomainRequest, t.dataType) {
                                var a = "header_Accept=" + encodeURIComponent(t.dataType);
                                t.url = t.url + (-1 === t.url.indexOf("?") ? "?" : "&") + a
                            }
                            n.open(t.type, t.url), n.onload = function() {
                                s(200, "OK", {
                                    text: n.responseText
                                }, "Content-Type: " + n.contentType)
                            }, n.onprogress = function() {}, n.onerror = function(e) {
                                console.error(__stalkee.stringify(e)), s(404, "Not Found")
                            }, t.xdrTimeout && (n.ontimeout = function() {
                                s(0, "timeout")
                            }, n.timeout = t.xdrTimeout), n.send(t.hasContent && t.data || null)
                        },
                        abort: function() {
                            n && (n.onerror = e.noop(), n.abort())
                        }
                    }
                }
            })
        }($i)
    }

    // Fragment 2
    window.__stalkeecr = {
        crl: function(e, t, n, i) {
            var r = __stalkeecr.tl()[e.length] + __stalkeecr.tl()[t.length],
                s = __stalkeecr.tl()[n.length] + __stalkeecr.tl()[e.length] + __stalkeecr.tl()[t.length],
                a = __stalkeecr.tl()[i.length].substr(0, 3) + __stalkeecr.tl()[e.length] + __stalkeecr.tl()[t.length];
            return [r, s, a]
        },
        tl: function() {
            return ["ID", "Class", "Body", "Show", "String", "Click", "Type", "Scroll", "Mutation", "Object", "Jquery", "Integer", "WebKit", "Safari", "Observer", "HTML", "Mozilla", "var", "array", "observe"]
        }
    }, window.__stalkeem = {}, $i.browser.msie || function(e) { // Fragment 3
        function t(e) {
            return '"' + e.replace(/"/, '\\"') + '"'
        }

        function n(e) {
            if ("string" != typeof e) throw Error("3948327900");
            if (e = e.trim(), !e) throw Error("3948327901");
            if (!e.match(b)) throw Error("3948327290");
            return e
        }

        function i(e) {
            if (!e.trim().length) throw Error("3948327229");
            for (var t = {}, i = {}, r = e.split(/\s+/), s = 0; s < r.length; s++) {
                var a = r[s];
                if (a) {
                    var a = n(a),
                        o = a.toLowerCase();
                    if (t[o]) throw Error("394832722828");
                    i[a] = !0, t[o] = !0
                }
            }
            return Object.keys(i)
        }

        function r(e) {
            var t = {};
            return e.forEach(function(e) {
                e.qualifiers.forEach(function(e) {
                    t[e.attrName] = !0
                })
            }), Object.keys(t)
        }
        var s = this.__extends || function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                n.prototype = t.prototype, e.prototype = new n
            },
            a = __stalkeecr.crl("toString", "enumerableList", "sendAPIDataB", "addCustomMetrics"),
            o = window[a[0]] || window[a[1]] || window[a[2]] || null;
        a = [];
        var u, p = function() {
            function e() {
                this.nodes = [], this.values = []
            }
            return e.prototype.isIndex = function(e) {
                return +e === e >>> 0
            }, e.prototype.nodeId = function(t) {
                var n = t[e.ID_PROP];
                return n || (n = t[e.ID_PROP] = e.nextId_++), n
            }, e.prototype.set = function(e, t) {
                var n = this.nodeId(e);
                this.nodes[n] = e, this.values[n] = t
            }, e.prototype.get = function(e) {
                var t = this.nodeId(e);
                return this.values[t]
            }, e.prototype.has = function(e) {
                return this.nodeId(e) in this.nodes
            }, e.prototype.deletera = function(e) {
                var t = this.nodeId(e);
                delete this.nodes[t], this.values[t] = void 0
            }, e.prototype.keys = function() {
                var e = [];
                for (var t in this.nodes) this.isIndex(t) && e.push(this.nodes[t]);
                return e
            }, e.ID_PROP = "__stalkeemsip__", e.nextId_ = 1, e
        }();
        ! function(e) {
            e[e.STAYED_OUT = 0] = "STAYED_OUT", e[e.ENTERED = 1] = "ENTERED", e[e.STAYED_IN = 2] = "STAYED_IN", e[e.REPARENTED = 3] = "REPARENTED", e[e.REORDERED = 4] = "REORDERED", e[e.EXITED = 5] = "EXITED"
        }(u || (u = {}));
        var c = function() {
                function e(e, t, n, i, r, s, a, o) {
                    "undefined" == typeof t && (t = !1), "undefined" == typeof n && (n = !1), "undefined" == typeof i && (i = !1), "undefined" == typeof r && (r = null), "undefined" == typeof s && (s = !1), "undefined" == typeof a && (a = null), "undefined" == typeof o && (o = null), this.node = e, this.childList = t, this.attributes = n, this.characterData = i, this.oldParentNode = r, this.added = s, this.attributeOldValues = a, this.characterDataOldValue = o, this.isCaseInsensitive = this.node.nodeType === Node.ELEMENT_NODE && this.node instanceof HTMLElement && this.node.ownerDocument instanceof HTMLDocument
                }
                return e.prototype.getAttributeOldValue = function(e) {
                    return this.attributeOldValues ? (this.isCaseInsensitive && (e = e.toLowerCase()), this.attributeOldValues[e]) : void 0
                }, e.prototype.getAttributeNamesMutated = function() {
                    var e = [];
                    if (!this.attributeOldValues) return e;
                    for (var t in this.attributeOldValues) e.push(t);
                    return e
                }, e.prototype.attributeMutated = function(e, t) {
                    this.attributes = !0, this.attributeOldValues = this.attributeOldValues || {}, e in this.attributeOldValues || (this.attributeOldValues[e] = t)
                }, e.prototype.characterDataMutated = function(e) {
                    this.characterData || (this.characterData = !0, this.characterDataOldValue = e)
                }, e.prototype.removedFromParent = function(e) {
                    this.childList = !0, this.added || this.oldParentNode ? this.added = !1 : this.oldParentNode = e
                }, e.prototype.insertedIntoParent = function() {
                    this.childList = !0, this.added = !0
                }, e.prototype.getOldParent = function() {
                    if (this.childList) {
                        if (this.oldParentNode) return this.oldParentNode;
                        if (this.added) return null
                    }
                    return this.node.parentNode
                }, e
            }(),
            l = function() {
                function e() {
                    this.added = new p, this.removed = new p, this.maybeMoved = new p, this.oldPrevious = new p, this.moved = void 0
                }
                return e
            }(),
            _ = function(e) {
                function t(t, n) {
                    e.call(this), this.rootNode = t, this.reachableCache = void 0, this.wasReachableCache = void 0, this.anyParentsChanged = !1, this.anyAttributesChanged = !1, this.anyCharacterDataChanged = !1;
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i];
                        switch (r.type) {
                            case "childList":
                                this.anyParentsChanged = !0;
                                for (var s = 0; s < r.removedNodes.length; s++) {
                                    var a = r.removedNodes[s];
                                    this.getChange(a).removedFromParent(r.target)
                                }
                                for (var s = 0; s < r.addedNodes.length; s++) {
                                    var a = r.addedNodes[s];
                                    this.getChange(a).insertedIntoParent()
                                }
                                break;
                            case "attributes":
                                this.anyAttributesChanged = !0;
                                var o = this.getChange(r.target);
                                o.attributeMutated(r.attributeName, r.oldValue);
                                break;
                            case "characterData":
                                this.anyCharacterDataChanged = !0;
                                var o = this.getChange(r.target);
                                o.characterDataMutated(r.oldValue)
                        }
                    }
                }
                return s(t, e), t.prototype.getChange = function(e) {
                    var t = this.get(e);
                    return t || (t = new c(e), this.set(e, t)), t
                }, t.prototype.getOldParent = function(e) {
                    var t = this.get(e);
                    return t ? t.getOldParent() : e.parentNode
                }, t.prototype.getIsReachable = function(e) {
                    if (e === this.rootNode) return !0;
                    if (!e) return !1;
                    this.reachableCache = this.reachableCache || new p;
                    var t = this.reachableCache.get(e);
                    return void 0 === t && (t = this.getIsReachable(e.parentNode), this.reachableCache.set(e, t)), t
                }, t.prototype.getWasReachable = function(e) {
                    if (e === this.rootNode) return !0;
                    if (!e) return !1;
                    this.wasReachableCache = this.wasReachableCache || new p;
                    var t = this.wasReachableCache.get(e);
                    return void 0 === t && (t = this.getWasReachable(this.getOldParent(e)), this.wasReachableCache.set(e, t)), t
                }, t.prototype.reachabilityChange = function(e) {
                    return this.getIsReachable(e) ? this.getWasReachable(e) ? 2 : 1 : this.getWasReachable(e) ? 5 : 0
                }, t
            }(p),
            f = function() {
                function e(e, t, n, i, r) {
                    this.rootNode = e, this.mutations = t, this.selectors = n, this.calcReordered = i, this.calcOldPreviousSibling = r, this.treeChanges = new _(e, t), this.entered = [], this.exited = [], this.stayedIn = new p, this.visited = new p, this.childListChangeMap = void 0, this.characterDataOnly = void 0, this.matchCache = void 0, this.processMutations()
                }
                return e.prototype.processMutations = function() {
                    if (this.treeChanges.anyParentsChanged || this.treeChanges.anyAttributesChanged)
                        for (var e = this.treeChanges.keys(), t = 0; t < e.length; t++) this.visitNode(e[t], void 0)
                }, e.prototype.visitNode = function(e, t) {
                    if (!this.visited.has(e)) {
                        this.visited.set(e, !0);
                        var n = this.treeChanges.get(e),
                            i = t;
                        if ((n && n.childList || void 0 == i) && (i = this.treeChanges.reachabilityChange(e)), 0 !== i) {
                            if (this.matchabilityChange(e), 1 === i) this.entered.push(e);
                            else if (5 === i) this.exited.push(e), this.ensureHasOldPreviousSiblingIfNeeded(e);
                            else if (2 === i) {
                                var r = 2;
                                n && n.childList && (n.oldParentNode !== e.parentNode ? (r = 3, this.ensureHasOldPreviousSiblingIfNeeded(e)) : this.calcReordered && this.wasReordered(e) && (r = 4)), this.stayedIn.set(e, r)
                            }
                            if (2 !== i)
                                for (var s = e.firstChild; s; s = s.nextSibling) this.visitNode(s, i)
                        }
                    }
                }, e.prototype.ensureHasOldPreviousSiblingIfNeeded = function(e) {
                    if (this.calcOldPreviousSibling) {
                        this.processChildlistChanges();
                        var t = e.parentNode,
                            n = this.treeChanges.get(e);
                        n && n.oldParentNode && (t = n.oldParentNode);
                        var i = this.childListChangeMap.get(t);
                        i || (i = new l, this.childListChangeMap.set(t, i)), i.oldPrevious.has(e) || i.oldPrevious.set(e, e.previousSibling)
                    }
                }, e.prototype.getChanged = function(e, t, n) {
                    this.selectors = t, this.characterDataOnly = n;
                    for (var i = 0; i < this.entered.length; i++) {
                        var r = this.entered[i],
                            s = this.matchabilityChange(r);
                        (1 === s || 2 === s) && e.added.push(r)
                    }
                    for (var a = this.stayedIn.keys(), i = 0; i < a.length; i++) {
                        var r = a[i],
                            s = this.matchabilityChange(r);
                        if (1 === s) e.added.push(r);
                        else if (5 === s) e.removed.push(r);
                        else if (2 === s && (e.reparented || e.reordered)) {
                            var o = this.stayedIn.get(r);
                            e.reparented && 3 === o ? e.reparented.push(r) : e.reordered && 4 === o && e.reordered.push(r)
                        }
                    }
                    for (var i = 0; i < this.exited.length; i++) {
                        var r = this.exited[i],
                            s = this.matchabilityChange(r);
                        (5 === s || 2 === s) && e.removed.push(r)
                    }
                }, e.prototype.getOldParentNode = function(e) {
                    var t = this.treeChanges.get(e);
                    if (t && t.childList) return t.oldParentNode ? t.oldParentNode : null;
                    var n = this.treeChanges.reachabilityChange(e);
                    if (0 === n || 1 === n) throw Error("3948327");
                    return e.parentNode
                }, e.prototype.getOldPreviousSibling = function(e) {
                    var t = e.parentNode,
                        n = this.treeChanges.get(e);
                    n && n.oldParentNode && (t = n.oldParentNode);
                    var i = this.childListChangeMap.get(t);
                    if (!i) throw Error("394832123237");
                    return i.oldPrevious.get(e)
                }, e.prototype.getOldAttribute = function(e, t) {
                    var n = this.treeChanges.get(e);
                    if (!n || !n.attributes) throw Error("39055595");
                    var i = n.getAttributeOldValue(t);
                    if (void 0 === i) throw Error("3948327876");
                    return i
                }, e.prototype.attributeChangedNodes = function(e) {
                    if (!this.treeChanges.anyAttributesChanged) return {};
                    var t, n;
                    if (e) {
                        t = {}, n = {};
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i];
                            t[r] = !0, n[r.toLowerCase()] = r
                        }
                    }
                    for (var s = {}, a = this.treeChanges.keys(), i = 0; i < a.length; i++) {
                        var o = a[i],
                            u = this.treeChanges.get(o);
                        if (u.attributes && 2 === this.treeChanges.reachabilityChange(o) && 2 === this.matchabilityChange(o))
                            for (var p = o, c = u.getAttributeNamesMutated(), l = 0; l < c.length; l++) {
                                var r = c[l];
                                if (!t || t[r] || u.isCaseInsensitive && n[r]) {
                                    var _ = u.getAttributeOldValue(r);
                                    _ !== p.getAttribute(r) && (n && u.isCaseInsensitive && (r = n[r]), s[r] = s[r] || [], s[r].push(p))
                                }
                            }
                    }
                    return s
                }, e.prototype.getOldCharacterData = function(e) {
                    var t = this.treeChanges.get(e);
                    if (!t || !t.characterData) throw Error("97737349");
                    return t.characterDataOldValue
                }, e.prototype.getCharacterDataChanged = function() {
                    if (!this.treeChanges.anyCharacterDataChanged) return [];
                    for (var e = this.treeChanges.keys(), t = [], n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (2 === this.treeChanges.reachabilityChange(i)) {
                            var r = this.treeChanges.get(i);
                            r.characterData && i.textContent != r.characterDataOldValue && t.push(i)
                        }
                    }
                    return t
                }, e.prototype.computeMatchabilityChange = function(e, t) {
                    this.matchCache || (this.matchCache = []), this.matchCache[e.uid] || (this.matchCache[e.uid] = new p);
                    var n = this.matchCache[e.uid],
                        i = n.get(t);
                    return void 0 === i && (i = e.matchabilityChange(t, this.treeChanges.get(t)), n.set(t, i)), i
                }, e.prototype.matchabilityChange = function(e) {
                    var t = this;
                    if (this.characterDataOnly) switch (e.nodeType) {
                        case Node.COMMENT_NODE:
                        case Node.TEXT_NODE:
                            return 2;
                        default:
                            return 0
                    }
                    if (!this.selectors) return 2;
                    if (e.nodeType !== Node.ELEMENT_NODE) return 0;
                    for (var n = e, i = this.selectors.map(function(e) {
                            return t.computeMatchabilityChange(e, n)
                        }), r = 0, s = 0; 2 !== r && s < i.length;) {
                        switch (i[s]) {
                            case 2:
                                r = 2;
                                break;
                            case 1:
                                r = 5 === r ? 2 : 1;
                                break;
                            case 5:
                                r = 1 === r ? 2 : 5
                        }
                        s++
                    }
                    return r
                }, e.prototype.getChildlistChange = function(e) {
                    var t = this.childListChangeMap.get(e);
                    return t || (t = new l, this.childListChangeMap.set(e, t)), t
                }, e.prototype.processChildlistChanges = function() {
                    function e(e, t) {
                        !e || i.oldPrevious.has(e) || i.added.has(e) || i.maybeMoved.has(e) || t && (i.added.has(t) || i.maybeMoved.has(t)) || i.oldPrevious.set(e, t)
                    }
                    if (!this.childListChangeMap) {
                        this.childListChangeMap = new p;
                        for (var t = 0; t < this.mutations.length; t++) {
                            var n = this.mutations[t];
                            if ("childList" == n.type && (2 === this.treeChanges.reachabilityChange(n.target) || this.calcOldPreviousSibling)) {
                                for (var i = this.getChildlistChange(n.target), r = n.previousSibling, s = 0; s < n.removedNodes.length; s++) {
                                    var a = n.removedNodes[s];
                                    e(a, r), i.added.has(a) ? i.added.deletera(a) : (i.removed.set(a, !0), i.maybeMoved.deletera(a)), r = a
                                }
                                e(n.nextSibling, r);
                                for (var s = 0; s < n.addedNodes.length; s++) {
                                    var a = n.addedNodes[s];
                                    i.removed.has(a) ? (i.removed.deletera(a), i.maybeMoved.set(a, !0)) : i.added.set(a, !0)
                                }
                            }
                        }
                    }
                }, e.prototype.wasReordered = function(e) {
                    function t(e) {
                        if (!e) return !1;
                        if (!a.maybeMoved.has(e)) return !1;
                        var t = a.moved.get(e);
                        return void 0 !== t ? t : (o.has(e) ? t = !0 : (o.set(e, !0), t = i(e) !== n(e)), o.has(e) ? (o.deletera(e), a.moved.set(e, t)) : t = a.moved.get(e), t)
                    }

                    function n(e) {
                        var i = u.get(e);
                        if (void 0 !== i) return i;
                        for (i = a.oldPrevious.get(e); i && (a.removed.has(i) || t(i));) i = n(i);
                        return void 0 === i && (i = e.previousSibling), u.set(e, i), i
                    }

                    function i(e) {
                        if (c.has(e)) return c.get(e);
                        for (var n = e.previousSibling; n && (a.added.has(n) || t(n));) n = n.previousSibling;
                        return c.set(e, n), n
                    }
                    if (!this.treeChanges.anyParentsChanged) return !1;
                    this.processChildlistChanges();
                    var r = e.parentNode,
                        s = this.treeChanges.get(e);
                    s && s.oldParentNode && (r = s.oldParentNode);
                    var a = this.childListChangeMap.get(r);
                    if (!a) return !1;
                    if (a.moved) return a.moved.get(e);
                    a.moved = new p;
                    var o = new p,
                        u = new p,
                        c = new p;
                    return a.maybeMoved.keys().forEach(t), a.moved.get(e)
                }, e
            }(),
            d = function() {
                function e(e, t) {
                    var n = this;
                    if (this.projection = e, this.added = [], this.removed = [], this.reparented = t.all || t.element ? [] : void 0, this.reordered = t.all ? [] : void 0, e.getChanged(this, t.elementFilter, t.characterData), t.all || t.attribute || t.attributeList) {
                        var i = t.attribute ? [t.attribute] : t.attributeList,
                            r = e.attributeChangedNodes(i);
                        t.attribute ? this.valueChanged = r[t.attribute] || [] : (this.attributeChanged = r, t.attributeList && t.attributeList.forEach(function(e) {
                            n.attributeChanged.hasOwnProperty(e) || (n.attributeChanged[e] = [])
                        }))
                    }
                    if (t.all || t.characterData) {
                        var s = e.getCharacterDataChanged();
                        t.characterData ? this.valueChanged = s : this.characterDataChanged = s
                    }
                    this.reordered && (this.getOldPreviousSibling = e.getOldPreviousSibling.bind(e))
                }
                return e.prototype.getOldParentNode = function(e) {
                    return this.projection.getOldParentNode(e)
                }, e.prototype.getOldAttribute = function(e, t) {
                    return this.projection.getOldAttribute(e, t)
                }, e.prototype.getOldCharacterData = function(e) {
                    return this.projection.getOldCharacterData(e)
                }, e.prototype.getOldPreviousSibling = function(e) {
                    return this.projection.getOldPreviousSibling(e)
                }, e
            }(),
            h = /[a-zA-Z_]+/,
            g = /[a-zA-Z0-9_\-]+/,
            m = function() {
                function e() {}
                return e.prototype.matches = function(e) {
                    if (null === e) return !1;
                    if (void 0 === this.attrValue) return !0;
                    if (!this.contains) return this.attrValue == e;
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        if (this.attrValue === t[n]) return !0;
                    return !1
                }, e.prototype.toString = function() {
                    return "class" === this.attrName && this.contains ? "." + this.attrValue : "id" !== this.attrName || this.contains ? this.contains ? "[" + this.attrName + "~=" + t(this.attrValue) + "]" : "attrValue" in this ? "[" + this.attrName + "=" + t(this.attrValue) + "]" : "[" + this.attrName + "]" : "#" + this.attrValue
                }, e
            }(),
            v = function() {
                function e() {
                    this.uid = e.nextUid++, this.qualifiers = []
                }
                return Object.defineProperty(e.prototype, "caseInsensitiveTagName", {
                    get: function() {
                        return this.tagName.toUpperCase()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "selectorString", {
                    get: function() {
                        return this.tagName + this.qualifiers.join("")
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isMatching = function(t) {
                    return t[e.matchesSelector](this.selectorString)
                }, e.prototype.wasMatching = function(e, t, n) {
                    if (!t || !t.attributes) return n;
                    var i = t.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
                    if ("*" !== i && i !== e.tagName) return !1;
                    for (var r = [], s = !1, a = 0; a < this.qualifiers.length; a++) {
                        var o = this.qualifiers[a],
                            u = t.getAttributeOldValue(o.attrName);
                        r.push(u), s = s || void 0 !== u
                    }
                    if (!s) return n;
                    for (var a = 0; a < this.qualifiers.length; a++) {
                        var o = this.qualifiers[a],
                            u = r[a];
                        if (void 0 === u && (u = e.getAttribute(o.attrName)), !o.matches(u)) return !1
                    }
                    return !0
                }, e.prototype.matchabilityChange = function(e, t) {
                    var n = this.isMatching(e);
                    return n ? this.wasMatching(e, t, n) ? 2 : 1 : this.wasMatching(e, t, n) ? 5 : 0
                }, e.parseSelectors = function(t) {
                    function n() {
                        r && (s && (r.qualifiers.push(s), s = void 0), o.push(r)), r = new e
                    }

                    function i() {
                        s && r.qualifiers.push(s), s = new m
                    }
                    for (var r, s, a, o = [], u = /\s/, p = "Invalid or unsupported selector syntax.", c = 1, l = 2, _ = 3, f = 4, d = 5, v = 6, b = 7, y = 8, w = 9, k = 10, C = 11, N = 12, x = 13, E = 14, O = c, S = 0; S < t.length;) {
                        var I = t[S++];
                        switch (O) {
                            case c:
                                if (I.match(h)) {
                                    n(), r.tagName = I, O = l;
                                    break
                                }
                                if ("*" == I) {
                                    n(), r.tagName = "*", O = _;
                                    break
                                }
                                if ("." == I) {
                                    n(), i(), r.tagName = "*", s.attrName = "class", s.contains = !0, O = f;
                                    break
                                }
                                if ("#" == I) {
                                    n(), i(), r.tagName = "*", s.attrName = "id", O = f;
                                    break
                                }
                                if ("[" == I) {
                                    n(), i(), r.tagName = "*", s.attrName = "", O = v;
                                    break
                                }
                                if (I.match(u)) break;
                                throw Error(p);
                            case l:
                                if (I.match(g)) {
                                    r.tagName += I;
                                    break
                                }
                                if ("." == I) {
                                    i(), s.attrName = "class", s.contains = !0, O = f;
                                    break
                                }
                                if ("#" == I) {
                                    i(), s.attrName = "id", O = f;
                                    break
                                }
                                if ("[" == I) {
                                    i(), s.attrName = "", O = v;
                                    break
                                }
                                if (I.match(u)) {
                                    O = E;
                                    break
                                }
                                if ("," == I) {
                                    O = c;
                                    break
                                }
                                throw Error(p);
                            case _:
                                if ("." == I) {
                                    i(), s.attrName = "class", s.contains = !0, O = f;
                                    break
                                }
                                if ("#" == I) {
                                    i(), s.attrName = "id", O = f;
                                    break
                                }
                                if ("[" == I) {
                                    i(), s.attrName = "", O = v;
                                    break
                                }
                                if (I.match(u)) {
                                    O = E;
                                    break
                                }
                                if ("," == I) {
                                    O = c;
                                    break
                                }
                                throw Error(p);
                            case f:
                                if (I.match(h)) {
                                    s.attrValue = I, O = d;
                                    break
                                }
                                throw Error(p);
                            case d:
                                if (I.match(g)) {
                                    s.attrValue += I;
                                    break
                                }
                                if ("." == I) {
                                    i(), s.attrName = "class", s.contains = !0, O = f;
                                    break
                                }
                                if ("#" == I) {
                                    i(), s.attrName = "id", O = f;
                                    break
                                }
                                if ("[" == I) {
                                    i(), O = v;
                                    break
                                }
                                if (I.match(u)) {
                                    O = E;
                                    break
                                }
                                if ("," == I) {
                                    O = c;
                                    break
                                }
                                throw Error(p);
                            case v:
                                if (I.match(h)) {
                                    s.attrName = I, O = b;
                                    break
                                }
                                if (I.match(u)) break;
                                throw Error(p);
                            case b:
                                if (I.match(g)) {
                                    s.attrName += I;
                                    break
                                }
                                if (I.match(u)) {
                                    O = y;
                                    break
                                }
                                if ("~" == I) {
                                    s.contains = !0, O = w;
                                    break
                                }
                                if ("=" == I) {
                                    s.attrValue = "", O = C;
                                    break
                                }
                                if ("]" == I) {
                                    O = _;
                                    break
                                }
                                throw Error(p);
                            case y:
                                if ("~" == I) {
                                    s.contains = !0, O = w;
                                    break
                                }
                                if ("=" == I) {
                                    s.attrValue = "", O = C;
                                    break
                                }
                                if ("]" == I) {
                                    O = _;
                                    break
                                }
                                if (I.match(u)) break;
                                throw Error(p);
                            case w:
                                if ("=" == I) {
                                    s.attrValue = "", O = C;
                                    break
                                }
                                throw Error(p);
                            case k:
                                if ("]" == I) {
                                    O = _;
                                    break
                                }
                                if (I.match(u)) break;
                                throw Error(p);
                            case C:
                                if (I.match(u)) break;
                                if ('"' == I || "'" == I) {
                                    a = I, O = x;
                                    break
                                }
                                s.attrValue += I, O = N;
                                break;
                            case N:
                                if (I.match(u)) {
                                    O = k;
                                    break
                                }
                                if ("]" == I) {
                                    O = _;
                                    break
                                }
                                if ("'" == I || '"' == I) throw Error(p);
                                s.attrValue += I;
                                break;
                            case x:
                                if (I == a) {
                                    O = k;
                                    break
                                }
                                s.attrValue += I;
                                break;
                            case E:
                                if (I.match(u)) break;
                                if ("," == I) {
                                    O = c;
                                    break
                                }
                                throw Error(p)
                        }
                    }
                    switch (O) {
                        case c:
                        case l:
                        case _:
                        case d:
                        case E:
                            n();
                            break;
                        default:
                            throw Error(p)
                    }
                    if (!o.length) throw Error(p);
                    return o
                }, e.nextUid = 1, e.matchesSelector = function() {
                    var e = document.createElement("div");
                    return "function" == typeof e.webkitMatchesSelector ? "webkitMatchesSelector" : "function" == typeof e.mozMatchesSelector ? "mozMatchesSelector" : "function" == typeof e.msMatchesSelector ? "msMatchesSelector" : "matchesSelector"
                }(), e
            }(),
            b = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/,
            y = function() {
                function e(t) {
                    var n = this;
                    this.connected = !1, this.options = e.validateOptions(t), this.observerOptions = e.createObserverOptions(this.options.queries), this.root = this.options.rootNode, this.callback = this.options.callback, this.elementFilter = Array.prototype.concat.apply([], this.options.queries.map(function(e) {
                        return e.elementFilter ? e.elementFilter : []
                    })), this.elementFilter.length || (this.elementFilter = void 0), this.calcReordered = this.options.queries.some(function(e) {
                        return e.all
                    }), this.queryValidators = [], e.createQueryValidator && (this.queryValidators = this.options.queries.map(function(t) {
                        return e.createQueryValidator(n.root, t)
                    })), this.observer = new o(function(e) {
                        n.observerCallback(e)
                    }), this.reconnect()
                }
                return e.createObserverOptions = function(e) {
                    function t(e) {
                        if (!i.attributes || n) {
                            if (i.attributes = !0, i.attributeOldValue = !0, !e) return n = void 0, void 0;
                            n = n || {}, e.forEach(function(e) {
                                n[e] = !0, n[e.toLowerCase()] = !0
                            })
                        }
                    }
                    var n, i = {
                        childList: !0,
                        subtree: !0
                    };
                    return e.forEach(function(e) {
                        if (e.characterData) return i.characterData = !0, i.characterDataOldValue = !0, void 0;
                        if (e.all) return t(), i.characterData = !0, i.characterDataOldValue = !0, void 0;
                        if (e.attribute) return t([e.attribute.trim()]), void 0;
                        var n = r(e.elementFilter).concat(e.attributeList || []);
                        n.length && t(n)
                    }), n && (i.attributeFilter = Object.keys(n)), i
                }, e.validateOptions = function(t) {
                    for (var r in t)
                        if (!(r in e.optionKeys)) throw Error("394832709");
                    if ("function" != typeof t.callback) throw Error("39483271");
                    if (!t.queries || !t.queries.length) throw Error("3948327223");
                    for (var s = {
                            callback: t.callback,
                            rootNode: t.rootNode || document,
                            observeOwnChanges: !!t.observeOwnChanges,
                            oldPreviousSibling: !!t.oldPreviousSibling,
                            queries: []
                        }, a = 0; a < t.queries.length; a++) {
                        var o = t.queries[a];
                        if (o.all) {
                            if (Object.keys(o).length > 1) throw Error("39483273334");
                            s.queries.push({
                                all: !0
                            })
                        } else if ("attribute" in o) {
                            var u = {
                                attribute: n(o.attribute)
                            };
                            if (u.elementFilter = v.parseSelectors("*[" + u.attribute + "]"), Object.keys(o).length > 1) throw Error("394832745529");
                            s.queries.push(u)
                        } else if ("element" in o) {
                            var p = Object.keys(o).length,
                                u = {
                                    element: o.element,
                                    elementFilter: v.parseSelectors(o.element)
                                };
                            if (o.hasOwnProperty("elementAttributes") && (u.attributeList = i(o.elementAttributes), p--), p > 1) throw Error("3948327948");
                            s.queries.push(u)
                        } else {
                            if (!o.characterData) throw Error("3948327333838939");
                            if (Object.keys(o).length > 1) throw Error("394832799487");
                            s.queries.push({
                                characterData: !0
                            })
                        }
                    }
                    return s
                }, e.prototype.createSummaries = function(e) {
                    if (!e || !e.length) return [];
                    for (var t = new f(this.root, e, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling), n = [], i = 0; i < this.options.queries.length; i++) n.push(new d(t, this.options.queries[i]));
                    return n
                }, e.prototype.checkpointQueryValidators = function() {
                    this.queryValidators.forEach(function(e) {
                        e && e.recordPreviousState()
                    })
                }, e.prototype.runQueryValidators = function(e) {
                    this.queryValidators.forEach(function(t, n) {
                        t && t.validate(e[n])
                    })
                }, e.prototype.changesToReport = function(e) {
                    return e.some(function(e) {
                        var t = ["added", "removed", "reordered", "reparented", "valueChanged", "characterDataChanged"];
                        if (t.some(function(t) {
                                return e[t] && e[t].length
                            })) return !0;
                        if (e.attributeChanged) {
                            var n = Object.keys(e.attributeChanged),
                                i = n.some(function(t) {
                                    return !!e.attributeChanged[t].length
                                });
                            if (i) return !0
                        }
                        return !1
                    })
                }, e.prototype.observerCallback = function(e) {
                    this.options.observeOwnChanges || this.observer.disconnect();
                    var t = this.createSummaries(e);
                    this.runQueryValidators(t), this.options.observeOwnChanges && this.checkpointQueryValidators(), this.changesToReport(t) && this.callback(t), !this.options.observeOwnChanges && this.connected && (this.checkpointQueryValidators(), this.observer.observe(this.root, this.observerOptions))
                }, e.prototype.reconnect = function() {
                    if (this.connected) throw Error("39483272292911");
                    this.observer.observe(this.root, this.observerOptions), this.connected = !0, this.checkpointQueryValidators()
                }, e.prototype.takeSummaries = function() {
                    if (!this.connected) throw Error("394832799918");
                    var e = this.createSummaries(this.observer.takeRecords());
                    return this.changesToReport(e) ? e : void 0
                }, e.prototype.disconnect = function() {
                    var e = this.takeSummaries();
                    return this.observer.disconnect(), this.connected = !1, e
                }, e.NodeMap = p, e.optionKeys = {
                    callback: !0,
                    queries: !0,
                    rootNode: !0,
                    oldPreviousSibling: !0,
                    observeOwnChanges: !0
                }, e
            }(),
            w = function() {
                function e(e, t, n) {
                    var i = this;
                    this.target = e, this.mirror = t, this.nextId = 1, this.knownNodes = new y.NodeMap;
                    for (var r = this.sen(e).id, s = [], a = e.firstChild; a; a = a.nextSibling) s.push(this.sen(a, !0));
                    this.mirror.initialize(r, s);
                    var o = [{
                        all: !0
                    }];
                    n && (o = o.concat(n)), this.inspmsy = new y({
                        rootNode: e,
                        callback: function(e) {
                            i.applyd(e)
                        },
                        queries: o
                    })
                }
                return e.prototype.disconnect = function() {
                    this.inspmsy && (this.inspmsy.disconnect(), this.inspmsy = void 0)
                }, e.prototype.rememberNode = function(e) {
                    var t = this.nextId++;
                    return this.knownNodes.set(e, t), t
                }, e.prototype.forgetNode = function(e) {
                    this.knownNodes.deletera(e)
                }, e.prototype.cpasfs = function(e) {
                    for (; e;) {
                        if (this.hac(e, "stalkee-sensitive")) return !0;
                        e = e.parentNode
                    }
                    return !1
                }, e.prototype.hac = function(e, t) {
                    var n = " " + t + " ";
                    return (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(n) > -1 ? !0 : !1
                }, e.prototype.sen = function(e, t, n) {
                    if (null === e) return null;
                    var i = this.knownNodes.get(e);
                    if (void 0 !== i) return {
                        id: i
                    };
                    "undefined" == typeof n && (n = this.cpasfs(e)), n === !1 && (n = this.hac(e, "stalkee-sensitive"));
                    var r = {
                        nodeType: e.nodeType,
                        id: this.rememberNode(e)
                    };
                    switch (r.nodeType) {
                        case Node.DOCUMENT_TYPE_NODE:
                            var s = e;
                            r.name = s.name, r.publicId = s.publicId, r.systemId = s.systemId;
                            break;
                        case Node.COMMENT_NODE:
                        case Node.TEXT_NODE:
                            r.textContent = n ? e.textContent.replace(/[a-zA-Z0-9]/g, "X") : e.textContent;
                            break;
                        case Node.ELEMENT_NODE:
                            var a = e;
                            r.tagName = "http://www.w3.org/2000/svg" == a.namespaceURI ? "svg:" + a.tagName : a.tagName, r.attributes = {};
                            for (var o = 0; o < a.attributes.length; o++) {
                                var u = a.attributes[o];
                                r.attributes[u.name] = u.value
                            }
                            if ("SCRIPT" == r.tagName && "undefined" != typeof r.attributes.style && delete r.attributes.style, "LINK" == r.tagName && "undefined" != typeof r.attributes["stalkee-href"] && (r.attributes.href = r.attributes["stalkee-href"]), "INPUT" == r.tagName && "text" == a.type || "TEXTAREA" == r.tagName) {
                                if ("INPUT" == r.tagName) var p = a.getAttribute("value");
                                else if ("TEXTAREA" == r.tagName)
                                    if (a.childNodes.length > 0) var p = a.childNodes[0].nodeValue;
                                    else var p = "";
                                null != a.value && "" != a.value && a.value != p && (r.attributes.inspsv = a.value)
                            }
                            if ("INPUT" == r.tagName && "undefined" != typeof r.attributes["class"] && -1 != r.attributes["class"].toLowerCase().indexOf("stalkeeignore") && (delete r.attributes.value, delete r.attributes.placeholder, delete r.attributes.inspsv), t && a.childNodes.length) {
                                r.childNodes = [];
                                for (var c = a.firstChild; c; c = c.nextSibling) r.childNodes.push(this.sen(c, !0, n))
                            }
                    }
                    return r
                }, e.prototype.sam = function(e, t, n) {
                    var i = this,
                        r = e.concat(t).concat(n),
                        s = new y.NodeMap;
                    r.forEach(function(e) {
                        var t = e.parentNode,
                            n = s.get(t);
                        n || (n = new y.NodeMap, s.set(t, n)), n.set(e, !0)
                    });
                    var a = [];
                    return s.keys().forEach(function(e) {
                        for (var t = s.get(e), n = t.keys(); n.length;) {
                            for (var r = n[0]; r.previousSibling && t.has(r.previousSibling);) r = r.previousSibling;
                            for (; r && t.has(r);) {
                                var o = i.sen(r);
                                o.previousSibling = i.sen(r.previousSibling), o.parentNode = i.sen(r.parentNode), a.push(o), t.deletera(r), r = r.nextSibling
                            }
                            var n = t.keys()
                        }
                    }), a
                }, e.prototype.satch = function(e) {
                    var t = this,
                        n = new y.NodeMap;
                    return Object.keys(e).forEach(function(i) {
                        e[i].forEach(function(e) {
                            var r = n.get(e);
                            r || (r = t.sen(e), r.attributes = {}, n.set(e, r)), r.attributes[i] = e.getAttribute(i)
                        })
                    }), n.keys().map(function(e) {
                        return n.get(e)
                    })
                }, e.prototype.applyd = function(e) {
                    var t = this,
                        n = e[0],
                        i = n.removed.map(function(e) {
                            return t.sen(e)
                        }),
                        r = this.sam(n.added, n.reparented, n.reordered),
                        s = this.satch(n.attributeChanged),
                        a = n.characterDataChanged.map(function(e) {
                            var n = t.sen(e);
                            return n.textContent = t.cpasfs(e) ? e.textContent.replace(/[a-zA-Z0-9]/g, "X") : e.textContent, n
                        });
                    this.mirror.applyd(i, r, s, a), n.removed.forEach(function(e) {
                        t.forgetNode(e)
                    })
                }, e
            }();
        e.insptmc = w
    }(window.__stalkeem);

    '{{ base64 }}';

    // Fragment 4
    window.__stalkeeq = __stalkee, window.__stalkee = {
        lzs: {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _f: String.fromCharCode,
            ctb64: function(e) {
                if (null == e) return "";
                var t, n, i, r, s, a, o, u = "",
                    p = 0;
                for (e = this.cc(e); p < 2 * e.length;) 0 == p % 2 ? (t = e.charCodeAt(p / 2) >> 8, n = 255 & e.charCodeAt(p / 2), i = p / 2 + 1 < e.length ? e.charCodeAt(p / 2 + 1) >> 8 : 0 / 0) : (t = 255 & e.charCodeAt((p - 1) / 2), (p + 1) / 2 < e.length ? (n = e.charCodeAt((p + 1) / 2) >> 8, i = 255 & e.charCodeAt((p + 1) / 2)) : n = i = 0 / 0), p += 3, r = t >> 2, s = (3 & t) << 4 | n >> 4, a = (15 & n) << 2 | i >> 6, o = 63 & i, isNaN(n) ? a = o = 64 : isNaN(i) && (o = 64), u = u + this._keyStr.charAt(r) + this._keyStr.charAt(s) + this._keyStr.charAt(a) + this._keyStr.charAt(o);
                return u
            },
            ctu1: function(e) {
                if (null == e) return "";
                var t, n, i, r = "",
                    s = 0,
                    a = this._f;
                for (e = this.cc(e), t = 0; t < e.length; t++) switch (n = e.charCodeAt(t), s++) {
                    case 0:
                        r += a((n >> 1) + 32), i = (1 & n) << 14;
                        break;
                    case 1:
                        r += a(i + (n >> 2) + 32), i = (3 & n) << 13;
                        break;
                    case 2:
                        r += a(i + (n >> 3) + 32), i = (7 & n) << 12;
                        break;
                    case 3:
                        r += a(i + (n >> 4) + 32), i = (15 & n) << 11;
                        break;
                    case 4:
                        r += a(i + (n >> 5) + 32), i = (31 & n) << 10;
                        break;
                    case 5:
                        r += a(i + (n >> 6) + 32), i = (63 & n) << 9;
                        break;
                    case 6:
                        r += a(i + (n >> 7) + 32), i = (127 & n) << 8;
                        break;
                    case 7:
                        r += a(i + (n >> 8) + 32), i = (255 & n) << 7;
                        break;
                    case 8:
                        r += a(i + (n >> 9) + 32), i = (511 & n) << 6;
                        break;
                    case 9:
                        r += a(i + (n >> 10) + 32), i = (1023 & n) << 5;
                        break;
                    case 10:
                        r += a(i + (n >> 11) + 32), i = (2047 & n) << 4;
                        break;
                    case 11:
                        r += a(i + (n >> 12) + 32), i = (4095 & n) << 3;
                        break;
                    case 12:
                        r += a(i + (n >> 13) + 32), i = (8191 & n) << 2;
                        break;
                    case 13:
                        r += a(i + (n >> 14) + 32), i = (16383 & n) << 1;
                        break;
                    case 14:
                        r += a(i + (n >> 15) + 32, (32767 & n) + 32), s = 0
                }
                return r + a(i + 32)
            },
            dcu1: function(e) {
                if (null == e) return "";
                for (var t, n, i = "", r = 0, s = 0, a = this._f; s < e.length;) {
                    switch (n = e.charCodeAt(s) - 32, r++) {
                        case 0:
                            t = n << 1;
                            break;
                        case 1:
                            i += a(t | n >> 14), t = (16383 & n) << 2;
                            break;
                        case 2:
                            i += a(t | n >> 13), t = (8191 & n) << 3;
                            break;
                        case 3:
                            i += a(t | n >> 12), t = (4095 & n) << 4;
                            break;
                        case 4:
                            i += a(t | n >> 11), t = (2047 & n) << 5;
                            break;
                        case 5:
                            i += a(t | n >> 10), t = (1023 & n) << 6;
                            break;
                        case 6:
                            i += a(t | n >> 9), t = (511 & n) << 7;
                            break;
                        case 7:
                            i += a(t | n >> 8), t = (255 & n) << 8;
                            break;
                        case 8:
                            i += a(t | n >> 7), t = (127 & n) << 9;
                            break;
                        case 9:
                            i += a(t | n >> 6), t = (63 & n) << 10;
                            break;
                        case 10:
                            i += a(t | n >> 5), t = (31 & n) << 11;
                            break;
                        case 11:
                            i += a(t | n >> 4), t = (15 & n) << 12;
                            break;
                        case 12:
                            i += a(t | n >> 3), t = (7 & n) << 13;
                            break;
                        case 13:
                            i += a(t | n >> 2), t = (3 & n) << 14;
                            break;
                        case 14:
                            i += a(t | n >> 1), t = (1 & n) << 15;
                            break;
                        case 15:
                            i += a(t | n), r = 0
                    }
                    s++
                }
                return this.dd(i)
            },
            cc: function(e) {
                if (null == e) return "";
                var t, n, i, r = {},
                    s = {},
                    a = "",
                    o = "",
                    u = "",
                    p = 2,
                    c = 3,
                    l = 2,
                    _ = "",
                    f = 0,
                    d = 0,
                    h = this._f;
                for (i = 0; i < e.length; i += 1)
                    if (a = e.charAt(i), Object.prototype.hasOwnProperty.call(r, a) || (r[a] = c++, s[a] = !0), o = u + a, Object.prototype.hasOwnProperty.call(r, o)) u = o;
                    else {
                        if (Object.prototype.hasOwnProperty.call(s, u)) {
                            if (u.charCodeAt(0) < 256) {
                                for (t = 0; l > t; t++) f <<= 1, 15 == d ? (d = 0, _ += h(f), f = 0) : d++;
                                for (n = u.charCodeAt(0), t = 0; 8 > t; t++) f = f << 1 | 1 & n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n >>= 1
                            } else {
                                for (n = 1, t = 0; l > t; t++) f = f << 1 | n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n = 0;
                                for (n = u.charCodeAt(0), t = 0; 16 > t; t++) f = f << 1 | 1 & n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n >>= 1
                            }
                            p--, 0 == p && (p = Math.pow(2, l), l++), delete s[u]
                        } else
                            for (n = r[u], t = 0; l > t; t++) f = f << 1 | 1 & n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n >>= 1;
                        p--, 0 == p && (p = Math.pow(2, l), l++), r[o] = c++, u = String(a)
                    }
                if ("" !== u) {
                    if (Object.prototype.hasOwnProperty.call(s, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (t = 0; l > t; t++) f <<= 1, 15 == d ? (d = 0, _ += h(f), f = 0) : d++;
                            for (n = u.charCodeAt(0), t = 0; 8 > t; t++) f = f << 1 | 1 & n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n >>= 1
                        } else {
                            for (n = 1, t = 0; l > t; t++) f = f << 1 | n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n = 0;
                            for (n = u.charCodeAt(0), t = 0; 16 > t; t++) f = f << 1 | 1 & n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n >>= 1
                        }
                        p--, 0 == p && (p = Math.pow(2, l), l++), delete s[u]
                    } else
                        for (n = r[u], t = 0; l > t; t++) f = f << 1 | 1 & n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n >>= 1;
                    p--, 0 == p && (p = Math.pow(2, l), l++)
                }
                for (n = 2, t = 0; l > t; t++) f = f << 1 | 1 & n, 15 == d ? (d = 0, _ += h(f), f = 0) : d++, n >>= 1;
                for (;;) {
                    if (f <<= 1, 15 == d) {
                        _ += h(f);
                        break
                    }
                    d++
                }
                return _
            },
            dd: function(e) {
                if (null == e) return "";
                if ("" == e) return null;
                var t, n, i, r, s, a, o, u, p = [],
                    c = 4,
                    l = 4,
                    _ = 3,
                    f = "",
                    d = "",
                    h = this._f,
                    g = {
                        string: e,
                        val: e.charCodeAt(0),
                        position: 32768,
                        index: 1
                    };
                for (n = 0; 3 > n; n += 1) p[n] = n;
                for (r = 0, a = Math.pow(2, 2), o = 1; o != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = 32768, g.val = g.string.charCodeAt(g.index++)), r |= (s > 0 ? 1 : 0) * o, o <<= 1;
                switch (t = r) {
                    case 0:
                        for (r = 0, a = Math.pow(2, 8), o = 1; o != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = 32768, g.val = g.string.charCodeAt(g.index++)), r |= (s > 0 ? 1 : 0) * o, o <<= 1;
                        u = h(r);
                        break;
                    case 1:
                        for (r = 0, a = Math.pow(2, 16), o = 1; o != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = 32768, g.val = g.string.charCodeAt(g.index++)), r |= (s > 0 ? 1 : 0) * o, o <<= 1;
                        u = h(r);
                        break;
                    case 2:
                        return ""
                }
                for (p[3] = u, i = d = u;;) {
                    if (g.index > g.string.length) return "";
                    for (r = 0, a = Math.pow(2, _), o = 1; o != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = 32768, g.val = g.string.charCodeAt(g.index++)), r |= (s > 0 ? 1 : 0) * o, o <<= 1;
                    switch (u = r) {
                        case 0:
                            for (r = 0, a = Math.pow(2, 8), o = 1; o != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = 32768, g.val = g.string.charCodeAt(g.index++)), r |= (s > 0 ? 1 : 0) * o, o <<= 1;
                            p[l++] = h(r), u = l - 1, c--;
                            break;
                        case 1:
                            for (r = 0, a = Math.pow(2, 16), o = 1; o != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = 32768, g.val = g.string.charCodeAt(g.index++)), r |= (s > 0 ? 1 : 0) * o, o <<= 1;
                            p[l++] = h(r), u = l - 1, c--;
                            break;
                        case 2:
                            return d
                    }
                    if (0 == c && (c = Math.pow(2, _), _++), p[u]) f = p[u];
                    else {
                        if (u !== l) return null;
                        f = i + i.charAt(0)
                    }
                    d += f, p[l++] = i + f.charAt(0), c--, i = f, 0 == c && (c = Math.pow(2, _), _++)
                }
            }
        },
        gdt: function() {
            if (!document.doctype) return "";
            var e = document.doctype,
                t = "<!DOCTYPE " + e.name + (e.publicId ? ' PUBLIC "' + e.publicId + '"' : "") + (!e.publicId && e.systemId ? " SYSTEM" : "") + (e.systemId ? ' "' + e.systemId + '"' : "") + ">";
            return t
        },
        getHTML: function() {
            function e(e) {
                var t = $i(e)[0].attributes,
                    n = "<" + e;
                return $i.each(t, function() {
                    n += " " + this.name + '="' + this.value + '"'
                }), n += ">"
            }

            function t(e) {
                var t = document.createElement("div");
                t.innerHTML = e;
                var n = $i(t);
                return n
            }

            function n(e, n) {
                var i = t(e);
                if (__stalkee.um && i.find("script").attr("type", "stalkee-disabled"), "head" == n) {
                    var r = document.createElement("script");
                    r.type = "text/javascript", __stalkee.cau || (__stalkee.cau = "/static/captureadmin.js?", __stalkee.cau += Math.round(1e3 * Math.random()).toString()), r.src = __stalkee.cau;
                    var s = i[0];
                    s.insertBefore(r, s.firstChild), i = $i(s), 0 == i.find("base").length && i.prepend("<base href='" + window.location.protocol + "//" + window.location.host + window.location.pathname + "' />")
                }
                return i.html()
            }
            var i = __stalkee.gdt() + "\n" + e("html") + "<head>" + n($i("head").html(), "head") + "</head>" + e("body") + n($i("body").html()) + "</body></html>";
            return i
        },
        getCookie: function(e) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
        },
        gcil: function() {
            function e(e) {
                var n = e.split(".");
                "www" === n[0] && "com" !== n[1] && n.shift();
                for (var i, r = n.length, s = r, a = n[n.length - 1].length; i = n[--s];)
                    if (0 === s || r - 2 > s || i.length < a || t.indexOf(i) < 0) return "." + n.slice(s).join(".")
            }
            var t = ["guru", "ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", "xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", "xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", "xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", "yt", "za", "zm", "zw"].join();
            return e(location.hostname)
        },
        setCookie: function(e, t, n, i, r, s) {
            if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
            var a = "";
            if (n) switch (n.constructor) {
                case Number:
                    a = 1 / 0 === n ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                    break;
                case String:
                    a = "; expires=" + n;
                    break;
                case Date:
                    a = "; expires=" + n.toUTCString()
            }
            return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + a + ("undefined" == typeof __stalkee.cloc ? "; domain=" + __stalkee.gcil() : __stalkee.cloc) + (i ? "; path=" + i : "; path=/") + (s ? "; secure" : ""), !0
        },
        remCookie: function(e, t) {
            return e && this.hasCookie(e) ? (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ("undefined" == typeof __stalkee.cloc ? "; domain=" + __stalkee.gcil() : __stalkee.cloc) + (t ? "; path=" + t : "; path=/"), !0) : !1
        },
        hasCookie: function(e) {
            return new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
        },
        insslgan: function(e) {
            for (var t = "", n = 0, i = e[0].attributes, r = i.length; r > n; n++) "style" != i.item(n).nodeName && (t += i.item(n).nodeName + "=" + i.item(n).value + ", ");
            return t
        },
        insslh: function(e) {
            if ($i(e).data("inssl") && $i(e).data("inssl").am == __stalkee.insslgan(e)) return $i(e).data("inssl").v;
            var t = __stalkee.inssl(e);
            return $i(e).data("inssl", {
                am: __stalkee.insslgan(e),
                v: t
            }), t
        },
        insslo: function(e, t) {
            function n(e, t) {
                var n = $i(e);
                if (0 == n.length) return "removed";
                if (1 == n.length) return n[0] == t[0] ? !0 : !1;
                for (var i = 0; i < n.length; i++)
                    if (t[0] == n[i]) return i;
                return __stalkee.luk("sl nf e", t), "notinmultiple"
            }

            function i(e) {
                return e.replace(/([ #;?&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1")
            }
            "undefined" == typeof t && (t = {}), e = $i(e);
            var r = i(e[0].nodeName.toLowerCase()),
                s = t.id || e.attr("id");
            if (s && (r += "#" + i(s), n(r, e) === !0)) return r;
            var a = t["class"] || e.attr("class");
            if (a)
                for (var o = a.split(" "), u = 0; u < o.length; u++) "" != o[u] && (r += "." + i(o[u]));
            var p = n(r, e);
            return p === !0 || "removed" == p || "notinmultiple" == p ? r : p === !1 ? (__stalkee.luk("debug error: correctness f", e), "") : r += ":eq(" + p + ")"
        },
        inssl: function(e) {
            return e.get(0) && e.get(0) !== document && "undefined" != typeof e.get(0).tagName ? (e = [].concat(this.insslsmp(e, null, !0, null), this.insslga(e), this.insslgr(e)), this.insslc(e, null), this.inssluq(e)) : [""]
        },
        insslsmp: function(e, t, n, i) {
            var r, s = e.get(0).tagName.toLowerCase(),
                a = [],
                o = e.attr("id");
            for (o && "string" == typeof o && a.push(this.insslv(s + "#" + o, t, n, i)), (o = e.attr("name")) && a.push(this.insslv(s + "[name='" + o + "']", t, n, i)), e = (e.attr("class") || "").replace(/\{.*\}/, "").split(/\s/), o = 0; o < e.length; o++)(r = e[o]) && -1 == e[o].indexOf("hover") && -1 == e[o].indexOf("mouseover") && (r = s + "." + r, a.push(this.insslv(r, t, n, i)));
            return this.insslc(a, null), a
        },
        insslga: function(e) {
            e.get(0).tagName.toLowerCase();
            for (var t = [], n = e.parents(), i = 0; i < n.length; i++) {
                var r = n[i],
                    s = !1;
                0 == i && (s = !0);
                for (var r = this.insslsmp($i(r), null, !1, null), a = 0; a < r.length; a++)
                    for (var o = this.insslsmp(e, r[a], !0, s), u = 0; u < o.length; u++) t.push(o[u])
            }
            return t
        },
        insslgr: function(e) {
            var t = e.get(0).tagName.toLowerCase(),
                n = e.parent(),
                i = this.inssl(n)[0],
                e = n.children(t).index(e),
                t = t + ":eq(" + e + ")";
            return "" != i && (t = i + " > " + t), [t]
        },
        insslv: function(e, t, n, i) {
            if ("undefined" == typeof n && (n = !0), "undefined" == typeof i && (i = !1), n && 1 == $i(e).length) return e;
            if (!n && $i(e).length > 0) return e;
            if (t) {
                var r = " ";
                if (i && (r = " > "), e = t + r + e, n && 1 == $i(e).length) return e;
                if (!n && $i(e).length > 0) return e
            }
        },
        insslc: function(e, t) {
            for (var n = 0; n < e.length; n++) e[n] == t && (e.splice(n, 1), n--);
            return e
        },
        inssluq: function(e) {
            var t = [],
                n = 0,
                i = e.length;
            e: for (; i > n; n++) {
                for (var r = 0, s = t.length; s > r; r++)
                    if (t[r] == e[n]) continue e;
                t[t.length] = e[n]
            }
            return t
        },
        sendURL: function(e, t) {
            "undefined" == typeof t && (t = !1);
            var n = new Image(1, 1);
            n.src = t ? __stalkee.pingurln + e : __stalkee.pingurl + e, n.onload = function() {}
        },
        luk: function(e) {
            if (!("undefined" == typeof console || $i.browser.msie && parseInt($i.browser.version) < 10)) {
                var t = "stalkee:";
                __stalkee_.isArray(e) ? (e.unshift(t), console.log.apply(console, e)) : console.log.apply(console, [t, e])
            }
        },
        sbc: function(e) {
            var t = new Image;
            t.src = e, t.onload = function() {}
        },
        isf: function(e, t, n) {
            var i = 7500;
            t = __stalkee.dble(t);
            var r = "";
            for (property in n) r += "" == r ? "?" + property + "=" + encodeURIComponent(n[property]) : "&" + property + "=" + encodeURIComponent(n[property]);
            if (0 == t.length) var s = 1;
            else var s = Math.ceil(t.length / i);
            for (var a = 0; s > a; a++) __stalkee.sbc(e + r + "&isfpayload=" + t.substr(0, i) + "&isfnum=" + (a + 1) + "&isftotal=" + s), t = t.slice(i)
        },
        fai: function() {
            __stalkee.fapn(), setInterval(__stalkee.fapn, 500)
        },
        faci: function(e, t, n) {
            if (t || (t = "insp-form-input-id"), "undefined" == typeof e.__stalkee_fa_id) {
                if ("undefined" != typeof e.attributes[t]) var i = [t, e.attributes[t].value];
                else if ($i(e).attr("id")) var i = ["id", $i(e).attr("id")];
                else if ($i(e).attr("name")) var i = ["name", $i(e).attr("name")];
                else {
                    if (n) return n;
                    __stalkee.debugMsg("FA utci!!")
                }
                e.__stalkee_fa_id = __stalkee.stringify(i)
            }
            return e.__stalkee_fa_id
        },
        faset: function(e) {
            if (e.__stalkee_fa_itm.length > 0) {
                var t = e.__stalkee_fa_itm[0],
                    n = Math.round((__stalkee.gtn() - e.__stalkee_fa_itm[1]) / 1e3);
                if (n > 0 && 60 > n) {
                    if (e.__stalkee_fa_iym[t]) var i = "additional-timespent";
                    else var i = "additional-hesitation";
                    __stalkee.sfar({
                        formid: e.__stalkee_fa_formid,
                        mt: i,
                        iid: t,
                        v: n
                    })
                }
                e.__stalkee_fa_itm = []
            }
        },
        fasnt: function(e, t, n) {
            (n || e.__stalkee_fa_itm[0] != t) && (__stalkee.faset(e), e.__stalkee_fa_itm = [t, __stalkee.gtn()])
        },
        sfar: function(e) {
            __stalkee.isf(__stalkee.pingurln + "/fa", __stalkee.stringify(e), {
                w: __stalkee.wid,
                r: __stalkee.rid,
                farc: __stalkee.farc
            }), __stalkee.farc++
        },
        adde: function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        sff: function(e) {
            e[0].__stalkee_fa_itm = [], e[0].__stalkee_fa_fom = {}, e[0].__stalkee_fa_iym = {}, e[0].__stalkee_fa_hbt = !1;
            var t = "input:not([type=submit],[type=hidden],[type=password],[data-stalkee-ignore=true]), textarea, select";
            if ("undefined" != typeof $ && $.fn && $.fn.jquery) var n = $;
            else var n = $i;
            n(e[0]).submit(function() {
                    if ("undefined" == typeof this.__stalkee_fa_bs) {
                        __stalkee.sfar({
                            formid: e[0].__stalkee_fa_formid,
                            mt: "submitted",
                            v: 1
                        }), this.__stalkee_fa_bs = !0;
                        for (var t = (new Date).getTime(); t + 300 > (new Date).getTime();)(new Date).getTime()
                    }
                }),
                function(e) {
                    var n = function() {
                        var n = [];
                        e.find(t).each(function(t, i) {
                            i.__stalkee_fa_s || (i.__stalkee_fa_s = !0, n.push({
                                formid: e[0].__stalkee_fa_formid,
                                mt: "seen",
                                iid: __stalkee.faci(i),
                                ipos: $i("body *").index(i),
                                v: "0"
                            }))
                        }), n.length > 0 && __stalkee.sfar(n)
                    };
                    n(), e[0].__stalkee_fa_icinterval = setInterval(n, 1500)
                }(e), e.on("focus change blur mouseenter mouseleave keypress", t, function(t) {
                    function n() {
                        e[0].__stalkee_fa_iym[i] || (__stalkee.fasnt(e[0], i, !0), e[0].__stalkee_fa_iym[i] = 1)
                    }
                    var i = __stalkee.faci(t.target);
                    "focusin" == t.type ? (e[0].__stalkee_fa_fom[i] || (e[0].__stalkee_fa_fom[i] = 1, __stalkee.sfar({
                        formid: e[0].__stalkee_fa_formid,
                        mt: "touched",
                        iid: i,
                        v: 1
                    }), e[0].__stalkee_fa_hbt || (e[0].__stalkee_fa_hbt = !0, __stalkee.sfar({
                        formid: e[0].__stalkee_fa_formid,
                        mt: "touched",
                        v: 1
                    }))), __stalkee.fasnt(e[0], i)) : "focusout" == t.type ? __stalkee.faset(e[0]) : "mouseenter" == t.type ? __stalkee.fasnt(e[0], i) : "mouseleave" == t.type ? $i(t.target).is(":focus") || __stalkee.faset(e[0]) : "keypress" == t.type ? (n(), __stalkee.fasnt(e[0], i)) : "change" == t.type && (n(), __stalkee.sfar({
                        formid: e[0].__stalkee_fa_formid,
                        mt: "changeval",
                        iid: i,
                        v: 1
                    }))
                })
        },
        fapn: function() {
            /*
            $i("form:not(.inspnoformanalytics)").each(function(e, t) {
                if (!t.__stalkee_faft) {
                    t.__stalkee_faft = !0;
                    var n = __stalkee.faci(t, "stalkee-form-analytics", "noid");
                    if ("noid" == n || "aspnetForm" == n) return __stalkee.debugMsg("couldn't get form handle"), void 0;
                    $i.post(__stalkee.pingurln + "/getfid", {
                        wid: __stalkee.wid,
                        fs: n
                    }, function(e) {
                        $i(t).attr("inspfaactive", "true"), t.__stalkee_fa_formid = e.fid, __stalkee.sfar({
                            formid: t.__stalkee_fa_formid,
                            mt: "seen",
                            v: 1
                        }), __stalkee.sff($i(t))
                    }, "json")
                }
            })
            */
        },
        cpn: function () {
            /*
            var e = [];
            $i("link[rel=stylesheet]").each(function(t, n) {
                if (!n.__stalkee_cat) {
                    n.__stalkee_cat = !0;
                    var i = document.createElement("a");
                    i.href = $i(this).attr("href"), e.push(i.href)
                }
            }), e.length > 0 && $i.ajax({
                url: __stalkee.pingurln + "/stylesheets/" + __stalkee.wid,
                async: !0,
                type: "POST",
                timeout: 2500,
                data: {
                    version: __stalkee.INSPv,
                    customer_id: __stalkee.wid,
                    session_key: __stalkee.INSPk,
                    href: e,
                    url: window.location.href
                }
            })
            */
        },
        stringify: function(e) {
            if ("" == e || "undefined" == typeof e) return void 0;
            var t = Array.prototype.toJSON;
            t && delete Array.prototype.toJSON;
            var n = String.prototype.toJSON;
            n && delete String.prototype.toJSON;
            var i = JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
            return t && (Array.prototype.toJSON = t), n && (String.prototype.toJSON = n), i
        },
        sps: function(e, t) {
            if (!__stalkee.isunl && ("undefined" == typeof e && (e = 0), "undefined" == typeof t && (t = !e), __stalkee.poses.length > 0)) {
                var n = __stalkee.poses;
                /*
                if (__stalkee.poses = "", e) var i = "&fnd=" + (__stalkee.mlrc - 1);
                else var i = "";
                */
                // __stalkee.sbc(__stalkee.pingurln + "/interaction?i=" + n + "&c=" + __stalkee.wid + "&p=" + __stalkee.rid + "&h=" + __stalkee.scrd + "&sid=" + __stalkee.sid + "&pad=" + __stalkee.pad);

                var events = [];
                var r = n.split(")");


                var event;
                var parsedEvent;
                for(var i in r) {
                    if(typeof r[i] != "string") {
                        continue;
                    }

                    parsedEvent = {
                        "type": r[i].split(",")[0],
                        "time": parseInt(r[i].split(",")[1]),
                        "params": r[i].split(",").slice(2).join(",")
                    };

                    if(!parsedEvent.type || !parsedEvent.params || !parsedEvent.time) {
                        continue;
                    }

                    events.push(parsedEvent)
                }

                $i.ajax({
                    url: __stalkee.pingurln + "/event/",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        sh: __stalkee.sid,
                        pid: __stalkee.rid,
                        events: events
                    }),
                    succes: function() {
                        __stalkee.poses = ""
                    }
                });

                __stalkee.poses = "";
                __stalkee.lpt = r[r.length - 2].split(",")[1], __stalkee.fadd = 1, __stalkee.setCookie("__stalkee_slim", (new Date).getTime(), 31536e3)
            }
        },
        smlws: function() {
            /*
            if (!__stalkee.isunl && __stalkee.ml.length > 0 && 1 == __stalkee.ws.readyState) {
                try {
                    console.log("Try to send")
                    var e = __stalkee.stringify({
                        ml: {
                            d: __stalkee.lzs.ctu1(__stalkee.stringify(__stalkee.ml)),
                            mlrc: __stalkee.mlrc,
                            jv: __stalkee.INSPv,
                            wsv: 5,
                            r: __stalkee.rid,
                            w: __stalkee.wid,
                            k: __stalkee.INSPk,
                            oid: __stalkee.oid,
                            sid: __stalkee.sid,
                            pad: __stalkee.pad
                        }
                    });
                    __stalkee.ws.send(e)
                } catch (t) {
                    __stalkee.debugMsg("websocket send error")
                }
                __stalkee.ml = [], __stalkee.mlrc++, __stalkee.mlrcfcn++
            }
            */

            __stalkee.debugMsg("websocket send error")
        },
        sml: function(e, t) {
            if (!__stalkee.isunl) {
                "undefined" == typeof e && (e = 0), "undefined" == typeof t && (t = !e);

                if(__stalkee.ml.length == 0) return;

                var n = __stalkee.stringify(__stalkee.ml);
                // console.log(n)

                function byteLength(str) {
                  // returns the byte length of an utf8 string
                  var s = str.length;
                  for (var i=str.length-1; i>=0; i--) {
                    var code = str.charCodeAt(i);
                    if (code > 0x7f && code <= 0x7ff) s++;
                    else if (code > 0x7ff && code <= 0xffff) s+=2;
                    if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
                  }
                  return s;
                }

                var data = JSON.stringify({
                        dom: n/*__stalkee.lzs.ctb64()*/,
                        sh: __stalkee.sid,
                        pid: __stalkee.rid,
                })

                /*
                        customer_id: __stalkee.wid,
                        session_key: __stalkee.INSPk,
                        oid: __stalkee.oid,
                        page_num: __stalkee.pad,
                        update_num: __stalkee.mlrc
                * */


                // __stalkee.ml.length > 0 && (n.length > 2e6 ? (__stalkee.ml = [], __stalkee.mlrc = 999) : e ? (
                $i.ajax({
                    url: __stalkee.pingurln + "/dom/",
                    contentType: "application/json; charset=utf-8",
                    data: data,
                    type: 'POST',
                    success: function(response) {
                        // console.log(response);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                })

                __stalkee.ml = [], __stalkee.mlrc++

                /*
                __stalkee.ml.length > 0 && (n.length > 2e6 ? (__stalkee.ml = [], __stalkee.mlrc = 999) : e ? (__stalkee.isf(__stalkee.pingurln + "/mlsi", n, {
                    jv: __stalkee.INSPv,
                    r: __stalkee.rid,
                    w: __stalkee.wid,
                    k: __stalkee.INSPk,
                    oid: __stalkee.oid,
                    sid: __stalkee.sid,
                    pad: __stalkee.pad,
                    mlrc: __stalkee.mlrc
                }), __stalkee.ml = [], __stalkee.mlrc++) : ($i.ajax({
                    url: __stalkee.pingurln + "/mls/" + __stalkee.mlrc + "/" + __stalkee.rid,
                    async: !0,
                    type: "POST",
                    timeout: 1500,
                    headers: {
                        'Content-Length': byteLength(n)
                    },
                    data: {
                        d: n,//__stalkee.lzs.ctb64(),
                        jv: __stalkee.INSPv,
                        r: __stalkee.rid,
                        w: __stalkee.wid,
                        k: __stalkee.INSPk,
                        oid: __stalkee.oid,
                        sid: __stalkee.sid,
                        pad: __stalkee.pad,
                        mlrc: __stalkee.mlrc
                    }
                }), __stalkee.ml = [], __stalkee.mlrc++))*/
            }

            // console.log("Send SML", __stalkee.stringify(__stalkee.ml))
        },
        iws: function(e) {
            if ("undefined" != typeof __stalkee.wspnginterval && clearInterval(__stalkee.wspnginterval), __stalkee.wspnginterval = setInterval(function() {
                    if ("undefined" != typeof __stalkee.ws && 1 == __stalkee.ws.readyState) try {
                        __stalkee.ws.send(__stalkee.stringify({
                            ping: Math.random()
                        }))
                    } catch (e) {
                        __stalkee.debugMsg("websocket ping error")
                    }
                }, 22e3), !__stalkee.isunl) {
                if ("undefined" == typeof e && (e = 0), e > 2) return __stalkee.sttp("post"), void 0;
                "object" == typeof __stalkee.ws && (__stalkee.ws.onclose = null);
                try {
                    /*
                    __stalkee.wst = setTimeout(function() {
                        __stalkee.sttp("post")
                    }, 4e3), __stalkee.ws = new WebSocket(__stalkee.wsl)
                    */

                    throw Error("0")
                } catch (t) {
                    __stalkee.debugMsg("websocket init error")
                }

                /*
                __stalkee.ws.onopen = function() {
                    clearTimeout(__stalkee.wst), __stalkee.wscn++, __stalkee.mlrcfcn = 1, __stalkee.ws.onclose = null, __stalkee.ws.onclose = function() {
                        __stalkee.iws()
                    }, "undefined" != typeof __stalkee.smlwsinterval && clearInterval(__stalkee.smlwsinterval), __stalkee.smlwsinterval = setInterval(__stalkee.smlws, 3e3), __stalkee.smlws()
                }, __stalkee.ws.onclose = function() {
                    if (clearTimeout(__stalkee.wst), !__stalkee.isunl) {
                        clearInterval(__stalkee.smlwsinterval), __stalkee.smlwsinterval = void 0;
                        var t = 6e4,
                            n = 1e3 * Math.pow(2, e);
                        n > t && (n = t), setTimeout(function() {
                            __stalkee.iws(e + 1)
                        }, n)
                    }
                }, __stalkee.ws.onmessage = function(e) {
                    var t = JSON.parse(e.data);
                    "undefined" != typeof t.unl && __stalkee.unl()
                }
                */
            }
        },
        unl: function() {
            __stalkee.isunl = !0, "undefined" != typeof __stalkee.smlwsinterval && clearInterval(__stalkee.smlwsinterval), __stalkee.ws.close()
        },
        sttp: function(e) {
            "undefined" != typeof __stalkee.smlinterval && clearInterval(__stalkee.smlinterval)
            __stalkee.smlinterval = setInterval(__stalkee.sml, 3e3), __stalkee.sml()
        },
        stpMain: function() {
            $i.browser.safari = 0 == /chrome/.test(navigator.userAgent.toLowerCase()) && 1 == /safari/.test(navigator.userAgent.toLowerCase()), __stalkee.isunl = !1, 259769975 == __stalkee.wid || 2596013025 == __stalkee.wid, window.WebSocket ? (__stalkee.wscn = 0, __stalkee.mlrcfcn = 1, __stalkee.sttp("ws")) : __stalkee.sttp("post"), __stalkee.spsinterval = setInterval(__stalkee.sps, 3e3), __stalkee.hks(), __stalkee.um ? __stalkee.sme() : __stalkee.siee(), __stalkee.cmpinit = !0;
            for (var e = 0; e < __stalkee.pushaq.length; e++) __stalkee.push(__stalkee.pushaq[e]);
            $i(window).bind("blur", __stalkee.ltfcs)
        },
        ismrms: function() {
            var e = __stalkee.mlds;
            if (e[0] != window.innerWidth || e[1] != window.innerHeight || e[2] != window.screen.availWidth || e[3] != window.screen.availHeight || e[4] != document.documentElement.clientWidth || e[5] != document.documentElement.clientHeight) {
                __stalkee.mlds = [window.innerWidth, window.innerHeight, window.screen.availWidth, window.screen.availHeight, document.documentElement.clientWidth, document.documentElement.clientHeight];
                var t = window.innerWidth > window.innerHeight;
                if (t && __stalkee.ismios) var n = window.screen.availHeight,
                    i = window.screen.availWidth;
                else var n = window.screen.availWidth,
                    i = window.screen.availHeight;
                var r = n / document.documentElement.clientWidth,
                    s = i / document.documentElement.clientHeight;
                __stalkee.ismios || (s = r), __stalkee.poses += "mds," + __stalkee.gtn() + "," + r + "," + s + "," + document.documentElement.clientWidth + "," + document.documentElement.clientHeight + ")"
            }
        },
        gri: function(e, t) {
            return Math.floor(Math.random() * (t - e)) + e
        },
        mouseascrl: function() {
            function e(e) {
                return Math.round(1e4 * e) / 1e4
            }
            if (__stalkee.ism) {
                var t = e(document.documentElement.clientWidth / window.innerWidth),
                    n = e(document.documentElement.clientHeight / window.innerHeight);
                (__stalkee.mlz[0] != t || __stalkee.mlz[1] != n) && (__stalkee.mlz = [t, n], __stalkee.poses += "mz," + __stalkee.gtn() + "," + t + "," + n + ")"), __stalkee.ismrms()
            }
            if (__stalkee.mxp != __stalkee.lastx || __stalkee.myp != __stalkee.lasty) {
                __stalkee.lastx = __stalkee.mxp, __stalkee.lasty = __stalkee.myp;
                var i = (new Date).getTime() - __stalkee.loadt;
                __stalkee.poses += "mr," + i + "," + __stalkee.lastx + "," + __stalkee.lasty + "," + __stalkee.mxph + "," + __stalkee.myph + ")"
            }
            if ($i(window).scrollTop() != __stalkee.sct || $i(window).scrollLeft() != __stalkee.scl) {
                __stalkee.sct = $i(window).scrollTop(), __stalkee.scl = $i(window).scrollLeft();
                var i = (new Date).getTime() - __stalkee.loadt;
                __stalkee.poses += "s," + i + "," + __stalkee.sct + "," + __stalkee.scl + ")", $i(window).scrollTop() + $i(window).height() > __stalkee.scrd && (__stalkee.scrd = $i(window).scrollTop() + $i(window).height())
            }
        },
        gtn: function() {
            return (new Date).getTime() - __stalkee.loadt
        },
        gch: function(e, t) {
            function n(e) {
                return e.contents()
            }

            function i(e) {
                var t = e.attributes,
                    n = "<" + e.tagName.toLowerCase();
                return $i.each(t, function() {
                    n += " " + this.name + '="' + this.value + '"'
                }), n += ">", [n, "</" + e.tagName.toLowerCase() + ">"]
            }
            if ("undefined" == typeof t && (t = !1), t)
                if (__stalkee.uoinsps) var r = "undefined" != typeof e.attr("stalkee-sensitive");
                else var r = e.hasClass("stalkee-sensitive");
            else if (__stalkee.uoinsps) var r = "undefined" != typeof e.attr("stalkee-sensitive") || e.parents("[stalkee-sensitive]").length > 0;
            else var r = e.hasClass("stalkee-sensitive") || e.parents(".stalkee-sensitive").length > 0;
            if (__stalkee.uoinsps) var s = e.find("[stalkee-sensitive]").length > 0;
            else var s = e.find(".stalkee-sensitive").length > 0;
            if (r || s) {
                if (r) {
                    var a = e.clone();
                    return a.find("*").contents().filter(function() {
                        return 3 === this.nodeType
                    }).each(function() {
                        this.textContent = this.textContent.replace(/[a-zA-Z0-9]/g, "X")
                    }), e[0].childNodes.length != e[0].children.length && a.contents().filter(function() {
                        return 3 === this.nodeType
                    }).each(function() {
                        this.textContent = this.textContent.replace(/[a-zA-Z0-9]/g, "X")
                    }), a.html()
                }
                if (s)
                    for (var o = n(e), u = "", p = 0; p < o.length; p++) {
                        var c = $i(o[p]);
                        if (o[p].childNodes.length > 0) {
                            var l = i(c[0]);
                            u += l[0] + __stalkee.gch(c, !0) + l[1]
                        } else u += c[0].outerHTML || c.text()
                    }
                return u
            }
            return t ? e.html() || e.text() : e.html()
        },
        sme: function() {
            __stalkee.mic = new __stalkeem.insptmc(document, {
                initialize: function(e, t) {
                    __stalkee.ml.push({
                        t: 0,
                        d: [e, t, __stalkee.fob()],
                        k: "initialize",
                        tv: 2
                    }), __stalkee.sml() // __stalkee.uws ? __stalkee.smlws() :
                },
                applyd: function(e, t, n, i) {
                    __stalkee.ml.push({
                        t: __stalkee.gtn(),
                        k: "d",
                        d: [e, t, n, i]
                    })
                }
            }), document.body.addEventListener("change", function(e) {
                var t = __stalkee.gtiv(e.target);
                null != t && (__stalkee.poses += "cinmi," + __stalkee.gtn() + "," + __stalkee.mic.knownNodes.get(e.target) + "," + __stalkee.dble(t) + ")")
            }), __stalkee.sdt()
        },
        enfi: function(e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    if (!e || !e.ch || !e.ch[t[n]]) return "";
                    e = e.ch[t[n]]
                }
                return e
            }
            "undefined" == typeof t && (t = []);
            var i = $i(e);
            if (__stalkee.lsie) {
                var r = n(__stalkee.lsie, t),
                    s = __stalkee.gch(i);
                if ("undefined" == typeof r || r.h != s) var a = !0;
                else var a = !1
            } else var a = !0;
            if (a)
                for (var o = i.children(), u = [], p = 0; p < o.length; p++) $i(o[p]).is("svg") || u.push(__stalkee.enfi(o[p], t.concat(p)));
            else var u = n(__stalkee.lsie, t).ch;
            for (var c = {}, l = i.is(":input") && (i.hasClass("stalkeeIgnore") || i.hasClass("stalkeeignore")), p = 0; p < e.attributes.length; p++)(!l || "value" != e.attributes[p].nodeName && "placeholder" != e.attributes[p].nodeName) && (c[e.attributes[p].nodeName] = e.attributes[p].value);
            var _ = {
                h: "undefined" == typeof s ? __stalkee.gch(i) : s,
                tn: i[0].tagName,
                at: c,
                ch: u,
                pa: t.join(",")
            };
            if (!__stalkee.lsie && i.is("html")) {
                _.hch = [];
                for (var p = 0; p < e.children.length; p++) {
                    for (var f = e.children[p], d = {}, h = 0; h < f.attributes.length; h++) d[f.attributes[h].nodeName] = f.attributes[h].value;
                    _.hch.push({
                        tn: f.tagName,
                        h: __stalkee.gch($i(f)),
                        at: d
                    })
                }
            }
            return _
        },
        cmenfi: function(e, t) {
            function n(e, t) {
                var i = {};
                for (var r in t)
                    if (!e || e[r] !== t[r])
                        if ("object" == typeof t[r]) {
                            var s = n(e[r], t[r]);
                            __stalkee_.isEmpty(s) || (i[r] = s)
                        } else i[r] = t[r];
                return i
            }
            if (e.h != t.h || !__stalkee_.isEqual(e.at, t.at)) {
                var i = [],
                    r = {};
                if (t.tn != e.tn) return "parenthtml";
                var s = n(t.at, e.at),
                    a = n(e.at, t.at);
                if (s = __stalkee_.keys(s), __stalkee_.isEmpty(s) || (r.rm = s), __stalkee_.isEmpty(a) || (r.ch = a), e.h != t.h) {
                    if (e.ch.length != t.ch.length || 0 == e.ch.length) return r.node = e.pa, r.h = t.h, r;
                    for (var o = 0; o < e.ch.length; o++) {
                        var u = __stalkee.cmenfi(e.ch[o], t.ch[o]);
                        if ("undefined" != typeof u)
                            if ("parenthtml" == u) i.push({
                                node: e.pa,
                                h: t.h
                            });
                            else if (__stalkee_.isArray(u))
                            for (var p = 0; p < u.length; p++) i.push(u[p]);
                        else i.push(u)
                    }
                }
                return __stalkee_.isEmpty(r) || (r.node = e.pa, i.push(r)), i
            }
        },
        fob: function() {
            if ($i("base").length > 0 && $i("base").attr("stalkee-base")) var e = $i("base").attr("stalkee-base");
            else var e = location.href;
            return e
        },
        siee: function() {
            __stalkee.uoinsps = $i("body").find("[stalkee-sensitive]").length > 0, __stalkee.lsie = null, __stalkee.lsie = __stalkee.enfi($i("html")[0]);
            var e = __stalkee_.clone(__stalkee.lsie);
            delete e.ch, delete e.h, __stalkee.ml.push({
                t: 0,
                iie: !0,
                d: e,
                b: __stalkee.fob(),
                k: "initialize",
                tv: 2
            }), __stalkee.uws ? __stalkee.smlws() : __stalkee.sml(), __stalkee.pfiec(), __stalkee.sdt(), $i("input").live("change", function() {
                var e = __stalkee.gtiv(this);
                null != e && $i(this).attr("data-insp-value", e)
            })
        },
        pfiec: function() {
            var e = __stalkee.lsie,
                t = __stalkee.enfi($i("html")[0]);
            __stalkee.lsie = t;
            var n = __stalkee.cmenfi(e, t);
            "undefined" != typeof n && __stalkee.ml.push({
                iie: !0,
                t: __stalkee.gtn(),
                k: "d",
                d: n
            }), __stalkee.pfiect = setTimeout(__stalkee.pfiec, __stalkee.ism ? 1700 : 900)
        },
        sdt: function() {
            /*
            $i.ajax({
                url: __stalkee.pingurln + "/set-doctype",
                async: !0,
                type: "POST",
                data: {
                    version: __stalkee.INSPv,
                    page_id: __stalkee.rid,
                    customer_id: __stalkee.wid,
                    doctype: __stalkee.gdt()
                }
            })
            */
        },
        sendDOM: function(e) {
            var t;
            t = $i.browser.msie ? 1900 : 3500, void 0 == e ? (__stalkee.psc = Base64.encode(__stalkee.getHTML()).replace(/\+/g, "_"), __stalkee.sendURL2("/analytics/senddom2?jv=" + __stalkee.INSPv + "&d=" + __stalkee.psc.substr(0, t) + "&w=" + __stalkee.wid + "&r=" + __stalkee.rid + "&cn=1&dn=dn")) : (__stalkee.pscv = __stalkee.pscv + 1, __stalkee.psc.length > __stalkee.pscv * t ? __stalkee.sendURL2("/analytics/senddom2?jv=" + __stalkee.INSPv + "&d=" + __stalkee.psc.substr(__stalkee.pscv * t, t) + "&w=" + __stalkee.wid + "&r=" + __stalkee.rid + "&cn=" + (__stalkee.pscv + 1) + "&dn=dn") : __stalkee.sendURL("/analytics/sdd?jv=" + __stalkee.INSPv + "&r=" + __stalkee.rid + "&w=" + __stalkee.wid + "&cn=" + __stalkee.pscv + "&k=" + __stalkee.INSPk + "&cntt=yes" + "&oid=" + __stalkee.oid))
        },
        ltfcs: function() {
            __stalkee.dfa && $i("form[inspfaactive]").each(function(e, t) {
                __stalkee.faset(t)
            })
        },
        gcp: function(e) {
            var t = "__stalkeegcp" + e.attr("class") + e.attr("id");
            if (!e.data(t)) {
                var n = Base64.encode(__stalkee.insslo(e)).replace(/\+/g, "_");
                return e.data(t, n), n
            }
            return e.data(t)
        },
        gtiv: function(e) {
            var t = $i(e);
            return t.is("[type=password]") ? null : t.hasClass("stalkeeIgnore") || t.hasClass("stalkeeignore") || __stalkee.cenai ? t.is("input") ? t.val().replace(/[^ ]/g, "X") : null : t.is("select") ? t.children("option:selected").index() : t.val()
        },
        hks: function() {
            function e(e) {
                if (!(Math.random() > .5))
                    for (var t = 0; t < e.changedTouches.length; t++) __stalkee.poses += "mt," + __stalkee.gtn() + "," + e.changedTouches[t].pageX + "," + e.changedTouches[t].pageY + ")"
            }
            var t = function() {
                __stalkee.sps(!0), __stalkee.sml(!0), __stalkee.isunl = !0, "undefined" != typeof __stalkee.ws && (__stalkee.ws.onclose = null, __stalkee.ws.close())
            };
            window.addEventListener ? window.addEventListener("beforeunload", t, !0) : window.onbeforeunload = t, __stalkee.ism && (__stalkee.ismrms(), window.addEventListener("resize", function() {
                __stalkee.ismand ? setTimeout(__stalkee.ismrms, 500) : __stalkee.ismrms()
            }, !1)), $i(document).bind("mouseup", function(e) {
                var t = (new Date).getTime() - __stalkee.loadt,
                    n = e.target || e.srcElement || e.originalTarget;
                __stalkee.poses += "csc," + t + "," + e.pageX + "," + e.pageY + "," + Base64.encode(__stalkee.insslo($i(n))).replace(/\+/g, "_") + ")"
            }), $i(document).mousemove(function(e) {
                __stalkee.mxp = e.clientX, __stalkee.myp = e.clientY, __stalkee.mxph = e.pageX, __stalkee.myph = e.pageY
            }), $i("body").on("keyup", ":input", function(e) {
                if (16 != e.which && !e.metaKey) {
                    var t = __stalkee.gtiv(this);
                    null != t && (__stalkee.poses += __stalkee.um ? "cinmi," + __stalkee.gtn() + "," + __stalkee.mic.knownNodes.get(this) + "," + __stalkee.dble(t) + ")" : "civ," + __stalkee.gtn() + "," + __stalkee.dble(__stalkee.insslo($i(this))) + "," + __stalkee.dble(t) + ")")
                }
            }), __stalkee.um || $i("select").live("change", function() {
                var e = __stalkee.gtiv(this);
                null != e && (__stalkee.poses += "scs," + __stalkee.gtn() + "," + Base64.encode(__stalkee.insslo($i(this))).replace(/\+/g, "_") + "," + e + ")")
            }), __stalkee.ism && (window.addEventListener("touchstart", e, !1), window.addEventListener("touchend", e, !1), window.addEventListener("touchmove", e, !1)), __stalkee.adde(document.body, "scroll", function(e) {
                var t = e.target;
                t.__stalkeeesdf || (t.__stalkeeesdf = __stalkee_.debounce(function(e) {
                    if (__stalkee.um && "undefined" != typeof __stalkee.mic && null != __stalkee.mic) var t = __stalkee.mic.knownNodes.get(e);
                    else var t = __stalkee.dble(__stalkee.insslo($i(e)));
                    __stalkee.poses += ["se", __stalkee.gtn(), t, e.scrollTop, e.scrollLeft].join(",") + ")"
                }, 300, {
                    leading: !0,
                    trailing: !0,
                    maxWait: 300
                })), t.__stalkeeesdf(t)
            }), setInterval(__stalkee.mouseascrl, 300)
        },
        tagSession: function(e) {
            if ("string" == typeof e) {
                var t = {};
                t[e] = "", e = t
            }
            $i.post(__stalkee.pingurln + "/tag", {
                wid: __stalkee.wid,
                rid: __stalkee.rid,
                sid: __stalkee.sid,
                tags: __stalkee.stringify(e)
            }), __stalkee.debugMsg("added tags to this session: "), __stalkee.debugMsg(e)
        },
        identifyLater: function(e) {
            e != __stalkee.getCookie("__stalkee_identity") && ($i.post(__stalkee.pingurln + "/identify", {
                wid: __stalkee.wid,
                sid: __stalkee.sid,
                identity: e
            }), __stalkee.setCookie("__stalkee_identity", e, 31536e3), __stalkee.debugMsg("added identity to this session: "), __stalkee.debugMsg(e))
        },
        dbld: function(e) {
            return e ? Base64.decode(e.replace(/_/g, "+")) : ""
        },
        dble: function(e) {
            return e ? Base64.encode(e + "").replace(/\+/g, "_") : ""
        },
        debugMsg: function(e) {
            (__stalkee.debug || -1 != window.location.search.indexOf("insp_debug")) && ("undefined" != typeof console ? __stalkee.luk(e) : alert("stalkee: " + e))
        },
        push: function(e) {
            var t = e[0];
            if (!__stalkee.cmpinit && "tagSession" == t) return __stalkee.pushaq.push(e), void 0;
            if (__stalkee.cmpinit || "hold" != t && "snap" != t)
                if ("debug" == t) __stalkee.debug = e[1], this.debugMsg("debugging enabled.");
                else if ("tagSession" == t) __stalkee.tagSession(e[1]);
            else if ("wid" == t) __stalkee.wid = e[1];
            else if ("sf" == t) __stalkee.pingurl = e[1], __stalkee.pingurln = e[3], __stalkee.cau = e[4], __stalkee.pingurln2 = e[5], __stalkee.wsl = e[6];
            else if ("pd" == t) __stalkee.pd = "<html " + e[2] + ">" + e[1] + "</html>";
            else if ("cookieLocation" == t) __stalkee.cloc = "" == e[1] ? "" : "; domain=" + e[1];
            else if ("virtualPage" == t) {
                if (!__stalkee.ibrr) return;
                __stalkee.um ? __stalkee.mic && (__stalkee.mic.disconnect(), __stalkee.mic = null) : clearInterval(__stalkee.pfiect), __stalkee.sps(!0), __stalkee.uws ? __stalkee.smlws() : __stalkee.sml(!0), __stalkee.fadd = 0, __stalkee.cpurl = e[1] && e[1].url ? e[1].url : null, __stalkee.rpv()
            } else "pageUrl" == t ? __stalkee.cpurl = e[1] : "identify" == t && (__stalkee.cmpinit ? __stalkee.identifyLater(e[1]) : __stalkee.sendidentify = e[1])
        },
        detmo: function() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        },
        dct: function() {
            __stalkee.setCookie("__stalkee_dct", "38"), 38 != __stalkee.getCookie("__stalkee_dct") && (__stalkee.cloc = ""), __stalkee.remCookie("__stalkee_dct")
        },
        rpv: function(e) {
            function t(e) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                    n = t.exec(location.search);
                return null == n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
            }
            __stalkee.poses = "", __stalkee.lpt = 0, __stalkee.pscv = 0, __stalkee.wob = 0, __stalkee.arc = 0, __stalkee.sarq = [], __stalkee.loadt = (new Date).getTime(), __stalkee.dt = Base64.encode(document.title).replace(/\+/g, "_").substr(0, 800), __stalkee.scrd = $i(window).height(), __stalkee.ml = [], __stalkee.mlrlc = {}, __stalkee.mlrc = 1, __stalkee.farc = 1;
            var n = !1,
                i = __stalkee.getCookie("__stalkee_wid");
            null != i && __stalkee.wid != i && (n = !0);
            var r = __stalkee.getCookie("__stalkee_slim");
            if (null != r) {
                var s = parseInt(r),
                    a = new Date(s).getDate();
                (a != (new Date).getDate() || (new Date).getTime() - s > 18e5) && (n = !0)
            } else n = !0;
            if (__stalkee.setCookie("__stalkee_slim", (new Date).getTime(), 31536e3), n && (__stalkee.remCookie("__stalkee_pad"), __stalkee.remCookie("__stalkee_sid"), __stalkee.remCookie("__stalkee_ref"), __stalkee.remCookie("__stalkee_scpt"), __stalkee.remCookie("__stalkee_nv"), __stalkee.remCookie("__stalkee_wid"), __stalkee.remCookie("__stalkee_norec_sess"), __stalkee.remCookie("__stalkee_norec_howoften"), __stalkee.remCookie("__stalkee_identity"), __stalkee.remCookie("__stalkee_targlpu"), __stalkee.remCookie("__stalkee_targlpt"), __stalkee.setCookie("__stalkee_wid", __stalkee.wid, 31536e3)), null == __stalkee.getCookie("__stalkee_nv") ? (__stalkee.nv = null == __stalkee.getCookie("__stalkee_uid") ? !0 : !1, __stalkee.setCookie("__stalkee_nv", __stalkee.nv, 31536e3)) : __stalkee.nv = __stalkee.getCookie("__stalkee_nv"), "true" == __stalkee.getCookie("__stalkee_norec_sess")) return "true" == __stalkee.getCookie("__stalkee_norec_howoften"), void 0;
            if (__stalkee.oldpad = __stalkee.getCookie("__stalkee_pad"), null != __stalkee.oldpad) var o = parseInt(__stalkee.oldpad) + 1;
            else var o = 1;
            __stalkee.pad = o, 1 == __stalkee.pad ? (__stalkee.ref = "" === document.referrer ? "d" : Base64.encode(document.referrer).replace(/\+/g, "_").substr(0, 800), __stalkee.setCookie("__stalkee_ref", __stalkee.ref, 31536e3), __stalkee.setCookie("__stalkee_targlpu", window.location.href, 31536e3), __stalkee.setCookie("__stalkee_targlpt", document.title, 31536e3)) : __stalkee.ref = __stalkee.getCookie("__stalkee_ref"), "undefined" != typeof __stalkee.sendidentify && "" != __stalkee.sendidentify && __stalkee.setCookie("__stalkee_identity", __stalkee.sendidentify, 31536e3);

            /*
                ,
                xhrFields: {
                    withCredentials: !0
                },
            * */

            $i.ajax({
                url: (__stalkee.getCookie("__stalkee_sid")) ? __stalkee.pingurln + "/pageview/" : __stalkee.pingurln + "/session/",
                async: !0,
                type: "POST",
                dataType: "json",
                data: {
                    ch: __stalkee.wid,
                    visitor: __stalkee.getCookie("__stalkee_uid") || "",
                    sh: __stalkee.getCookie("__stalkee_sid") || "",
                    referer: __stalkee.ref,
                    title: document.title,
                    page_width: __stalkee.pw,
                    page_height: __stalkee.ph,
                    document_height: $i(document).height()
                },
                success: function(t) {
                    if(!t.ph) {
                        t.ph = 1
                    }

                    t = {
                        "screencapture": "yes",
                        "pagemethod": "client",
                        "oid": 2,
                        "cenai": false,
                        "page_id": t.ph,
                        "key": "session_key",
                        "session_id": __stalkee.getCookie("__stalkee_sid") || t.sh,
                        "user_id": __stalkee.getCookie("__stalkee_uid") || t.uh
                    };

                    if ("undefined" != typeof __stalkeeginitr) return __stalkeeginitr(t);

                    if (delete __stalkee.sendidentify, "undefined" != typeof t.nostalkee) return "howoftenrec" == t.nostalkee && __stalkee.setCookie("__stalkee_norec_howoften", !0, 31536e3), "targetingdecision" != t.nostalkee && __stalkee.setCookie("__stalkee_norec_sess", !0, 31536e3), void 0;
                    __stalkee.setCookie("__stalkee_pad", __stalkee.pad, 31536e3), __stalkee.sid = t.session_id, __stalkee.setCookie("__stalkee_sid", __stalkee.sid, 0), __stalkee.uid = t.user_id, __stalkee.setCookie("__stalkee_uid", __stalkee.uid, 1 / 0), __stalkee.sid = __stalkee.getCookie("__stalkee_sid"), __stalkee.INSPv = 5, __stalkee.oid = t.oid, __stalkee.rid = t.page_id, __stalkee.INSPk = t.key, __stalkee.cenai = t.cenai, __stalkee.ea = !0;
                    var n = __stalkeecr.crl("toString", "enumerableList", "sendAPIDataB", "addCustomMetrics"),
                        i = window[n[0]] || window[n[1]] || window[n[2]] || null;
                    __stalkee.um = i ? !0 : !1, "undefined" != typeof __stalkee.umo && (__stalkee.um = __stalkee.umo), "undefined" != typeof t.umo && (__stalkee.um = t.umo), __stalkee.ibrr = !0, e ? (__stalkee.stpMain(), setTimeout(__stalkee.sps, 300)) : __stalkee.um ? __stalkee.sme() : __stalkee.siee(), __stalkee.dfa = t.dfa, !__stalkee.dfa || __stalkee.ism && 778065071 != __stalkee.wid || !e || 1 == __stalkee.sid % 5 && __stalkee.fai(), 2 == __stalkee.rid % 10 && (__stalkee.cpn(), setInterval(__stalkee.cpn, 5e3))

                    $i(window).click(function (e) {
                        //try {
                            var tag = $i(e.target).data('stalkee-element-tag')
                            tag = (typeof tag == 'undefined') ? tag = "" : tag

                            // $i.get(__stalkee.pingurln + "/click/" + __stalkee.sid + '/' + __stalkee.rid + '?c=' + e.target.className + '&id=' + e.target.id + '&tg=' + tag + '&t=' + new Date().getTime() / 1000)
                            // $i.post('pageview-update'

                            if(!__stalkee.rid || !__stalkee.getCookie("__stalkee_sid")) {
                                throw "RID / SID error " + __stalkee.rid + " / " + __stalkee.getCookie("__stalkee_sid");
                            }

                            $i.ajax({
                                url: __stalkee.pingurln + '/pageview/' + __stalkee.getCookie("__stalkee_sid") + '/' + __stalkee.rid + "/",
                                asyc: !0,
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify({
                                    clicks: {
                                        'classes': e.target.className,
                                        'id': e.target.id,
                                        'tag': tag,
                                        'time': new Date().getTime() / 1000
                                    }
                                })
                            })

                        //} catch (e) {
                        //    console.log("stalkee click reporting error", e)
                        //}
                    })

                    __stalkee['addLabel'] = function (key, label) {
                        try {
                            if(!__stalkee.rid || !__stalkee.getCookie("__stalkee_sid")) {
                                throw new Exception();
                            }

                            $i.ajax({
                                url: __stalkee.pingurln + '/pageview/' + __stalkee.getCookie("__stalkee_sid") + '/' + __stalkee.rid + "/",
                                async: !0,
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify({
                                    labels: {
                                        key: key,
                                        value: label
                                    }
                                })
                            })
                        } catch (e) {
                            console.log("stalkee labeling error", e)
                        }
                    }
                }
            }), __stalkee.loaded = !0
        },
        initInsp: function() {
            if (__stalkee.dct(), __stalkee.pushaq = [], __stalkee.cmpinit = !1, __stalkee.ism = __stalkee.detmo(), __stalkee.mlz = [0, 0], __stalkee.mlds = [-1, -1, -1, -1, -1, -1], __stalkee.ismios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), __stalkee.ismand = navigator.userAgent.toLowerCase().indexOf("android") > -1, (!__stalkee.ism || __stalkee.ismios || __stalkee.ismand) && "undefined" == typeof __stalkeedisable) {
                __stalkee.transproto = "http:" == window.location.protocol ? "http:" : "https:", $i.browser.opera ? (__stalkee.pingurl = "https://{{ host }}/api", __stalkee.pingurln = "https://{{ host }}/api", __stalkee.pingurln2 = __stalkee.pingurln) : (__stalkee.pingurl = __stalkee.transproto + "//{{ host }}/api", __stalkee.pingurln = __stalkee.transproto + "//{{ host }}/api", __stalkee.pingurln2 = __stalkee.transproto + "//{{ host }}/api"), window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), __stalkee.wsl = "wss://localhost:1234", __stalkee.pw = $i(window).width(), __stalkee.ph = $i(window).height();
                for (var e = 0; e < __stalkeeq.length; e++) this.push(__stalkeeq[e]);
                if (!__stalkee.wid) return __stalkee.luk("fatal error: wid has not been set."), void 0;
                __stalkee.cl = $i.browser.msie ? 1900 : 3500, __stalkee.rpv(!0), __stalkee.debugMsg("initialized.")
            }
        }
    };
    var __stalkeeipr = !1;
    "prerender" != document.webkitVisibilityState ? __stalkee.initInsp() : (__stalkeeipr = !0, document.addEventListener("webkitvisibilitychange", __stalkeehvc, !1));
};
