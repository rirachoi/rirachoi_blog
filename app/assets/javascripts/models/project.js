$(document).ready(function(){

  // var $currentProjectId =  $('#currentProjectId').text();
  // var $projectTitle = $('#projectTitle').text();
  // var $projectDate = $('#projectDate').text();
  // var $mainImage = $('#mainImage').text();

  // $.ajax({
  //     url: '/projects/' + $currentProjectId,
  //     method: 'post',
  //     dataType: 'json',
  //     data:{
  //       id: $currentProjectId,
  //       title: $projectTitle,
  //       date: $projectDate,
  //       description: 'This is ' + $projectTitle +' ('+ $projectDate+ ')',
  //       main_image: $mainImage,
  //       // images: $images,
  //       // image_description: $image_description
  //     },
  //     success: function(response) {
  //       console.log(response)
  //   }
  // });
  $(window).resize(function(){
    $('#description_with_images').height($(window).height());
  });

});