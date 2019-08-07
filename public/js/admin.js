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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/admin/js/admin.js":
/*!********************************************!*\
  !*** ./resources/assets/admin/js/admin.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./index */ "./resources/assets/admin/js/index.js");

__webpack_require__(/*! ./custom */ "./resources/assets/admin/js/custom.js");

/***/ }),

/***/ "./resources/assets/admin/js/custom.js":
/*!*********************************************!*\
  !*** ./resources/assets/admin/js/custom.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  $(".confirmPublic").click(function () {
    // let data = $(this).attr('value');
    // let id = $(this).attr('data-id-template');
    var request_id = $(this).attr('data-id-request');
    $("#modalConfirm").modal('show'); // $("#content").val(data);
    // $("#id").val(id);

    $("#request_id").val(request_id);
    $("#template_id").remove();
  });
  $(".modalPublic").click(function () {
    var template_id = $(this).attr('data-id-template');
    $("#modalConfirm").modal('show');
    $("#template_id").val(template_id);
    $("#request_id").remove();
  });
  $('#searchkey').keyup(function () {
    var table = $(this).attr('data-table');
    var value = $(this).val().toLowerCase();
    console.log(table);

    if (table == 'users') {
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    } else if (table == 'template') {
      var unicode = event.charCode ? event.charCode : event.keyCode;

      if (unicode == 27) {
        $(this).val("");
      }

      var searchKey = $(this).val().toLowerCase();
      $('.accordion-toggle').each(function () {
        var cellText = $(this).text().toLowerCase();
        var accordion = $('#accordion panel');

        if (cellText.indexOf(searchKey) >= 0) {
          $(this).parent().parent().show();
        } else {
          $(this).parent().parent().hide();
          $('.panel-collapse.in').collapse('hide');
        }
      });
    }
  });
  $("#accordion > .panel:eq(0)").find('.panel-heading').find('a').click();
}); //validate

jQuery.validator.addMethod("nameCategoryRegex", function (value, element) {
  return this.optional(element) || /^[a-z\ \s]+$/i.test(value);
}, "Category's name must contain only letters & space");
jQuery.validator.addMethod("nameTagRegex", function (value, element) {
  return this.optional(element) || /^[a-z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/i.test(value);
}, "Tag's name must contain only letters & number. No space allowed");
$("#formCategory").validate({
  onfocusout: false,
  onkeyup: false,
  onclick: false,
  rules: {
    "name": {
      required: true,
      nameCategoryRegex: true,
      maxlength: 50
    }
  },
  messages: {
    "name": {
      required: "This field is required!"
    }
  }
});
$("#formTag").validate({
  onfocusout: false,
  onkeyup: false,
  onclick: false,
  rules: {
    "name": {
      required: true,
      nameTagRegex: true,
      maxlength: 10
    }
  },
  messages: {
    "name": {
      required: "This field is required!"
    }
  }
});
$("#formPublic").validate({
  onfocusout: false,
  onkeyup: false,
  onclick: false,
  rules: {
    "name": {
      required: true
    },
    "category": {
      required: true
    },
    "tag[]": {
      required: true
    }
  },
  messages: {
    "name": {
      required: "This field is required!"
    },
    "category": {
      required: "Please select an item!"
    },
    "tag[]": {
      required: "Please select an item!"
    }
  }
});

/***/ }),

/***/ "./resources/assets/admin/js/index.js":
/*!********************************************!*\
  !*** ./resources/assets/admin/js/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_js_components_element_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../frontend/js/components/element/element.js */ "./resources/assets/frontend/js/components/element/element.js");

var w = window;
w.object = {};
$(document).ready(function () {
  $('.templatePreview').click(function () {
    var id = $(this).attr('data-id-template');
    var url = 'design/get-template';
    $.ajax({
      url: url,
      data: {
        'id': id
      },
      dataType: "json",
      success: function success(response) {
        w.object['content'] = JSON.parse(response.content);
        var temp = $('#modalPreview .modal-body');
        $(".preview_id").attr('href', 'edittid=' + id);
        $(".view_id").attr('href', 'view-templateid=' + id);
        temp.empty();
        $.each(w.object.content, function (k, v) {
          temp.append(objectJson.draw(v));
        });
        $('#modalPreview').modal('show');
        document.querySelectorAll('pre code').forEach(function (block) {
          hljs.highlightBlock(block);
        });
      },
      error: function error(response) {
        console.log("error : ", response);
      }
    });
  });
});

w.exportZip = function () {
  if (w.object.content == '') {
    alert('Nothing to export!');
    return false;
  }

  var html_content = '';
  var bootstrap_css = "";
  var bootstrap_js = "";
  var jquery = "";
  getData();

  function getData() {
    $.ajax({
      url: "./frontend_asset/partital-views/head-html-file.html",
      success: function success(response) {
        html_content += response;
        $.each(w.object.content, function (k, v) {
          html_content += w.objectJson.draw(v).outerHTML;
        });
        html_content += "</body></html>";
        $.ajax({
          url: "./css/bootstrap-grid.css",
          success: function success(response) {
            bootstrap_css += response;
            zip(html_content, bootstrap_css);
          },
          error: function error(response) {
            alert('có lỗi xảy ra!');
          }
        });
      },
      error: function error(response) {
        alert('có lỗi xảy ra!');
      }
    });
  }

  function zip(html_content, bootstrap_css, jquery, bootstrap_js) {
    html_content = html_content.replace(/contenteditable\=\"true\"/gi, '');
    html_content = html_content.replace(/ui-sortable/gi, '');
    html_content = html_content.replace(/ui-sortable-handle/gi, '');
    html_content = html_content.replace(/ui-sortable-handle/gi, '');
    var zip = new JSZip();
    zip.file("css/bootstrap-grid.css", bootstrap_css);
    zip.file("index.html", html_content);
    var file_name = Math.floor(Math.random() * 10000) + "_snap-page.zip";
    zip.generateAsync({
      type: "blob"
    }).then(function (blob) {
      saveAs(blob, file_name);
    });
  }
};

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

/***/ 1:
/*!**************************************************!*\
  !*** multi ./resources/assets/admin/js/admin.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AppServ\www\project\newletter\resources\assets\admin\js\admin.js */"./resources/assets/admin/js/admin.js");


/***/ })

/******/ });