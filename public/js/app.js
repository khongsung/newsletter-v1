/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/admin/sass/admin.scss":
/*!************************************************!*\
  !*** ./resources/assets/admin/sass/admin.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/frontend/js/app.js":
/*!*********************************************!*\
  !*** ./resources/assets/frontend/js/app.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./components/colorpicker */ "./resources/assets/frontend/js/components/colorpicker.js");

__webpack_require__(/*! ./components/right-edit */ "./resources/assets/frontend/js/components/right-edit.js");

__webpack_require__(/*! ./index2 */ "./resources/assets/frontend/js/index2.js");

__webpack_require__(/*! ./index3 */ "./resources/assets/frontend/js/index3.js");

__webpack_require__(/*! ./custom */ "./resources/assets/frontend/js/custom.js");

/***/ }),

/***/ "./resources/assets/frontend/js/components/colorpicker.js":
/*!****************************************************************!*\
  !*** ./resources/assets/frontend/js/components/colorpicker.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
  var ColorPicker = function () {
    var ids = {},
        inAction,
        charMin = 65,
        visible,
        tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_none">none</div><div class="colorpicker_submit"></div></div>',
        defaults = {
      eventName: 'click',
      onShow: function onShow() {},
      onBeforeShow: function onBeforeShow() {},
      onHide: function onHide() {},
      onChange: function onChange() {},
      onSubmit: function onSubmit() {},
      onCancle: function onCancle() {},
      color: 'ff0000',
      isNone: false,
      livePreview: true,
      flat: false
    },
        fillRGBFields = function fillRGBFields(hsb, cal) {
      var rgb = HSBToRGB(hsb);
      $(cal).data('colorpicker').fields.eq(1).val(rgb.r).end().eq(2).val(rgb.g).end().eq(3).val(rgb.b).end();
    },
        fillHSBFields = function fillHSBFields(hsb, cal) {
      $(cal).data('colorpicker').fields.eq(4).val(hsb.h).end().eq(5).val(hsb.s).end().eq(6).val(hsb.b).end();
    },
        fillHexFields = function fillHexFields(hsb, cal) {
      $(cal).data('colorpicker').fields.eq(0).val(HSBToHex(hsb)).end();
    },
        setSelector = function setSelector(hsb, cal) {
      $(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({
        h: hsb.h,
        s: 100,
        b: 100
      }));
      $(cal).data('colorpicker').selectorIndic.css({
        left: parseInt(150 * hsb.s / 100, 10),
        top: parseInt(150 * (100 - hsb.b) / 100, 10)
      });
    },
        setHue = function setHue(hsb, cal) {
      $(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h / 360, 10));
    },
        setCurrentColor = function setCurrentColor(hsb, cal) {
      $(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
    },
        setNewColor = function setNewColor(hsb, cal) {
      $(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
    },
        keyDown = function keyDown(ev) {
      var pressedKey = ev.charCode || ev.keyCode || -1;

      if (pressedKey > charMin && pressedKey <= 90 || pressedKey == 32) {
        return false;
      }

      var cal = $(this).parent().parent();

      if (cal.data('colorpicker').livePreview === true) {
        change.apply(this);
      }
    },
        change = function change(ev) {
      var cal = $(this).parent().parent(),
          col;

      if (this.parentNode.className.indexOf('_hex') > 0) {
        cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
      } else if (this.parentNode.className.indexOf('_hsb') > 0) {
        cal.data('colorpicker').color = col = fixHSB({
          h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
          s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
          b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
        });
      } else {
        cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
          r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
          g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
          b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
        }));
      }

      if (ev) {
        fillRGBFields(col, cal.get(0));
        fillHexFields(col, cal.get(0));
        fillHSBFields(col, cal.get(0));
      }

      setSelector(col, cal.get(0));
      setHue(col, cal.get(0));
      setNewColor(col, cal.get(0));
      cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
    },
        blur = function blur(ev) {
      var cal = $(this).parent().parent();
      cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
    },
        focus = function focus() {
      charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
      $(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
      $(this).parent().addClass('colorpicker_focus');
    },
        downIncrement = function downIncrement(ev) {
      var field = $(this).parent().find('input').focus();
      var current = {
        el: $(this).parent().addClass('colorpicker_slider'),
        max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255,
        y: ev.pageY,
        field: field,
        val: parseInt(field.val(), 10),
        preview: $(this).parent().parent().data('colorpicker').livePreview
      };
      $(document).bind('mouseup', current, upIncrement);
      $(document).bind('mousemove', current, moveIncrement);
    },
        moveIncrement = function moveIncrement(ev) {
      ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));

      if (ev.data.preview) {
        change.apply(ev.data.field.get(0), [true]);
      }

      return false;
    },
        upIncrement = function upIncrement(ev) {
      change.apply(ev.data.field.get(0), [true]);
      ev.data.el.removeClass('colorpicker_slider').find('input').focus();
      $(document).unbind('mouseup', upIncrement);
      $(document).unbind('mousemove', moveIncrement);
      return false;
    },
        downHue = function downHue(ev) {
      var current = {
        cal: $(this).parent(),
        y: $(this).offset().top
      };
      current.preview = current.cal.data('colorpicker').livePreview;
      $(document).bind('mouseup', current, upHue);
      $(document).bind('mousemove', current, moveHue);
    },
        moveHue = function moveHue(ev) {
      change.apply(ev.data.cal.data('colorpicker').fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, ev.pageY - ev.data.y))) / 150, 10)).get(0), [ev.data.preview]);
      return false;
    },
        upHue = function upHue(ev) {
      fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
      fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
      $(document).unbind('mouseup', upHue);
      $(document).unbind('mousemove', moveHue);
      return false;
    },
        downSelector = function downSelector(ev) {
      var current = {
        cal: $(this).parent(),
        pos: $(this).offset()
      };
      current.preview = current.cal.data('colorpicker').livePreview;
      $(document).bind('mouseup', current, upSelector);
      $(document).bind('mousemove', current, moveSelector);
    },
        moveSelector = function moveSelector(ev) {
      change.apply(ev.data.cal.data('colorpicker').fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, ev.pageY - ev.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, ev.pageX - ev.data.pos.left)) / 150, 10)).get(0), [ev.data.preview]);
      return false;
    },
        upSelector = function upSelector(ev) {
      fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
      fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
      $(document).unbind('mouseup', upSelector);
      $(document).unbind('mousemove', moveSelector);
      return false;
    },
        enterSubmit = function enterSubmit(ev) {
      $(this).addClass('colorpicker_focus');
    },
        leaveSubmit = function leaveSubmit(ev) {
      $(this).removeClass('colorpicker_focus');
    },
        clickSubmit = function clickSubmit(ev) {
      var cal = $(this).parent();
      var col = cal.data('colorpicker').color;
      cal.data('colorpicker').origColor = col;
      setCurrentColor(col, cal.get(0));
      cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
    },
        clickCancle = function clickCancle(ev) {
      var cal = $(this).parent();
      var el = cal.data('colorpicker').el;
      $(el).css('background', 'transparent');
      cal.data('colorpicker').onCancle(el);
    },
        show = function show(ev) {
      var cal = $('#' + $(this).data('colorpickerId'));
      cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
      var pos = $(this).offset();
      var viewPort = getViewport();
      var top = pos.top + this.offsetHeight;
      var left = pos.left;

      if (top + 176 > viewPort.t + viewPort.h) {
        top -= this.offsetHeight + 176;
      }

      if (left + 356 > viewPort.l + viewPort.w) {
        left -= 356;
      }

      cal.css({
        left: left + 'px',
        top: top + 'px'
      });

      if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
        cal.show();
      }

      $(document).bind('mousedown', {
        cal: cal
      }, hide);
      return false;
    },
        hide = function hide(ev) {
      if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
        if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
          ev.data.cal.hide();
        }

        $(document).unbind('mousedown', hide);
      }
    },
        isChildOf = function isChildOf(parentEl, el, container) {
      if (parentEl == el) {
        return true;
      }

      if (parentEl.contains) {
        return parentEl.contains(el);
      }

      if (parentEl.compareDocumentPosition) {
        return !!(parentEl.compareDocumentPosition(el) & 16);
      }

      var prEl = el.parentNode;

      while (prEl && prEl != container) {
        if (prEl == parentEl) return true;
        prEl = prEl.parentNode;
      }

      return false;
    },
        getViewport = function getViewport() {
      var m = document.compatMode == 'CSS1Compat';
      return {
        l: window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
        t: window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
        w: window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
        h: window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
      };
    },
        fixHSB = function fixHSB(hsb) {
      return {
        h: Math.min(360, Math.max(0, hsb.h)),
        s: Math.min(100, Math.max(0, hsb.s)),
        b: Math.min(100, Math.max(0, hsb.b))
      };
    },
        fixRGB = function fixRGB(rgb) {
      return {
        r: Math.min(255, Math.max(0, rgb.r)),
        g: Math.min(255, Math.max(0, rgb.g)),
        b: Math.min(255, Math.max(0, rgb.b))
      };
    },
        fixHex = function fixHex(hex) {
      var len = 6 - hex.length;

      if (len > 0) {
        var o = [];

        for (var i = 0; i < len; i++) {
          o.push('0');
        }

        o.push(hex);
        hex = o.join('');
      }

      return hex;
    },
        HexToRGB = function HexToRGB(hex) {
      var hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
      return {
        r: hex >> 16,
        g: (hex & 0x00FF00) >> 8,
        b: hex & 0x0000FF
      };
    },
        HexToHSB = function HexToHSB(hex) {
      return RGBToHSB(HexToRGB(hex));
    },
        RGBToHSB = function RGBToHSB(rgb) {
      var hsb = {
        h: 0,
        s: 0,
        b: 0
      };
      var min = Math.min(rgb.r, rgb.g, rgb.b);
      var max = Math.max(rgb.r, rgb.g, rgb.b);
      var delta = max - min;
      hsb.b = max;

      if (max != 0) {}

      hsb.s = max != 0 ? 255 * delta / max : 0;

      if (hsb.s != 0) {
        if (rgb.r == max) {
          hsb.h = (rgb.g - rgb.b) / delta;
        } else if (rgb.g == max) {
          hsb.h = 2 + (rgb.b - rgb.r) / delta;
        } else {
          hsb.h = 4 + (rgb.r - rgb.g) / delta;
        }
      } else {
        hsb.h = -1;
      }

      hsb.h *= 60;

      if (hsb.h < 0) {
        hsb.h += 360;
      }

      hsb.s *= 100 / 255;
      hsb.b *= 100 / 255;
      return hsb;
    },
        HSBToRGB = function HSBToRGB(hsb) {
      var rgb = {};
      var h = Math.round(hsb.h);
      var s = Math.round(hsb.s * 255 / 100);
      var v = Math.round(hsb.b * 255 / 100);

      if (s == 0) {
        rgb.r = rgb.g = rgb.b = v;
      } else {
        var t1 = v;
        var t2 = (255 - s) * v / 255;
        var t3 = (t1 - t2) * (h % 60) / 60;
        if (h == 360) h = 0;

        if (h < 60) {
          rgb.r = t1;
          rgb.b = t2;
          rgb.g = t2 + t3;
        } else if (h < 120) {
          rgb.g = t1;
          rgb.b = t2;
          rgb.r = t1 - t3;
        } else if (h < 180) {
          rgb.g = t1;
          rgb.r = t2;
          rgb.b = t2 + t3;
        } else if (h < 240) {
          rgb.b = t1;
          rgb.r = t2;
          rgb.g = t1 - t3;
        } else if (h < 300) {
          rgb.b = t1;
          rgb.g = t2;
          rgb.r = t2 + t3;
        } else if (h < 360) {
          rgb.r = t1;
          rgb.g = t2;
          rgb.b = t1 - t3;
        } else {
          rgb.r = 0;
          rgb.g = 0;
          rgb.b = 0;
        }
      }

      return {
        r: Math.round(rgb.r),
        g: Math.round(rgb.g),
        b: Math.round(rgb.b)
      };
    },
        RGBToHex = function RGBToHex(rgb) {
      var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
      $.each(hex, function (nr, val) {
        if (val.length == 1) {
          hex[nr] = '0' + val;
        }
      });
      return hex.join('');
    },
        HSBToHex = function HSBToHex(hsb) {
      return RGBToHex(HSBToRGB(hsb));
    },
        restoreOriginal = function restoreOriginal() {
      var cal = $(this).parent();
      var col = cal.data('colorpicker').origColor;
      cal.data('colorpicker').color = col;
      fillRGBFields(col, cal.get(0));
      fillHexFields(col, cal.get(0));
      fillHSBFields(col, cal.get(0));
      setSelector(col, cal.get(0));
      setHue(col, cal.get(0));
      setNewColor(col, cal.get(0));
    };

    return {
      init: function init(opt) {
        opt = $.extend({}, defaults, opt || {});

        if (opt.isNone) {
          $('.colorpicker_none').css('display', 'none');
        } else {
          $('.colorpicker_none').css('display', 'block');
        }

        if (typeof opt.color == 'string') {
          opt.color = HexToHSB(opt.color);
        } else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
          opt.color = RGBToHSB(opt.color);
        } else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
          opt.color = fixHSB(opt.color);
        } else {
          return this;
        }

        return this.each(function () {
          if (!$(this).data('colorpickerId')) {
            var options = $.extend({}, opt);
            options.origColor = opt.color;
            var id = 'collorpicker_' + parseInt(Math.random() * 1000);
            $(this).data('colorpickerId', id);
            var cal = $(tpl).attr('id', id);

            if (options.flat) {
              cal.appendTo(this).show();
            } else {
              cal.appendTo(document.body);
            }

            options.fields = cal.find('input').bind('keyup', keyDown).bind('change', change).bind('blur', blur).bind('focus', focus);
            cal.find('span').bind('mousedown', downIncrement).end().find('>div.colorpicker_current_color').bind('click', restoreOriginal);
            options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
            options.selectorIndic = options.selector.find('div div');
            options.el = this;
            options.hue = cal.find('div.colorpicker_hue div');
            cal.find('div.colorpicker_hue').bind('mousedown', downHue);
            options.newColor = cal.find('div.colorpicker_new_color');
            options.currentColor = cal.find('div.colorpicker_current_color');
            cal.data('colorpicker', options);
            cal.find('div.colorpicker_submit').bind('mouseenter', enterSubmit).bind('mouseleave', leaveSubmit).bind('click', clickSubmit);
            cal.find('div.colorpicker_none').bind('click', clickCancle);
            fillRGBFields(options.color, cal.get(0));
            fillHSBFields(options.color, cal.get(0));
            fillHexFields(options.color, cal.get(0));
            setHue(options.color, cal.get(0));
            setSelector(options.color, cal.get(0));
            setCurrentColor(options.color, cal.get(0));
            setNewColor(options.color, cal.get(0));

            if (options.flat) {
              cal.css({
                position: 'relative',
                display: 'block'
              });
            } else {
              $(this).bind(options.eventName, show);
            }
          }
        });
      },
      showPicker: function showPicker() {
        return this.each(function () {
          if ($(this).data('colorpickerId')) {
            show.apply(this);
          }
        });
      },
      hidePicker: function hidePicker() {
        return this.each(function () {
          if ($(this).data('colorpickerId')) {
            $('#' + $(this).data('colorpickerId')).hide();
          }
        });
      },
      setColor: function setColor(col) {
        if (typeof col == 'string') {
          col = HexToHSB(col);
        } else if (col.r != undefined && col.g != undefined && col.b != undefined) {
          col = RGBToHSB(col);
        } else if (col.h != undefined && col.s != undefined && col.b != undefined) {
          col = fixHSB(col);
        } else {
          return this;
        }

        return this.each(function () {
          if ($(this).data('colorpickerId')) {
            var cal = $('#' + $(this).data('colorpickerId'));
            cal.data('colorpicker').color = col;
            cal.data('colorpicker').origColor = col;
            fillRGBFields(col, cal.get(0));
            fillHSBFields(col, cal.get(0));
            fillHexFields(col, cal.get(0));
            setHue(col, cal.get(0));
            setSelector(col, cal.get(0));
            setCurrentColor(col, cal.get(0));
            setNewColor(col, cal.get(0));
          }
        });
      }
    };
  }();

  $.fn.extend({
    ColorPicker: ColorPicker.init,
    ColorPickerHide: ColorPicker.hidePicker,
    ColorPickerShow: ColorPicker.showPicker,
    ColorPickerSetColor: ColorPicker.setColor
  });
})(jQuery);

/***/ }),

/***/ "./resources/assets/frontend/js/components/createBoxByStyle.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/frontend/js/components/createBoxByStyle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var w = window;

function createBoxByStyle() {}

;

createBoxByStyle.prototype.create = function (json, el, box) {
  var property = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "attr";
  var style = window.getComputedStyle(el);
  $.each(json, function (k, v) {
    var label = document.createElement('label');
    var div = document.createElement('div');
    var pxPattern = ['width', 'height'];
    $(label).html(k);

    if (_typeof(v) == "object") {
      if (k == "style") {
        createBoxByStyle.prototype.create(v, el, box, "css");
      } else {
        var select = document.createElement('select');
        $(select).attr('data-type', property);
        $(select).attr('name', k);
        $.each(v, function (j, i) {
          var option = document.createElement('option');
          $(option).attr('value', i);
          $(option).html(i);
          $(select).append(option);
        });
        $(div).append(select);
        $(box).append(div);
        $(select).val(style.getPropertyValue(k));
      }
    } else {
      if (k == "src") {
        if ($(el).prop('tagName').toLowerCase() == 'img') {
          var button = document.createElement('button');
          $(button).html("chang image");
          $(button).addClass('btn btn-basic btn-xs');
          $(button).css({
            'color': '#111',
            'margin-left': '20px'
          });
          $(div).append(button);
          $(button).click(function () {
            w.isImage.init('src');
          });
        } else {
          var input = document.createElement('input');
          $(input).attr('data-type', 'attr');
          $(input).attr('placeholder', 'link here');
          $(input).attr('placeholder', obj.attr[k]);
          $(div).prepend(input);
        }
      } else {
        var _input = document.createElement('input');

        $(_input).attr('data-type', property);
        $(_input).attr('name', k);

        if (pxPattern.indexOf(k) > -1) {
          $(_input).attr('type', 'number');
        }

        if ($(_input).data('type') == 'attr') {
          $(_input).attr('placeholder', obj.attr[k]);
        } else {
          $(_input).attr('placeholder', style.getPropertyValue(k));
        }

        $(div).prepend(_input);
      }

      $(box).append(div);
    }

    $(div).prepend(label);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createBoxByStyle);

/***/ }),

/***/ "./resources/assets/frontend/js/components/element/element.js":
/*!********************************************************************!*\
  !*** ./resources/assets/frontend/js/components/element/element.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objectJson_objectJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objectJson/objectJson */ "./resources/assets/frontend/js/components/objectJson/objectJson.js");
/* harmony import */ var _sortableElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortableElement */ "./resources/assets/frontend/js/components/element/sortableElement.js");



function element() {}

;
var w = window;
w.objectJson = new _objectJson_objectJson__WEBPACK_IMPORTED_MODULE_0__["default"]();
element.prototype = new _sortableElement__WEBPACK_IMPORTED_MODULE_1__["default"]();

element.prototype.removeNodeObject = function (el) {
  var objParent = w.objectJson.getParent(el);
  var index = $(el).index();
  objParent.content.splice(index, 1);
  $(el).remove();

  if (w.el == el) {
    delete w.el;
    delete w.obj;
  }

  w.objectJson.saveLocalStorage();
};

element.prototype.editElement = function (el, obj) {
  $.each($('.edit-box select, .edit-box input'), function (k, v) {
    $(v).on({
      keyup: edit,
      change: edit
    });
  });

  function edit() {
    var name = $(this).attr('name');
    var value = $(this).val();
    if ($(this).attr('type') == 'number') value = value + 'px';

    if ($(this).data('type') == "attr") {
      $(el).attr(name, value);
      $(this).val() == "" ? delete obj.attr[name] : obj.attr[name] = value;
    } else {
      $(el).css(name, value);
      $(this).val() == "" ? delete obj.attr.style[name] : obj.attr.style[name] = value;
    }
  }
};

element.prototype.editBaseStyle = function (el, obj) {
  var tagName = $(w.el).prop('tagName').toLowerCase();
  $('.right .new-line').hide();

  if (tagName == 'button' || tagName == 'a' || tagName == 'img') {
    $('.right .new-line').show();
  }

  $('.right .selectable .base-text-item').unbind().click(function (e) {
    if ($(this).parent().hasClass('select-one')) {
      if ($(this).hasClass('selected')) {
        $(this).toggleClass('selected');
      } else {
        $(this).parent().find('.selected').removeClass('selected');
        $(this).addClass('selected');
      }
    } else {
      $(this).toggleClass('selected');
    }

    var name = $(this).data('attr-name');
    var value = $(this).data('attr-value');

    if ($(this).hasClass('selected')) {
      $(w.el).css(name, value);
      w.obj.attr.style[name] = value;
    } else {
      $(w.el).css(name, '');
      delete w.obj.attr.style[name];
    }

    e.stopPropagation();
  });
  $('.right .assignable .base-text-item').on({
    keyup: edit,
    change: edit
  });

  function edit() {
    var name = $(this).attr('name');
    var value = $(this).val();
    if ($(this).hasClass('px')) value = value + 'px';
    $(w.el).css(name, value);
    $(this).val() == "" ? delete w.obj.attr.style[name] : w.obj.attr.style[name] = value;
  }

  ;
  $.each($('.right .colorpkr'), function (k, v) {
    var style = $(v).data('attr-name');
    colorpkr(v, style, false);
  });
  $('.right .colorpkr').click(function (e) {
    var style = $(e.target).data('attr-name');
    var idElement = $(e.target).attr('id');

    if (idElement == 'colorpkr-font' || idElement == 'colorpkr-border') {
      colorpkr(e.target, style, true);
    } else {
      colorpkr(e.target, style, false);
    }
  });

  function colorpkr(div, styleName, none) {
    $(div).ColorPicker({
      isNone: none,
      onShow: function onShow(colpkr) {
        $(colpkr).fadeIn(400);
        return false;
      },
      onHide: function onHide(colpkr) {
        $(colpkr).fadeOut(400);
        return false;
      },
      onChange: function onChange(hsb, hex, rgb) {
        $(div).css('background', '#' + hex);
        $(w.el).css(styleName, '#' + hex);
        w.obj.attr.style[styleName] = '#' + hex;

        if ($(div).hasClass('field-color-picker')) {
          $(div).siblings('.input-holder').find('input').val('#' + hex);
        }
      },
      onSubmit: function onSubmit(hsb, hex, rgb, el) {
        $(el).ColorPickerHide();
      },
      onCancle: function onCancle(el) {
        $(el).ColorPickerHide();
        $(w.el).css(styleName, '');
        delete w.obj.attr.style[styleName];

        if ($(div).hasClass('field-color-picker')) {
          $(div).siblings('.input-holder').find('input').val('none');
        }
      }
    });
  }
};

element.prototype.fillStyleInBox = function () {
  $('.right input[type=number], .right input[type=text]').val(''); //reset input

  $('.right input').blur(); //remove focus

  var style = window.getComputedStyle(w.el); // w.objectCode.content = [];

  $.each($('.right .selectable .base-text-item'), function (k, v) {
    var attr = $(v).data('attr-name');
    var value = $(v).data('attr-value');
    var response = style.getPropertyValue(attr);
    var formatRespone = response.substring(0, response.indexOf(' ') + 1);

    if (response == value || formatRespone == value) {
      $(v).addClass('selected');
    }
  });
  $.each($('.right .assignable .base-text-item'), function (k, v) {
    var attr = $(v).attr('name');
    var value = style.getPropertyValue(attr);
    value == "normal" ? value = 0 : value = value.replace('px', '');
    $(v).val(value);
  });
  $.each($('.right .base-text-item.colorpkr'), function (k, v) {
    var attr = $(v).data('attr-name');
    var response = style.getPropertyValue(attr);
    var formatRespone = response.substring(0, response.indexOf(')') + 1);
    $(v).css('background', formatRespone); //update

    if ($(v).hasClass('field-color-picker')) {
      $(v).siblings('.input-holder').find('input').val(formatRespone);
    } //fill into color picker


    var replaceLetter = formatRespone.replace(/[^0-9]/g, ' ');
    var arr = replaceLetter.trim().split(" ");
    arr = arr.filter(function (i) {
      return parseInt(i) >= 0;
    });
    var color = {
      r: arr[0],
      g: arr[1],
      b: arr[2]
    };
    setTimeout(function () {
      $(v).ColorPickerSetColor(color);
    }, 10);
  });
  $('.right #code-edit .css').empty();

  if ($(w.el).attr('style') != undefined) {
    $('.right #code-edit .css').html("{\n".concat($(w.el).attr('style').replace(/; /gi, ';\n'), "\n}"));
    hljs.highlightBlock($('.right #code-edit .css')[0]);
  }
};

function findNameSytle(e) {
  var name;
  $.each($(e).parents(), function (k, v) {
    if ($(v).hasClass('property')) {
      name = $(v).attr('id');
      return false;
    }
  });
  return name;
}

window.element = new element();
/* harmony default export */ __webpack_exports__["default"] = (element);

/***/ }),

/***/ "./resources/assets/frontend/js/components/element/sortableElement.js":
/*!****************************************************************************!*\
  !*** ./resources/assets/frontend/js/components/element/sortableElement.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objectJson_objectJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objectJson/objectJson */ "./resources/assets/frontend/js/components/objectJson/objectJson.js");


function sortableElement() {}

;
var w = window;
w.objectJson = new _objectJson_objectJson__WEBPACK_IMPORTED_MODULE_0__["default"]();
$.fn.extend({
  hasClasses: function hasClasses(selectors) {
    var self = this;

    for (var i in selectors) {
      if ($(self).hasClass(selectors[i])) return true;
    }

    return false;
  }
});

sortableElement.prototype.draggable = function () {
  $('.sidebar-nav .lyrow, body .sidebar-nav .item-user, body .sidebar-nav .item-public').draggable({
    connectToSortable: "#sortable-area2, .grid-td",
    helper: "clone",
    handle: ".drag",
    scroll: false
  });
  $('body .sidebar-nav .box').draggable({
    connectToSortable: ".grid-td",
    helper: "clone",
    handle: ".drag",
    scroll: false
  });
  $('body .box-tr').draggable({
    connectToSortable: ".grid-tbody",
    helper: "clone",
    handle: ".drag",
    scroll: false
  });
  $('body .box-td').draggable({
    connectToSortable: ".grid-tr",
    helper: "clone",
    handle: ".drag",
    scroll: false
  });
};

sortableElement.prototype.sortableArea = function () {
  sortableElement.prototype.draggable();
  sort('#sortable-area2', '.grid-td'); // sort('#sortable-area2 .grid-table', '.grid-td');

  sort('#sortable-area2 .grid-tbody', '.grid-tbody');
  sort('#sortable-area2 .grid-tr', '.grid-tr', '.grid-tbody');
  sort('#sortable-area2 .grid-td', '.grid-td, #sortable-area2', '.grid-tr');
};

sortableElement.prototype.dragdrop = function (el, obj) {
  // debugger;
  if ($(el.item).hasClass('box') || $(el.item).hasClass('box-td') || $(el.item).hasClass('box-tr')) {
    var file = $(el.item).attr('value');
    $.ajax({
      url: "./frontend_asset/json/childs/" + file,
      dataType: "json",
      success: function success(response) {
        if (file == "html-embed.json") {
          $('#md-html-embed').modal('show');
          $('.CodeMirror').remove();
          var htmlEmbed = CodeMirror.fromTextArea(document.getElementById('editor-html-embed'), {
            mode: "xml",
            theme: "dracula",
            autoCloseTags: true,
            lineNumbers: true
          });
          $('#md-html-embed #editor-confirmOk').click(function () {
            console.log('html', htmlEmbed.getValue());

            if (htmlEmbed.getValue() != "") {
              response.content = htmlEmbed.getValue();

              if (el.helper != null) {
                obj.content.splice(el.helper.index(), 0, response);
              }

              $(el.helper).replaceWith(w.objectJson.draw(response));
            } else {
              $(el.helper).remove();
            }

            w.objectJson.drawTreeData();
            $('#md-html-embed').modal('hide');
          });
          $('#md-html-embed #editor-confirmCancel').click(function () {
            $(el.helper).remove();
          });
        } else {
          if (el.helper != null) {
            obj.content.splice(el.helper.index(), 0, response);
          }

          $(el.helper).replaceWith(w.objectJson.draw(response));

          if (file == "code-hljs.json") {
            document.querySelectorAll('pre code').forEach(function (block) {
              hljs.highlightBlock(block);
            });
          }

          w.objectJson.drawTreeData();
        }

        sortableElement.prototype.sortableArea();
      },
      error: function error(response) {
        console.log("error : ", response);
      }
    });
  } else if ($(el.item).hasClass('item-user') || $(el.item).hasClass('item-public')) {
    var url;
    var id = $(el.item).attr('value');
    $.ajax({
      url: 'design/get-template',
      data: {
        'id': id
      },
      dataType: "json",
      success: function success(response) {
        var data = JSON.parse(response.content);
        console.log('test', data);

        if (el.helper != null) {
          $.each(data, function (k, v) {
            obj.content.splice(el.helper.index() + k, 0, v);
          });
        }

        $.each(data, function (j, i) {
          $(el.helper).before(w.objectJson.draw(i));
        });
        $(el.helper).replaceWith('');
        setTimeout(function () {
          w.objectJson.drawTreeData();
          document.querySelectorAll('pre code').forEach(function (block) {
            hljs.highlightBlock(block);
          });
        }, 100);
        sortableElement.prototype.sortableArea();
      },
      error: function error(response) {
        console.log("error : ", response);
      }
    });
  } else {
    var tag = $(el.item).children().first()[0];
    var grid = w.objectJson.createJsonGrid(tag);

    if (el.helper != null) {
      obj.content.splice(el.helper.index(), 0, grid);
    }

    $(el.helper).replaceWith(w.objectJson.draw(grid));
    sortableElement.prototype.sortableArea();
    w.objectJson.drawTreeData();
  }
};

function sort(selector, connect, append) {
  $(selector).sortable({
    start: function start(e, ui) {
      // if($(ui.item).parents().prop("tagName") == "DIV") {
      console.log('start area');
      w.indexStart = ui.item.index();
      w.nodeRemove = w.objectJson.getParent(ui.helper); // }

      $('.right').hide();
    },
    sort: function sort(event, ui) {
      /* check if placeholder position is 0 add back placeholder */
      var pos = ui.placeholder.position();

      if (pos.left == 0 & pos.top == 0) {
        $(ui.item).before(ui.placeholder);
      }
    },
    stop: function stop(e, ui) {
      w.indexStop = $(ui.item).index();
      var notSort = ["box ui-draggable", "box-tr ui-draggable", "box-td ui-draggable", "item-user ui-draggable", "item-public ui-draggable", "item-public v-more ui-draggable", "item-user v-more ui-draggable"];

      if (indexStop != -1 && !$(ui.item).hasClasses(notSort)) {
        console.log('stop area');
        w.item = w.nodeRemove.content.splice(indexStart, 1);
        w.nodeReceive = w.objectJson.getParent(ui.item);
        w.nodeReceive.content.splice(indexStop, 0, item[0]);
      }

      $('#content .active').removeClass('active');
      sortableElement.prototype.sortableArea();
      w.objectJson.drawTreeData();
    },
    receive: function receive(e, ui) {
      if ($(ui.item).parent().prop("tagName") == "LI") {
        console.log('receive area');
        var tree = w.objectJson.getParent(ui.helper);
        sortableElement.prototype.dragdrop(ui, tree);
        sortableElement.prototype.sortableArea();
      }
    },
    scroll: false,
    tolerance: "pointer",
    placeholder: "ui-state-highlight",
    cursorAt: {
      left: 0,
      top: 0
    },
    cancel: '',
    connectWith: connect,
    appendTo: append
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sortableElement);

/***/ }),

/***/ "./resources/assets/frontend/js/components/isGetFileJson.js":
/*!******************************************************************!*\
  !*** ./resources/assets/frontend/js/components/isGetFileJson.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element/element */ "./resources/assets/frontend/js/components/element/element.js");


function isGetFileJson() {}

;
var ele = new _element_element__WEBPACK_IMPORTED_MODULE_0__["default"]();

isGetFileJson.prototype.getJsonChilds = function () {
  var refer;
  $.ajax({
    url: './frontend_asset/json/refer.json',
    success: function success(response) {
      refer = response;
      $.ajax({
        url: './frontend_asset/json/process.php',
        data: {
          listdata: "listdata"
        },
        type: "POST",
        success: function success(response) {
          getFileName(JSON.parse(response), refer);
          ele.sortableArea();
        },
        error: function error(response) {
          console.log("error : ", response);
        }
      });
    }
  });
};

function getFileName(response, refer) {
  $('.left .base-css').empty();
  $.each(response, function (k, v) {
    var color = '#' + Math.random().toString(16).substr(-6);

    if (v != "." && v != "..") {
      var name = detachName(v);
      var icon = '',
          text = name;
      var classBox = '';

      if (refer[name] != undefined) {
        icon = refer[name]['icon'];
        text = refer[name]['text'];
      }

      if (name == "td") {
        classBox = 'box-td';
      } else if (name == 'tr') {
        classBox = 'box-tr';
      } else {
        classBox = 'box';
      }

      var html = "\n\t\t\t<div class=\"".concat(classBox, "\" value=\"").concat(name, ".json\">\n\t\t\t<label class=\"btn drag\">").concat(icon + text, "</label>\n\t\t\t</div>\n\t\t\t");
      $('.left .base-css').append(html);
    }
  });
}

;

function detachName(name) {
  var arr = name.split('.');
  var tagName = arr[0];
  return tagName;
}

/* harmony default export */ __webpack_exports__["default"] = (isGetFileJson);

/***/ }),

/***/ "./resources/assets/frontend/js/components/isImage.js":
/*!************************************************************!*\
  !*** ./resources/assets/frontend/js/components/isImage.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isImage() {}

;
var w = window;

isImage.prototype.init = function (type) {
  w.type = type;
  $('#modal-filemanager').modal('show');
  readImage();
  getAllImages();
  AddImgFormUrl();
};

function assign(name, value) {
  if (name == 'src') {
    $(w.el).attr('src', value);
    w.obj.attr['src'] = value;
  } else if (name == 'background-image') {
    var src = 'url(' + value + ')';
    $(w.el).css(name, src);
    w.obj.attr.style[name] = src;
  }
}

function readImage() {
  $('#modal-filemanager .type-file input').unbind().change(function () {
    var reader = new FileReader();
    var dataImg;

    reader.onload = function (e) {
      dataImg = e.target.result;
      assign(w.type, dataImg);
    };

    reader.readAsDataURL(this.files[0]);
    pushImage();
  });
}

;

function pushImage() {
  var myFormData = new FormData();
  myFormData.append("file", $('#modal-filemanager .type-file input').prop('files')[0]);
  console.log('test', myFormData);
  $.ajax({
    type: 'POST',
    processData: false,
    // important
    contentType: false,
    // important
    data: myFormData,
    url: "design/upload-img",
    success: function success(data) {
      var result = data.split('|');
      var path = result[1];
      getAllImages();
      assign(w.type, path);
    }
  });
}

function getAllImages() {
  $.ajax({
    url: 'design/get-all-img',
    success: function success(response) {
      // $('#modal-filemanager .content')
      if (response != '') {
        var images = JSON.parse(response);
        $('#modal-filemanager .content').empty();
        $.each(images, function (k, v) {
          var name = v.split('/');
          name = name[name.length - 1];
          var html = "<div class=\"item\">\n\t\t\t\t\t\t\t\t\t<img src=\"".concat(v, "\">\n\t\t\t\t\t\t\t\t\t<span>").concat(name, "</span>\n\t\t\t\t\t\t\t\t\t<span class=\"del-img\" data-value='").concat(v, "'><i class=\"fa fa-times\"></i></span>\n\t\t\t\t\t\t\t\t</div>");
          $('#modal-filemanager .content').prepend(html);
        });
        deleteImg();
        changeImg();
      } else {
        $('#modal-filemanager .content').empty();
      }
    },
    error: function error(err) {
      console.log('error : ', err.message);
    }
  });
}

function deleteImg() {
  $('#modal-filemanager .content .item .del-img .fa').unbind().click(function () {
    var that = this;
    $.ajax({
      url: 'design/delete-img',
      type: 'POST',
      data: {
        value: $(this).parent().attr('data-value')
      },
      success: function success(response) {
        if (response == 'deleted') {
          $(that).parent().parent().remove();
        }
      },
      error: function error(er) {
        console.log("error : ", er.message);
      }
    });
  });
}

function changeImg() {
  $('#modal-filemanager .content .item').unbind().click(function () {
    var src = $(this).find('img').attr('src');
    assign(w.type, src);
    $('#modal-filemanager .content .selected').removeClass('selected');
    $(this).addClass('selected');
  });
}

function AddImgFormUrl() {
  $('#modal-filemanager .head .type-text button').unbind().click(function () {
    var input = $(this).prev();

    if (input.val() != '') {
      $.ajax({
        url: 'design/add-img',
        data: {
          url: input.val()
        },
        type: 'POST',
        success: function success(response) {
          if (response != '') {
            getAllImages();
            input.val('');
            assign(w.type, response);
          }
        },
        error: function error(er) {
          console.log('error: ', er.message);
          alert('Error: image not found!');
        }
      });
    } else {
      alert('Please enter link!');
      input.focus();
    }
  });
}

w.isImage = new isImage();
/* harmony default export */ __webpack_exports__["default"] = (isImage);

/***/ }),

/***/ "./resources/assets/frontend/js/components/isValidate.js":
/*!***************************************************************!*\
  !*** ./resources/assets/frontend/js/components/isValidate.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isValidate() {}

;

isValidate.prototype.validateInputGrid = function () {
  var sum = 0;
  var cols = $(this).val().split(" ", 10);
  $.each(cols, function (index, value) {
    sum = sum + parseInt(value);
  });

  if (sum == 10) {
    $(this).parent().find('label').show();
  } else {
    $(this).parent().find('label').hide();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isValidate);

/***/ }),

/***/ "./resources/assets/frontend/js/components/keyBinding.js":
/*!***************************************************************!*\
  !*** ./resources/assets/frontend/js/components/keyBinding.js ***!
  \***************************************************************/
/*! exports provided: keyDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDelete", function() { return keyDelete; });
var w = window;

function keyDelete() {
  $('html').unbind().keyup(function (e) {
    if (e.keyCode == 46) {
      if (w.el != null) {
        var objParent = w.objectJson.getParent(w.el);
        objParent.content.splice($(w.el).index(), 1);
        $(w.el).remove();
        $('.left #tree-data div.active').remove();
        $('.right').hide();
        w.el = null;
        w.objectJson.saveLocalStorage();
      }
    }
  });
}



/***/ }),

/***/ "./resources/assets/frontend/js/components/objectJson/getObjParent.js":
/*!****************************************************************************!*\
  !*** ./resources/assets/frontend/js/components/objectJson/getObjParent.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getObjParent() {}

;

getObjParent.prototype.getParent = function (el) {
  if ($(el).parent().hasClass('wrap')) {
    if ($(el).parent().parent().attr('id') == "sortable-area2") {
      return object;
    } else {
      //duyet de tim vi tri
      var arr = [];
      $.each($(el).parents(), function (k, v) {
        arr.push($(v).index());
        if ($(v).hasClass('group')) return false;
      });
      arr.shift();
      arr.pop();
      arr = arr.reverse();
      var root = window.object;
      $.each(arr, function (j, i) {
        root = root.content[i];
      });
      return root;
    }
  } else {
    if ($(el).parent().attr("id") == "sortable-area2") {
      return object;
    } else {
      //duyet de tim vi tri
      var _arr = [];
      $.each($(el).parents(), function (k, v) {
        _arr.push($(v).index());

        if ($(v).hasClass('group')) return false;
      });

      _arr.pop();

      _arr = _arr.reverse();
      var _root = window.object;
      $.each(_arr, function (j, i) {
        _root = _root.content[i];
      });
      return _root;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getObjParent);

/***/ }),

/***/ "./resources/assets/frontend/js/components/objectJson/objectJson.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/frontend/js/components/objectJson/objectJson.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getObjParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getObjParent */ "./resources/assets/frontend/js/components/objectJson/getObjParent.js");

var w = window;
w.images = [];

function objectJson() {}

;
objectJson.prototype = new _getObjParent__WEBPACK_IMPORTED_MODULE_0__["default"]();

objectJson.prototype.draw = function (json) {
  var tag = document.createElement(json.tag);
  var hashCode = Math.random().toString(36).substring(7);

  if (json.hash == "" || json.hash == undefined) {
    json['hash'] = hashCode;
  } else {
    hashCode = json.hash;
  }

  $(tag).attr('data-hash', hashCode);
  if (json.category != "") $(tag).attr('data-category', json.category);

  if (json.attr != null) {
    $.each(json.attr, function (k, v) {
      if (typeof v != "string") {
        if (k == "style") {
          $.each(v, function (j, i) {
            $(tag).css(j, i);
          });
        }
      } else {
        if (k == 'contenteditable') {} else {
          $(tag).attr(k, v);
        }
      }
    });
  }

  if (typeof json.content != "string") {
    $.each(json.content, function (k, v) {
      tag.appendChild(objectJson.prototype.draw(v));
    });
  } else {
    tag.innerHTML = json.content;
  } // objectJson.prototype.drawTreeData();


  return tag;
};

objectJson.prototype.drawExport = function (json) {
  var tag = document.createElement(json.tag);

  if (json.attr != null) {
    $.each(json.attr, function (k, v) {
      if (k == "style") {
        $.each(v, function (j, i) {
          if (j == 'background-image' && i != '' && i != 'url("")') {
            console.log('bg', i);
            var src = i.replace(/(url\(|\))/gi, '');
            $(tag).css(j, 'url(images/' + detachNameImg(src) + ')');
            w.images.push(src);
          } else {
            $(tag).css(j, i);
          }
        });
      } else {
        if (k != "class" && k != "contenteditable" && k.match(/data-/g) == null) {
          $(tag).attr(k, v);
        }

        if (k == 'src' && v != '') {
          console.log('src', v);
          w.images.push(v);
          $(tag).attr(k, 'images/' + detachNameImg(v));
        }
      }
    });
  }

  if (typeof json.content != "string") {
    $.each(json.content, function (k, v) {
      tag.appendChild(objectJson.prototype.drawExport(v));
    });
  } else {
    tag.innerHTML = json.content;
  }

  return tag;
};

function detachNameImg(string) {
  var arr = string.split('/');
  return arr[arr.length - 1];
}

objectJson.prototype.drawTreeData = function () {
  objectJson.prototype.saveLocalStorage();
  $('#tree-data').html(treeData(w.object));
  $('#tree-data >:first-child >.fa-trash').remove();
  $.each($('.tree-parent'), function (k, v) {
    if (k > 0) {
      $(v).find('div').slideUp();
    }
  });
};

function treeData(json) {
  var tag = document.createElement('div');

  if (typeof json.content != "string" && json.content != '') {
    var html = '';
    var angle = '';
    var length = json.content.length;
    var nameNode = "<span class='tree-label'>" + json.tag + "</span>";

    if (length > 0) {
      html = "<span class=\"pull-right\" style=\"margin-right:5px;\">".concat(length, "</span>");
      angle = "<i class=\"fa fa-angle-right tree-angle\" aria-hidden=\"true\"></i>";
    }

    $(tag).html(angle + nameNode + "<i class=\"fa fa-trash pull-right\" aria-hidden=\"true\"></i>".concat(html));
    $(tag).addClass('tree-parent');
    $(tag).attr('data-hash', json.hash);
    $.each(json.content, function (k, v) {
      tag.appendChild(treeData(v));
    });
  } else {
    $(tag).attr('data-hash', json.hash);
    $(tag).addClass('tree-child');
    $(tag).html("<span class='tree-label'>".concat(json.tag, "/").concat(json.category, "</span><i class=\"fa fa-trash pull-right\" aria-hidden=\"true\"></i>"));
  }

  return tag;
}

;

objectJson.prototype.createJsonGrid = function (el) {
  var cols = $(el).val().split(" ", 10);
  var obj = {
    "tag": "table",
    "category": "grid-table",
    "attr": {
      "class": "grid-table",
      "style": {}
    },
    "content": [{
      "tag": "tbody",
      "category": "grid",
      "attr": {
        "class": "grid-tbody",
        "style": {}
      },
      "content": [{
        "tag": "tr",
        "category": "grid-tr",
        "attr": {
          "class": "grid-tr",
          "style": {}
        },
        "content": []
      }]
    }]
  };
  $.each(cols, function (index, value) {
    var col = {
      "tag": "td",
      "category": "grid-td",
      "attr": {
        "class": "grid-td",
        "style": {
          "width": parseInt(value) * 10 + "%"
        }
      },
      "content": []
    };
    obj.content[0].content[0].content.push(col);
  });
  return obj;
};

objectJson.prototype.saveLocalStorage = function () {
  localStorage.setItem("object", JSON.stringify(w.object.content));
};

/* harmony default export */ __webpack_exports__["default"] = (objectJson);

/***/ }),

/***/ "./resources/assets/frontend/js/components/right-edit.js":
/*!***************************************************************!*\
  !*** ./resources/assets/frontend/js/components/right-edit.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
$(document).ready(function () {
  $('.edit-base >.base >.title').click(function (e) {
    // console.log(e);
    $(this).next().toggle();

    if ($(this).next().is(":visible")) {
      $(this).find('.fa').removeClass('fa-caret-right');
      $(this).find('.fa').addClass('fa-caret-down');
    } else {
      $(this).find('.fa').removeClass('fa-caret-down');
      $(this).find('.fa').addClass('fa-caret-right');
    }
  });
  $('.base-general .radio-item .icon').click(function (e) {
    $(e.target).prev().click();
  });
});
var w = window;

function rightEdit() {}

;

rightEdit.prototype.edit = function (el, obj) {
  radioItemClick();
  selectChange();
  arrowsClick();
  keyEventInput();
  unitChange();
  opacityChange();
  keyEventSetting();
  backgroundImage();
  backgroundGradient();
};

function detachValue(v) {
  var values = {};
  var regColor = v.match(/^#.+/);
  var regLetter = v.match(/^[a-zA-Z]+$/);
  var regNumber = v.match(/[0-9]+/);
  var regUnit = v.match(/[^0-9]+/);

  if (regColor != null) {
    values['regNumber'] = regColor[0];
  } else if (regLetter != null) {
    values['regNumber'] = regLetter[0];
  } else {
    regNumber != null ? values['regNumber'] = regNumber[0] : values = v;
    regUnit != null ? values['regUnit'] = regUnit[0] : values['regUnit'] = 'px';
  }

  return values;
}

;

rightEdit.prototype.fillStyleInRight = function () {
  $('.base input[type=number], .base input[type=text]').val('');
  $('.base input[type=number], .base input[type=text]').blur(); //remove focus

  $('.base input[type=radio]').prop('checked', false); //reset raido input

  $('.base select').prop('selectedIndex', 0); //reset select

  $('.base select').blur(); //remove focus

  $('.base .field-color-picker').css('background-color', 'transparent'); //remove focus

  var style = w.obj.attr.style;
  var backgroundGradient = '';
  $.each(style, function (k, v) {
    if ($('.base').find('#' + k).hasClass('properties--group')) {
      var value = v.trim().split(' ');
      $.each(value, function (i, j) {
        var values = new detachValue(j.trim());
        $($('.base').find('#' + k).find('.input-holder')[i]).children().val(values.regNumber);
        $($('.base').find('#' + k).find('.input-unit')[i]).val(values.regUnit);

        if (checkIsColor($($('.base').find('#' + k).find('.input-holder')[i]).children())) {
          $('.base').find('#' + k).find('.field-color-picker').css('background-color', values.regNumber);
        }
      });
    } else {
      if ($('.base').find('#' + k).hasClass('integer') || $('.base').find('#' + k).hasClass('color')) {
        var values = new detachValue(v);
        $('.base').find('#' + k).find('input').val(values.regNumber);
        $('.base').find('#' + k).find('.input-unit').val(values.regUnit);
        $('.base').find('#' + k).find('.field-color-picker').css('background-color', values.regNumber);
      } else if ($('.base').find('#' + k).hasClass('select')) {
        $('.base').find('#' + k + '.select').find('select').val(v);
      } else if ($('.base').find('#' + k).hasClass('radio')) {
        $('.base').find('#' + k).find("input[value=".concat(v, "]")).click();
      } else if ($('.base').find('#' + k).hasClass('file')) {
        v = v.replace('url("', '');
        v = v.replace('")', '');
        $('.base').find('#' + k).find("input[type=text]").val(v);
      }

      var patt = /^([a-z]+-){1,2}[a-z]+\((#?[a-z0-9 ,]+){2,}\)$/;

      if (patt.test(v) == true && k == 'background-image') {
        backgroundGradient = v;
      }
    }
  });
  if (backgroundGradient != '') fillStyleBackgroundGradient(backgroundGradient);
  $.each($('.base-setting .trait input'), function (k, v) {
    var attrName = $(el).attr($(v).attr('name'));

    if (attrName != undefined) {
      $(v).val(attrName);
    }
  });
};

function checkIsColor(e) {
  var isColor = false;
  $.each($(e).parents(), function (k, v) {
    if ($(v).hasClass('color')) {
      isColor = true;
      return false;
    }
  });
  return isColor;
}

;

function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  var test1 = s.color == strColor;
  var test2 = /^#[0-9A-F]{6}|#[0-9A-F]{3}$/i.test(strColor);

  if (test1 == true || test2 == true) {
    return true;
  } else {
    return false;
  }
}

;

function checkIsSelect(e) {
  var isSelect = false;
  var id = findNameSytle(id);

  if ($(id).hasClass('select')) {
    isSelect = true;
  }

  return isSelect;
}

;

function getNameGroup(e) {
  var name = '';
  var property = findNameSytle(e);
  property = findNameSytle($('#' + property));

  if (property != undefined && $('#' + property).hasClass('properties--group')) {
    name = property;
  }

  return name;
}

;

function checkIsGroup(e) {
  var isLayer = false;
  var property = findNameSytle(e);
  property = findNameSytle($('#' + property));

  if (property != undefined && $('#' + property).hasClass('properties--group')) {
    isLayer = true;
  }

  return isLayer;
}

;

function findNameSytle(e) {
  var name;
  $.each($(e).parents(), function (k, v) {
    if ($(v).hasClass('property')) {
      name = $(v).attr('id');
      return false;
    }
  });
  return name;
}

;

function assign(styleName, valueInput) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if ($.isNumeric(valueInput)) {
    if (styleName != 'opacity') {
      valueInput = valueInput + unit;
    }
  }

  if (valueInput !== '') {
    obj.attr.style[styleName] = valueInput;
    $(el).css(styleName, valueInput);
  } else {
    delete obj.attr.style[styleName];
    $(el).css(styleName, '');
  }
}

;

function groupEvent(e) {
  var nameGroup = getNameGroup(e);
  var selector = document.getElementById(nameGroup);
  var divShow = $(selector).find('.field-color-picker')[0];
  var value = test(nameGroup, selector);
  assign(nameGroup, value);
  colorpkr(divShow, nameGroup, value);
}

;

function colorpkr(div, styleName, styleValue) {
  $(div).ColorPicker({
    isNone: true,
    onShow: function onShow(colpkr) {
      $(colpkr).fadeIn(400);
      return false;
    },
    onHide: function onHide(colpkr) {
      $(colpkr).fadeOut(400);
      return false;
    },
    onChange: function onChange(hsb, hex, rgb) {
      styleValue = test(styleName, document.getElementById(styleName));
      var value = styleValue.split(" ");

      if (styleName == 'border') {
        value[2] = "#" + hex;
      } else if (styleName == 'text-shadow') {
        value[3] = "#" + hex;
      } else {
        value[4] = "#" + hex;
      }

      styleValue = value.join(' ');
      assign(styleName, styleValue);
      $(div).css('background', '#' + hex);
      $(div).siblings('.input-holder').find('input').val('#' + hex);
    },
    onSubmit: function onSubmit(hsb, hex, rgb, el) {
      styleValue = test(styleName, document.getElementById(styleName));
      var value = styleValue.split(" ");

      if (styleName == 'border') {
        value[2] = "#" + hex;
      } else if (styleName == 'text-shadow') {
        value[3] = "#" + hex;
      } else {
        value[4] = "#" + hex;
      }

      styleValue = value.join(' ');
      assign(styleName, styleValue);
      $(div).css('background', '#' + hex);
      $(div).siblings('.input-holder').find('input').val('#' + hex);
      $(el).ColorPickerHide();
    },
    onCancle: function onCancle(el) {
      $(el).ColorPickerHide();
      $(w.el).css(styleName, '');
      delete w.obj.attr.style[styleName];
      $(div).siblings('.input-holder').find('input').val('none');
    }
  });
}

;

function test(nameGroup, selector) {
  var unit;
  var value = '';
  $.each($(selector).find('input, .select select'), function (k, v) {
    unit = $(v).parent().siblings('.field-units').find('select').val();
    if (unit == undefined) unit = '';

    if ($(v).attr('type') == 'number') {
      if (nameGroup == "box-shadow") {
        $(v).val() == '' ? value += 0 + unit + ' ' : value += $(v).val() + unit + ' ';
      } else {
        $(v).val() == '' ? value += '0 ' : value += $(v).val() + unit + ' ';
      }
    } else {
      $(v).val() != '' ? value += $(v).val() + unit + " " : value += ' ';
    }

    if (checkIsColor(v)) {
      $(v).parent().siblings('.field-color-picker').css('background', $(v).val());
    }
  });
  value = value.trim();
  value = value.replace(/ +/g, ' ');
  return value;
}

;

function radioItemClick() {
  $('.base .radio-item .icon').unbind().click(function (e) {
    $(e.target).prev().click();
    var attrName = $(e.target).prev().attr('name');
    var value = $(e.target).prev().val();

    if (value == "none") {
      delete obj.attr.style["".concat(attrName)];
      $(el).css(attrName, 'none');
    } else {
      obj.attr.style["".concat(attrName)] = value;
      $(el).css(attrName, value);
    }

    e.stopPropagation();
  });
}

;

function selectChange() {
  $('.base .fields .select select').unbind().change(function (e) {
    if (!checkIsGroup(this)) {
      var attrName = findNameSytle(e.target);
      var value = $(this).val();
      $(el).css(attrName, value);
      obj.attr.style[attrName] = value;
      e.stopPropagation();
    } else {
      groupEvent(e.target);
    }

    e.stopPropagation();
  });
}

;

function arrowsClick() {
  $('.base .field').find('.field-arrows').unbind().click(function (e) {
    var input = $(this).siblings('.input-holder').find('input');
    var unit = $(this).siblings('.field-units').find('select').val();
    var valueInput = input.val();
    var styleName = findNameSytle(this);

    if (parseInt(valueInput) == NaN || valueInput == "") {
      valueInput = 0;
    } else {
      valueInput = parseInt(valueInput);
    }

    if ($(e.target).hasClass('field-arrow-u')) {
      valueInput++;
    } else {
      if (checkIsNegativeNumber(styleName)) {
        if (valueInput > 0) {
          valueInput--;
        }
      } else {
        valueInput--;
      }
    }

    assign(styleName, valueInput, unit);
    $(input).val(valueInput);
  });
}

;

function keyEventSetting() {
  $('.traits .trait input').unbind().on('change', function (e) {
    var attrName = $(this).attr('name');
    var value = $(this).val();
    $(el).attr(attrName, value);
    obj.attr[attrName] = value;
    e.stopPropagation();
  });
}

;

function keyEventInput() {
  $('.base .field input, .base .select select').unbind().on('keyup change click', function (e) {
    if (!checkIsGroup(this)) {
      var styleName = findNameSytle(this);
      var unit = $(this).parent().siblings('.field-units').find('select').val();
      var value = $(this).val();

      if (checkIsColor(this)) {
        $(this).parent().siblings('.field-color-picker').css('background', value);
      }

      if (styleName == 'opacity') {
        var inputRange = $(this).parent().parent().siblings('.field-range').find('input');

        if (value == '') {
          inputRange.val(1);
        } else {
          inputRange.val(value);
        }
      }

      if (styleName == 'background-image') {
        value = 'url("' + value + '")';
      }

      assign(styleName, value, unit);
    } else {
      groupEvent(e.target);
    }

    e.stopPropagation();
  });
  $('.base .field input').change(function (e) {
    var styleName = findNameSytle(this);
    var value = $(this).val();

    if (checkIsNegativeNumber(styleName)) {
      if (value < 0) {
        $(this).val(0);
      }
    }

    e.stopPropagation();
  });
}

;

function unitChange() {
  $('.base .field .field-units').unbind().change(function (e) {
    var styleName = findNameSytle(this);
    var unit = $(this).find('select').val();
    var value = $(this).siblings('.input-holder').find('input').val();
    assign(styleName, value, unit);
  });
}

;

function opacityChange() {
  $('.base .field input[type=range]').on('change mousemove', function (e) {
    var styleName = findNameSytle(this);
    var value = $(this).val();
    var inputHolder = $(this).parent().siblings('.field').find('input');
    inputHolder.val($(this).val());
    $(el).css(styleName, value);
    obj.attr.style[styleName] = value;

    if (value == "1") {
      delete obj.attr.style[styleName];
      $(el).css(styleName, '');
    }

    e.stopPropagation();
  });
}

;

function checkIsNegativeNumber(styleName) {
  var pattern = ['width', 'height', 'max-width', 'min-height', 'opacity'];

  if (pattern.indexOf(styleName.toLowerCase()) > -1) {
    return true;
  }

  return false;
}

;

function backgroundImage() {
  $('.right .base #background #background-image .fields button').click(function () {
    w.isImage.init('background-image');
  });
}

;

function backgroundGradient() {
  var basePath = '.right .base #background-gradient ';
  $(basePath).find('input, select').unbind().on('click keyup change', function (e) {
    keEventBackgroundGradient(basePath);
  });
  $(basePath + '#add-color').unbind().click(function () {
    var count = $(basePath + '.field-color').length;
    var html = "<div class=\"property color property__background-gradient-color\">\n\t\t\t\t\t\t<div class=\"label color-warn\">\n\t\t\t\t\t\t\t<span class=\"icon \" title=\"\">\n\t\t\t\t\t\t\t\tColor ".concat(++count, "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<b class=\"clear\" data-clear-style=\"\">\u2A2F</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"fields\">\n\n\t\t\t\t\t\t\t<div class=\"field field-color\">\n\t\t\t\t\t\t\t\t<div class=\"input-holder\"><input type=\"text\"></div>\n\t\t\t\t\t\t\t\t<div id=\"colorpkr-border\" class=\"field-color-picker base-text-item\" data-attr-name=\"border-color\" style=\"background-color: transparent;\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>");
    $(basePath + '.properties').append(html);
    $(basePath + '.properties .clear').unbind().click(function () {
      $(this).parent().parent().remove();
      keEventBackgroundGradient(basePath);
    });
    backgroundGradient();
  });
  $.each($(basePath + '.field-color-picker'), function (k, v) {
    colorpickerBackgroundGradient(v, basePath);
  });
}

;

function keEventBackgroundGradient(basePath) {
  var type = $(basePath + '#background-gradient_type').find('select').val();
  var direction = $(basePath + '#background-gradient_direction').find('select').val();
  var colors = '';
  $.each($(basePath + ".field-color").find('input'), function (k, v) {
    colors += $(v).val() + ",";
  });

  if ($(basePath + '#background-gradient_direction').is(':visible')) {
    if (direction != '') {
      direction = direction + ',';
    }
  } else {
    direction = '';
  }

  if (type == 'linear-gradient' || type == 'repeating-linear-gradient') {
    $(basePath + '#background-gradient_direction').show();
  } else {
    $(basePath + '#background-gradient_direction').hide();
  }

  colors = colors.slice(0, colors.lastIndexOf(','));
  var value = type + '(' + direction + colors + ')';
  console.log('gradient', value);
  assign('background-image', value);
}

function colorpickerBackgroundGradient(div, basePath) {
  $(div).ColorPicker({
    isNone: true,
    onShow: function onShow(colpkr) {
      $(colpkr).fadeIn(400);
      return false;
    },
    onHide: function onHide(colpkr) {
      $(colpkr).fadeOut(400);
      return false;
    },
    onChange: function onChange(hsb, hex, rgb) {
      $(div).siblings('.input-holder').find('input').val('#' + hex);
      $(div).css('background', '#' + hex);
      keEventBackgroundGradient(basePath);
    },
    onSubmit: function onSubmit(hsb, hex, rgb, el) {
      $(div).siblings('.input-holder').find('input').val('#' + hex);
      $(div).css('background', '#' + hex);
      keEventBackgroundGradient(basePath);
      $(el).ColorPickerHide();
    },
    onCancle: function onCancle(el) {
      $(el).ColorPickerHide();
      $(w.el).css('background-image', '');
      delete w.obj.attr.style['background-image'];
      $(div).siblings('.input-holder').find('input').val('none');
    }
  });
}

function fillStyleBackgroundGradient(value) {
  var basePath = '.right .base #background-gradient ';
  var arrColor;
  value = value.trim().split('(');
  var type = value[0];
  value = value[1];
  value = value.replace(')', '');
  value = value.split(',');
  $(basePath + '#background-gradient_type').find('select').val(type);

  if (isColor(value[0])) {
    arrColor = value;
  } else {
    arrColor = value.slice(1);
    $(basePath + '#background-gradient_direction').show();
    $(basePath + '#background-gradient_direction').find('select').val(value[0]);
  }

  $(basePath + '.properties').find('.property.color').remove();
  $.each(arrColor, function (k, v) {
    $(basePath + '#add-color').click();
    $($(basePath + ".field-color")[k]).find('input').val(v);
    $($(basePath + ".field-color")[k]).find('.field-color-picker').css('background', v);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (rightEdit);

/***/ }),

/***/ "./resources/assets/frontend/js/custom.js":
/*!************************************************!*\
  !*** ./resources/assets/frontend/js/custom.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_element_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/element/element */ "./resources/assets/frontend/js/components/element/element.js");

var w = window;
var ele = new _components_element_element__WEBPACK_IMPORTED_MODULE_0__["default"]();
$(document).ready(function () {
  if (localStorage.getItem("object") !== null) {
    var obj = JSON.parse(localStorage.getItem("object"));
    w.object.content = obj;
    $('#sortable-area2').empty();
    $.each(obj, function (k, v) {
      $('#sortable-area2').append(w.objectJson.draw(v));
    });
    document.querySelectorAll('pre code').forEach(function (block) {
      hljs.highlightBlock(block);
    });
    w.objectJson.drawTreeData();
    ele.sortableArea();
  }

  window.addEventListener('beforeunload', function (event) {
    w.objectJson.saveLocalStorage();
  });
});

w.exportZip = function () {
  if (w.object.content == '') {
    alert('Nothing to export!');
    return false;
  }

  var html_content = '';
  getData();

  function getData() {
    $.ajax({
      url: "./frontend_asset/partital-views/head-html-file.html",
      success: function success(response) {
        html_content += response;
        $.each(w.object.content, function (k, v) {
          html_content += w.objectJson.drawExport(v).outerHTML;
        });
        html_content += "</body>\n\t\t\t\t\t<script type=\"text/javascript\" src=\"js/highlight.min.js\"></script>\n\t\t\t\t\t<script>\n\t\t\t\t\t\tdocument.querySelectorAll('pre code').forEach((block) => {\n\t\t\t\t\t\t\thljs.highlightBlock(block);\n\t\t\t\t\t\t});\n\t\t\t\t\t</script>\n\t\t\t\t</html>";
        zipFile(html_content);
      },
      error: function error(response) {
        alert('có lỗi xảy ra!');
      }
    });
  }

  function zipFile(html_content) {
    var zip = new JSZip();
    zip.file("index.html", html_content);
    var file_name = Math.floor(Math.random() * 10000) + "_snap-page.zip";
    debugger;
    var count = w.images.length,
        countindex = 0;
    w.images = w.images.filter(function (i) {
      return i != '';
    });

    if (w.images != '') {
      $.each(w.images, function (k, v) {
        console.log('val', k, v);
        JSZipUtils.getBinaryContent(v, function (err, data) {
          console.log('data img', data);

          if (err) {
            throw err; // or handle the error
          }

          var arr = v.split('/');
          var name = arr[arr.length - 1];
          zip.file('images/' + name, data, {
            binary: true
          });
          countindex++;

          if (countindex == count) {
            zip.generateAsync({
              type: "blob"
            }).then(function (blob) {
              saveAs(blob, file_name);
            });
            w.images = [];
          }
        });
      });
    } else {
      zip.generateAsync({
        type: "blob"
      }).then(function (blob) {
        saveAs(blob, file_name);
      });
    }
  }
};

w.addCategory = function () {
  $("#group").html('');
  $("#modal").modal('show');
  $("#modal .modal-title").html('Add new Category');
  $("#form").attr('action', 'add-category');
  $.get("frontend_asset/partital-views/add-category-form.html", function (htm) {
    $("#group").html(htm);
  });
};

w.addTag = function () {
  $("#group").html('');
  $("#modal").modal('show');
  $("#modal .modal-title").html('Add new Tag');
  $("#form").attr('action', 'add-tag');
  $.get("frontend_asset/partital-views/add-tag-form.html", function (htm) {
    $("#group").html(htm);
  });
};

w.save = function () {
  if ($("body #sortable-area2").children().length > 0) {
    var option = "";
    var content = JSON.stringify(w.object.content);
    $("#modal").modal('show');
    $("#group").css('height', '60px');
    $("#group").html('<div class="loader col-md-6 col-md-offset-5"></div>');
    $("#group").css('height', 'auto');
    $.ajax({
      url: 'get-category',
      type: 'get',
      success: function success(data) {
        for (var i = 0; i < data.length; i++) {
          option += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
        }

        $(".modal-title").html('Save layout');
        $("#form").attr('action', 'design/save-template');
        $.get("frontend_asset/partital-views/add-new.html", function (data) {
          $("#group").html(data);
          $("#content").val(content);
        }); //}
      },
      error: function error(data) {}
    });
  } else {
    alert("Nothing to save!");
  }
}; //validate


$("#form").validate({
  onfocusout: false,
  onkeyup: false,
  onclick: false,
  rules: {
    "name": {
      required: true
    },
    "email": {
      required: true
    },
    "password": {
      required: true,
      minlength: 6
    },
    "re_password": {
      required: true,
      equalTo: "#password",
      minlength: 6
    },
    "category": {
      required: true
    }
  },
  messages: {
    "name": {
      required: "This field is required!"
    },
    "email": {
      require: "This field is required!"
    },
    "password": {
      required: "This field is required!",
      minlength: "Min length 6 digits"
    },
    "re_password": {
      required: "This field is required!",
      equalTo: "Two passwords must be same!",
      minlength: "Min length 6 digits"
    },
    "category": {
      required: "Please select an item!"
    }
  }
});

w.addContent = function () {
  $("#form #content").val(JSON.stringify(w.object.content));
};

$(document).ready(function () {
  $("#search_button").click(function () {
    var search_key = $('#search_key').val();

    var _token = $('input[name="_token"]').val();

    $.ajax({
      url: "search",
      method: "POST",
      data: {
        search_key: search_key,
        _token: _token
      },
      success: function success(data) {
        //dữ liệu nhận về
        $('#collapse-my-template').html(data[0]);
        $('#collapse-template-public').html(data[1]);
        $('#collapse-my-template').addClass('in');
        $('#collapse-template-public').addClass('in');
        w.element.sortableArea();
      }
    });
  });
  $('#search_key').keyup(function (e) {
    var _token = $('input[name="_token"]').val();

    $.ajax({
      url: "search",
      method: "POST",
      data: {
        _token: _token
      },
      success: function success(data) {
        //dữ liệu nhận về
        $('#collapse-my-template').html(data[0]);
        $('#collapse-template-public').html(data[1]);
        $('#collapse-my-template').removeClass('in');
        $('#collapse-template-public').removeClass('in');
        w.element.sortableArea();
      }
    });

    if (e.keyCode === 13) {
      $("#search_button").click();
    }
  });
});

/***/ }),

/***/ "./resources/assets/frontend/js/index2.js":
/*!************************************************!*\
  !*** ./resources/assets/frontend/js/index2.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_isImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/isImage */ "./resources/assets/frontend/js/components/isImage.js");
/* harmony import */ var _components_isValidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/isValidate */ "./resources/assets/frontend/js/components/isValidate.js");
/* harmony import */ var _components_isGetFileJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/isGetFileJson */ "./resources/assets/frontend/js/components/isGetFileJson.js");
/* harmony import */ var _components_createBoxByStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/createBoxByStyle */ "./resources/assets/frontend/js/components/createBoxByStyle.js");
/* harmony import */ var _components_right_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/right-edit */ "./resources/assets/frontend/js/components/right-edit.js");
/* harmony import */ var _components_element_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/element/element */ "./resources/assets/frontend/js/components/element/element.js");
/* harmony import */ var _components_keyBinding_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/keyBinding.js */ "./resources/assets/frontend/js/components/keyBinding.js");




 //element

 //keybinding



jQuery.fn.selectText = function () {
  var doc = document;
  var element = this[0];
  console.log(this, element);

  if (doc.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

$(document).ready(function () {
  var hash = Math.random().toString(36).substring(7);
  window.object = {
    "tag": "div",
    "category": "grid",
    "attr": {
      "class": "column",
      "style": {}
    },
    "hash": hash,
    "content": []
  };

  var w = window,
      ele = new _components_element_element__WEBPACK_IMPORTED_MODULE_5__["default"](),
      img = new _components_isImage__WEBPACK_IMPORTED_MODULE_0__["default"](),
      valid = new _components_isValidate__WEBPACK_IMPORTED_MODULE_1__["default"](),
      getFileJson = new _components_isGetFileJson__WEBPACK_IMPORTED_MODULE_2__["default"](),
      createBoxStyle = new _components_createBoxByStyle__WEBPACK_IMPORTED_MODULE_3__["default"](),
      rightEd = new _components_right_edit__WEBPACK_IMPORTED_MODULE_4__["default"](),
      addTextAble = function addTextAble(el, obj) {
    $('.base-text-advance').hide();
    var arr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'small', 'span', 'strong', 'b', 'em', 'i', 'button', "li", "code"];

    if (arr.indexOf($(el).prop('tagName').toLowerCase()) > -1) {
      $(el).attr('contenteditable', 'true');
      $(el).keyup(function (e) {
        obj.content = e.target.innerText;
        w.objectJson.saveLocalStorage();
      });
      $('.base-text-advance').show();
      $(el).focus();
      $(el).dblclick(function (e) {
        var cell = e.target;
        var range, selection;

        if (document.body.createTextRange) {
          range = document.body.createTextRange();
          range.moveToElementText(cell);
          range.select();
        } else if (window.getSelection) {
          selection = window.getSelection();
          range = document.createRange();
          range.selectNodeContents(cell);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      });
    }
  },
      editELe = function editELe(element) {
    $('.right').show();
    $('.right .selected').removeClass('selected');
    $('.right .assignable .base-text-item').val('');
    var box = $('.right .edit-box');
    box.empty();
    var category = $(element).data('category');
    var index;

    if ($(element).parent().hasClass('wrap')) {
      index = $(element).parent().index();
    } else {
      index = $(element).index();
    }

    w.el = element;
    w.obj = w.objectJson.getParent(el).content[index];
    addTextAble(w.el, w.obj);
    ele.fillStyleInBox();
    ele.editBaseStyle();
    rightEd.edit(w.el, w.obj);
    rightEd.fillStyleInRight();
    $.ajax({
      url: "./frontend_asset/json/categories/" + category + ".json",
      dataType: "json",
      success: function success(response) {
        createBoxStyle.create(response, w.el, box);
        ele.editElement(w.el, w.obj);
      },
      error: function error(response) {
        console.log("error : ", response);
      }
    });
  },
      findHash = function findHash(e) {
    var hash;

    if ($(e.target).data('category') == undefined) {
      $.each($(e.target).parents(), function (k, v) {
        if ($(v).attr('data-category')) {
          editELe(v);
          hash = $(v).data('hash');
          $(v).addClass('active');
          return false;
        }
      });
    } else {
      hash = $(e.target).data('hash');
      editELe(e.target);
      $(e.target).addClass('active');
    }

    return hash;
  },
      removeFocus = function removeFocus() {
    w.el = null;
    w.obj = null;
    $('.left #tree-data .active').removeClass('active');
    $('.right').hide();
    $('.content .active').removeClass('active');
    $('[contenteditable="true"]').removeAttr('contenteditable');
    window.getSelection().removeAllRanges();
  },
      removeElAndObj = function removeElAndObj(e) {
    var hash = $(e.target).parent().data('hash');
    var el = document.querySelectorAll("#content [data-hash=\"".concat(hash, "\"]"))[0];
    ele.removeNodeObject(el);
    $(e.target).parent().remove();
    removeFocus();
    e.stopPropagation();
  },
      init = function init() {
    getFileJson.getJsonChilds();
    _components_keyBinding_js__WEBPACK_IMPORTED_MODULE_6__["keyDelete"](); // edit page

    $('#edit').click(function () {
      $('.left').show();
      $('.content').removeClass('sourcepreview');
      init();
    });
    $('.right').hide();
    $('.lyrow input').bind('keyup', valid.validateInputGrid); //click element

    $('body').unbind().on('click', ".content .box, .content .row, .content .grid-table, .grid-tbody, .grid-tr, .grid-td", function (e) {
      removeFocus();
      var hash = findHash(e);
      var el = document.querySelectorAll("#tree-data [data-hash=\"".concat(hash, "\"]"))[0];
      var y = $('.left').scrollTop();
      $('.left #tree-data .active').removeClass('active');
      $(el).addClass('active');

      if ($('.left .tab-tree-data').hasClass('active')) {
        $('.left').animate({
          scrollTop: el.offsetTop - 150
        }, 500);
      }

      $.each($(el).parents(), function (k, v) {
        if ($(v).attr('id') != 'tree-data') {
          $(v).children().slideDown();
          $(v).find('> .tree-angle').removeClass('fa-angle-right');
          $(v).find('> .tree-angle').addClass('fa-angle-down');
        } else {
          return false;
        }
      });
      CKEDITOR.instances['editor-ck'].setData(w.el.innerHTML);
      e.stopPropagation();
    }); // click tree data find same element

    $('body').on('click', '.left #tree-data div', function (e) {
      if ($(this).parent().attr('id') == 'tree-data') return false;
      var hash = $(this).data('hash');
      var el = document.querySelectorAll("#content [data-hash=\"".concat(hash, "\"]"))[0];
      $('.left #tree-data .active').removeClass('active');
      $('#content .active').removeClass('active');
      $(this).addClass('active');
      $(el).addClass('active');
      $('.content').animate({
        scrollTop: el.offsetTop - 150
      }, 500);
      editELe(el);
      e.stopPropagation();
    }); // delete in tree data and delete element and obj

    $('body').on('click', '.left #tree-data .fa-trash', function (e) {
      removeElAndObj(e);
    }); // out focus

    $('body').on('click', '#content', function (e) {
      removeFocus();
      $('.colorpicker').hide();
    });
  };

  init();
  CKEDITOR.replace('editor-ck');
});

/***/ }),

/***/ "./resources/assets/frontend/js/index3.js":
/*!************************************************!*\
  !*** ./resources/assets/frontend/js/index3.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_keyBinding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/keyBinding.js */ "./resources/assets/frontend/js/components/keyBinding.js");

$(document).ready(function () {
  var w = window; //hover item in content

  hoverItemInContent();
  $('#edit').click(function () {
    hoverItemInContent();
    $('.content').find('.grid-table, .grid-td').css('outline', '1px solid #bfbfbf');
    $('.content').find('.grid-table, .grid-td').css('paddign', '5px');
    $('.content .grid-table:first').find('.grid-table').css('margin', '5px');
    $('.content .grid-table:first').find('.grid-table').css('border-collapse', 'separate');
    $('#content').css('width', 'calc(100% - 340px)');
    $(this).hide();
    $('#preview').show();
  }); // privew page

  $('#preview').click(function (e) {
    $('.left').hide();
    $('.right').hide();
    $('.content').addClass('sourcepreview');
    $('.content .active').removeClass('active');
    $('body').off('click');
    $('body').off('mouseover mouseout');
    $('.content').find('.grid-table, .grid-td').css('outline', 'none');
    $('.content').find('.grid-table, .grid-td').css('pading', '0');
    $('.content .grid-table:first').find('.grid-table').css('margin', '0');
    $('.content .grid-table:first').find('.grid-table').css('border-collapse', 'collapse');
    $('#content').css('width', '100%');
    $('#edit').show();
    $(this).hide();
  }); // delete all element created in page

  $('#delete').click(function () {
    if (confirm("Are you sure?")) {
      $('#sortable-area2').empty();
      $('.edit-box').empty();
      $('.left #tree-data').empty();
      $('.right').hide();
      $('.left .active').removeClass('active');
      $('.left .nav-tabs .tab-item-drag').find('a').click();
      w.object.content = [];
      w.object.css = {};
      localStorage.removeItem("object");
    }
  }); //hover tree data find same element

  $('body').on('mouseover', '.left #tree-data div', function (e) {
    var hash = $(this).data('hash');
    var el = document.querySelectorAll("#content [data-hash=\"".concat(hash, "\"]"))[0];
    $(this).css('outline', '1px solid #ca8200');

    if (w.el != el) {
      $(el).css('outline', '2px solid #66afe9');
    }

    e.stopPropagation();
  }); //hover tree data find same element

  $('body').on('mouseout', '.left #tree-data div', function (e) {
    var hash = $(this).data('hash');
    var el = document.getElementById('content').querySelectorAll("[data-hash=\"".concat(hash, "\"]"))[0];
    $(this).css('outline', '');
    $(el).css('outline', '');
    e.stopPropagation();
  });
  $('body').on('click', '.left #tree-data .tree-angle', function (e) {
    var tag = $(e.target).parent().find('>div');
    $(e.target).removeClass('fa-angle-down');
    $(e.target).removeClass('fa-angle-right');

    if (tag.is(':hidden')) {
      $(e.target).addClass('fa-angle-down');
      tag.slideDown('fast');
    } else {
      $(e.target).addClass('fa-angle-right');
      tag.slideUp('fast');
    }
  }); // show code css

  $('.right .nav-tabs li.tab-code').click(function () {
    $('.right #code-edit .css').empty();

    if ($(w.el).attr('style') != undefined) {
      $('.right #code-edit .css').html("{\n".concat($(w.el).attr('style').replace(/; /gi, ';\n'), "\n}"));
      hljs.highlightBlock($('.right #code-edit .css')[0]);
    }
  }); // when click btn ok in ckeditor

  $('#md-ckeditor #editor-confirmOk').click(function () {
    var arrPatern = ['button'];
    var content = CKEDITOR.instances['editor-ck'].getData();

    if (arrPatern.indexOf($(w.el).prop('tagName').toLowerCase()) > -1) {
      $(w.el).html($(content).text());
      w.obj.content = $(content).text();
    } else {
      $(w.el).html(content);
      w.obj.content = content;
    }

    w.objectJson.saveLocalStorage();
    document.querySelectorAll('pre code').forEach(function (block) {
      hljs.highlightBlock(block);
    });
    $(w.el).children().css({
      'padding': '0',
      'margin': '0'
    });
    $('#md-ckeditor').modal('hide');
  }); // button break line for button and link

  $('body').on('click', '.right .new-line', function (e) {
    if ($(w.el).css('display') != 'block') {
      $(e.target).addClass('selected');
      w.obj.attr.style['display'] = 'block';
      $(w.el).css('display', 'block');
    } else {
      $(e.target).removeClass('selected');
      delete w.obj.attr.style['display'];
      $(w.el).css('display', 'inline-block');
    }
  });
  viewMore('#collapse-my-template');
  viewMore('#collapse-template-public'); // view more

  function viewMore(box) {
    var limit = 5;
    $.each($(box).find('div'), function (k, v) {
      if (k >= limit) {
        $(v).addClass('v-more');
        $(v).css('display', 'none');
      }
    });

    if ($(box).find('div').length > limit) {
      $(box).append('<a href="#" class="view-more">Xem thêm</a>');
    }

    $('a.view-more').click(function () {
      if ($(box).find('a.view-more').html() == "Xem thêm") {
        $(box).find('a.view-more').html("Thu gọn");
      } else {
        $(box).find('a.view-more').html("Xem thêm");
      }

      $(box).find('.v-more').slideToggle();
    });
  }

  function hoverItemInContent() {
    $('body').on('mouseover', '.content .box, .content .row, .content .column', function (e) {
      if (w.el != e.target) {
        $(e.target).css('outline', '2px solid #66afe9');
      }
    });
    $('body').on('mouseout', '.content .box, .content .row, .content .column', function (e) {
      $(e.target).css('outline', '');
    });
  } // $('#sortable-area2 img').dblclick(function() {
  // 	alert('asdfasdf');
  // });

});

/***/ }),

/***/ "./resources/assets/frontend/sass/app.scss":
/*!*************************************************!*\
  !*** ./resources/assets/frontend/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/frontend/sass/bootstrap-grid.scss":
/*!************************************************************!*\
  !*** ./resources/assets/frontend/sass/bootstrap-grid.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/layouts/sass/filemanager.scss":
/*!********************************************************!*\
  !*** ./resources/assets/layouts/sass/filemanager.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/frontend/js/app.js ./resources/assets/frontend/sass/bootstrap-grid.scss ./resources/assets/frontend/sass/app.scss ./resources/assets/admin/sass/admin.scss ./resources/assets/layouts/sass/filemanager.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\AppServ\www\project\newletter\resources\assets\frontend\js\app.js */"./resources/assets/frontend/js/app.js");
__webpack_require__(/*! C:\AppServ\www\project\newletter\resources\assets\frontend\sass\bootstrap-grid.scss */"./resources/assets/frontend/sass/bootstrap-grid.scss");
__webpack_require__(/*! C:\AppServ\www\project\newletter\resources\assets\frontend\sass\app.scss */"./resources/assets/frontend/sass/app.scss");
__webpack_require__(/*! C:\AppServ\www\project\newletter\resources\assets\admin\sass\admin.scss */"./resources/assets/admin/sass/admin.scss");
module.exports = __webpack_require__(/*! C:\AppServ\www\project\newletter\resources\assets\layouts\sass\filemanager.scss */"./resources/assets/layouts/sass/filemanager.scss");


/***/ })

/******/ });