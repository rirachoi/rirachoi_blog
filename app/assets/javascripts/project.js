var $currentWindowHeight = $(window).height();

$(document).ready(function(){


  var $currentProjectId = $('#currentProjectId').text();
  $.ajax({
    url:'/projects/' + $currentProjectId,
    dataType: 'json'
  }).done(function(response){

    var $des_image = response.image_description
    for(var g=0; g<$des_image.length; g++){
      var $img = $('<img/>').addClass('des_image');
      $img.attr('src', $des_image[g]).css({'height':$currentWindowHeight+'px;'});
      $('#images_details').append($img);
    }


  });


});

