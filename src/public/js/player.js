
// Constructor
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    audio: [{}]
});

// Mini <--> Normal
function changeMode() {
    if (ap.mode == 'mini') {
        ap.setMode('normal');
        $('#aplayer').removeClass('miniPlayer');
        $('#aplayer').addClass('myCssPlayer');
        $('.myCssPlayer').css('display', 'block');
        return;
    }
    $('#aplayer').removeClass('myCssPlayer');
    $('#aplayer').addClass('miniPlayer');
    ap.setMode('mini');
}

ap.on('play', function() {
    $('.aplayer-pic').addClass('aplayer-pic-spin');
});

ap.on('pause', function() {
    $('.aplayer-pic').removeClass('aplayer-pic-spin');
});

// Player
function playSong(identifier, callback) {
    fetch('/api/getInfoMusic/' + $(identifier).data('id'))
        .then(function (res) {
            return res.json();
        })
        .then(song => {
            callback(song);
        })
        .catch(function (err) {
            console.log(err)
            console.log('err occur')
        })
}

function init(){
    $('.aplayer-lrc-contents').css('transform', 'translateY(0px)');
    $('.myCssPlayer').css('display', 'block');
}

function playOne(song) {
    ap.list.clear();
    ap.list.add(song);
    init();
    ap.play();
}

function addToPlaylist(song) {
    ap.list.add(song);
}
