$(document).ready(function(){


  var $currentProjectId = $('#currentProjectId').text();
  if (! $currentProjectId) {
    return;
  }

  // var imageSliceShow = function() {

  //     var Page = (function() {

  //       var $navArrows = $( '#nav-arrows' ).hide(),
  //         $shadow = $( '#shadow' ).hide(),
  //         slicebox = $( '#sb-slider' ).slicebox( {
  //           onReady : function() {

  //             $navArrows.show();
  //             $shadow.show();

  //           },
  //           orientation : 'r',
  //           cuboidsRandom : true,
  //           disperseFactor : 30
  //         } ),

  //         init = function() {

  //           initEvents();

  //         },
  //         initEvents = function() {

  //           // add navigation events
  //           $navArrows.children( ':first' ).on( 'click', function() {

  //             slicebox.next();
  //             return false;

  //           } );

  //           $navArrows.children( ':last' ).on( 'click', function() {

  //             slicebox.previous();
  //             return false;

  //           } );

  //         };

  //         return { init : init };

  //     })();

  //     Page.init();

  //   };

  $.ajax({
    url:'/projects/' + $currentProjectId,
    dataType: 'json'
  }).done(function(res){

    var $des_image = res.image_description
    // for(var g=0; g<$des_image.length; g++){
    //   var $img = $('<img/>').addClass('des_image');
    //   $img.attr('src', $des_image[g]).css({'height':$currentWindowHeight+'px;'});
    //   $('#images_details').append($img);
    // }
    $('#container').hide();
    // imageSliceShow();


  });


});



