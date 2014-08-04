
$(document).ready(function(){

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