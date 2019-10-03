'use strict';

module.exports = function(settings, trigger) {
  // TODO Start watching for an event. Call trigger when the event occurs.
  if (MktoForms2) {
    MktoForms2.whenReady(function handleReady(form) {

      digitalData.page.pageInfo.mktoFormId = form.getId();
      digitalData.page.pageInfo.mktoMunchkinId = form.getValues().munchkinId;
      mrk_form_loaded = true;

      form.onValidate(function handleValidate(validateForm) {
        // wait for the error message to appear
        setTimeout(function() {
          var element, mktoErrorMsg;
          window.formValid = form;

          // check for error message
          element = document.querySelector(".mktoErrorMsg");
          if (element) {

            var mktoErrorField = document.querySelector(".mktoError").previousSibling.getAttribute('name');
            mktoErrorMsg = element.textContent || element.innerText;
            mktoError = mktoErrorField + ":" + mktoErrorMsg

            var mktoError = mktoErrorField + ":" + mktoErrorMsg
            trigger();
          }


        }, 50); //timeout
      }); //onvalidate
    }); //whenready
  } //if
};