
$('.myCssPlayer').append('<i class="fas fa-chevron-circle-down player-down"></i>');
$('.myCssPlayer').append('<i class="fas fa-thumbtack ghim" data-id="0"></i>');


$('.player-down').click(function(){
    changeMode();
    $('.player-up').css('display','block');
    $('.player-down').css('display','none');
});

$('.player-up').click(function(){
    changeMode();
    $('.player-up').css('display','none');
    $('.player-down').css('display','block');
});

$('.ghim').click(function(){
    if ($('.ghim').data('id') == 0){
        $('.ghim').addClass('ghim-active');
        $('.myCssPlayer').addClass('player-ghim');
        $('.player_container').addClass('ghim-tigger');
        $('.ghim').data('id', 1);
        $('.player-down').css('display','none');
        return;
    }
    $('.ghim').data('id', 0);
    $('.myCssPlayer').removeClass('player-ghim');
    $('.player_container').removeClass('ghim-tigger');
    $('.ghim').removeClass('ghim-active');
    $('.player-down').css('display','block');
})

var data = { }

function loadComponent(component){
    if (!data[component]){
        $('#component').load(`../components/${component}.html`, function(){
            data[component] = $(`.${component}-wraper`).html();
        });
    }
    else {
        $('#component').html(data[component]);
    }
}