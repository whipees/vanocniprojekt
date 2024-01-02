
var color = "white";
var shown = true;
var repeatS = false;


const player = document.getElementById('player');
const playBtn = document.getElementById('play');
const music = document.getElementById('music');
const progress = document.getElementById('progress');
const songName = document.getElementById('songName');
const image = document.getElementById('image');
const nowPlaying = document.getElementById('nowPlaying');
const repeat = document.getElementById('repeat');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const darkmode = document.getElementById('darkmode');
const showPlaylist = document.getElementById('showPlaylist');



const songs = ['On Sight', 'Kitchen Sink', 'ruby'];


//toggle darkmode
function dark() {
	if( color === "black"){
        document.getElementById("player").style.backgroundColor = "#212427";
        document.getElementById("player").style.color = "white";
        document.getElementById("play").style.color = "white";
        document.getElementById("list").style.color= "white";
        document.getElementById("list").style.backgroundColor = "#212427"
        color = "white";	
    }
    else if(color = "white"){
        document.getElementById("player").style.backgroundColor = "white";
        document.getElementById("player").style.color = "#212427";
        document.getElementById("play").style.color = "#212427";
        document.getElementById("list").style.color= "#212427";
        document.getElementById("list").style.backgroundColor = "white"
        color = "black";
  }
}


//show playlist / hide
function playlist(){
  if(shown){
   document.getElementById("list").style.display = "flex";
   shown = false; 
  }
  else if(!shown){
    document.getElementById("list").style.display = "none"; 
    shown = true;
  }
  
}


let index = 2;

//load song from array and change image and text
loadSong(songs[index]);

function loadSong(song) {
  songName.innerText = song;
  music.src = `music/${song}.mp3`;
  image.src = `image/${song}.jpg`;
}


//now playing text update in playlist
playlistShow(songs[index]);
function playlistShow(song){
  nowPlaying.innerText = song;  
}


//play button, change icon to pause or play
function playSong() {
  player.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  music.play();
}



function pauseSong() {
  player.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  music.pause();
}

//button for previous song 
function prevSong() {
  index--;

  if (index < 0) {
    index = songs.length - 1;
  }

  loadSong(songs[index]);
  playlistShow(songs[index]);

  playSong();
}

//button for next song, checks if repeat song is on
function nextSong() {
  if(repeatS){
    repeat.style.color = "#b3b3b3";

    loadSong(songs[index]);
    playSong();
    repeatS = false;
  }
else {
    index++;

  if (index > songs.length - 1) {
    index = 0;
  }

  loadSong(songs[index]);
  playlistShow(songs[index]);

  playSong();  
}

}

//repeat changes color of button and sets repeat to true

function repeatSong(){
  repeat.style.color = "black";
  repeatS = true ;
}


//event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = player.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
repeat.addEventListener('click', repeatSong);
music.addEventListener('ended', nextSong);
darkmode.addEventListener('click', dark);
showPlaylist.addEventListener('click', playlist);


