
function showChart(songs) {
    var htmls = songs.map(function (song) {
        return `
                <li onclick="playSong(this,playOne)" data-id="${song.id}" class="mt-4 bxh-song" style="list-style-type:none;">
                    <img src = "${song.thumbnail}">
                    <h4 style="display: inline-block">${song.number}. ${song.name}</h4>
                    <h5 style="display: inline-block"> - ${song.performer}</h5>
                </li>
            `;
    })
    $('.chart').html(htmls.join(""));
}

function getChartAPI() {
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
            showChart(data);
        })
}

getChartAPI();
