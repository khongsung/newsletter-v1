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
/* harmony import */ var _right_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../right-edit */ "./resources/assets/frontend/js/components/right-edit.js");




function element() {}

;
var w = window;
var rightEd = new _right_edit__WEBPACK_IMPORTED_MODULE_2__["default"]();
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

    rightEd.highlightLabel(e.target);
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
    appendTo: ".grid-tbody",
    helper: "clone",
    handle: ".drag",
    scroll: false
  });
  $('body .box-td').draggable({
    connectToSortable: ".grid-tr",
    appendTo: ".grid-tr",
    helper: "clone",
    handle: ".drag",
    scroll: false
  });
};

sortableElement.prototype.sortableArea = function () {
  sortableElement.prototype.draggable();
  sort('#sortable-area2', '.grid-td');
  sort('#sortable-area2 .grid-table', '.grid-td');
  sort('#sortable-area2 .grid-tbody', '.grid-tbody');
  sort('#sortable-area2 .grid-tr', '.grid-tr');
  sort('#sortable-area2 .grid-td', '.grid-td');
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
      }

      sortableElement.prototype.sortableArea();
    },
    scroll: false,
    tolerance: "pointer",
    placeholder: "ui-state-highlight",
    cursorAt: {
      left: -5,
      top: -5
    },
    cancel: '',
    connectWith: connect
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
  clearstyle();
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
  reset('.base');
  var style = w.obj.attr.style;
  var backgroundGradient = '';
  $.each(style, function (k, v) {
    if ($('.base').find('#' + k).hasClass('properties--group')) {
      var value = v.trim().split(' ');
      rightEdit.prototype.highlightLabel($('.right #' + k));
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

      rightEdit.prototype.highlightLabel($('.right #' + k));
    }
  });

  if (backgroundGradient != '') {
    fillStyleBackgroundGradient(backgroundGradient);
    rightEdit.prototype.highlightLabel($('#background-gradient'));
  }

  $.each($('.base-setting .trait input'), function (k, v) {
    var attrName = $(el).attr($(v).attr('name'));

    if (attrName != undefined) {
      $(v).val(attrName);
    }
  });
};

function reset(el) {
  $(el).find('input[type=number], input[type=text]').val('');
  $(el).find('input[type=number], input[type=text]').blur(); //remove focus

  $(el).find('input[type=radio]').prop('checked', false); //reset raido input

  $(el).find('select').prop('selectedIndex', 0); //reset select

  $(el).find('select').blur(); //remove focus

  $(el).find('.field-color-picker').css('background-color', 'transparent'); //remove focus

  $(el).find('.label').removeClass('four-color');
  $(el).find('.clear').hide();
}

rightEdit.prototype.highlightLabel = function (e) {
  var nameGroup;

  if ($(e).hasClass('property')) {
    nameGroup = $(e).attr('id');
  } else {
    if (checkIsGroup(e)) {
      nameGroup = getNameGroup(e);
    } else {
      nameGroup = findNameSytle(e);
    }
  }

  $('#' + nameGroup).find('> .label').addClass('four-color');
  $('#' + nameGroup).find('> .label').find('> b').show();
  $('#' + nameGroup).find('> .label').find('> b').attr('data-clear-style', nameGroup);
};

function clearstyle() {
  $('.right .clear').click(function () {
    debugger;
    var styleName = $(this).attr('data-clear-style');

    if (styleName == "background-gradient") {
      delete w.obj.attr.style['background-image'];
      $(w.el).css('background-image', '');
      $(this).hide();
      $(this).parent().removeClass('four-color');
      reset($(this).parent().parent());
    } else if (styleName != '' && w.obj.attr.style[styleName] != undefined) {
      delete w.obj.attr.style[styleName];
      $(w.el).css(styleName, "");
      $(this).hide();
      $(this).parent().removeClass('four-color');
      reset($(this).parent().parent());
    }
  });
}

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
  rightEdit.prototype.highlightLabel(e);
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
  $('.base .field input, .base .select select').unbind().on('keyup change', function (e) {
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

    rightEdit.prototype.highlightLabel(e.target);
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
  $(basePath).find('input, select').unbind().on('keyup change', function (e) {
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

/***/ 1:
/*!**************************************************!*\
  !*** multi ./resources/assets/admin/js/admin.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AppServ\www\project\newletter\resources\assets\admin\js\admin.js */"./resources/assets/admin/js/admin.js");


/***/ })

/******/ });