const url = 'https://vnno-vn-5-tf-mp3-s1-zmp3.zadn.vn/01318d6c272bce75973a/2540879074278059846?authen=exp=1609418068~acl=/01318d6c272bce75973a/*~hmac=6646474a06cac68845a0d3765e0fa600&fs=MTYwOTI0NTI2ODmUsIC3OHx3ZWJWNnwwfDEyMy4yMS4yNTIdUngMTk3'

// Constructor
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    audio: [{
        name: 'nàng thơ... trời giấu trời mang đi',
        artist: 'AMEE, Hoàng Dũng',
        url: url,
        lrc: "https://static-zmp3.zadn.vn/lyrics/c/1/6/d/c16dd8af6ad7357b37fc1741bbdadef8.lrc",
        cover: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/7/a/4/87a40c0cbc8b577200b822eb4325bfdb.jpg'
    }
    ]
});

// Mini <--> Normal
function changeMode() {
    if (ap.mode == 'mini') {
        ap.setMode('normal');
        $('#aplayer').removeClass('miniPlayer');
        $('#aplayer').addClass('myCssPlayer');
        return;
    }
    $('#aplayer').removeClass('myCssPlayer');
    $('#aplayer').addClass('miniPlayer');
    ap.setMode('mini');
}

function player(identifier, callback) {
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

// Get info Music [name, artist, url, cover]
function playOne(song) {
    ap.list.clear();
    ap.list.add(song);
    $('.aplayer-lrc-contents').css('transform', 'translateY(0px)');
    ap.play();
}

