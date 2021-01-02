const Zing = require('../api/ZingMp3');

class HomeController {

    //  [GET] /
    index(req, res,next) {
        // Zing.getFullInfo('ZOZ0WD80')
        // Zing.getLyric('ZOZ0WD80')
        // Zing.getSectionPlaylist('6707AA98')
        Zing.getDetailPlaylist('ZWZB969E')
        // Zing.getDetail("IWZ9Z09E")
        // Zing.getHome(3)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    // [GET] /test
    test(req,res,next){
        res.render('home');
    }
}

module.exports = new HomeController;
