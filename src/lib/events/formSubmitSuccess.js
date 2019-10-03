'use strict';

module.exports = function(settings, trigger) {
  var MktoForms2 = window.MktoForms2;
  if(MktoForms2) {
    MktoForms2.whenReady(function handleReady (form) { 
      form.onSuccess(function handleSuccess (values) {
        console.log("submitSuccess"); 
        trigger; 
      })
    })
  } 
}
