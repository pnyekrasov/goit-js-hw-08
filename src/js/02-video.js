import Player from "@vimeo/player";
    

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
player.on('timeupdate', onPlay);

function onPlay(date) { 
    localStorage.setItem("videoplayer-current-time", date.seconds)
}

const item = localStorage.getItem("videoplayer-current-time"); 

player.setCurrentTime(item);


