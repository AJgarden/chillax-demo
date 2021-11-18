"use strict";

$(function () {
  // upload image
  var accountImg = $('#account-setup-image');
  var uploadBtn = $('.account-setup-image-upload');
  var uploadInput = $('#account-setup-image-uploader-input');
  var cropperModal = $('#account-setup-image-cropper');
  var cropperSwitch = $('#account-setup-image-uploader-button');
  var cropperSave = $('#cropper-save');
  var cropper = new Cropper(document.getElementById('cropper-image'), {
    dragMode: 'none',
    aspectRatio: 1,
    rotatable: false
  });
  cropperSave.on('click', function () {
    var url = cropper.getCroppedCanvas({
      width: 180,
      height: 180
    }).toDataURL();
    accountImg.attr('src', url);
    cropperModal.modal('hide');
  });
  uploadBtn.on('click', function () {
    uploadInput.click();
  });
  uploadInput.on('change', function () {
    var reader = new FileReader();

    reader.onload = function () {
      cropper.replace(reader.result);
      cropperSwitch.click();
      uploadInput.value = '';
    };

    reader.readAsDataURL(this.files[0]);
  });
});