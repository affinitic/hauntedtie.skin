// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var domiverseYoutubePlayer;
function onYouTubeIframeAPIReady() {
domiverseYoutubePlayer = new YT.Player('domiverse-youtube-video', {
  events: {
    'onReady': onPlayerReady
  }
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
}

function stopDomiverseVideo() {
    domiverseYoutubePlayer.stopVideo();
}

function pauseDomiverseVideo() {
    domiverseYoutubePlayer.pauseVideo();
}

function playDomiverseVideo() {
    domiverseYoutubePlayer.playVideo();
}
