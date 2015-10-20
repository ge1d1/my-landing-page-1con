  $(window).scroll(function() {
      var windowWidth = $().width();
      var windowHeight = $(this).height();
      var windowScrollTop = $(this).scrollTop();
  });

  var thirdAnimation = function() {
     $('.section4').find('h2cat').delay(1400).animate({
      left: 0
    }, 'slow');
     $('.section4').find('img5').delay(2000).animate({
      right: 0
    }, 'slow');
 };
     if (windowScrollTop > 3500) {
      $('.section4').css();
      thirdAnimation();
    }
     } else if (windowWidth > 300 && windowWidth <= 995) {
     if (windowScrollTop > 480) {
      $('.section4').css();
      thirdAnimation();
    }
     if (windowScrollTop > 1600) {
      $('.section4').css();
      thirdAnimation();
    }
     if (windowScrollTop > 2200) {
      $('.section4').css();
      thirdAnimation();
    }
  };

