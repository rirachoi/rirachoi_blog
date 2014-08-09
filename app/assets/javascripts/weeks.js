
$(document).ready(function(){

  $.ajax({
    url: '/weeks',
    dataType: 'json'
  }).done(function(response){

    for(var i=0; i<(response.length); i++){
      var $weekContainer = $('<div class="weekContainer boxAnimation-target"></div>');
      var $idP = $('<p class="currentWeekId" style="display:none;">'+response[i].id+'</p>');
      $currentWeekId = $idP.text();
      var $weekLetter = $('<p class="weekLetter">Week <span class="weekNum">'+ (i+1) +'</span></p>');
      $weekContainer.append($weekLetter).append($idP);
      $('.weeks').append($weekContainer);
      $('.week_details').hide();
    }


    $('.weeks > div').on('click', function(event){
      $('.week_details').show();

      var week_num = $(this).find('span.weekNum').text();
        $('.week_details').animate({marginTop:-100}, 1000, function(){
          $('.week_details div').hide();
          $('#Week'+week_num).show();
          $this = $(this)
          $this.animate({marginTop:100}, 500);
        }); // end of week_details animation

      }); //end of click weekContaine

  }); //end of weeks ajax


/////////// after click the week container /////////





}); // end of document.ready