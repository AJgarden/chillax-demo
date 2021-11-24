"use strict";

// header
var header = $('.header');
header.scrollView({
  start: header.outerHeight(),
  threshold: 0,
  end: '.footer-content-wrapper',
  repeat: true,
  onAddClass: function onAddClass() {
    header.removeClass('header-at-end').addClass('header-at-scroll').addClass('header-scroll-start-animation');
    setTimeout(function () {
      return header.removeClass('header-scroll-start-animation');
    }, 1000);
  },
  onRemoveClassAtStart: function onRemoveClassAtStart() {
    header.removeClass('header-at-scroll').removeClass('header-at-end');
  },
  onRemoveClassAtEnd: function onRemoveClassAtEnd() {
    header.removeClass('header-at-scroll').addClass('header-at-end').addClass('header-scroll-end-out-animation');
    setTimeout(function () {
      return header.removeClass('header-scroll-end-out-animation');
    }, 1000);
  }
}); // go-top

$('html, body').on('scroll mousewheel', function () {
  $('html, body').stop();
});
var goTop = $('.footer-content-gotop');
goTop.on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 2000, 'easeOutExpo');
});
$(window).on('resize', function () {
  if (document.body.scrollHeight > window.innerHeight * 3 && !goTop.attr('data-scroll-view')) {
    goTop.scrollView({
      start: window.innerHeight / 2,
      end: '.footer-content-gotop',
      endKey: 'top',
      threshold: 0,
      repeat: true
    });
  } else if (document.body.scrollHeight <= window.innerHeight * 3 && goTop.attr('data-scroll-view')) {
    goTop.scrollView('destory');
  }
}).trigger('resize'); // tooltip

$('[data-toggle="tooltip"]').tooltip();