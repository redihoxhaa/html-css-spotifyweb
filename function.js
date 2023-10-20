function play() {
    const audio = document.getElementById('canzone');
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