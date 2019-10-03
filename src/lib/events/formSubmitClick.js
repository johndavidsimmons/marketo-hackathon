'use strict';

module.exports = function(settings, trigger) {
  var MktoForms2 = window.MktoForms2;
  if (MktoForms2) {
    MktoForms2.whenReady(function handleReady (form) { 
        var button =  document.querySelector("button.mktoButton:first-of-type");
        // Optimize to only include the current form going forward
        button.addEventListener("click", function(event){
          //event.preventDefault();
          trigger; 
          console.log("submit"); 
        });
    }); 
  };
};


