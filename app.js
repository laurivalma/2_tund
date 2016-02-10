(function(){
  "use strict";

  var Moosipurk = function(){

    //SINGELTON PATTERN
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; //this viitab moosipurgile

    console.log(this);

    //kõik muutujad mis on üldised ja millegi sees
    this.click_count= 0;

    //panen rakenduse tööle
    this.init();
  };

  //kõik moosipurgi funktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus käivitus');
      //siia tuleb esialgne loogika
      //hakka kuulama hiire klõpse
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
    },
    addNewClick: function(event){
      //console.log(event);
      this.click_count++;
      console.log(this.click_count);
    }
  };

  window.onload = function(){
    var app = new Moosipurk();
  };



})();
