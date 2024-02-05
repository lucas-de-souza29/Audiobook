const btnPrevious = document.getElementById('previous');
const btnPlayPause = document.getElementById('play-pause');
const btnNext = document.getElementById('next');
const audioChapter = document.getElementById('audio-chapter');
const nroChapter = document.querySelector('#chapter');
const nroChapters = 9;

let currentChapter = 1;
let isPlaying = 0;

function playAudio() {
    audioChapter.play();
    btnPlayPause.classList.remove('bi-play-circle-fill');
    btnPlayPause.classList.add('bi-pause-circle-fill');
}

function pauseAudio() {
    audioChapter.pause();
    btnPlayPause.classList.remove('bi-pause-circle-fill');
    btnPlayPause.classList.add('bi-play-circle-fill');
}

function playOrPause() {
    if(isPlaying === 0) {
       playAudio();
       isPlaying = 1;
    } else {
       pauseAudio();
       isPlaying = 0;
    }
}

function switchChapter() {
    nroChapter.innerText = `Capítulo ${currentChapter}`;
}

function skipForwardChapter() {
    if(currentChapter === nroChapters) {
       currentChapter = 1;
    } else {
       currentChapter +=1;
    }
    audioChapter.src = `./books/iracema/${currentChapter}.mp3`;
    playAudio();
    isPlaying = 1;
    switchChapter();
} 

function skipBackwardChapter() {
    if(currentChapter === 1) {
       currentChapter = nroChapters;
    } else {
       currentChapter -=1;
    }
    audioChapter.src = `./books/iracema/${currentChapter}.mp3`;
    playAudio();
    isPlaying = 1;
    switchChapter();
}


btnPlayPause.addEventListener('click', playOrPause);
btnNext.addEventListener('click', skipForwardChapter);
btnPrevious.addEventListener('click', skipBackwardChapter);
