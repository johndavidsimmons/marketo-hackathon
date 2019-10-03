'use strict';

module.exports = function(settings, trigger) {
  // TODO Start watching for an event. Call trigger when the event occurs.
  
  if (MktoForms2) {
    
    MktoForms2.whenReady(function handleReady(form) {
      var mrk_form_loaded = true;
      console.log("still there");  
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
            trigger;
            console.log("error occured");
          }


        }, 50); //timeout
      }); //onvalidate
    }); //whenready
  } //if
};