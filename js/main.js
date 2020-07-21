$(function() {
    $('.bxslider').bxSlider({
      captions:false,
      auto:true,
      autoControls:false,
      stopAutoOnclick:true,
    });
$('.all_labo a').each(function(){
  var img = $(this) .find('img');
  var src_off = img .attr('src');
  var src_on = src_off .replace('off','on'); 

 $(this).hover(function(){img.attr('src',src_on)},
       function(){img.attr('src',src_off)});
  });
  $(function() {
    $('.bxslider2').bxSlider({
      captions:false,
      auto:true,
      autoControls:false,
      stopAutoOnclick:true,
    });
  });
});
