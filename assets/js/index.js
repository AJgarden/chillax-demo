"use strict";

$(function () {
  // banner carousel
  var bannerElem = $('.index-banner-carousel');
  var bannerItems = $('.index-banner-carousel-item', bannerElem);
  var bannerFlkty = new Flickity('.index-banner-carousel', {
    wrapAround: true,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    imagesLoaded: true,
    on: {
      ready: function ready() {
        bannerElem.addClass('is-inited');
        bannerItems.eq(this.slides.length - 1).addClass('is-prev');
        bannerItems.eq(1).addClass('is-next');
      }
    }
  });
  bannerFlkty.on('change', function (index) {
    bannerItems.removeClass('is-prev is-next');
    var prevIndex = index === 0 ? bannerFlkty.slides.length - 1 : index - 1;
    var nextIndex = index + 1 === bannerFlkty.slides.length ? 0 : index + 1;
    bannerItems.eq(prevIndex).addClass('is-prev');
    bannerItems.eq(nextIndex).addClass('is-next');
  }); // extend carousel

  var extendArrowPrev = $('.index-extend-arrow.prev');
  var extendArrowNext = $('.index-extend-arrow.next');
  var extendFlkty = new Flickity('.index-extend-list', {
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
  }); // floating chillax & relax

  var floats = $('.index-float-chillax, .index-float-relax');
  $(window).on('scroll', function () {
    var deltaY = 0 - this.pageYOffset / 5;
    floats.css('transform', "translate(0, ".concat(deltaY, "px)"));
  }); // fixed sider

  var siders = $('.index-sider-left, .index-sider-right');
  siders.scrollView({
    start: '.index-classes',
    threshold: 0,
    end: '.footer-content-wrapper',
    repeat: true
  }); // scroll-view

  var scrollViewer = $('[data-scrollview-enable]');
  scrollViewer.scrollView({
    threshold: 0 - window.innerHeight * 0.25
  });
});