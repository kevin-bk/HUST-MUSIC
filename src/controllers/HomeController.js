const Zing = require('../api/ZingMp3');

class HomeController {

    //  [GET] /
    index(req, res,next) {
        Zing.getInfoMusic('ZOWUA7ZO')
        // Zing.getSectionPlaylist('IWZ9Z097')
        // Zing.getDetailPlaylist('IWZ9Z08I')
        // Zing.getHome()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    // [GET] /test
    test(req,res,next){
        res.render('home');
    }
}

module.exports = new HomeController;
