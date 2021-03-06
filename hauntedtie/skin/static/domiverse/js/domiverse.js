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
        $('html,body').animate({scrollTop: aTag.offset().top - menu.height()},'slow')
    }

    $("#menu-principal a").click(function(e) {
        e.preventDefault();
        href = $(this).attr('href');
        scrollToAnchor(href);
        return false;
    });

    $("#icon-backtotop a").click(function(e) {
        e.preventDefault();
        href = $(this).attr('href');
        scrollToAnchor(href);
        return false;
    });

    // Fix menu to top
    $(window).scroll(function(e){
      var $el = $('#section-menu');
      var $backtotop = $('#icon-backtotop');
      var headerHeight = $('#section-header').css('height');
      var headerHeightInt = $('#section-header').height();
      if ($(this).scrollTop() > headerHeightInt){
        $el.css({'position': 'fixed', 'top': '0px'});
        $backtotop.fadeIn(400);
      }
      if ($(this).scrollTop() < headerHeightInt)
      {
        $el.css({'position': 'absolute', 'top': headerHeight});
        $backtotop.fadeOut(400);
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

    // Fix error tabs is loading the whole page: http://stackoverflow.com/questions/13837304/jquery-ui-non-ajax-tab-loading-whole-website-into-itself
    $("#fighters-tabs ul li a").each(function() {
        $(this).attr("href", location.href.toString()+$(this).attr("href"));
});
    // I renamed jquery ui "ui.tabs" onto "ui.tabsui" to not conflict with jquery tools of plone
    $( "#fighters-tabs" ).tabsui();

    // Faces link
    $(".faces-link").click(function(){
        manual_index = $(this).attr('manual_index');
        scrollToAnchor("#section-fighters");
        $( "#fighters-tabs" ).tabsui( "option", "active", manual_index );
        pauseDomiverseVideo();
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
