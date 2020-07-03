
$(document).ready(function(){
  window.scrollTo(0,0);
  $("#intro-section").delay(2200).slideUp(2000,"swing");
  $('body').css({'overflow':'hidden'});
  $('body')
  .delay(3800)
  .queue(function (next) {
    $('body').css({'overflow':'visible'});
    next();
  });
});
