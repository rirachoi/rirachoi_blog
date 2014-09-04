// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require lib/jquery.lettering.js
//= require lib/modernizr.custom.46884.js
//= require lib/modernizr.custom.40443.js
//= require lib/jquery.typist.js
//= require lib/jquery.typist.min.js
//= require pages.js
//= require weeks.js



$(document).ready(function(){

  $(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.2)+'px');
  }

  $('.week_details').hide();
  $('.pages-index').css({'background':'none'});
  $('.projects-index').css({'background':'none'});
  $("#letter-container h2 a").lettering();

});
