  $(window).scroll(function() {
      var windowWidth = $().width();
      var windowHeight = $(this).height();
      var windowScrollTop = $(this).scrollTop();
  });

  // effect - No4
  var thirdAnimation = function() {
    $('.blogs').find('p').delay(1400).animate({
      opacity: 1,
      left: 0
    }, 'slow');
    $('.blogs').find('img').delay(2000).animate({
      opacity: 1,
      right: 0
    }, 'slow');

  };


