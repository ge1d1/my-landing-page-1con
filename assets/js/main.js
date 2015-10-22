  $(window).scroll(function() {
      var windowWidth = $().width();
      var windowHeight = $(this).height();
      var windowScrollTop = $(this).scrollTop();
  });

  // effect - No4
  var thirdAnimation = function() {
    $('.section4').find('h2cat').delay(1400).animate({
      opacity: 1,
      left: 0
    }, 'slow');
    $('.section4').find('img5').delay(2000).animate({
      opacity: 1,
      right: 0
    }, 'slow');

  };


