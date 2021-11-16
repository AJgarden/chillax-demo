"use strict";

$(function () {
  // invoice
  var invoiceSwitcher = $('input[name="invoice"]');
  invoiceSwitcher.on('change', function (event) {
    if ($(this).is(':checked')) {
      $('[data-addition="invoice"]').show();
    } else {
      $('[data-addition="invoice"]').hide();
    }
  });
});