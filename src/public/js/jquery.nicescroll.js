/* jquery.nicescroll 3.5.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function (e) {
  let z = !1; let E = !1; let L = 5E3; let M = 2E3; let y = 0; const N = (function () { var e = document.getElementsByTagName('script'); var e = e[e.length - 1].src.split('?')[0]; return e.split('/').length > 0 ? `${e.split('/').slice(0, -1).join('/')}/` : ''; }()); const H = ['ms', 'moz', 'webkit', 'o']; let v = window.requestAnimationFrame || !1; let w = window.cancelAnimationFrame || !1; if (!v) for (const O in H) { const F = H[O]; v || (v = window[`${F}RequestAnimationFrame`]); w || (w = window[`${F}CancelAnimationFrame`] || window[`${F}CancelRequestAnimationFrame`]); } const A = window.MutationObserver || window.WebKitMutationObserver
    || !1; const I = {
    zindex: 'auto',
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: '#424242',
    cursorwidth: '5px',
    cursorborder: '1px solid #fff',
    cursorborderradius: '5px',
    scrollspeed: 60,
    mousescrollstep: 24,
    touchbehavior: !1,
    hwacceleration: !0,
    usetransition: !0,
    boxzoom: !1,
    dblclickzoom: !0,
    gesturezoom: !0,
    grabcursorenabled: !0,
    autohidemode: !0,
    background: '',
    iframeautoresize: !0,
    cursorminheight: 32,
    preservenativescrolling: !0,
    railoffset: !1,
    bouncescroll: !0,
    spacebarenabled: !0,
    railpadding: {
      top: 0, right: 0, left: 0, bottom: 0,
    },
    disableoutline: !0,
    horizrailenabled: !0,
    railalign: 'right',
    railvalign: 'bottom',
    enabletranslate3d: !0,
    enablemousewheel: !0,
    enablekeyboard: !0,
    smoothscroll: !0,
    sensitiverail: !0,
    enablemouselockapi: !0,
    cursorfixedheight: !1,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: !0,
    enablescrollonselection: !0,
    overflowx: !0,
    overflowy: !0,
    cursordragspeed: 0.3,
    rtlmode: !1,
    cursordragontouch: !1,
    oneaxismousemode: 'auto',
  }; let G = !1; const P = function () {
    if (G) return G; const e = document.createElement('DIV'); const c = {
      haspointerlock: 'pointerLockElement' in document
    || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document,
    }; c.isopera = 'opera' in window; c.isopera12 = c.isopera && 'getUserMedia' in navigator; c.isoperamini = Object.prototype.toString.call(window.operamini) === '[object OperaMini]'; c.isie = 'all' in document && 'attachEvent' in e && !c.isopera; c.isieold = c.isie && !('msInterpolationMode' in e.style); c.isie7 = c.isie && !c.isieold && (!('documentMode' in document) || document.documentMode == 7); c.isie8 = c.isie && 'documentMode' in document && document.documentMode == 8; c.isie9 = c.isie && 'performance' in window && document.documentMode >= 9; c.isie10 = c.isie && 'performance' in window && document.documentMode >= 10; c.isie9mobile = /iemobile.9/i.test(navigator.userAgent); c.isie9mobile && (c.isie9 = !1); c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent); c.ismozilla = 'MozAppearance' in e.style; c.iswebkit = 'WebkitAppearance' in e.style; c.ischrome = 'chrome' in window; c.ischrome22 = c.ischrome && c.haspointerlock; c.ischrome26 = c.ischrome && 'transition' in e.style; c.cantouch = 'ontouchstart'
    in document.documentElement || 'ontouchstart' in window; c.hasmstouch = window.navigator.msPointerEnabled || !1; c.ismac = /^mac$/i.test(navigator.platform); c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform); c.isios4 = c.isios && !('seal' in Object); c.isandroid = /android/i.test(navigator.userAgent); c.trstyle = !1; c.hastransform = !1; c.hastranslate3d = !1; c.transitionstyle = !1; c.hastransition = !1; c.transitionend = !1; for (var k = ['transform', 'msTransform', 'webkitTransform', 'MozTransform', 'OTransform'], l = 0; l < k.length; l++) {
      if (typeof e.style[k[l]]
    !== 'undefined') { c.trstyle = k[l]; break; }
    }c.hastransform = !1 != c.trstyle; c.hastransform && (e.style[c.trstyle] = 'translate3d(1px,2px,3px)', c.hastranslate3d = /translate3d/.test(e.style[c.trstyle])); c.transitionstyle = !1; c.prefixstyle = ''; c.transitionend = !1; for (var k = 'transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition'.split(' '), q = ' -webkit- -moz- -o- -o -ms- -khtml-'.split(' '), t = 'transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd'.split(' '),
      l = 0; l < k.length; l++) if (k[l] in e.style) { c.transitionstyle = k[l]; c.prefixstyle = q[l]; c.transitionend = t[l]; break; }c.ischrome26 && (c.prefixstyle = q[1]); c.hastransition = c.transitionstyle; a: { k = ['-moz-grab', '-webkit-grab', 'grab']; if (c.ischrome && !c.ischrome22 || c.isie)k = []; for (l = 0; l < k.length; l++) if (q = k[l], e.style.cursor = q, e.style.cursor == q) { k = q; break a; }k = 'url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize'; }c.cursorgrabvalue = k; c.hasmousecapture = 'setCapture' in e; c.hasMutationObserver = !1 !== A; return G = c;
  }; const Q = function (h, c) {
    function k() { let d = b.win; if ('zIndex' in d) return d.zIndex(); for (;d.length > 0 && d[0].nodeType != 9;) { const c = d.css('zIndex'); if (!isNaN(c) && c != 0) return parseInt(c); d = d.parent(); } return !1; } function l(d, c, f) { c = d.css(c); d = parseFloat(c); return isNaN(d) ? (d = u[c] || 0, f = d == 3 ? f ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && d && (d += 1), f ? d : 0) : d; } function q(d, c, f, g) {
      b._bind(d, c, (b) => {
        b = b || window.event; const g = {
          original: b,
          target: b.target || b.srcElement,
          type: 'wheel',
          deltaMode: b.type == 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault() { b.preventDefault ? b.preventDefault() : b.returnValue = !1; return !1; },
          stopImmediatePropagation() { b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0; },
        }; c == 'mousewheel' ? (g.deltaY = -0.025 * b.wheelDelta, b.wheelDeltaX && (g.deltaX = -0.025 * b.wheelDeltaX)) : g.deltaY = b.detail; return f.call(d, g);
      }, g);
    } function t(d, c, f) {
      let g; let e; d.deltaMode == 0 ? (g = -Math.floor(d.deltaX * (b.opt.mousescrollstep / 54)), e = -Math.floor(d.deltaY
    * (b.opt.mousescrollstep / 54))) : d.deltaMode == 1 && (g = -Math.floor(d.deltaX * b.opt.mousescrollstep), e = -Math.floor(d.deltaY * b.opt.mousescrollstep)); c && (b.opt.oneaxismousemode && g == 0 && e) && (g = e, e = 0); g && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += g, b.debounced('mousewheelx', () => { const d = b.lastdeltax; b.lastdeltax = 0; b.rail.drag || b.doScrollLeftBy(d); }, 120)); if (e) {
        if (b.opt.nativeparentscrolling && f && !b.ispage && !b.zoomactive) if (e < 0) { if (b.getScrollTop() >= b.page.maxh) return !0; } else if (b.getScrollTop() <= 0) return !0;
        b.scrollmom && b.scrollmom.stop(); b.lastdeltay += e; b.debounced('mousewheely', () => { const d = b.lastdeltay; b.lastdeltay = 0; b.rail.drag || b.doScrollBy(d); }, 120);
      }d.stopImmediatePropagation(); return d.preventDefault();
    } var b = this; this.version = '3.5.0'; this.name = 'nicescroll'; this.me = c; this.opt = { doc: e('body'), win: !1 }; e.extend(this.opt, I); this.opt.snapbackspeed = 80; if (h) for (const p in b.opt) typeof h[p] !== 'undefined' && (b.opt[p] = h[p]); this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || '' : ''; this.ispage = /BODY|HTML/.test(b.opt.win
      ? b.opt.win[0].nodeName : this.doc[0].nodeName); this.haswrapper = !1 !== b.opt.win; this.win = b.opt.win || (this.ispage ? e(window) : this.doc); this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win; this.body = e('body'); this.iframe = this.isfixed = this.viewport = !1; this.isiframe = this.doc[0].nodeName == 'IFRAME' && this.win[0].nodeName == 'IFRAME'; this.istextarea = this.win[0].nodeName == 'TEXTAREA'; this.forcescreen = !1; this.canshowonmouseevent = b.opt.autohidemode != 'scroll'; this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1; this.scroll = { x: 0, y: 0 }; this.scrollratio = { x: 0, y: 0 }; this.cursorheight = 20; this.scrollvaluemax = 0; this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1; do this.id = `ascrail${M++}`; while (document.getElementById(this.id)); this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1; this.visibility = !0; this.hidden = this.locked = !1; this.cursoractive = !0; this.overflowx = b.opt.overflowx; this.overflowy = b.opt.overflowy; this.nativescrollingarea = !1; this.checkarea = 0; this.events = []; this.saved = {}; this.delaylist = {}; this.synclist = {}; this.lastdeltay = this.lastdeltax = 0; this.detected = P(); const g = e.extend({}, this.detected); this.ishwscroll = (this.canhwscroll = g.hastransform && b.opt.hwacceleration) && b.haswrapper; this.istouchcapable = !1; g.cantouch && (g.ischrome && !g.isios && !g.isandroid)
&& (this.istouchcapable = !0, g.cantouch = !1); g.cantouch && (g.ismozilla && !g.isios && !g.isandroid) && (this.istouchcapable = !0, g.cantouch = !1); b.opt.enablemouselockapi || (g.hasmousecapture = !1, g.haspointerlock = !1); this.delayed = function (d, c, f, g) {
      const e = b.delaylist[d]; const k = (new Date()).getTime(); if (!g && e && e.tt) return !1; e && e.tt && clearTimeout(e.tt); if (e && e.last + f > k && !e.tt)b.delaylist[d] = { last: k + f, tt: setTimeout(() => { b.delaylist[d].tt = 0; c.call(); }, f) }; else if (!e || !e.tt) {
        b.delaylist[d] = { last: k, tt: 0 }, setTimeout(() => { c.call(); },
          0);
      }
    }; this.debounced = function (d, c, f) { const g = b.delaylist[d]; (new Date()).getTime(); b.delaylist[d] = c; g || setTimeout(() => { const c = b.delaylist[d]; b.delaylist[d] = !1; c.call(); }, f); }; this.synched = function (d, c) { b.synclist[d] = c; (function () { b.onsync || (v(() => { b.onsync = !1; for (d in b.synclist) { const c = b.synclist[d]; c && c.call(b); b.synclist[d] = !1; } }), b.onsync = !0); }()); return d; }; this.unsynched = function (d) { b.synclist[d] && (b.synclist[d] = !1); }; this.css = function (d, c) {
      for (const f in c) {
        b.saved.css.push([d, f, d.css(f)]), d.css(f,
          c[f]);
      }
    }; this.scrollTop = function (d) { return typeof d === 'undefined' ? b.getScrollTop() : b.setScrollTop(d); }; this.scrollLeft = function (d) { return typeof d === 'undefined' ? b.getScrollLeft() : b.setScrollLeft(d); }; BezierClass = function (b, c, f, g, e, k, l) { this.st = b; this.ed = c; this.spd = f; this.p1 = g || 0; this.p2 = e || 1; this.p3 = k || 0; this.p4 = l || 1; this.ts = (new Date()).getTime(); this.df = this.ed - this.st; }; BezierClass.prototype = {
      B2(b) { return 3 * b * b * (1 - b); },
      B3(b) { return 3 * b * (1 - b) * (1 - b); },
      B4(b) { return (1 - b) * (1 - b) * (1 - b); },
      getNow() { const b = 1 - ((new Date()).getTime() - this.ts) / this.spd; const c = this.B2(b) + this.B3(b) + this.B4(b); return b < 0 ? this.ed : this.st + Math.round(this.df * c); },
      update(b, c) { this.st = this.getNow(); this.ed = b; this.spd = c; this.ts = (new Date()).getTime(); this.df = this.ed - this.st; return this; },
    }; if (this.ishwscroll) {
      this.doc.translate = {
        x: 0, y: 0, tx: '0px', ty: '0px',
      }; g.hastranslate3d && g.isios && this.doc.css('-webkit-backface-visibility', 'hidden'); const s = function () {
        const d = b.doc.css(g.trstyle); return d && d.substr(0,
          6) == 'matrix' ? d.replace(/^.*\((.*)\)$/g, '$1').replace(/px/g, '').split(/, +/) : !1;
      }; this.getScrollTop = function (d) { if (!d) { if (d = s()) return d.length == 16 ? -d[13] : -d[5]; if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow(); } return b.doc.translate.y; }; this.getScrollLeft = function (d) { if (!d) { if (d = s()) return d.length == 16 ? -d[12] : -d[4]; if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow(); } return b.doc.translate.x; }; this.notifyScrollEvent = document.createEvent ? function (b) {
        const c = document.createEvent('UIEvents');
        c.initUIEvent('scroll', !1, !0, window, 1); b.dispatchEvent(c);
      } : document.fireEvent ? function (b) { const c = document.createEventObject(); b.fireEvent('onscroll'); c.cancelBubble = !0; } : function (b, c) {}; g.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function (d, c) { b.doc.translate.y = d; b.doc.translate.ty = `${-1 * d}px`; b.doc.css(g.trstyle, `translate3d(${b.doc.translate.tx},${b.doc.translate.ty},0px)`); c || b.notifyScrollEvent(b.win[0]); }, this.setScrollLeft = function (d, c) {
        b.doc.translate.x = d; b.doc.translate.tx = `${-1
    * d}px`; b.doc.css(g.trstyle, `translate3d(${b.doc.translate.tx},${b.doc.translate.ty},0px)`); c || b.notifyScrollEvent(b.win[0]);
      }) : (this.setScrollTop = function (d, c) { b.doc.translate.y = d; b.doc.translate.ty = `${-1 * d}px`; b.doc.css(g.trstyle, `translate(${b.doc.translate.tx},${b.doc.translate.ty})`); c || b.notifyScrollEvent(b.win[0]); }, this.setScrollLeft = function (d, c) { b.doc.translate.x = d; b.doc.translate.tx = `${-1 * d}px`; b.doc.css(g.trstyle, `translate(${b.doc.translate.tx},${b.doc.translate.ty})`); c || b.notifyScrollEvent(b.win[0]); });
    } else {
      this.getScrollTop = function () { return b.docscroll.scrollTop(); }, this.setScrollTop = function (d) { return b.docscroll.scrollTop(d); }, this.getScrollLeft = function () { return b.docscroll.scrollLeft(); }, this.setScrollLeft = function (d) { return b.docscroll.scrollLeft(d); };
    } this.getTarget = function (b) { return !b ? !1 : b.target ? b.target : b.srcElement ? b.srcElement : !1; }; this.hasParent = function (b, c) { if (!b) return !1; for (var f = b.target || b.srcElement || b || !1; f && f.id != c;)f = f.parentNode || !1; return !1 !== f; }; var u = { thin: 1, medium: 3, thick: 5 }; this.getOffset = function () {
      if (b.isfixed) {
        return {
          top: parseFloat(b.win.css('top')),
          left: parseFloat(b.win.css('left')),
        };
      } if (!b.viewport) return b.win.offset(); const d = b.win.offset(); const c = b.viewport.offset(); return { top: d.top - c.top + b.viewport.scrollTop(), left: d.left - c.left + b.viewport.scrollLeft() };
    }; this.updateScrollBar = function (d) {
      if (b.ishwscroll)b.rail.css({ height: b.win.innerHeight() }), b.railh && b.railh.css({ width: b.win.innerWidth() }); else {
        const c = b.getOffset(); var f = c.top; var g = c.left; var f = f + l(b.win, 'border-top-width', !0); b.win.outerWidth(); b.win.innerWidth(); var g = g + (b.rail.align ? b.win.outerWidth()
    - l(b.win, 'border-right-width') - b.rail.width : l(b.win, 'border-left-width')); const e = b.opt.railoffset; e && (e.top && (f += e.top), b.rail.align && e.left && (g += e.left)); b.locked || b.rail.css({ top: f, left: g, height: d ? d.h : b.win.innerHeight() }); b.zoom && b.zoom.css({ top: f + 1, left: b.rail.align == 1 ? g - 20 : g + b.rail.width + 4 }); b.railh && !b.locked && (f = c.top, g = c.left, d = b.railh.align ? f + l(b.win, 'border-top-width', !0) + b.win.innerHeight() - b.railh.height : f + l(b.win, 'border-top-width', !0), g += l(b.win, 'border-left-width'), b.railh.css({
          top: d,
          left: g,
          width: b.railh.width,
        }));
      }
    }; this.doRailClick = function (d, c, f) { let g; b.locked || (b.cancelEvent(d), c ? (c = f ? b.doScrollLeft : b.doScrollTop, g = f ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (d.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, c(g)) : (c = f ? b.doScrollLeftBy : b.doScrollBy, g = f ? b.scroll.x : b.scroll.y, d = f ? d.pageX - b.railh.offset().left : d.pageY - b.rail.offset().top, f = f ? b.view.w : b.view.h, g >= d ? c(f) : c(-f))); }; b.hasanimationframe = v; b.hascancelanimationframe = w; b.hasanimationframe ? b.hascancelanimationframe
    || (w = function () { b.cancelAnimationFrame = !0; }) : (v = function (b) { return setTimeout(b, 15 - Math.floor(+new Date() / 1E3) % 16); }, w = clearInterval); this.init = function () {
      b.saved.css = []; if (g.isie7mobile || g.isoperamini) return !0; g.hasmstouch && b.css(b.ispage ? e('html') : b.win, { '-ms-touch-action': 'none' }); b.zindex = 'auto'; b.zindex = !b.ispage && b.opt.zindex == 'auto' ? k() || 'auto' : b.opt.zindex; !b.ispage && b.zindex != 'auto' && b.zindex > y && (y = b.zindex); b.isie && (b.zindex == 0 && b.opt.zindex == 'auto') && (b.zindex = 'auto'); if (!b.ispage || !g.cantouch
    && !g.isieold && !g.isie9mobile) {
        let d = b.docscroll; b.ispage && (d = b.haswrapper ? b.win : b.doc); g.isie9mobile || b.css(d, { 'overflow-y': 'hidden' }); b.ispage && g.isie7 && (b.doc[0].nodeName == 'BODY' ? b.css(e('html'), { 'overflow-y': 'hidden' }) : b.doc[0].nodeName == 'HTML' && b.css(e('body'), { 'overflow-y': 'hidden' })); g.isios && (!b.ispage && !b.haswrapper) && b.css(e('body'), { '-webkit-overflow-scrolling': 'touch' }); let c = e(document.createElement('div')); c.css({
          position: 'relative',
          top: 0,
          'float': 'right',
          width: b.opt.cursorwidth,
          height: '0px',
          'background-color': b.opt.cursorcolor,
          border: b.opt.cursorborder,
          'background-clip': 'padding-box',
          '-webkit-border-radius': b.opt.cursorborderradius,
          '-moz-border-radius': b.opt.cursorborderradius,
          'border-radius': b.opt.cursorborderradius,
        }); c.hborder = parseFloat(c.outerHeight() - c.innerHeight()); b.cursor = c; var f = e(document.createElement('div')); f.attr('id', b.id); f.addClass('nicescroll-rails'); let l; let h; const x = ['left', 'right']; let q; for (q in x) {
          h = x[q], (l = b.opt.railpadding[h]) ? f.css(`padding-${h}`, `${l}px`) : b.opt.railpadding[h] = 0;
        }f.append(c); f.width = Math.max(parseFloat(b.opt.cursorwidth), c.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right; f.css({
          width: `${f.width}px`, zIndex: b.zindex, background: b.opt.background, cursor: 'default',
        }); f.visibility = !0; f.scrollable = !0; f.align = b.opt.railalign == 'left' ? 0 : 1; b.rail = f; c = b.rail.drag = !1; b.opt.boxzoom && (!b.ispage && !g.isieold) && (c = document.createElement('div'), b.bind(c, 'click', b.doZoom), b.zoom = e(c), b.zoom.css({
          cursor: 'pointer',
          'z-index': b.zindex,
          backgroundImage: `url(${N}zoomico.png)`,
          height: 18,
          width: 18,
          backgroundPosition: '0px 0px',
        }), b.opt.dblclickzoom && b.bind(b.win, 'dblclick', b.doZoom), g.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function (d) { d.scale > 1.5 && b.doZoomIn(d); d.scale < 0.8 && b.doZoomOut(d); return b.cancelEvent(d); }, b.bind(b.win, 'gestureend', b.ongesturezoom))); b.railh = !1; if (b.opt.horizrailenabled) {
          b.css(d, { 'overflow-x': 'hidden' }); c = e(document.createElement('div')); c.css({
            position: 'relative',
            top: 0,
            height: b.opt.cursorwidth,
            width: '0px',
            'background-color': b.opt.cursorcolor,
            border: b.opt.cursorborder,
            'background-clip': 'padding-box',
            '-webkit-border-radius': b.opt.cursorborderradius,
            '-moz-border-radius': b.opt.cursorborderradius,
            'border-radius': b.opt.cursorborderradius,
          }); c.wborder = parseFloat(c.outerWidth() - c.innerWidth()); b.cursorh = c; var m = e(document.createElement('div')); m.attr('id', `${b.id}-hr`); m.addClass('nicescroll-rails'); m.height = Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight()); m.css({ height: `${m.height}px`, zIndex: b.zindex, background: b.opt.background }); m.append(c);
          m.visibility = !0; m.scrollable = !0; m.align = b.opt.railvalign == 'top' ? 0 : 1; b.railh = m; b.railh.drag = !1;
        }b.ispage ? (f.css({ position: 'fixed', top: '0px', height: '100%' }), f.align ? f.css({ right: '0px' }) : f.css({ left: '0px' }), b.body.append(f), b.railh && (m.css({ position: 'fixed', left: '0px', width: '100%' }), m.align ? m.css({ bottom: '0px' }) : m.css({ top: '0px' }), b.body.append(m))) : (b.ishwscroll ? (b.win.css('position') == 'static' && b.css(b.win, { position: 'relative' }), d = b.win[0].nodeName == 'HTML' ? b.body : b.win, b.zoom && (b.zoom.css({
          position: 'absolute',
          top: 1,
          right: 0,
          'margin-right': f.width + 4,
        }), d.append(b.zoom)), f.css({ position: 'absolute', top: 0 }), f.align ? f.css({ right: 0 }) : f.css({ left: 0 }), d.append(f), m && (m.css({ position: 'absolute', left: 0, bottom: 0 }), m.align ? m.css({ bottom: 0 }) : m.css({ top: 0 }), d.append(m))) : (b.isfixed = b.win.css('position') == 'fixed', d = b.isfixed ? 'fixed' : 'absolute', b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, !1 == /fixed|relative|absolute/.test(b.viewport.css('position')) && b.css(b.viewport, { position: 'relative' })),
        f.css({ position: d }), b.zoom && b.zoom.css({ position: d }), b.updateScrollBar(), b.body.append(f), b.zoom && b.body.append(b.zoom), b.railh && (m.css({ position: d }), b.body.append(m))), g.isios && b.css(b.win, { '-webkit-tap-highlight-color': 'rgba(0,0,0,0)', '-webkit-touch-callout': 'none' }), g.isie && b.opt.disableoutline && b.win.attr('hideFocus', 'true'), g.iswebkit && b.opt.disableoutline && b.win.css({ outline: 'none' })); !1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({ opacity: b.opt.cursoropacitymax }), b.railh && b.railh.css({ opacity: b.opt.cursoropacitymax }))
          : !0 === b.opt.autohidemode || b.opt.autohidemode === 'leave' ? (b.autohidedom = e().add(b.rail), g.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && g.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : b.opt.autohidemode == 'scroll' ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : b.opt.autohidemode == 'cursor' ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : b.opt.autohidemode == 'hidden'
        && (b.autohidedom = !1, b.hide(), b.locked = !1); if (g.isie9mobile) {
          b.scrollmom = new J(b), b.onmangotouch = function (d) {
            d = b.getScrollTop(); const c = b.getScrollLeft(); if (d == b.scrollmom.lastscrolly && c == b.scrollmom.lastscrollx) return !0; let f = d - b.mangotouch.sy; const g = c - b.mangotouch.sx; if (Math.round(Math.sqrt(Math.pow(g, 2) + Math.pow(f, 2))) != 0) {
              const n = f < 0 ? -1 : 1; const e = g < 0 ? -1 : 1; const k = +new Date(); b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy); k - b.mangotouch.tm > 80 || b.mangotouch.dry != n || b.mangotouch.drx != e ? (b.scrollmom.stop(), b.scrollmom.reset(c,
                d), b.mangotouch.sy = d, b.mangotouch.ly = d, b.mangotouch.sx = c, b.mangotouch.lx = c, b.mangotouch.dry = n, b.mangotouch.drx = e, b.mangotouch.tm = k) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - g, b.mangotouch.sy - f), b.mangotouch.tm = k, f = Math.max(Math.abs(b.mangotouch.ly - d), Math.abs(b.mangotouch.lx - c)), b.mangotouch.ly = d, b.mangotouch.lx = c, f > 2 && (b.mangotouch.lazy = setTimeout(() => { b.mangotouch.lazy = !1; b.mangotouch.dry = 0; b.mangotouch.drx = 0; b.mangotouch.tm = 0; b.scrollmom.doMomentum(30); }, 100)));
            }
          }, f = b.getScrollTop(),
          m = b.getScrollLeft(), b.mangotouch = {
            sy: f, ly: f, dry: 0, sx: m, lx: m, drx: 0, lazy: !1, tm: 0,
          }, b.bind(b.docscroll, 'scroll', b.onmangotouch);
        } else {
          if (g.cantouch || b.istouchcapable || b.opt.touchbehavior || g.hasmstouch) {
            b.scrollmom = new J(b); b.ontouchstart = function (d) {
              if (d.pointerType && d.pointerType != 2) return !1; if (!b.locked) {
                if (g.hasmstouch) {
                  for (var c = d.target ? d.target : !1; c;) {
                    var f = e(c).getNiceScroll(); if (f.length > 0 && f[0].me == b.me) break; if (f.length > 0) return !1; if (c.nodeName == 'DIV' && c.id == b.id) break; c = c.parentNode ? c.parentNode
                      : !1;
                  }
                }b.cancelScroll(); if ((c = b.getTarget(d)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return b.stopPropagation(d); !('clientX' in d) && 'changedTouches' in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY); b.forcescreen && (f = d, d = { original: d.original ? d.original : d }, d.clientX = f.screenX, d.clientY = f.screenY); b.rail.drag = {
                  x: d.clientX, y: d.clientY, sx: b.scroll.x, sy: b.scroll.y, st: b.getScrollTop(), sl: b.getScrollLeft(), pt: 2, dl: !1,
                }; if (b.ispage || !b.opt.directionlockdeadzone) {
                  b.rail.drag.dl = 'f';
                } else { var f = e(window).width(); var n = e(window).height(); const k = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth); const l = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); var n = Math.max(0, l - n); var f = Math.max(0, k - f); b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? n > 0 ? 'v' : !1 : b.rail.scrollable && !b.railh.scrollable ? f > 0 ? 'h' : !1 : !1; b.rail.drag.ck || (b.rail.drag.dl = 'f'); }b.opt.touchbehavior && (b.isiframe && g.isie) && (f = b.win.position(), b.rail.drag.x += f.left, b.rail.drag.y += f.top);
                b.hasmoving = !1; b.lastmouseup = !1; b.scrollmom.reset(d.clientX, d.clientY); if (!g.cantouch && !this.istouchcapable && !g.hasmstouch) { if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !b.ispage && g.hasmousecapture && c.setCapture(), b.opt.touchbehavior ? b.cancelEvent(d) : b.stopPropagation(d); /SUBMIT|CANCEL|BUTTON/i.test(e(c).attr('type')) && (pc = { tg: c, click: !1 }, b.preventclick = pc); }
              }
            }; b.ontouchend = function (d) {
              if (d.pointerType && d.pointerType != 2) return !1; if (b.rail.drag && b.rail.drag.pt == 2 && (b.scrollmom.doMomentum(),
              b.rail.drag = !1, b.hasmoving && (b.hasmoving = !1, b.lastmouseup = !0, b.hideCursor(), g.hasmousecapture && document.releaseCapture(), !g.cantouch))) return b.cancelEvent(d);
            }; const t = b.opt.touchbehavior && b.isiframe && !g.hasmousecapture; b.ontouchmove = function (d, c) {
              if (d.pointerType && d.pointerType != 2) return !1; if (b.rail.drag && b.rail.drag.pt == 2) {
                if (g.cantouch && typeof d.original === 'undefined') return !0; b.hasmoving = !0; b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick); d = e.extend({ original: d }, d); 'changedTouches' in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY); if (b.forcescreen) { var f = d; d = { original: d.original ? d.original : d }; d.clientX = f.screenX; d.clientY = f.screenY; }f = ofy = 0; if (t && !c) { var n = b.win.position(); var f = -n.left; ofy = -n.top; } let k = d.clientY + ofy; var n = k - b.rail.drag.y; let l = d.clientX + f; var h = l - b.rail.drag.x; let r = b.rail.drag.st - n; b.ishwscroll && b.opt.bouncescroll ? r < 0 ? r = Math.round(r / 2) : r > b.page.maxh && (r = b.page.maxh + Math.round((r - b.page.maxh)
    / 2)) : (r < 0 && (k = r = 0), r > b.page.maxh && (r = b.page.maxh, k = 0)); if (b.railh && b.railh.scrollable) { var m = b.rail.drag.sl - h; b.ishwscroll && b.opt.bouncescroll ? m < 0 ? m = Math.round(m / 2) : m > b.page.maxw && (m = b.page.maxw + Math.round((m - b.page.maxw) / 2)) : (m < 0 && (l = m = 0), m > b.page.maxw && (m = b.page.maxw, l = 0)); }f = !1; if (b.rail.drag.dl)f = !0, b.rail.drag.dl == 'v' ? m = b.rail.drag.sl : b.rail.drag.dl == 'h' && (r = b.rail.drag.st); else {
                  var n = Math.abs(n); var h = Math.abs(h); const x = b.opt.directionlockdeadzone; if (b.rail.drag.ck == 'v') {
                    if (n > x && h <= 0.3 * n) {
                      return b.rail.drag = !1, !0;
                    } h > x && (b.rail.drag.dl = 'f', e('body').scrollTop(e('body').scrollTop()));
                  } else if (b.rail.drag.ck == 'h') { if (h > x && n <= 0.3 * h) return b.rail.drag = !1, !0; n > x && (b.rail.drag.dl = 'f', e('body').scrollLeft(e('body').scrollLeft())); }
                }b.synched('touchmove', () => { b.rail.drag && b.rail.drag.pt == 2 && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(r), b.scrollmom.update(l, k), b.railh && b.railh.scrollable ? (b.setScrollLeft(m), b.showCursor(r, m)) : b.showCursor(r), g.isie10 && document.selection.clear()); });
                g.ischrome && b.istouchcapable && (f = !1); if (f) return b.cancelEvent(d);
              }
            };
          }b.onmousedown = function (d, c) {
            if (!(b.rail.drag && b.rail.drag.pt != 1)) {
              if (b.locked) return b.cancelEvent(d); b.cancelScroll(); b.rail.drag = {
                x: d.clientX, y: d.clientY, sx: b.scroll.x, sy: b.scroll.y, pt: 1, hr: !!c,
              }; const f = b.getTarget(d); !b.ispage && g.hasmousecapture && f.setCapture(); b.isiframe && !g.hasmousecapture && (b.saved.csspointerevents = b.doc.css('pointer-events'), b.css(b.doc, { 'pointer-events': 'none' })); return b.cancelEvent(d);
            }
          }; b.onmouseup = function (d) {
            if (b.rail.drag
    && (g.hasmousecapture && document.releaseCapture(), b.isiframe && !g.hasmousecapture && b.doc.css('pointer-events', b.saved.csspointerevents), b.rail.drag.pt == 1)) return b.rail.drag = !1, b.cancelEvent(d);
          }; b.onmousemove = function (d) {
            if (b.rail.drag && b.rail.drag.pt == 1) {
              if (g.ischrome && d.which == 0) return b.onmouseup(d); b.cursorfreezed = !0; if (b.rail.drag.hr) { b.scroll.x = b.rail.drag.sx + (d.clientX - b.rail.drag.x); b.scroll.x < 0 && (b.scroll.x = 0); var c = b.scrollvaluemaxw; b.scroll.x > c && (b.scroll.x = c); } else {
                b.scroll.y = b.rail.drag.sy
    + (d.clientY - b.rail.drag.y), b.scroll.y < 0 && (b.scroll.y = 0), c = b.scrollvaluemax, b.scroll.y > c && (b.scroll.y = c);
              }b.synched('mousemove', () => { b.rail.drag && b.rail.drag.pt == 1 && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed)); }); return b.cancelEvent(d);
            }
          }; if (g.cantouch || b.opt.touchbehavior) {
            b.onpreventclick = function (d) {
              if (b.preventclick) {
                return b.preventclick.tg.onclick = b.preventclick.click,
                b.preventclick = !1, b.cancelEvent(d);
              }
            }, b.bind(b.win, 'mousedown', b.ontouchstart), b.onclick = g.isios ? !1 : function (d) { return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(d)) : !0; }, b.opt.grabcursorenabled && g.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, { cursor: g.cursorgrabvalue }), b.css(b.rail, { cursor: g.cursorgrabvalue }));
          } else {
            var p = function (d) {
              if (b.selectiondrag) {
                if (d) { const c = b.win.outerHeight(); d = d.pageY - b.selectiondrag.top; d > 0 && d < c && (d = 0); d >= c && (d -= c); b.selectiondrag.df = d; }b.selectiondrag.df != 0 && (b.doScrollBy(2
    * -Math.floor(b.selectiondrag.df / 6)), b.debounced('doselectionscroll', () => { p(); }, 50));
              }
            }; b.hasTextSelected = 'getSelection' in document ? function () { return document.getSelection().rangeCount > 0; } : 'selection' in document ? function () { return document.selection.type != 'None'; } : function () { return !1; }; b.onselectionstart = function (d) { b.ispage || (b.selectiondrag = b.win.offset()); }; b.onselectionend = function (d) { b.selectiondrag = !1; }; b.onselectiondrag = function (d) {
              b.selectiondrag && b.hasTextSelected() && b.debounced('selectionscroll',
                () => { p(d); }, 250);
            };
          }g.hasmstouch && (b.css(b.rail, { '-ms-touch-action': 'none' }), b.css(b.cursor, { '-ms-touch-action': 'none' }), b.bind(b.win, 'MSPointerDown', b.ontouchstart), b.bind(document, 'MSPointerUp', b.ontouchend), b.bind(document, 'MSPointerMove', b.ontouchmove), b.bind(b.cursor, 'MSGestureHold', (b) => { b.preventDefault(); }), b.bind(b.cursor, 'contextmenu', (b) => { b.preventDefault(); })); this.istouchcapable && (b.bind(b.win, 'touchstart', b.ontouchstart), b.bind(document, 'touchend', b.ontouchend), b.bind(document,
            'touchcancel', b.ontouchend), b.bind(document, 'touchmove', b.ontouchmove)); b.bind(b.cursor, 'mousedown', b.onmousedown); b.bind(b.cursor, 'mouseup', b.onmouseup); b.railh && (b.bind(b.cursorh, 'mousedown', (d) => { b.onmousedown(d, !0); }), b.bind(b.cursorh, 'mouseup', (d) => { if (!(b.rail.drag && b.rail.drag.pt == 2)) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), g.hasmousecapture && document.releaseCapture(), b.cancelEvent(d); })); if (b.opt.cursordragontouch || !g.cantouch && !b.opt.touchbehavior) {
            b.rail.css({ cursor: 'default' }),
            b.railh && b.railh.css({ cursor: 'default' }), b.jqbind(b.rail, 'mouseenter', () => { b.canshowonmouseevent && b.showCursor(); b.rail.active = !0; }), b.jqbind(b.rail, 'mouseleave', () => { b.rail.active = !1; b.rail.drag || b.hideCursor(); }), b.opt.sensitiverail && (b.bind(b.rail, 'click', (d) => { b.doRailClick(d, !1, !1); }), b.bind(b.rail, 'dblclick', (d) => { b.doRailClick(d, !0, !1); }), b.bind(b.cursor, 'click', (d) => { b.cancelEvent(d); }), b.bind(b.cursor, 'dblclick', (d) => { b.cancelEvent(d); })), b.railh && (b.jqbind(b.railh,
              'mouseenter', () => { b.canshowonmouseevent && b.showCursor(); b.rail.active = !0; }), b.jqbind(b.railh, 'mouseleave', () => { b.rail.active = !1; b.rail.drag || b.hideCursor(); }), b.opt.sensitiverail && (b.bind(b.railh, 'click', (d) => { b.doRailClick(d, !1, !0); }), b.bind(b.railh, 'dblclick', (d) => { b.doRailClick(d, !0, !0); }), b.bind(b.cursorh, 'click', (d) => { b.cancelEvent(d); }), b.bind(b.cursorh, 'dblclick', (d) => { b.cancelEvent(d); })));
          }!g.cantouch && !b.opt.touchbehavior ? (b.bind(g.hasmousecapture ? b.win : document,
            'mouseup', b.onmouseup), b.bind(document, 'mousemove', b.onmousemove), b.onclick && b.bind(document, 'click', b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], 'mousedown', b.onselectionstart), b.bind(document, 'mouseup', b.onselectionend), b.bind(b.cursor, 'mouseup', b.onselectionend), b.cursorh && b.bind(b.cursorh, 'mouseup', b.onselectionend), b.bind(document, 'mousemove', b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, 'mouseenter', () => { b.canshowonmouseevent && b.showCursor(); b.rail.active = !0; }),
          b.jqbind(b.zoom, 'mouseleave', () => { b.rail.active = !1; b.rail.drag || b.hideCursor(); }))) : (b.bind(g.hasmousecapture ? b.win : document, 'mouseup', b.ontouchend), b.bind(document, 'mousemove', b.ontouchmove), b.onclick && b.bind(document, 'click', b.onclick), b.opt.cursordragontouch && (b.bind(b.cursor, 'mousedown', b.onmousedown), b.bind(b.cursor, 'mousemove', b.onmousemove), b.cursorh && b.bind(b.cursorh, 'mousedown', (d) => { b.onmousedown(d, !0); }), b.cursorh && b.bind(b.cursorh, 'mousemove', b.onmousemove))); b.opt.enablemousewheel
&& (b.isiframe || b.bind(g.isie && b.ispage ? document : b.win, 'mousewheel', b.onmousewheel), b.bind(b.rail, 'mousewheel', b.onmousewheel), b.railh && b.bind(b.railh, 'mousewheel', b.onmousewheelhr)); !b.ispage && (!g.cantouch && !/HTML|BODY/.test(b.win[0].nodeName)) && (b.win.attr('tabindex') || b.win.attr({ tabindex: L++ }), b.jqbind(b.win, 'focus', (d) => { z = b.getTarget(d).id || !0; b.hasfocus = !0; b.canshowonmouseevent && b.noticeCursor(); }), b.jqbind(b.win, 'blur', (d) => { z = !1; b.hasfocus = !1; }), b.jqbind(b.win, 'mouseenter', (d) => {
            E = b.getTarget(d).id || !0; b.hasmousefocus = !0; b.canshowonmouseevent && b.noticeCursor();
          }), b.jqbind(b.win, 'mouseleave', () => { E = !1; b.hasmousefocus = !1; b.rail.drag || b.hideCursor(); }));
        }b.onkeypress = function (d) {
          if (b.locked && b.page.maxh == 0) return !0; d = d || window.e; let c = b.getTarget(d); if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute('type') && !c.type || !/submit|button|cancel/i.tp)) return !0; if (b.hasfocus || b.hasmousefocus && !z || b.ispage && !z && !E) {
            c = d.keyCode; if (b.locked && c != 27) return b.cancelEvent(d);
            const f = d.ctrlKey || !1; const n = d.shiftKey || !1; let g = !1; switch (c) {
              case 38: case 63233: b.doScrollBy(72); g = !0; break; case 40: case 63235: b.doScrollBy(-72); g = !0; break; case 37: case 63232: b.railh && (f ? b.doScrollLeft(0) : b.doScrollLeftBy(72), g = !0); break; case 39: case 63234: b.railh && (f ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), g = !0); break; case 33: case 63276: b.doScrollBy(b.view.h); g = !0; break; case 34: case 63277: b.doScrollBy(-b.view.h); g = !0; break; case 36: case 63273: b.railh && f ? b.doScrollPos(0, 0) : b.doScrollTo(0); g = !0; break;
              case 35: case 63275: b.railh && f ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh); g = !0; break; case 32: b.opt.spacebarenabled && (n ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), g = !0); break; case 27: b.zoomactive && (b.doZoom(), g = !0);
            } if (g) return b.cancelEvent(d);
          }
        }; b.opt.enablekeyboard && b.bind(document, g.isopera && !g.isopera12 ? 'keypress' : 'keydown', b.onkeypress); b.bind(window, 'resize', b.lazyResize); b.bind(window, 'orientationchange', b.lazyResize); b.bind(window, 'load', b.lazyResize); if (g.ischrome
    && !b.ispage && !b.haswrapper) { const s = b.win.attr('style'); var f = parseFloat(b.win.css('width')) + 1; b.win.css('width', f); b.synched('chromefix', () => { b.win.attr('style', s); }); }b.onAttributeChange = function (d) { b.lazyResize(250); }; !b.ispage && !b.haswrapper && (!1 !== A ? (b.observer = new A((d) => { d.forEach(b.onAttributeChange); }), b.observer.observe(b.win[0], {
          childList: !0, characterData: !1, attributes: !0, subtree: !1,
        }), b.observerremover = new A((d) => {
          d.forEach((d) => {
            if (d.removedNodes.length > 0) {
              for (const c in d.removedNodes) {
                if (d.removedNodes[c]
    == b.win[0]) return b.remove();
              }
            }
          });
        }), b.observerremover.observe(b.win[0].parentNode, {
          childList: !0, characterData: !1, attributes: !1, subtree: !1,
        })) : (b.bind(b.win, g.isie && !g.isie9 ? 'propertychange' : 'DOMAttrModified', b.onAttributeChange), g.isie9 && b.win[0].attachEvent('onpropertychange', b.onAttributeChange), b.bind(b.win, 'DOMNodeRemoved', (d) => { d.target == b.win[0] && b.remove(); }))); !b.ispage && b.opt.boxzoom && b.bind(window, 'resize', b.resizeZoom); b.istextarea && b.bind(b.win, 'mouseup', b.lazyResize); b.checkrtlmode = !0;
        b.lazyResize(30);
      } if (this.doc[0].nodeName == 'IFRAME') {
        const K = function (d) {
          b.iframexd = !1; try { var c = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document; } catch (f) { b.iframexd = !0, c = !1; } if (b.iframexd) return 'console' in window && console.log('NiceScroll error: policy restriced iframe'), !0; b.forcescreen = !0; b.isiframe && (b.iframe = { doc: e(c), html: b.doc.contents().find('html')[0], body: b.doc.contents().find('body')[0] }, b.getContentSize = function () {
            return {
              w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
              h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight),
            };
          }, b.docscroll = e(b.iframe.body)); !g.isios && (b.opt.iframeautoresize && !b.isiframe) && (b.win.scrollTop(0), b.doc.height(''), d = Math.max(c.getElementsByTagName('html')[0].scrollHeight, c.body.scrollHeight), b.doc.height(d)); b.lazyResize(30); g.isie7 && b.css(e(b.iframe.html), { 'overflow-y': 'hidden' }); b.css(e(b.iframe.body), { 'overflow-y': 'hidden' }); g.isios && b.haswrapper && b.css(e(c.body), { '-webkit-transform': 'translate3d(0,0,0)' }); 'contentWindow'
    in this ? b.bind(this.contentWindow, 'scroll', b.onscroll) : b.bind(c, 'scroll', b.onscroll); b.opt.enablemousewheel && b.bind(c, 'mousewheel', b.onmousewheel); b.opt.enablekeyboard && b.bind(c, g.isopera ? 'keypress' : 'keydown', b.onkeypress); if (g.cantouch || b.opt.touchbehavior)b.bind(c, 'mousedown', b.ontouchstart), b.bind(c, 'mousemove', (d) => { b.ontouchmove(d, !0); }), b.opt.grabcursorenabled && g.cursorgrabvalue && b.css(e(c.body), { cursor: g.cursorgrabvalue }); b.bind(c, 'mouseup', b.ontouchend); b.zoom && (b.opt.dblclickzoom && b.bind(c,
            'dblclick', b.doZoom), b.ongesturezoom && b.bind(c, 'gestureend', b.ongesturezoom));
        }; this.doc[0].readyState && this.doc[0].readyState == 'complete' && setTimeout(() => { K.call(b.doc[0], !1); }, 500); b.bind(this.doc, 'load', K);
      }
    }; this.showCursor = function (d, c) {
      b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0); if (b.rail) {
        b.autohidedom && (b.autohidedom.stop().css({ opacity: b.opt.cursoropacitymax }), b.cursoractive = !0); if (!b.rail.drag || b.rail.drag.pt != 1) {
          typeof d !== 'undefined' && !1 !== d && (b.scroll.y = Math.round(1
    * d / b.scrollratio.y)), typeof c !== 'undefined' && (b.scroll.x = Math.round(1 * c / b.scrollratio.x));
        } b.cursor.css({ height: b.cursorheight, top: b.scroll.y }); b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({ width: b.cursorwidth, left: b.scroll.x + b.rail.width }) : b.cursorh.css({ width: b.cursorwidth, left: b.scroll.x }), b.cursoractive = !0); b.zoom && b.zoom.stop().css({ opacity: b.opt.cursoropacitymax });
      }
    }; this.hideCursor = function (d) {
      !b.cursortimeout && (b.rail && b.autohidedom && !(b.hasmousefocus && b.opt.autohidemode == 'leave'))
&& (b.cursortimeout = setTimeout(() => { if (!b.rail.active || !b.showonmouseevent)b.autohidedom.stop().animate({ opacity: b.opt.cursoropacitymin }), b.zoom && b.zoom.stop().animate({ opacity: b.opt.cursoropacitymin }), b.cursoractive = !1; b.cursortimeout = 0; }, d || b.opt.hidecursordelay));
    }; this.noticeCursor = function (d, c, f) { b.showCursor(c, f); b.rail.active || b.hideCursor(d); }; this.getContentSize = b.ispage ? function () {
      return {
        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        h: Math.max(document.body.scrollHeight,
          document.documentElement.scrollHeight),
      };
    } : b.haswrapper ? function () { return { w: b.doc.outerWidth() + parseInt(b.win.css('paddingLeft')) + parseInt(b.win.css('paddingRight')), h: b.doc.outerHeight() + parseInt(b.win.css('paddingTop')) + parseInt(b.win.css('paddingBottom')) }; } : function () { return { w: b.docscroll[0].scrollWidth, h: b.docscroll[0].scrollHeight }; }; this.onResize = function (d, c) {
      if (!b.win) return !1; if (!b.haswrapper && !b.ispage) {
        if (b.win.css('display') == 'none') return b.visibility && b.hideRail().hideRailHr(), !1; !b.hidden
    && !b.visibility && b.showRail().showRailHr();
      } let f = b.page.maxh; let g = b.page.maxw; const e = b.view.w; b.view = { w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth), h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight) }; b.page = c || b.getContentSize(); b.page.maxh = Math.max(0, b.page.h - b.view.h); b.page.maxw = Math.max(0, b.page.w - b.view.w); if (b.page.maxh == f && b.page.maxw == g && b.view.w == e) { if (b.ispage) return b; f = b.win.offset(); if (b.lastposition && (g = b.lastposition, g.top == f.top && g.left == f.left)) return b; b.lastposition = f; }b.page.maxh
    == 0 ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0; b.page.maxw == 0 ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0; b.locked = b.page.maxh == 0 && b.page.maxw == 0; if (b.locked) return b.ispage || b.updateScrollBar(b.view), !1; !b.hidden && !b.visibility ? b.showRail().showRailHr() : !b.hidden && !b.railh.visibility && b.showRailHr();
      b.istextarea && (b.win.css('resize') && b.win.css('resize') != 'none') && (b.view.h -= 20); b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h))); b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight); b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w))); b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth); b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder;
      b.railh && (b.railh.width = b.page.maxh > 0 ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder); b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && b.scroll.x == 0 && b.setScrollLeft(b.page.maxw)); b.ispage || b.updateScrollBar(b.view); b.scrollratio = { x: b.page.maxw / b.scrollvaluemaxw, y: b.page.maxh / b.scrollvaluemax }; b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft()
        * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor()); b.scroll.y && b.getScrollTop() == 0 && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y)); return b;
    }; this.resize = b.onResize; this.lazyResize = function (d) { d = isNaN(d) ? 30 : d; b.delayed('resize', b.resize, d); return b; }; this._bind = function (d, c, f, g) {
      b.events.push({
        e: d, n: c, f, b: g, q: !1,
      }); d.addEventListener ? d.addEventListener(c, f, g || !1) : d.attachEvent ? d.attachEvent(`on${c}`, f) : d[`on${c}`] = f;
    }; this.jqbind = function (d, c, f) {
      b.events.push({
        e: d, n: c, f, q: !0,
      }); e(d).bind(c, f);
    };
    this.bind = function (d, c, f, e) {
      const k = 'jquery' in d ? d[0] : d; c == 'mousewheel' ? 'onwheel' in b.win ? b._bind(k, 'wheel', f, e || !1) : (d = typeof document.onmousewheel !== 'undefined' ? 'mousewheel' : 'DOMMouseScroll', q(k, d, f, e || !1), d == 'DOMMouseScroll' && q(k, 'MozMousePixelScroll', f, e || !1)) : k.addEventListener ? (g.cantouch && /mouseup|mousedown|mousemove/.test(c) && b._bind(k, c == 'mousedown' ? 'touchstart' : c == 'mouseup' ? 'touchend' : 'touchmove', function (b) {
        if (b.touches) {
          if (b.touches.length < 2) {
            var d = b.touches.length ? b.touches[0] : b; d.original = b; f.call(this, d);
          }
        } else b.changedTouches && (d = b.changedTouches[0], d.original = b, f.call(this, d));
      }, e || !1), b._bind(k, c, f, e || !1), g.cantouch && c == 'mouseup' && b._bind(k, 'touchcancel', f, e || !1)) : b._bind(k, c, (d) => { if ((d = d || window.event || !1) && d.srcElement)d.target = d.srcElement; 'pageY' in d || (d.pageX = d.clientX + document.documentElement.scrollLeft, d.pageY = d.clientY + document.documentElement.scrollTop); return !1 === f.call(k, d) || !1 === e ? b.cancelEvent(d) : !0; });
    }; this._unbind = function (b, c, f, g) {
      b.removeEventListener ? b.removeEventListener(c,
        f, g) : b.detachEvent ? b.detachEvent(`on${c}`, f) : b[`on${c}`] = !1;
    }; this.unbindAll = function () { for (let d = 0; d < b.events.length; d++) { const c = b.events[d]; c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b); } }; this.cancelEvent = function (b) { b = b.original ? b.original : b || window.event || !1; if (!b) return !1; b.preventDefault && b.preventDefault(); b.stopPropagation && b.stopPropagation(); b.preventManipulation && b.preventManipulation(); b.cancelBubble = !0; b.cancel = !0; return b.returnValue = !1; }; this.stopPropagation = function (b) {
      b = b.original
        ? b.original : b || window.event || !1; if (!b) return !1; if (b.stopPropagation) return b.stopPropagation(); b.cancelBubble && (b.cancelBubble = !0); return !1;
    }; this.showRail = function () { if (b.page.maxh != 0 && (b.ispage || b.win.css('display') != 'none'))b.visibility = !0, b.rail.visibility = !0, b.rail.css('display', 'block'); return b; }; this.showRailHr = function () { if (!b.railh) return b; if (b.page.maxw != 0 && (b.ispage || b.win.css('display') != 'none'))b.railh.visibility = !0, b.railh.css('display', 'block'); return b; }; this.hideRail = function () {
      b.visibility = !1; b.rail.visibility = !1; b.rail.css('display', 'none'); return b;
    }; this.hideRailHr = function () { if (!b.railh) return b; b.railh.visibility = !1; b.railh.css('display', 'none'); return b; }; this.show = function () { b.hidden = !1; b.locked = !1; return b.showRail().showRailHr(); }; this.hide = function () { b.hidden = !0; b.locked = !0; return b.hideRail().hideRailHr(); }; this.toggle = function () { return b.hidden ? b.show() : b.hide(); }; this.remove = function () {
      b.stop(); b.cursortimeout && clearTimeout(b.cursortimeout); b.doZoomOut(); b.unbindAll(); g.isie9
    && b.win[0].detachEvent('onpropertychange', b.onAttributeChange); !1 !== b.observer && b.observer.disconnect(); !1 !== b.observerremover && b.observerremover.disconnect(); b.events = null; b.cursor && b.cursor.remove(); b.cursorh && b.cursorh.remove(); b.rail && b.rail.remove(); b.railh && b.railh.remove(); b.zoom && b.zoom.remove(); for (let d = 0; d < b.saved.css.length; d++) { const c = b.saved.css[d]; c[0].css(c[1], typeof c[2] === 'undefined' ? '' : c[2]); }b.saved = !1; b.me.data('__nicescroll', ''); const f = e.nicescroll; f.each(function (d) {
        if (this && this.id
        === b.id) { delete f[d]; for (let c = ++d; c < f.length; c++, d++)f[d] = f[c]; f.length--; f.length && delete f[f.length]; }
      }); for (const k in b)b[k] = null, delete b[k]; b = null;
    }; this.scrollstart = function (d) { this.onscrollstart = d; return b; }; this.scrollend = function (d) { this.onscrollend = d; return b; }; this.scrollcancel = function (d) { this.onscrollcancel = d; return b; }; this.zoomin = function (d) { this.onzoomin = d; return b; }; this.zoomout = function (d) { this.onzoomout = d; return b; }; this.isScrollable = function (b) {
      b = b.target ? b.target : b; if (b.nodeName == 'OPTION') return !0;
      for (;b && b.nodeType == 1 && !/BODY|HTML/.test(b.nodeName);) { var c = e(b); var c = c.css('overflowY') || c.css('overflowX') || c.css('overflow') || ''; if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight; b = b.parentNode ? b.parentNode : !1; } return !1;
    }; this.getViewport = function (b) {
      for (b = b && b.parentNode ? b.parentNode : !1; b && b.nodeType == 1 && !/BODY|HTML/.test(b.nodeName);) {
        const c = e(b); if (/fixed|absolute/.test(c.css('position'))) return c; const f = c.css('overflowY') || c.css('overflowX') || c.css('overflow') || ''; if (/scroll|auto/.test(f)
        && b.clientHeight != b.scrollHeight || c.getNiceScroll().length > 0) return c; b = b.parentNode ? b.parentNode : !1;
      } return !1;
    }; this.onmousewheel = function (d) {
      if (b.locked) return b.debounced('checkunlock', b.resize, 250), !0; if (b.rail.drag) return b.cancelEvent(d); b.opt.oneaxismousemode == 'auto' && d.deltaX != 0 && (b.opt.oneaxismousemode = !1); if (b.opt.oneaxismousemode && d.deltaX == 0 && !b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : !0; const c = +new Date(); let
        f = !1; b.opt.preservenativescrolling && b.checkarea + 600 < c
    && (b.nativescrollingarea = b.isScrollable(d), f = !0); b.checkarea = c; if (b.nativescrollingarea) return !0; if (d = t(d, !1, f))b.checkarea = 0; return d;
    }; this.onmousewheelhr = function (d) {
      if (b.locked || !b.railh.scrollable) return !0; if (b.rail.drag) return b.cancelEvent(d); const c = +new Date();
      let f = !1; b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), f = !0); b.checkarea = c; return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(d) : t(d, !0, f);
    }; this.stop = function () {
      b.cancelScroll(); b.scrollmon && b.scrollmon.stop();
      b.cursorfreezed = !1; b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)); b.noticeCursor(); return b;
    }; this.getTransitionSpeed = function (d) { const c = Math.round(10 * b.opt.scrollspeed); d = Math.min(c, Math.round(d / 20 * b.opt.scrollspeed)); return d > 20 ? d : 0; }; b.opt.smoothscroll ? b.ishwscroll && g.hastransition && b.opt.usetransition ? (this.prepareTransition = function (d, c) {
      const f = c ? d > 20 ? d : 0 : b.getTransitionSpeed(d); const e = f ? `${g.prefixstyle}transform ${f}ms ease-out` : ''; if (!b.lasttransitionstyle || b.lasttransitionstyle != e) {
        b.lasttransitionstyle = e, b.doc.css(g.transitionstyle, e);
      } return f;
    }, this.doScrollLeft = function (c, g) { const f = b.scrollrunning ? b.newscrolly : b.getScrollTop(); b.doScrollPos(c, f, g); }, this.doScrollTop = function (c, g) { const f = b.scrollrunning ? b.newscrollx : b.getScrollLeft(); b.doScrollPos(f, c, g); }, this.doScrollPos = function (c, e, f) {
      const k = b.getScrollTop(); const l = b.getScrollLeft(); ((b.newscrolly - k) * (e - k) < 0 || (b.newscrollx - l) * (c - l) < 0) && b.cancelScroll(); !1 == b.opt.bouncescroll && (e < 0 ? e = 0 : e > b.page.maxh && (e = b.page.maxh), c < 0 ? c = 0 : c > b.page.maxw && (c = b.page.maxw));
      if (b.scrollrunning && c == b.newscrollx && e == b.newscrolly) return !1; b.newscrolly = e; b.newscrollx = c; b.newscrollspeed = f || !1; if (b.timer) return !1; b.timer = setTimeout(() => {
        const f = b.getScrollTop(); const k = b.getScrollLeft(); let l; let h; l = c - k; h = e - f; l = Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2))); l = b.newscrollspeed && b.newscrollspeed > 1 ? b.newscrollspeed : b.getTransitionSpeed(l); b.newscrollspeed && b.newscrollspeed <= 1 && (l *= b.newscrollspeed); b.prepareTransition(l, !0); b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
        l > 0 && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
          type: 'scrollstart', current: { x: k, y: f }, request: { x: c, y: e }, end: { x: b.newscrollx, y: b.newscrolly }, speed: l,
        }), g.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, g.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollEnd, l)), b.timerscroll = { bz: new BezierClass(f, b.newscrolly, l, 0, 0, 0.58, 1), bh: new BezierClass(k, b.newscrollx, l, 0, 0, 0.58, 1) }, b.cursorfreezed
                || (b.timerscroll.tm = setInterval(() => { b.showCursor(b.getScrollTop(), b.getScrollLeft()); }, 60))); b.synched('doScroll-set', () => { b.timer = 0; b.scrollendtrapped && (b.scrollrunning = !0); b.setScrollTop(b.newscrolly); b.setScrollLeft(b.newscrollx); if (!b.scrollendtrapped)b.onScrollEnd(); });
      }, 50);
    }, this.cancelScroll = function () {
      if (!b.scrollendtrapped) return !0; const c = b.getScrollTop(); const e = b.getScrollLeft(); b.scrollrunning = !1; g.transitionend || clearTimeout(g.transitionend); b.scrollendtrapped = !1; b._unbind(b.doc, g.transitionend,
        b.onScrollEnd); b.prepareTransition(0); b.setScrollTop(c); b.railh && b.setScrollLeft(e); b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm); b.timerscroll = !1; b.cursorfreezed = !1; b.showCursor(c, e); return b;
    }, this.onScrollEnd = function () {
      b.scrollendtrapped && b._unbind(b.doc, g.transitionend, b.onScrollEnd); b.scrollendtrapped = !1; b.prepareTransition(0); b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm); b.timerscroll = !1; let c = b.getScrollTop(); let e = b.getScrollLeft(); b.setScrollTop(c); b.railh
    && b.setScrollLeft(e); b.noticeCursor(!1, c, e); b.cursorfreezed = !1; c < 0 ? c = 0 : c > b.page.maxh && (c = b.page.maxh); e < 0 ? e = 0 : e > b.page.maxw && (e = b.page.maxw); if (c != b.newscrolly || e != b.newscrollx) return b.doScrollPos(e, c, b.opt.snapbackspeed); b.onscrollend && b.scrollrunning && b.onscrollend.call(b, { type: 'scrollend', current: { x: e, y: c }, end: { x: b.newscrollx, y: b.newscrolly } }); b.scrollrunning = !1;
    }) : (this.doScrollLeft = function (c, g) { const f = b.scrollrunning ? b.newscrolly : b.getScrollTop(); b.doScrollPos(c, f, g); }, this.doScrollTop = function (c,
      g) { const f = b.scrollrunning ? b.newscrollx : b.getScrollLeft(); b.doScrollPos(f, c, g); }, this.doScrollPos = function (c, g, f) {
      function e() {
        if (b.cancelAnimationFrame) return !0; b.scrollrunning = !0; if (p = 1 - p) return b.timer = v(e) || 1; let c = 0; var d = sy = b.getScrollTop(); if (b.dst.ay) { var d = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly; var f = d - sy; if (f < 0 && d < b.newscrolly || f > 0 && d > b.newscrolly)d = b.newscrolly; b.setScrollTop(d); d == b.newscrolly && (c = 1); } else c = 1; let g = sx = b.getScrollLeft(); if (b.dst.ax) {
          g = b.bzscroll ? b.dst.px + b.bzscroll.getNow()
        * b.dst.ax : b.newscrollx; f = g - sx; if (f < 0 && g < b.newscrollx || f > 0 && g > b.newscrollx)g = b.newscrollx; b.setScrollLeft(g); g == b.newscrollx && (c += 1);
        } else c += 1; c == 2 ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, d < 0 ? d = 0 : d > b.page.maxh && (d = b.page.maxh), g < 0 ? g = 0 : g > b.page.maxw && (g = b.page.maxw), g != b.newscrollx || d != b.newscrolly ? b.doScrollPos(g, d) : b.onscrollend && b.onscrollend.call(b, { type: 'scrollend', current: { x: sx, y: sy }, end: { x: b.newscrollx, y: b.newscrolly } })) : b.timer = v(e) || 1;
      }g = typeof g === 'undefined' || !1 === g ? b.getScrollTop(!0)
        : g; if (b.timer && b.newscrolly == g && b.newscrollx == c) return !0; b.timer && w(b.timer); b.timer = 0; const k = b.getScrollTop(); const l = b.getScrollLeft(); ((b.newscrolly - k) * (g - k) < 0 || (b.newscrollx - l) * (c - l) < 0) && b.cancelScroll(); b.newscrolly = g; b.newscrollx = c; if (!b.bouncescroll || !b.rail.visibility)b.newscrolly < 0 ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh); if (!b.bouncescroll || !b.railh.visibility)b.newscrollx < 0 ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw); b.dst = {}; b.dst.x = c - l; b.dst.y = g - k; b.dst.px = l; b.dst.py = k; let h = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2))); b.dst.ax = b.dst.x / h; b.dst.ay = b.dst.y / h; let m = 0; let q = h; b.dst.x == 0 ? (m = k, q = g, b.dst.ay = 1, b.dst.py = 0) : b.dst.y == 0 && (m = l, q = c, b.dst.ax = 1, b.dst.px = 0); h = b.getTransitionSpeed(h); f && f <= 1 && (h *= f); b.bzscroll = h > 0 ? b.bzscroll ? b.bzscroll.update(q, h) : new BezierClass(m, q, h, 0, 1, 0, 1) : !1; if (!b.timer) {
        (k == b.page.maxh && g >= b.page.maxh || l == b.page.maxw && c >= b.page.maxw) && b.checkContentSize(); var p = 1; b.cancelAnimationFrame = !1; b.timer = 1;
        b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
          type: 'scrollstart', current: { x: l, y: k }, request: { x: c, y: g }, end: { x: b.newscrollx, y: b.newscrolly }, speed: h,
        }); e(); (k == b.page.maxh && g >= k || l == b.page.maxw && c >= l) && b.checkContentSize(); b.noticeCursor();
      }
    }, this.cancelScroll = function () { b.timer && w(b.timer); b.timer = 0; b.bzscroll = !1; b.scrollrunning = !1; return b; }) : (this.doScrollLeft = function (c, g) { const f = b.getScrollTop(); b.doScrollPos(c, f, g); }, this.doScrollTop = function (c, g) {
      const f = b.getScrollLeft(); b.doScrollPos(f,
        c, g);
    }, this.doScrollPos = function (c, g, f) { let e = c > b.page.maxw ? b.page.maxw : c; e < 0 && (e = 0); let k = g > b.page.maxh ? b.page.maxh : g; k < 0 && (k = 0); b.synched('scroll', () => { b.setScrollTop(k); b.setScrollLeft(e); }); }, this.cancelScroll = function () {}); this.doScrollBy = function (c, g) {
      var f = 0; var f = g ? Math.floor((b.scroll.y - c) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - c; if (b.bouncescroll) { const e = Math.round(b.view.h / 2); f < -e ? f = -e : f > b.page.maxh + e && (f = b.page.maxh + e); }b.cursorfreezed = !1; py = b.getScrollTop(!0); if (f < 0
        && py <= 0) return b.noticeCursor(); if (f > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor(); b.doScrollTop(f);
    }; this.doScrollLeftBy = function (c, g) { var f = 0; var f = g ? Math.floor((b.scroll.x - c) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - c; if (b.bouncescroll) { const e = Math.round(b.view.w / 2); f < -e ? f = -e : f > b.page.maxw + e && (f = b.page.maxw + e); }b.cursorfreezed = !1; px = b.getScrollLeft(!0); if (f < 0 && px <= 0 || f > b.page.maxw && px >= b.page.maxw) return b.noticeCursor(); b.doScrollLeft(f); }; this.doScrollTo = function (c, g) { g && Math.round(c * b.scrollratio.y); b.cursorfreezed = !1; b.doScrollTop(c); }; this.checkContentSize = function () { const c = b.getContentSize(); (c.h != b.page.h || c.w != b.page.w) && b.resize(!1, c); }; b.onscroll = function (c) { b.rail.drag || b.cursorfreezed || b.synched('scroll', () => { b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)); b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x))); b.noticeCursor(); }); }; b.bind(b.docscroll, 'scroll', b.onscroll); this.doZoomIn = function (c) {
      if (!b.zoomactive) {
        b.zoomactive = !0; b.zoomrestore = { style: {} }; let k = 'position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight'.split(' '); const f = b.win[0].style; let l; for (l in k) { const h = k[l]; b.zoomrestore.style[h] = typeof f[h] !== 'undefined' ? f[h] : ''; }b.zoomrestore.style.width = b.win.css('width'); b.zoomrestore.style.height = b.win.css('height'); b.zoomrestore.padding = { w: b.win.outerWidth() - b.win.width(), h: b.win.outerHeight() - b.win.height() }; g.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
        b.win.css({
          position: g.isios4 ? 'absolute' : 'fixed', top: 0, left: 0, 'z-index': y + 100, margin: '0px',
        }); k = b.win.css('backgroundColor'); (k == '' || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(k)) && b.win.css('backgroundColor', '#fff'); b.rail.css({ 'z-index': y + 101 }); b.zoom.css({ 'z-index': y + 102 }); b.zoom.css('backgroundPosition', '0px -18px'); b.resizeZoom(); b.onzoomin && b.onzoomin.call(b); return b.cancelEvent(c);
      }
    }; this.doZoomOut = function (c) {
      if (b.zoomactive) {
        return b.zoomactive = !1, b.win.css('margin', ''), b.win.css(b.zoomrestore.style),
        g.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({ 'z-index': b.zindex }), b.zoom.css({ 'z-index': b.zindex }), b.zoomrestore = !1, b.zoom.css('backgroundPosition', '0px 0px'), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(c);
      }
    }; this.doZoom = function (c) { return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c); }; this.resizeZoom = function () {
      if (b.zoomactive) {
        const c = b.getScrollTop(); b.win.css({ width: `${e(window).width() - b.zoomrestore.padding.w}px`, height: `${e(window).height() - b.zoomrestore.padding.h}px` });
        b.onResize(); b.setScrollTop(Math.min(b.page.maxh, c));
      }
    }; this.init(); e.nicescroll.push(this);
  }; var J = function (e) {
    const c = this; this.nc = e; this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0; this.snapy = this.snapx = !1; this.demuly = this.demulx = 0; this.lastscrolly = this.lastscrollx = -1; this.timer = this.chky = this.chkx = 0; this.time = function () { return +new Date(); }; this.reset = function (e, l) {
      c.stop(); const h = c.time(); c.steptime = 0; c.lasttime = h; c.speedx = 0; c.speedy = 0; c.lastx = e; c.lasty = l; c.lastscrollx = -1; c.lastscrolly = -1;
    }; this.update = function (e, l) { var h = c.time(); c.steptime = h - c.lasttime; c.lasttime = h; var h = l - c.lasty; const t = e - c.lastx; var b = c.nc.getScrollTop(); var p = c.nc.getScrollLeft(); var b = b + h; var p = p + t; c.snapx = p < 0 || p > c.nc.page.maxw; c.snapy = b < 0 || b > c.nc.page.maxh; c.speedx = t; c.speedy = h; c.lastx = e; c.lasty = l; }; this.stop = function () { c.nc.unsynched('domomentum2d'); c.timer && clearTimeout(c.timer); c.timer = 0; c.lastscrollx = -1; c.lastscrolly = -1; }; this.doSnapy = function (e, l) {
      let h = !1; l < 0 ? (l = 0, h = !0) : l > c.nc.page.maxh && (l = c.nc.page.maxh, h = !0); e < 0 ? (e = 0, h = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, h = !0); h && c.nc.doScrollPos(e, l, c.nc.opt.snapbackspeed);
    }; this.doMomentum = function (e) {
      const l = c.time(); let h = e ? l + e : c.lasttime; e = c.nc.getScrollLeft(); const t = c.nc.getScrollTop(); const b = c.nc.page.maxh; const p = c.nc.page.maxw; c.speedx = p > 0 ? Math.min(60, c.speedx) : 0; c.speedy = b > 0 ? Math.min(60, c.speedy) : 0; h = h && l - h <= 60; if (t < 0 || t > b || e < 0 || e > p)h = !1; e = c.speedx && h ? c.speedx : !1; if (c.speedy && h && c.speedy || e) {
        let g = Math.max(16, c.steptime); g > 50 && (e = g / 50, c.speedx *= e, c.speedy *= e, g = 50); c.demulxy = 0; c.lastscrollx = c.nc.getScrollLeft(); c.chkx = c.lastscrollx; c.lastscrolly = c.nc.getScrollTop(); c.chky = c.lastscrolly; let s = c.lastscrollx; let u = c.lastscrolly; var d = function () {
          let e = c.time() - l > 600 ? 0.04 : 0.02; if (c.speedx && (s = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = s, s < 0 || s > p))e = 0.1; if (c.speedy && (u = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = u, u < 0 || u > b))e = 0.1; c.demulxy = Math.min(1, c.demulxy + e); c.nc.synched('domomentum2d', () => {
            c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), c.chkx = s, c.nc.setScrollLeft(s)); c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = u, c.nc.setScrollTop(u)); c.timer || (c.nc.hideCursor(), c.doSnapy(s, u));
          }); c.demulxy < 1 ? c.timer = setTimeout(d, g) : (c.stop(), c.nc.hideCursor(), c.doSnapy(s, u));
        }; d();
      } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
    };
  }; const B = e.fn.scrollTop; e.cssHooks.pageYOffset = {
    get(h, c, k) { return (c = e.data(h, '__nicescroll') || !1) && c.ishwscroll ? c.getScrollTop() : B.call(h); },
    set(h, c) {
      const k = e.data(h, '__nicescroll') || !1; k && k.ishwscroll
        ? k.setScrollTop(parseInt(c)) : B.call(h, c); return this;
    },
  }; e.fn.scrollTop = function (h) { if (typeof h === 'undefined') { const c = this[0] ? e.data(this[0], '__nicescroll') || !1 : !1; return c && c.ishwscroll ? c.getScrollTop() : B.call(this); } return this.each(function () { const c = e.data(this, '__nicescroll') || !1; c && c.ishwscroll ? c.setScrollTop(parseInt(h)) : B.call(e(this), h); }); }; const C = e.fn.scrollLeft; e.cssHooks.pageXOffset = {
    get(h, c, k) { return (c = e.data(h, '__nicescroll') || !1) && c.ishwscroll ? c.getScrollLeft() : C.call(h); },
    set(h,
      c) { const k = e.data(h, '__nicescroll') || !1; k && k.ishwscroll ? k.setScrollLeft(parseInt(c)) : C.call(h, c); return this; },
  }; e.fn.scrollLeft = function (h) { if (typeof h === 'undefined') { const c = this[0] ? e.data(this[0], '__nicescroll') || !1 : !1; return c && c.ishwscroll ? c.getScrollLeft() : C.call(this); } return this.each(function () { const c = e.data(this, '__nicescroll') || !1; c && c.ishwscroll ? c.setScrollLeft(parseInt(h)) : C.call(e(this), h); }); }; const D = function (h) {
    const c = this; this.length = 0; this.name = 'nicescrollarray'; this.each = function (e) {
      for (let h = 0, k = 0; h < c.length; h++)e.call(c[h], k++); return c;
    }; this.push = function (e) { c[c.length] = e; c.length++; }; this.eq = function (e) { return c[e]; }; if (h) for (a = 0; a < h.length; a++) { const k = e.data(h[a], '__nicescroll') || !1; k && (this[this.length] = k, this.length++); } return this;
  }; (function (e, c, k) { for (let l = 0; l < c.length; l++)k(e, c[l]); }(D.prototype, 'show hide toggle onResize resize remove stop doScrollPos'.split(' '), (e, c) => { e[c] = function () { const e = arguments; return this.each(function () { this[c].apply(this, e); }); }; })); e.fn.getNiceScroll = function (h) { return typeof h === 'undefined' ? new D(this) : this[h] && e.data(this[h], '__nicescroll') || !1; }; e.extend(e.expr[':'], { nicescroll(h) { return e.data(h, '__nicescroll') ? !0 : !1; } }); e.fn.niceScroll = function (h, c) {
    typeof c === 'undefined' && (typeof h === 'object' && !('jquery' in h)) && (c = h, h = !1); const k = new D(); typeof c === 'undefined' && (c = {}); h && (c.doc = e(h), c.win = e(this)); const l = !('doc' in c); !l && !('win' in c) && (c.win = e(this)); this.each(function () {
      let h = e(this).data('__nicescroll') || !1; h || (c.doc = l ? e(this) : c.doc, h = new Q(c,
        e(this)), e(this).data('__nicescroll', h)); k.push(h);
    }); return k.length == 1 ? k[0] : k;
  }; window.NiceScroll = { getjQuery() { return e; } }; e.nicescroll || (e.nicescroll = new D(), e.nicescroll.options = I);
}(jQuery));
