
$(document).ready(function(){

  var createWeekContainer = function(response){

    for(var i=0; i<(response.length); i++){
      var $weekContainer = $('<div/>')
            .addClass("weekContainer boxAnimation-target");
      var $idP = $('<p>'+response[i].id+'</p>')
            .addClass("currentWeekId")
      $currentWeekId = $idP.text();
      var $weekLetter = $('<p>Week </p>')
            .addClass('weekLetter')
            .append('<span class="weekNum">'+(i+1)+'</span>');
      $weekContainer.append($weekLetter).append($idP);
      $('.weeks').append($weekContainer);
    }

  }


  $.ajax({
    url: '/weeks',
    dataType: 'json'
  }).done(function(data){

    createWeekContainer(data);


    $('.weeks > div').on('click', function(event){
      event.preventDefault();
      var week_num = $(this).find('span.weekNum').text();
      $('.week_details').fadeOut(1000);
      $('#container').animate({marginLeft:-20+'%'}, 1000);


      $('.week_details').animate({right:20+'%'}, 1000, function(){
        $("html, body").animate({ scrollTop: ($('#container').height()+200) }, 'slow')
        $('.week_details').fadeIn(1000);
        $('.week_details div').hide();
        $('#Week'+week_num).fadeIn(1000);
        $this = $(this)
        $this.animate({marginRight:-15+'%'}, 500);
      }); // end of week_details animation
    }); //end of click weekContaine

  }); //end of weeks ajax

}); // end of document.ready