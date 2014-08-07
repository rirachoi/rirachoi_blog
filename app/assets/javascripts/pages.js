
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

  /// contact js

    // $('#container').css({'background':'none'});
    $('.faceImg').hide();

    $('#check').on('click', function(){
        $('.faceImg').fadeIn('slow').css({'box-shadow':'none'});
        // $('#der').css({'top': 310+'px'})
    });
});