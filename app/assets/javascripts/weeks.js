
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

  var homeworkIMG = function(){
    $('#Week1 .img-container .homeworkIMG').attr('src','/assets/happytails.gif');
    $('#Week1 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk1d5/happitails');

    $('#Week2 .img-container .homeworkIMG').attr('src','/assets/mta.gif');
    $('#Week2 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk2d4/mta_2');

    $('#Week3 .img-container .homeworkIMG').attr('src','/assets/alls_watch.gif');
    $('#Week3 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk3d3/alls_watch');

    $('#Week4 .img-container .homeworkIMG').attr('src','/assets/book_keeper.gif');
    $('#Week4 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk4d3/book_keeper');

    $('#Week10 .img-container').hide();
    $('#Week11 .img-container').hide();
  }


  $.ajax({
    url: '/weeks',
    dataType: 'json'
  }).done(function(data){

    createWeekContainer(data);
    homeworkIMG();

    $('.weeks > div').on('click', function(event){
      event.preventDefault();
      var week_num = $(this).find('span.weekNum').text();
      $('.week_details').fadeOut(500);
      $('#container').animate({marginLeft:-20+'%'}, 1000);
      $('.week_details').animate({right:20+'%'}, 1000, function(){
        $("html, body").animate({ scrollTop: ($('#container').height()+200) }, 'slow')
        $('.week_details').fadeIn(700);
        $('.week_details div').hide();
        $('#Week'+week_num).fadeIn(300);
        $this = $(this)
        $this.animate({marginRight:-15+'%'}, 500);
      }); // end of week_details animation
    }); //end of click weekContaine

  }); //end of weeks ajax

}); // end of document.ready