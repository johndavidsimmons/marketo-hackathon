'use strict';

module.exports = function(settings, trigger) {
  if (MktoForms2) {
    MktoForms2.whenReady(function handleReady(form) {
      form.onValidate(function handleValidate(validateForm) {
        // wait for the error message to appear
        setTimeout(function() {
          var element, mktoErrorMsg;
          window.formValid = form;

          // check for error message
          element = document.querySelector(".mktoErrorMsg");
          if (element) {
            var mktoErrorField = document.querySelector(".mktoError").previousSibling.getAttribute('name');
            var mktoErrorMsg = element.textContent || element.innerText;
            var mktoError = mktoErrorField + ":" + mktoErrorMsg
            //Trigger the Launch event
            trigger;
            //TODO: Capture MKTO error in a data element?
            console.log(mktoError);
          }
        }, 50); //timeout
      }); //onvalidate
    }); //whenready
  } //if
};