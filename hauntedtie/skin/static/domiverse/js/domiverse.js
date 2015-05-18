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
});
