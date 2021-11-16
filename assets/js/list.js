"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// load more news
var newsMore = $('.list-more-news');
var newsList = $('.list-news');
var newsTimes = 0;
newsMore.on('click', function () {
  newsMore.attr('disabled', 'disabled'); // for example

  var url = newsTimes < 3 ? '../assets/news_example.json' : '../assets/empty.json';
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
        newsTimes++;
        if (newsMore) newsMore.removeAttr('disabled');
      }
    });
  }, 1500);
}); // load more class

var classMore = $('.list-more-class');
var classList = $('.list-class');
var classTimes = 0;
classMore.on('click', function () {
  classMore.attr('disabled', 'disabled'); // for example

  var url = classTimes < 3 ? '../assets/class_example.json' : '../assets/empty.json';
  setTimeout(function () {
    $.ajax({
      url: url,
      success: function success(data) {
        if (data) {
          var html = '';

          var _iterator2 = _createForOfIteratorHelper(data),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              html += "<li class=\"list-class-item\">\n              <a href=\"".concat(item.url, "\" title=\"").concat(item.title, "\">\n                ").concat(item.tag !== null && "<span class=\"list-class-item-tag\" style=\"background-color: ".concat(item.tag.color, ";\">").concat(item.tag.text, "</span>"), "\n                <div class=\"list-class-item-img\">\n                  <img src=\"").concat(item.img, "\" alt=\"\" />\n                </div>\n                <h3 class=\"list-class-item-title\">").concat(item.title, "</h3>\n                <div class=\"list-class-item-ranking g-flex-wrapper g-flex-align-center\">\n                  <span>").concat(item.rank.score, "</span>\n                  <div class=\"list-class-item-ranking-stars\" data-stars=\"").concat(item.rank.stars, "\" />\n                  <span>(").concat(item.rank.comments, ")</span>\n                </div>\n                <p class=\"list-class-item-info\">\u8AB2\u7A0B\u6642\u9593 ").concat(item.course.duration, " \u5206\u9418 | \u4E0A\u8AB2\u4EBA\u6578 ").concat(item.course.attendees, " \u4EBA</p>\n                <div class=\"list-class-item-footer g-flex-wrapper g-flex-align-end g-flex-justify-space-between\">\n                  <div class=\"list-class-item-lecturer g-flex-wrapper g-flex-align-start\">\n                    <div class=\"list-class-item-lecturer-img\">\n                      <img src=\"").concat(item.lecturer.img, "\" alt=\"").concat(item.lecturer.name, "\" />\n                    </div>\n                    <div class=\"list-class-item-lecturer-info\">\n                      <p class=\"list-class-item-lecturer-name\">").concat(item.lecturer.name, "</p>\n                      <p class=\"list-class-item-lecturer-dept\">").concat(item.lecturer.department, "</p>\n                    </div>\n                  </div>\n                  <div class=\"list-class-item-price\">NT$").concat("".concat(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ','), "</div>\n                </div>\n              </a>\n            </li>");
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          classList.append(html);
        } else {
          classMore.remove();
        }
      },
      complete: function complete() {
        classTimes++;
        if (classMore) classMore.removeAttr('disabled');
      }
    });
  }, 1500);
});