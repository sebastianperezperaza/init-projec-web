$(document).ready(function() {
  $('.container-burger').click(function(){
    $(this).toggleClass('is-open');
    $('.menu-items-wraper').slideToggle('fast');
    $('.menu-items-wraper').toggleClass('is-expanded');

  });
  $('.dropdown-button').click(function(){
    $(this).toggleClass('is-open');
    $('.menu-items-wraper').slideToggle('fast');
    //$('.menu-items-wraper').toggleClass('is-expanded');

  });
});
