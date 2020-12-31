const Zing = require('../api/ZingMp3');
var DATE = new Date();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class ApiController {

    //  [GET] /api/getInfoMusic:id
    getInfoMusic(req, res,next) {
        Zing.getFullInfo(req.params.id)
            .then(data => {
                let song = {
                    id: data.encodeId,
                    name: data.title,
                    artist: data.artistsNames,
                    url: data.streaming['128'],
                    cover: data.thumbnailM,
                    lrc: '',
                    next: data.sections[0].items[getRandomInt(data.sections[0].items.length - 1)].encodeId,
                }
                return song;
            })
            .then(data => {
                let song = data;
                Zing.getLyric(data.id)
                    .then(lyric => {
                        song.lrc = lyric.file;
                        res.json(song);
                    })
            })
            .catch(err => res.json(err))
    }

    //  [GET] /api/getFullInfo:id
    getFullInfo(req, res,next) {
        Zing.getFullInfo(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    //  [GET] /api/getWeekChart:id
    getWeekChart(req, res,next) {
        Zing.getWeekChart(req.params.id)
            .then(data => {
                Zing.getDetailPlaylist(data.playlistId)
                    .then(songs => {
                        let data = songs.song.items.map( (song,index) => {
                            return {
                                id: song.encodeId,
                                name: song.title,
                                performer: song.artistsNames,
                                thumbnail: song.thumbnailM,
                                number: index + 1,
                            }
                        })
                        return data;
                    })
                    .then(songs => res.json(songs))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    }

    //  [GET] /api/getSectionPlaylist:id
    getSectionPlaylist(req, res,next) {
        Zing.getSectionPlaylist(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    //  [GET] /api/getDetailPlaylist:id
    getDetailPlaylist(req, res,next) {
        Zing.getDetailPlaylist(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    //  [GET] /api/getStreaming:id
    getStreaming(req, res,next) {
        Zing.getStreaming(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    //  [GET] /api/Lyric:id
    getLyric(req, res,next) {
        Zing.getLyric(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    //  [GET] /api/getHome:id
    getHome(req, res,next) {
        Zing.getHome(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}

module.exports = new ApiController;
