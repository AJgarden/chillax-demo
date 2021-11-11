"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// load more news
var newsMore = $('.list-more-news');
var newsList = $('.list-news');
var times = 0;
newsMore.on('click', function () {
  newsMore.attr('disabled', 'disabled'); // for example

  var url = times < 3 ? '../assets/news_example.json' : '../assets/empty.json';
  setTimeout(function () {
    $.ajax({
      url: url,
      success: function success(data) {
        if (data) {
          var html = '';

          var _iterator = _createForOfIteratorHelper(data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              html += "<li class=\"list-news-item\">\n              <div class=\"list-news-item-img\">\n                <img src=\"".concat(item.img, "\" alt=\"\" />\n              </div>\n              <h3 class=\"list-news-item-title\">").concat(item.title, "</h3>\n              <p class=\"list-news-item-desc\">").concat(item.description, "</p>\n              <div class=\"list-news-item-footer g-flex-wrapper g-flex-align-start g-flex-justify-space-between\">\n                <a class=\"list-news-item-link\" href=\"").concat(item.url, "\" title=\"\u95B1\u8B80\u66F4\u591A\">\u95B1\u8B80\u66F4\u591A</a>\n                <div class=\"list-news-item-tag\">\n                  ").concat(item.tags.map(function (tag) {
                return "<a href=\"".concat(tag.url, "\" title=\"").concat(tag.label, "\">").concat(tag.label, "</a>");
              }), "\n                </div>\n              </div>\n            </li>");
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          newsList.append(html);
        } else {
          newsMore.remove();
        }
      },
      complete: function complete() {
        times++;
        if (newsMore) newsMore.removeAttr('disabled');
      }
    });
  }, 1500);
});