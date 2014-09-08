
$(document).ready(function(){

  var createWeekContainer = function(response){

    for(var i=0; i<(response.length); i++){
      var $weekContainer = $('<div/>')
            .addClass("weekContainer ");
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
    $('#Week1 .img-container .homeworkIMG').attr('src','/assets/weeks/happytails.gif');
    $('#Week1 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk1d5/happitails');

    $('#Week2 .img-container .homeworkIMG').attr('src','/assets/weeks/mta.gif');
    $('#Week2 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk2d4/mta_2');

    $('#Week3 .img-container .homeworkIMG').attr('src','/assets/weeks/alls_watch.gif');
    $('#Week3 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk3d3/alls_watch');

    $('#Week4 .img-container .homeworkIMG').attr('src','/assets/weeks/book_keeper.gif');
    $('#Week4 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk4d3/book_keeper');

    $('#Week5 .img-container .homeworkIMG').attr('src','/assets/weeks/soluho_calendar.gif');
    $('#Week5 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/SOLUHO_calendar');
    $('#Week5 .img-container .homeworks p').text('Project 1');
    $('#Week5 .img-container > span').css({'vertical-align':'top'});

    $('#Week6 .img-container .homeworkIMG').attr('src','/assets/weeks/imageslider.gif');
    $('#Week6 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk6d5/carousel');

    $('#Week7 .img-container .homeworkIMG').attr('src','/assets/weeks/paintr.gif');
    $('#Week7 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk7d1/paintr');

    $('#Week8 .img-container .homeworkIMG').attr('src','/assets/weeks/fireball.gif');
    $('#Week8 .img-container .show-me-the-code').attr('href','https://github.com/lyntco/fireball');
    $('#Week8 .img-container .homeworks p').text('Project 2');
    $('#Week8 .img-container > span').css({'vertical-align':'top'});

    $('#Week9 .img-container .homeworkIMG').attr('src','/assets/weeks/todo.gif');
    $('#Week9 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/WDI5-homework-rirachoi/tree/master/wk9d1/todos');

    $('#Week10 .img-container').hide();

    $('#Week11 .img-container').hide();

    $('#Week12 .img-container .homeworkIMG').attr('src','/assets/weeks/worldmapnews.gif');
    $('#Week12 .img-container .show-me-the-code').attr('href','https://github.com/rirachoi/world_map_news');
    $('#Week12 .img-container .homeworks p').text('Project 3');
    $('#Week12 .img-container > span').css({'vertical-align':'top'});
  }

  var createHeader = function(){
    var letterContainer = $('<div id="letter-container"><div/>').addClass('letter-container');
    var weekHeader = $('<h2><a href="#">Web development Immersive<a/><h2/>');
    letterContainer.append(weekHeader);
    $('.weeks-index').before(letterContainer);
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
      $(this).toggleClass('boxAnimation-target')
      $('.week_details').fadeOut(500);
      $('#container').animate({marginLeft:-20+'%'}, 1000);
      $('.week_details').animate({right:15+'%'}, 1000, function(){
        $("html, body").animate({ scrollTop: ($('#container').height()+200) }, 'slow')
        $('.week_details').fadeIn(700);
        $('.week_details div').hide();
        $('#Week'+week_num).fadeIn(300);
        $this = $(this)
        $this.animate({marginRight:-15+'%'}, 500);
      }); // end of week_details animation
    }); //end of click weekContaine

  }); //end of weeks ajax

  createHeader();

  $('.btn-close').on('click',function(){
    $('.week_details').hide();
    $('#container').animate({marginLeft:0}, 1000);
  });

}); // end of document.ready