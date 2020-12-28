const Zing = require('../api/ZingMp3');

class ApiController {

    //  [GET] /api/getInfoMusic:id
    getInfoMusic(req, res,next) {
        Zing.getInfoMusic(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    //  [GET] /api/getFullInfo:id
    getFullInfo(req, res,next) {
        Zing.getFullInfo(req.params.id)
            .then(data => res.json(data))
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

    //  [GET] /api/getHome:id
    getHome(req, res,next) {
        Zing.getHome(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}

module.exports = new ApiController;
