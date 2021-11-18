"use strict";

$(function () {
  // login/register switcher
  var tab = $('[data-tab]');
  tab.on('click', function () {
    var key = $(this).attr('data-tab');
    tab.removeClass('active');
    $("[data-tab=\"".concat(key, "\"]")).addClass('active');
    $('.account-login-tabpane').removeClass('active');
    $(".account-login-tabpane[data-key=\"".concat(key, "\"]")).addClass('active');
  });
});