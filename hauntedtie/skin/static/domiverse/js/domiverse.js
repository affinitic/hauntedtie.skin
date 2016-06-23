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
    $("#banner-0").parallax("center", -0.3);
    $("#banner-1").parallax("center", -0.15);
    $("#banner-2").parallax("center", 0);

    // Menu scroll to anchor
    function scrollToAnchor(selector){
        var aTag = $(selector);
        var menu = $("#section-menu");
        $('html,body').animate({scrollTop: aTag.offset().top - menu.height()},'slow');
    }

    $("#menu-principal a").click(function(e) {
        e.preventDefault();
        href = $(this).attr('href');
        scrollToAnchor(href);
        return false;
    });

    // Fix menu to top
    $(window).scroll(function(e){
      var $el = $('#section-menu');
      var headerHeight = $('#section-header').css('height');
      var headerHeightInt = $('#section-header').height();
      if ($(this).scrollTop() > headerHeightInt){
        $el.css({'position': 'fixed', 'top': '0px'});
      }
      if ($(this).scrollTop() < headerHeightInt)
      {
        $el.css({'position': 'absolute', 'top': headerHeight});
      }
    });

    // Jquery UI tabs
    function activateMediaTab(event, ui)
    {
        // Youtube video controller
        var id = ui.newTab.attr('id');
        if (id !== 'video-tab')
        {
            pauseDomiverseVideo();
        }
    }
    $( "#fighters-tabs" ).tabs();

    // Faces link
    $(".faces-link").click(function(){
        href = $(this).attr('href');
        scrollToAnchor("#section-fighters");
        var index = $('#fighters-tabs a[href="'+href+'"]').parent().index();
        $( "#fighters-tabs" ).tabs( "option", "active", index );
    });

    $('#fighters-tabs-faces a').click(function(){
        pauseDomiverseVideo();
    });

    function changeCoversPage(delta)
    {
        var $items = $('#covers-groups').children();
        var $current = $items.filter('.current');
        var index = $current.index();
        var newIndex = index+delta;
        // Range check the new index
        newIndex = (newIndex < 0) ? 0 : ((newIndex > $items.length) ? $items.length : newIndex);
        if (newIndex != index){
            $current.removeClass('current');
            $current = $items.eq(newIndex).addClass('current');
            // Hide/show the next/prev
            $("#prev").toggle(!$current.is($items.first()));
            $("#next").toggle(!$current.is($items.last()));
        }
    }
    $("#next").click(function () {
        changeCoversPage(1);
    });
    $("#prev").click(function () {
        changeCoversPage(-1);
    });


});
