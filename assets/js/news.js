"use strict";

$(function () {
  // extend carousel
  var extendArrowPrev = $('.news-detail-extend-arrow.prev');
  var extendArrowNext = $('.news-detail-extend-arrow.next');
  var extendFlkty = new Flickity('.news-detail-extend-list', {
    draggable: false,
    groupCells: 3,
    cellAlign: 'left',
    prevNextButtons: false,
    watchCSS: true,
    imagesLoaded: true,
    on: {
      ready: function ready() {
        extendArrowPrev.attr('disabled', 'disabled');

        if (this.slides.length <= 1) {
          extendArrowNext.attr('disabled', 'disabled');
        }
      }
    }
  });
  extendFlkty.on('change', function (index) {
    extendArrowPrev.removeAttr('disabled');
    extendArrowNext.removeAttr('disabled');

    if (index === 0) {
      extendArrowPrev.attr('disabled', 'disabled');
    } else if (index + 1 === extendFlkty.slides.length) {
      extendArrowNext.attr('disabled', 'disabled');
    }
  });
  extendArrowPrev.on('click', function () {
    extendFlkty.previous();
  });
  extendArrowNext.on('click', function () {
    extendFlkty.next();
  });
});