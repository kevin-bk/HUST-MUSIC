$('.myCssPlayer').append('<i class="fas fa-chevron-circle-down player-down"></i>');
$('.myCssPlayer').append('<i class="fas fa-thumbtack ghim" data-id="0"></i>');


$('.player-down').click(function(){
    changeMode();
    $('.player-up').css('display','inline');
});

$('.player-up').click(function(){
    changeMode();
    $('.player-up').css('display','none');
});

$('.ghim').click(function(){
    if ($('.ghim').data('id') == 0){
        $('.ghim').addClass('ghim-active');
        $('.myCssPlayer').addClass('player-ghim');
        $('.player_container').addClass('ghim-tigger');
        $('.ghim').data('id', 1);
        return;
    }
    $('.ghim').data('id', 0);
    $('.myCssPlayer').removeClass('player-ghim');
    $('.player_container').removeClass('ghim-tigger');
    $('.ghim').removeClass('ghim-active');
})

function getChart(){
    $('#component').load('../components/chart.html');
}


