let player = {
    isPlaying: false,
    track_index: 0,
    audio: new Audio(),
    name: document.getElementById('player-title'),
    artist: document.getElementById('player-subtitle'),
    controls: {
        play: document.getElementById('player-play'),
        mute: document.getElementById('player-b-volume'),
        volume: document.getElementById('player-volume')
    },
    track_list: [
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
      ]
}

addEventListener("load", (event) => {   
    player.controls.volume.value = 30; 
    player.controls.volume.style.setProperty('--value', player.controls.volume.value);
    player.controls.volume.style.setProperty('--min', player.controls.volume.min == '' ? '0' : player.controls.volume.min);
    player.controls.volume.style.setProperty('--max', player.controls.volume.max == '' ? '100' : player.controls.volume.max);
    player.controls.volume.addEventListener('input', () => {
        player.controls.volume.style.setProperty('--value', player.controls.volume.value);
        player.audio.volume = player.controls.volume.value / 100;
    });
    loadTrack(0);
});

function loadTrack(index){
    player.audio.src = 'music/'+player.track_list[index].path;
    player.audio.load();
    

    player.name.textContent = player.track_list[index].name;
    player.artist.textContent = player.track_list[index].artist;
    
    player.audio.addEventListener("ended", playerNext);
}

function playerPlay(arg = false){
    if(!arg)
    player.isPlaying = !player.isPlaying;
    if(player.isPlaying){
        player.controls.play.setAttribute('aria-label', 'Pause');
        player.audio.play();
    }
    else {
        player.controls.play.setAttribute('aria-label', 'Play');
        player.audio.pause();
    }
}

function playerMute(){
    if(player.audio.muted){
        player.audio.muted = false;
        player.controls.mute.setAttribute('aria-label', 'Mute');
    }
    else {
        player.audio.muted = true;
        player.controls.mute.setAttribute('aria-label', 'Unmute');
    }
}

function playerStop(){
    isPlaying = false;
    player.controls.play.setAttribute('aria-label', 'Play');
    player.audio.pause();
}

function playerNext(){
    if (player.track_index < player.track_list.length - 1) player.track_index += 1;
    else player.track_index = 0;

    loadTrack(player.track_index);
    playerPlay(true);
}