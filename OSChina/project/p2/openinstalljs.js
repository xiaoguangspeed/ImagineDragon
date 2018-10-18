OpenInstall = function(window, document, xhr) {
    /**
     * 截取网页的url的查询参数，并把组装成对象的形式返回：eg: http://www.123.com?a=1&b=2  ->  {a:[a,1],b:[b:2]}
     * @param {*} n
     * @returns {object}  
     */
    function r(n) {
        n = n || window.location.href;
        for (var index = n.indexOf("?"), queryStr = -1 == index ? "": n.substring(index + 1).replace(/\+/g, "%20"), 
         queryArr = queryStr.split("&"),
         tmp = {},i = 0; i < queryArr.length; i++) {
            var queryParam = queryArr[i].split("="),
            key = decodeURIComponent(queryParam[0] || ""),
            value = decodeURIComponent(queryParam[1] || "");
            key && value && (void 0 === tmp[key] ? tmp[key] = value: "object" == typeof tmp[key] ? tmp[key].push(value) : tmp[key] = [tmp[key], value])
        }
        return tmp
    }
    function i(e) {
        var n = [];
        for (var t in e) {
            var r = e[t];
            if ("[object Array]" == Object.prototype.toString.call(r)) for (var i = 0; i < r.length; i++) null != r[i] && void 0 !== r[i] && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(r[i]));
            else null != r && void 0 !== r && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(r))
        }
        return n.join("&")
    }
    function a() {
        var e = 0,
        n = arguments.length,
        t = arguments[e],
        a = t.indexOf("?"),
        o = r(t);
        for (e = 1; e < n; e++) {
            var c = arguments[e];
            for (var u in c) o[u] = c[u]
        }
        return ( - 1 == a ? t: t.substring(0, a)) + "?" + i(o)
    }
    function o() {
        this.arr = [],
        this.run = function(e) {
            this.arr ? this.arr[this.arr.length] = e: e()
        },
        this.isReady = function() {
            return null == this.arr
        },
        this.ready = function() {
            if (null != this.arr) for (var e = 0; e < this.arr.length; e++) this.arr[e]();
            this.arr = null
        }
    }
    function c(e) {
        var n = new t,
        r = e.data,
        i = e.url,
        a = e.method;
        r && "string" != typeof r && (r = E.stringify(r)),
        "POST" != a && r && (i = i + (i.indexOf("?") > -1 ? "&": "?") + r, r = null),
        n.onreadystatechange = function() {
            if (4 == n.readyState) {
                if (200 == n.status) {
                    var t = n.response || n.responseText || {};
                    e.success && e.success("string" == typeof t ? E.parse(t) : t)
                } else e.error && e.error(n, n.statusText);
                e.complete && e.complete(n)
            }
        },
        n.ontimeout = function() {
            e.error && e.error(n, n.statusText)
        };
        try {
            n.open(a, i, !1 !== e.async),
            n.withCredentials = !0;
            try {
                n.setRequestHeader && e.contentType && n.setRequestHeader("Content-Type", e.contentType),
                e.timeout && (n.timeout = e.timeout)
            } catch(e) {}
            n.send(r || null)
        } catch(e) {}
        return n
    }
    function u() {
        var e = n.createElement("canvas");
        if (e && "function" == typeof e.getContext) for (var t = ["webgl", "webgl2", "experimental-webgl2", "experimental-webgl"], r = 0; r < t.length; r++) {
            var i = t[r],
            a = e.getContext(i);
            if (a) {
                var o = {};
                o.context = i,
                o.version = a.getParameter(a.VERSION),
                o.vendor = a.getParameter(a.VENDOR),
                o.sl_version = a.getParameter(a.SHADING_LANGUAGE_VERSION),
                o.max_texture_size = a.getParameter(a.MAX_TEXTURE_SIZE);
                var c = a.getExtension("WEBGL_debug_renderer_info");
                return c && (o.vendor = a.getParameter(c.UNMASKED_VENDOR_WEBGL), o.renderer = a.getParameter(c.UNMASKED_RENDERER_WEBGL)),
                o
            }
        }
        return {}
    }
    function l(n) {
        C(function(t) {
            var r, i, a, o;
            try {
                r = e.screen.width || "",
                i = e.screen.height || "",
                a = e.devicePixelRatio || "",
                o = u()
            } catch(e) {}
            for (var c = 0,
            t = t || [], l = t.length; c < l; c++) t[c] = v(t[c] || "");
            n({
                sw: v("" + (r || 0)),
                sh: v("" + (i || 0)),
                sp: a,
                gv: v(o.version || ""),
                gr: v(o.renderer || ""),
                li: t
            })
        })
    }
    function s(t, r, i) {
        var a = "ex",
        o = "ecC",
        c = "ommand",
        u = "co",
        l = "py",
        s = a + o + c,
        d = u + l;
        if ("function" != typeof n[s]) return ! 1;
        var f = n.createElement("div");
        f.innerHTML = t;
        for (var p = [], h = 0; h < f.children.length; h++) p[h] = f.children[h];
        for (var v, y, b = !1,
        C = r ? r + ((new Date).getTime() + (i || 1)) + "-": null, h = 0; h < p.length; h++) {
            try {
                if (v = p[h], n.body.appendChild(v), "SELECT" === v.nodeName) v.focus();
                else if ("INPUT" === v.nodeName || "TEXTAREA" === v.nodeName) {
                    C && (v.value = g(m(v.value) + C));
                    var E = v.hasAttribute("readonly");
                    E || v.setAttribute("readonly", ""),
                    v.select(),
                    v.setSelectionRange(0, v.value.length),
                    E || v.removeAttribute("readonly")
                } else {
                    v.hasAttribute("contenteditable") && v.focus(),
                    C && v.setAttribute("class", C),
                    y = e.getSelection();
                    var O = n.createRange();
                    O.selectNode(v),
                    y.removeAllRanges(),
                    y.addRange(O)
                }
                b = n[s](d)
            } catch(e) {
                b = !1
            }
            n.body.removeChild(v)
        }
        return y && y.removeAllRanges(),
        b
    }
    function d(e, t) {
        var r, i, a = !1;
        a ? (r = "hidden", i = "qbrowserVisibilityChange") : void 0 !== n.hidden ? (r = "hidden", i = "visibilitychange") : void 0 !== n.msHidden ? (r = "msHidden", i = "msvisibilitychange") : void 0 !== n.webkitHidden && (r = "webkitHidden", i = "webkitvisibilitychange");
        var o = function(e) {
            return a && e && void 0 !== e.hidden ? e.hidden: n[r]
        },
        c = setTimeout(function() {
            null == c || o() || (e(), c = null)
        },
        t),
        u = function(e) {
            null != c && o(e) && (clearTimeout(c), c = null, n.removeEventListener(i, u))
        };
        i && n.addEventListener(i, u, !1)
    }
    function f(e, n, t, r) {
        "function" == typeof t && d(t, r),
        O[e](n)
    }
    var p = 2,
    h = function() {
        function e(e, n) {
            var t, r, a, o, c = -1,
            u = e.length,
            l = [0, 0, 0, 0];
            for (t = []; ++c < u;) r = e[c],
            a = e[++c],
            l[0] = r >> 2,
            l[1] = (3 & r) << 4 | (a || 0) >> 4,
            c >= u ? l[2] = l[3] = 64 : (o = e[++c], l[2] = (15 & a) << 2 | (o || 0) >> 6, l[3] = c >= u ? 64 : 63 & o),
            t.push(i.charAt(l[0]), i.charAt(l[1]), i.charAt(l[2]), i.charAt(l[3]));
            var s = t.join("");
            return n ? s.replace(/=/g, "") : s
        }
        function n(e) {
            for (var n, t, r, a, o, c, u, l = [], s = 0; s < e.length;) a = i.indexOf(e.charAt(s++)),
            o = i.indexOf(e.charAt(s++)),
            c = i.indexOf(e.charAt(s++)),
            u = i.indexOf(e.charAt(s++)),
            n = a << 2 | o >> 4,
            t = (15 & o) << 4 | c >> 2,
            r = (3 & c) << 6 | u,
            l.push(n),
            64 != c && l.push(t),
            64 != u && l.push(r);
            return l
        }
        function t(e) {
            var n, t = -1,
            r = e.length,
            i = [];
            if (/^[\x00-\x7f]*$/.test(e)) for (; ++t < r;) i.push(e.charCodeAt(t));
            else for (; ++t < r;) n = e.charCodeAt(t),
            n < 128 ? i.push(n) : n < 2048 ? i.push(n >> 6 | 192, 63 & n | 128) : i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
            return i
        }
        function r(e) {
            var n, t, r, i = [],
            a = 0;
            for (n = t = r = 0; a < e.length;) n = e[a],
            n < 128 ? (i.push(String.fromCharCode(n)), a++) : n > 191 && n < 224 ? (t = e[a + 1], i.push(String.fromCharCode((31 & n) << 6 | 63 & t)), a += 2) : (t = e[a + 1], r = e[a + 2], i.push(String.fromCharCode((15 & n) << 12 | (63 & t) << 6 | 63 & r)), a += 3);
            return i.join("")
        }
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
        return [function(n) {
            if (!n) return "";
            for (var r = t(n), i = r.length, a = 0; a < i; a++) r[a] = 150 ^ r[a];
            return e(r, !0)
        },
        function(e) {
            if (!e) return "";
            for (var t = n(e), i = 0, a = t.length; i < a; i++) t[i] = 150 ^ t[i];
            return r(t)
        },
        function(n) {
            return n ? e(t(n)) : ""
        },
        function(e) {
            return e ? r(n(e)) : ""
        }]
    } (),
    v = h[0],
    y = h[1],
    g = h[2],
    m = h[3],
    b = function() {
        "use strict";
        function t() {
            if (!a) {
                a = !0;
                for (var n = 0; n < i.length; n++) i[n].fn.call(e, i[n].ctx);
                i = []
            }
        }
        function r() {
            "complete" === n.readyState && t()
        }
        var i = [],
        a = !1,
        o = !1;
        return setTimeout(t, 3e3),
        function(c, u) {
            if (a) return void c(u);
            i.push({
                fn: c,
                ctx: u
            }),
            "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t() : o || (n.addEventListener ? (n.addEventListener("DOMContentLoaded", t, !1), e.addEventListener("load", t, !1)) : (n.attachEvent("onreadystatechange", r), e.attachEvent("onload", t)), o = !0)
        }
    } (),
    C = function() {
        function n() {
            d.isReady() || (d.ready(), clearInterval(f), c && c.close())
        }
        function t(e) {
            n()
        }
        function r(e) {
            for (var n = e.split("."), t = 0, r = 0; r < n.length; r++) t = t << 8 | 255 & parseInt(n[r]);
            return t
        }
        function i(e) {
            for (var t, i, a, o, c = e.split("\r\n"), u = 0; u < c.length; u++) {
                if (t = c[u], i = t.split(" "), 0 == t.indexOf("a=candidate:") && (a = i[7]) && "host" == a && (o = i[4]));
                else if (0 == t.indexOf("a=rtcp:") && (a = i[2]) && "IP4" == a && (o = i[3]));
                else if (0 != t.indexOf("c=") || !(a = i[1]) || "IP4" != a || !(o = i[2])) continue;
                o && !l[o] && /[0-9]{1,3}(\.[0-9]{1,3}){3}/.test(o) && ("0.0.0.0" == o || 0 == o.indexOf("127.") || 0 == o.indexOf("169.254") || 3758096384 == (4026531840 & r(o)) || (l[o] = 1, s.push(o)))
            }
            s.length && n()
        }
        var a, c, u, l = {},
        s = [],
        d = new o,
        f = setInterval(function() {
            c && c.localDescription && c.localDescription.sdp && u != c.localDescription.sdp && (u = c.localDescription.sdp, i(u))
        },
        10);
        try { (a = e.RTCPeerConnection || e.mozRTCPeerConnection || e.webkitRTCPeerConnection) ? (c = new a({
                iceServers: []
            },
            {
                optional: [{
                    RtpDataChannels: !0
                }]
            }), c.onicecandidate = function(e) {
                e.candidate && e.candidate.candidate && i("a=" + e.candidate.candidate)
            },
            c.createDataChannel("openinstall"), c.createOffer(function(e) {
                try {
                    c.setLocalDescription(e,
                    function() {},
                    t)
                } catch(e) {
                    t(e)
                }
            },
            t), setTimeout(n, 1e3)) : t("not exists")
        } catch(e) {
            t(e)
        }
        return function(e) {
            d.run(function() {
                e(s.slice(0))
            })
        }
    } (),
    E = e.JSON || {
        parse: function(e) {
            return eval("(" + e + ")")
        },
        stringify: function() {
            var e = Object.prototype.toString,
            n = Array.isArray ||
            function(n) {
                return "[object Array]" === e.call(n)
            },
            t = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t"
            },
            r = function(e) {
                return t[e] || "\\u" + (e.charCodeAt(0) + 65536).toString(16).substr(1)
            },
            i = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function t(a) {
                if (null == a) return "null";
                if ("number" == typeof a) return isFinite(a) ? a.toString() : "null";
                if ("boolean" == typeof a) return a.toString();
                if ("object" == typeof a) {
                    if ("function" == typeof a.toJSON) return t(a.toJSON());
                    if (n(a)) {
                        for (var o = "[",
                        c = 0; c < a.length; c++) o += (c ? ", ": "") + t(a[c]);
                        return o + "]"
                    }
                    if ("[object Object]" === e.call(a)) {
                        var u = [];
                        for (var l in a) a.hasOwnProperty(l) && u.push(t(l) + ": " + t(a[l]));
                        return "{" + u.sort().join(", ") + "}"
                    }
                }
                return '"' + a.toString().replace(i, r) + '"'
            }
        } ()
    },
    O = {
        frm: function(e) {
            var t = n.createElement("iframe");
            t.style.display = "none",
            t.style.visibility = "hidden",
            t.src = e,
            n.body.appendChild(t)
        },
        loc: function(n) {
            e.location = n
        },
        hrf: function(e) {
            var t = n.createElement("a");
            t.style.display = "none",
            t.href = e,
            n.body.appendChild(t),
            t.click()
        },
        inhrf: function(e) {
            var t = n.createElement("script");
            t.setAttribute("type", "text/javascript"),
            t.innerHTML = '(function(){var a = document.createElement("a");a.style.display = "none";a.href = "' + e.replace(/"/g, '\\"') + '";document.body.appendChild(a);a.click();})()',
            n.body.appendChild(t)
        },
        open: function(n) {
            e.open(n)
        }
    },
    R = function(e, t) {
        function r() {
            if (g) {
                v && d(function() {
                    n.body.appendChild(v)
                },
                400);
                var e = a(g, {
                    p: T ? 1 : 0
                });
                O[m](e)
            } else v && n.body.appendChild(v)
        }
        function i(e, n, t) {
            p.run(function() {
                t = t || {},
                n && !k && (e = !0),
                S && n && (T = s(S, I, w));
                var i;
                n && (i = r, N && c({
                    method: "POST",
                    url: N
                })),
                E && e ? f(x, E, i, t.timeout || A) : i && i()
            })
        }
        function u(t) {
            var r = e.mask || t;
            if ("function" == typeof r && (r = r() || t), "string" == typeof r) {
                var i = n.createElement("div");
                i.innerHTML = r,
                r = i.children[0]
            }
            var a = function() {
                n.body.removeChild(r)
            };
            return r.addEventListener ? r.addEventListener("click", a) : r.onclick = a,
            r
        }
        if (e = e || {},
        !e.appKey) return void alert("appKey not specified");
        var p = new o,
        h = this;
        "function" == typeof e.onready && p.run(function() {
            e.onready.call(h)
        }),
        e.buttonId && p.run(function() {
            for (var t = e.buttonId.split(" "), r = 0; r < t.length; r++) {
                var i = n.getElementById(t[r]);
                i && i.addEventListener("click",
                function() {
                    h.wakeupOrInstall()
                })
            }
        });
        var v, g, m, C, E, x, A, S, I, w, T, k, L, N;
        this.wakeupOrInstall = function(e) {
            i(!1, !0, e)
        },
        this.schemeWakeup = function(e) {
            i(!0, !1, e)
        },
        this.install = this.wakeupOrInstall,
        function() {
            var n = {
                channelCode: e.channelCode || R.parseUrlParams().channelCode,
                c: e._channelRedirect ? 1 : null,
                apkFileName: e.apkFileName,
                preferWakeup: e.preferWakeup,
                _pkgId: e._pkgId
            };
            l(function(r) {
                c({
                    url: a(R.server + "/web/init/" + e.appKey, n, r),
                    method: "POST",
                    contentType: "text/plain;charset=utf-8",
                    data: t,
                    success: function(e) {
                        b(function() {
                            e.sh && (v = u(e.sh)),
                            g = e.fu,
                            m = e.fm,
                            C = e.ft,
                            E = e.su,
                            x = e.sm,
                            A = e.st,
                            S = e.ph ? y(e.ph) : null,
                            I = e.pyp ? y(e.pyp) : null,
                            w = e.pye ? parseInt(y(e.pye) || "0") : 0,
                            k = e.dsoi,
                            L = e.channelCode,
                            N = e.csu;
                            try {
                                var n = e.images || [];
                                if (n.length > 0) for (var t = 0; t < n.length; t++) {
                                    var r = new Image;
                                    r.src = "//" + n[t]
                                }
                            } catch(e) {}
                            p.ready()
                        })
                    }
                })
            })
        } ()
    };
    return R.channelRedirect = function(e, n) {
        new R({
            appKey: e,
            channelCode: n,
            _channelRedirect: !0
        }).wakeupOrInstall()
    },
    R.parseUrlParams = r,
    R.docReady = b,
    R.server = "//openinstall.io",
    R.wakeupOrInstall = function(e, n, t, r, i) {
        n ? f(e, n,
        function() {
            O[t](r)
        },
        i) : O[t](r)
    },
    R
} (window, document, XMLHttpRequest);