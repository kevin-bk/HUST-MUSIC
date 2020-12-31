var vn,us,kpop;

function showTop5(songs, des) {
    var htmls = songs.map(function (song, index) {
        if (index > 4) return '';
        return '<div class="chart-item">'+
        `                    <div class="number">${song.number}</div>`+
        '                    <i class="fas fa-minus minus"></i>'+
        `                    <img onclick="playSong(this,playOne)" data-id="${song.id}" src="${song.thumbnail}">`+
        '                    <div class="name-artist">'+
        `                        <span class="name">${song.name}</span>`+
        `                        <span class="artist">${song.performer}</span>`+
        '                    </div>'+
        '                </div>';
    })
    $(des).html(htmls.join(""));
}

function getChartVN(callback, des) {
    fetch('https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1')
        .then(response => response.json())
        .then(res => {
            var bxh = res.data.song.map(function (data, index) {
                return {
                    id: data.id,
                    name: data.name,
                    performer: data.performer,
                    thumbnail: data.thumbnail,
                    number: index + 1,
                }
            })
            return bxh;
        })
        .then(data => {
            vn = data;
            callback(data, des);
        })
};

function getChartUS(callback, des) {
    fetch('/api/getWeekChart/IWZ9Z0BW')
        .then(response => response.json())
        .then(data => {
            us = data;
            callback(data,des);
        })
};

function getChartKpop(callback, des) {
    fetch('/api/getWeekChart/IWZ9Z0BO')
        .then(response => response.json())
        .then(data => {
            kpop = data;
            callback(data,des);
        })
};


getChartVN(showTop5,'.vn');
getChartUS(showTop5, '.us-uk');
getChartKpop(showTop5, '.kpop');