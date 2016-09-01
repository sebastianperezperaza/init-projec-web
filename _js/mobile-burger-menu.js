$(document).ready(function() {
  $('.container-burger').click(function(){
    $(this).toggleClass('is-open');
    $('.menu-items-wraper').slideToggle('fast');

  });
  $(window).on('resize orientationChange', function(event){
    var width = $(window).width();

    $('.container-burger').removeClass('is-open');
    if (width > 947) {
        $('.menu-items-wraper').show();
    }
    else{
        $('.menu-items-wraper').hide();
    }

  });
});
