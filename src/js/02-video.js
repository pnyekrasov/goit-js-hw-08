import Player from "@vimeo/player";
import throttle from "lodash.throttle";  

const dataVideoEl = document.getElementById('vimeo-player');

const player = new Player(dataVideoEl);
player.on('timeupdate', throttle(handlePlay, 1000));

function handlePlay(e) { 
    localStorage.setItem("videoplayer-current-time", e.seconds)
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));


