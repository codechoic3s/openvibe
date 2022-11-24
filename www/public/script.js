var tg = window.Telegram.WebApp

let track_index = 0;
let isPlaying = false;
let player = {
    audio: document.getElementById('a-player'),
    name: document.getElementById('p-name'),
    artist: document.getElementById('p-artist'),
    controls: {
        play: document.getElementById('player-play'),
        stop: document.getElementById('player-pause')
    }
}

let track_list = [
    {
      name: "Session",
      artist: "Delp, YABØII",
      path: "Delp Session.mp3"
    },
    {
      name: "Take me to Church",
      artist: "YABØII",
      path: "YABØII Take me to Church.mp3"
    },
  ];

addEventListener("load", (event) => {    
    loadTrack(0);
    tg.ready();
});


function loadTrack(index){
    player.audio.src = 'music/'+track_list[index].path;
    player.audio.load();

    player.name.textContent = track_list[index].name;
    player.artist.textContent = track_list[index].artist;
    
    player.audio.addEventListener("ended", playerNext);
}

function playerPlay(){
    isPlaying = true;
    player.controls.play.style.display = 'none';
    player.controls.stop.style.display = 'block';
    player.audio.play();
}

function playerStop(){
    isPlaying = false;
    player.controls.stop.style.display = 'none';
    player.controls.play.style.display = 'block';
    player.audio.pause();
}

function playerNext(){
    if (track_index < track_list.length - 1) track_index += 1;
    else track_index = 0;

    loadTrack(track_index);
    playerPlay();
}