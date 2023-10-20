function play() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        $('#play').removeClass('fa-regular fa-circle-play')
        $('#play').addClass('fa-regular fa-circle-pause')
    } else {
        audio.pause();
        audio.currentTime = 0
        $('#play').addClass('fa-regular fa-circle-play')
        $('#play').removeClass('fa-regular fa-circle-pause')
    }
}