$(function() {

  var $w = $(window),
      $background = $('#banner'),
      $nameOffset = $('.Banner-name').offset().top,
      $onMobile = false;

  // Fix background image jump on mobile
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $background.css({'top': 'auto', 'bottom': 0, 'background-attachment': 'scroll'});
    $onMobile = true;

    $w.resize(sizeBackground);
    sizeBackground();
  }

  $w.scroll(scrollBehavior);
  scrollBehavior();

  function sizeBackground() {
    $background.height(screen.height - 124);
  }

  function scrollBehavior() {
    var $scroll = $w.scrollTop(),
        $aboutDiv = $('#about').offset().top;

    // Change styling of header once user scrolls to about section
    if($scroll + 100 > $aboutDiv) {
      $('header').addClass('header-bottom');
      $('.header-separator').css({'background-color': 'rgba(0, 0, 0, 0.172549)'});
    }
    else {
      $('header').removeClass('header-bottom');
      $('.header-separator').css({'background-color': 'rgba(255, 255, 255, 0.172549)'});
    }

    // Handle position of banner text when scrolling (disabled on mobile)
    if($scroll >= $nameOffset && $onMobile === false) {
      $('.Banner-name').css({'position': 'absolute', 'top': '80%'});
      $('.Banner-title').css({'position': 'absolute', 'top': '86%'});
    }
    else if($scroll < $nameOffset && $onMobile === false) {
      $('.Banner-name').css({'position': 'fixed', 'top': '40%'});
      $('.Banner-title').css({'position': 'fixed', 'top': '46%'});
    }

  }

});
