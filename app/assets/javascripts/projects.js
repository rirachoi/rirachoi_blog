$(document).ready(function(){
//////////////// show Preview imgs
  var showProjectPreview = function() {
    var d=300;
    $('.best_homeworks img').each(function(){
        var $this = $(this);
        var r=Math.floor(Math.random()*41)-20;

        $this.css({
            '-moz-transform':'rotate('+r+'deg)',
            '-webkit-transform':'rotate('+r+'deg)',
            'transform':'rotate('+r+'deg)'
            });
            // $('#content').css({
            //     '-moz-transform':'rotate('+5+'deg)',
            //     '-webkit-transform':'rotate('+5+'deg)',
            //     'transform':'rotate('+5+'deg)'
            //     });

        // main_images animation
        $this.stop().animate({
            'marginTop':'-10px'
        },d+=150);

    });
  }; //end showProjectPreview

  $('#content').hide();
  showProjectPreview();

/////////////// imgs hover options
  $('.best_homeworks > img').hover(

      function () {
          var $this = $(this);
          $('img',$this).stop().animate({
              'marginTop':'-40px'
          },200);
      },
      function () {
          var $this = $(this);
          $('a',$this).stop().animate({
              'marginTop':'-70px'
          },200);
      }
  ).click(function(){
      $('#content').show();

      var $this = $(this);
      var name = this.className;
      console.log(name)

      $('#content').animate({marginTop:-100}, 1000,function(){
          var $this = $(this);
          var r=Math.floor(Math.random()*41)-20;
          // $this.css({
          //     '-moz-transform':'rotate('+r+'deg)',
          //     '-webkit-transform':'rotate('+r+'deg)',
          //     'transform':'rotate('+r+'deg)'
          //     });
          $('#content div').hide();
          $('#'+name).show();
          $this.animate({marginTop:100}, 500);
      })
  }); //end click
});//end document

