const pageData = require('../../models/pageData')


function index (req, res, next) {
    res.render('index', { 
        title: 'Google Patent Scraper',
    })
}

function create(req, res, next) {
    res.redirect(`/${req.body.patentId}`)
}

function show(req, res, next) {
    pageData.pageData(req.params.id)
    .then((data)=> {
        // console.log('data:', data)
        res.render('show', { 
            data:data,
            title: 'Google Patent Scraper',
        })
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send('An error occurred', err);
    })
}

module.exports = {
index,
show,
create
}