const express = require('express');
const router = express.Router();
const passport = require('passport')

// loading models
const User = require('../models/User')

router.get('/', (req, res)=> {
    res.render('login')
})

router.post('/login', (req, res) => {
    // validate input

    // authenticate user
})

module.exports = router;