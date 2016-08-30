$(document).ready(function() {
  $('.container-burger').click(function(){
    $(this).toggleClass('is-open');
    $('.menu-items-wraper').toggleClass('is-open');
  });
});
