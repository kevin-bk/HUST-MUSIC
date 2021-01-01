var isFirst = true;
var isPlayed = false;
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

// ap.on('ended', function () {
//     playSong('#autoPlayNext', playOne);
// });

// Player
function playSong(identifier, callback) {
    fetch('/api/getInfoMusic/' + $(identifier).data('id'))
        .then(function (res) {
            return res.json();
        })
        .then(song => {
            $('#autoPlayNext').data('id',song.next);
            if (isFirst){
                $('.player-down').click();
                isFirst = false;
            }
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
    // $("html, body").animate({ scrollTop: 0 }, "slow");
}

function playOne(song) {
    isPlayed = true;
    ap.list.clear();
    ap.list.add(song);
    init();
    ap.play();
}

function addToPlaylist(song) {
    if (!isPlayed){
        ap.list.clear();
        isPlayed = true;
    }
    ap.list.add(song);
    ap.list.hide();
    ap.play();
}

// init()