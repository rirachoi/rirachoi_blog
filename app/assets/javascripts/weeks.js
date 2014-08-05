
var $currentWeekId;

$(document).ready(function(){

  var showWeekDetails = function(){
    console.log('show the project '+ $(event.target).text());

  }

  $.ajax({
    url: '/weeks',
    dataType: 'json'
  }).done(function(response){

    for(var i=0; i<(response.length); i++){
      var $weekContainer = $('<div class="weekContainer boxAnimation-target"></div>');
      var $idP = $('<p id="currentWeekId" style="display:none;">'+response[i].id+'</p>');
      $currentWeekId = $idP.text();
      var $weekLetter = $('<p class="weekLetter">Week <span class="weekNum">'+ (i+1) +'</span></p>');
      $shadow = $('<div class="shadow/>');
      $weekContainer.append($weekLetter).append($idP).append($shadow);
      $('.weeks').append($weekContainer);
    }
  });


/////////// after click the week container /////////

  $('.weekContainer').on('click', function(event){
      $.ajax({
        url: '/prjects/'+ $currentWeekId,
        dataType: 'json'
      }).done(function(r){
        console.log(r);
        console.log(r.title);
        console.log(r.proejcts);
      });




  });






}); // end of document.ready