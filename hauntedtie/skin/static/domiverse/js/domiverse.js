jQuery(document).ready(function ($) {
    
    $("#mute-container").click(function () {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
        } else {
            $("video").prop('muted', true);
        }
        $("#mute").toggle();
        $("#unmute").toggle();
    });
   
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding : 0
    });

    // Add parallax to banner
    $("#banner-0").parallax("100%", -0.3);
    $("#banner-1").parallax("100%", -0.15);
    $("#banner-2").parallax("100%", 0);

    // Menu scroll to anchor
    function scrollToAnchor(selector){
        var aTag = $(selector);
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

    $("#nav a").click(function(e) {
        e.preventDefault();
        href = $(this).attr('href');
        scrollToAnchor(href);
        return false;
    });

    // Fix menu to top
    $(window).scroll(function(e){
      var $el = $('#section-menu');
      if ($(this).scrollTop() > 720){
        $el.css({'position': 'fixed', 'top': '0px'});
      }
      if ($(this).scrollTop() < 720)
      {
        $el.css({'position': 'absolute', 'top': '720px'});
      }
    });
});
