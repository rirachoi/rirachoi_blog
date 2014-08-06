var $currentWindowHeight = $(window).height();

$(document).ready(function(){


  var $currentProjectId = $('#currentProjectId').text();
  if (! $currentProjectId) {
    return;
  }

  $.ajax({
    url:'/projects/' + $currentProjectId,
    dataType: 'json'
  }).done(function(res){

    var $des_image = res.image_description
    for(var g=0; g<$des_image.length; g++){
      var $img = $('<img/>').addClass('des_image');
      $img.attr('src', $des_image[g]).css({'height':$currentWindowHeight+'px;'});
      $('#images_details').append($img);
    }


  });


});



