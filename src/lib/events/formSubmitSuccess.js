'use strict';

module.exports = function(settings, trigger) {
  // TODO Start watching for an event. Call trigger when the event occurs.
    var MktoForms2 = window.MktoForms2;
    if (MktoForms2) {
    	MktoForms2.whenReady(function handleReady (form) { 
    		form.onSuccess(function handleSuccess(values) {
    			console.log("form submit success")
    			trigger;
    		})
    	}
    }
};
