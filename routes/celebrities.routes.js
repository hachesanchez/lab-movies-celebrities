const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model')


router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
})


router.post('/celebrities/create', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(res.redirect(`/celebrities`))
        // .catch(err => console.log(err))
        .catch(err => res.render(`celebrities/new-celebrity`)(err))
})


router.get('/celebrities', (req, res, next) => {

    Celebrity
        .find()
        .sort({ name: 1 })
        .then(celebrities => res.render(`celebrities/celebrities`, { celebrities }))
        .catch(err => console.log(err))
})


module.exports = router


