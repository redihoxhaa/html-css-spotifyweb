function play() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        $('#play').removeClass('fa-circle-play')
        $('#play').addClass('fa-circle-pause')
    } else {
        audio.pause();
        audio.currentTime = 0
        $('#play').addClass('fa-circle-play')
        $('#play').removeClass('fa-circle-pause')
    }
}