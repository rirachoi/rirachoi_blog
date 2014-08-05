var app = app || {};


$(document).ready(function(){

  // app.weeksView = Backbone.View.extend({
  //   initialize: function() {
  //     console.log('you are appView page');
  //   },

  //   render: function() {

  //   }

  // })// end of weeksView

  // app.Week = Backbone.Model.extend({

  // }) // end of week Model

  // app.Weeks = Backbone.Collection.extend({
  //   url: '/weeks',
  //   model: app.Week
  // })// end of weeks collection


  var createBoxes = function(){

    for(var i=1; i<13; i++){
      $weekContainer = $('<div class="weekContainer boxAnimation-target"></div>');
      $weekLetter = $('<p class="weekLetter">Week <span class="weekNum">'+ i +'</span></p>');
      $shadow = $('<div class="shadow/>');
      $weekContainer.append($weekLetter).append($shadow);
      $('.weeks').append($weekContainer);
    }
  };

  var showWeekDetails = function(){
    console.log('show the project '+ $(event.target).text());

  }

      createBoxes();

  $('.weekContainer').on('click', showWeekDetails);

}); // end of document.ready