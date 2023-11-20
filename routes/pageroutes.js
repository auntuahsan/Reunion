const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('index');
})

router.get('/checkout', function (req, res) {
    res.render('checkout');
})


module.exports = router