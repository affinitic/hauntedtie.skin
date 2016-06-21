// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var domiversevideos = [];

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var domiverseYoutubePlayer;
function onYouTubeIframeAPIReady() {
    var tuto_ids = ['tuto-nili',
                    'tuto-glo',
                    'tuto-ash',
                    'tuto-xand',
                    'tuto-shluuuups',
                    'tuto-wat',
                    'tuto-snakity',
                    'tuto-uzal'];
    for (tuto_id of tuto_ids)
    {
        domiversevideos.push(new YT.Player(tuto_id, {
          events: {
            'onReady': onPlayerReady
          }
        }));
    }
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
}

function stopDomiverseVideo() {
    for (video of domiversevideos)
    {
        video.stopVideo();
    }
}

function pauseDomiverseVideo() {
    for (video of domiversevideos)
    {
    if (video.getPlayerState() === 1)
        video.pauseVideo();
    }
}

function playDomiverseVideo() {
    for (video of domiversevideos)
    {
        video.playVideo();
    }
}
