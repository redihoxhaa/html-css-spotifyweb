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
    audio.currentTime = 0
    audio.play();
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

function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

function show() {
    document.getElementById('bsod')
        .style.display = "block";
}

function hide() {
    document.getElementById('bsod')
        .style.display = "none";
}

function trumpet() {
    const audio = document.getElementById('sad-trumpet');
    audio.play();
    audio.volume = 0.3;
}