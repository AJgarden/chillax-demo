"use strict";

$(function () {
  // section
  var header = $('.header');
  var section = $('.class-detail-content-section');
  var sectionHeader = $('.class-detail-content-section-header');
  var sectionTab = $('.class-detail-content-section-tab-item');
  var sectionPaneWrapper = $('.class-detail-content-section-tabpane-wrapper');
  var sectionPane = $('.class-detail-content-section-tabpane');
  sectionTab.on('click', function () {
    var target = $(this).attr('data-anchor');
    sectionTab.removeClass('active');
    $(this).addClass('active');
    var targetPane = $(".class-detail-content-section-tabpane[data-target=\"".concat(target, "\"]"));
    sectionPane.removeClass('active');
    targetPane.addClass('active');
    $('html, body').animate({
      scrollTop: sectionPaneWrapper.offset().top - header.outerHeight() - sectionHeader.outerHeight()
    }, 800, 'easeOutExpo');
  });
  $(window).on('scroll mousewheel', function (event) {
    var sctop = $(window).scrollTop();

    if (sctop > section.offset().top - header.outerHeight() && header.hasClass('scroll-view')) {
      sectionHeader.addClass('scroll-view');
    } else {
      sectionHeader.removeClass('scroll-view');
    }
  }).trigger('scroll');
  $(window).on('resize', function () {
    $(this).trigger('scroll');
    sectionHeader.css('max-width', section.outerWidth());
  }).trigger('resize'); // lesson index

  var lessonSwitcher = $('.class-detail-content-lesson-content-index > .switch');
  lessonSwitcher.on('click', function () {
    var parent = $(this).parent();

    if (parent.hasClass('active')) {
      parent.removeClass('active');
      parent.find('.class-detail-content-lesson-content-index-inner').slideUp(300);
    } else {
      parent.addClass('active');
      parent.find('.class-detail-content-lesson-content-index-inner').slideDown(300);
    }
  }); // copy order no

  var orderNoInput = $('#class-detail-content-discuss-order-no');
  orderNoInput.on('click', function () {
    var orderNo = $(this).val();
    var input = document.createElement('input');
    document.body.appendChild(input);
    input.value = orderNo;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    var span = $(this).parent().find('span');
    span.dequeue().css('opacity', '1').delay(1500).queue(function () {
      return span.css('opacity', '0');
    });
  }); // recommend carousel

  var recommendArrowPrev = $('.class-recommend-arrow.prev');
  var recommendArrowNext = $('.class-recommend-arrow.next');
  var recommendFlkty = new Flickity('.class-recommend-list', {
    draggable: false,
    groupCells: 3,
    cellAlign: 'left',
    prevNextButtons: false,
    watchCSS: true,
    imagesLoaded: true,
    on: {
      ready: function ready() {
        recommendArrowPrev.attr('disabled', 'disabled');

        if (this.slides.length <= 1) {
          recommendArrowNext.attr('disabled', 'disabled');
        }
      }
    }
  });
  recommendFlkty.on('change', function (index) {
    recommendArrowPrev.removeAttr('disabled');
    recommendArrowNext.removeAttr('disabled');

    if (index === 0) {
      recommendArrowPrev.attr('disabled', 'disabled');
    } else if (index + 1 === recommendFlkty.slides.length) {
      recommendArrowNext.attr('disabled', 'disabled');
    }
  });
  recommendArrowPrev.on('click', function () {
    recommendFlkty.previous();
  });
  recommendArrowNext.on('click', function () {
    recommendFlkty.next();
  }); // extend carousel

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