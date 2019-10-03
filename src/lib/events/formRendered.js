'use strict';

module.exports = function(settings, trigger) {
  // TODO Start watching for an event. Call trigger when the event occurs.
  var mrk_form_loaded=false; 
  var MktoForms2 = window.MktoForms2;
  var mktoFormId, mktoMunchkinId;
  if (MktoForms2) {
      
      MktoForms2.whenReady(function handleReady (form) {
        console.log("FORM RENDER")
        mktoFormId = form.getId();
        mktoMunchkinId = form.getValues().munchkinId;
        mrk_form_loaded=true;
        trigger();
      });
  }
};