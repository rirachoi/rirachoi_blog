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

        // main_images animation
        $this.stop().animate({
            'marginTop':'-10px'
        },d+=150);

    });
  }; //end showProjectPreview

  $('#content').hide();
//////calling project preview
  showProjectPreview();

////////hover image preview
imagePreview = function(){
    xOffset = -20;
    yOffset = 40;

    $("a#preview").hover(function(e){
        this.t = this.title;
        this.title = "";
       var c = (this.t != "") ? "<br/>" + this.t : "";
         $("#content").append("<p id='preview_img'><img src='"+ this.href +"' alt='Image preview'/>"+ c +"</p>");
         $("#preview_img")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px")
            .fadeIn('slow')
            .addClass('boxAnimation-target');
    },

    function(){
        this.title = this.t;
        $("#preview_img").remove();

    });

    $("a#preview").mousemove(function(e){
        $("#preview_img")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px");
    });
};// end of preview image

/////////////// main_imgs click
  $('.best_homeworks > img').on('click', function(){
      $('#content').show();
//
      var name = this.className;

      $('#content').animate({marginTop:-100}, 1000,function(){
        var $this = $(this);

        $('#content div').hide();
        $('#'+name).show();
        imagePreview();
    ///wtf
          // $('.images').on('mouseover', function(){
          //   var $this = $(this);
          //   $this.toggleClass('mainIMG');
          // });

        $this.animate({marginTop:100}, 500);
      })
  }); //end click

});//end document

