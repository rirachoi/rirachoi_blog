
$(document).ready(function(){
/// navigation js
  $(function() {
    var d=300;
    $('#navigation a').each(function(){
        var $this = $(this);
        var r=Math.floor(Math.random()*41)-20;
        $this.css({
            '-moz-transform':'rotate('+r+'deg)',
            '-webkit-transform':'rotate('+r+'deg)',
            'transform':'rotate('+r+'deg)'
            });
        $this.stop().animate({
            'marginTop':'-70px'
        },d+=150);
    });

    $('#navigation > li').hover(
        function () {
            var $this = $(this);
            $('a',$this).stop().animate({
                'marginTop':'-40px'
            },200);
        },
        function () {
            var $this = $(this);
            $('a',$this).stop().animate({
                'marginTop':'-70px'
            },200);
        }
     )
    });


  //////// contact js
  var createHeader = function(){
    var letterContainer = $('<div id="letter-container"><div/>').addClass('letter-container');
    var weekHeader = $('<h2><a href="#">Contact<a/><h2/>');
    letterContainer.append(weekHeader);
    $('.pages-contact').before(letterContainer);
  }

  var createMsgHeader = function(){
    var letterContainer = $('<div id="letter-container"><div/>').addClass('letter-container');
    var weekHeader = $('<h2><a href="#">I am sorry,<a/><h2/>');
    letterContainer.append(weekHeader);
    $('.pages-about').before(letterContainer);
  }

  var openDoor = function() {
     $('#check').attr('checked', true);
     $('.contact_info').fadeIn(2000);
  }

  var openTimer = setTimeout(openDoor, 1300);
  $('.faceImg').css({'box-shadow':'none'});


  $('#github').on('mouseover', function(){
    $('#github').attr('src', '/assets/pages/github_icon.png');
  });

  $('#github').on('mouseleave', function(){
    $('#github').attr('src', '/assets/pages/github.png');
  });

  createHeader();
  createMsgHeader();

});