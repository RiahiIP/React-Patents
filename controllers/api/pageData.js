const pageData = require('../../models/pageData')


function index (req, res, next) {
    res.render('index', { 
        title: 'Google Patent Scraper',
    })
}

function create(req, res, next) {
    console.log(req.body)
    pageData.pageData(req.body.patentId)
    .then((data)=> {
        console.log('data:', data)
        console.log(data)
        res.json(data)
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send('An error occurred', err);
    })
    // res.json(req.body)
}

function get(req, res, next) {
    console.log('req body(controller): ', req.params)
    pageData.pageData(req.body)
    .then((data)=> {
        console.log('data:', data)
        res.json(data)
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send('An error occurred', err);
    })
}

module.exports = {
index,
get,
create
}