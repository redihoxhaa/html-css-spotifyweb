function play() {
    const audio = document.getElementById('never');
    const play = document.querySelector('#play');
    if (audio.paused) {
        audio.play();
        play.classList.add('fa-circle-pause');
        play.classList.remove('fa-circle-play');
    } else {
        audio.pause();
        play.classList.add('fa-circle-play');
        play.classList.remove('fa-circle-pause');
    }
}

function restart() {
    const audio = document.getElementById('never');
    const play = document.querySelector('#play');
    audio.play();
    audio.currentTime = 0
    play.classList.add('fa-circle-pause');
    play.classList.remove('fa-circle-play');
}

function next() {
    const audio = document.getElementById('volevi');
    const play = document.querySelector('#play');
    audio.play();
    audio.volume = 0.2;
    play.classList.add('fa-circle-pause');
    play.classList.remove('fa-circle-play');
}

function stop() {
    const audio = document.getElementById('never');
    const play = document.querySelector('#play');
    audio.pause();
    audio.currentTime = 0
    play.classList.add('fa-circle-play');
    play.classList.remove('fa-circle-pause');
}