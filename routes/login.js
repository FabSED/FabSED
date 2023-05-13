const express = require('express');
const router = express.Router();
const passport = require('passport')

// loading models
const User = require('../models/User')

router.get('/', (req, res)=> {
    res.render('login')
})

router.post('/login', (req, res, next) => {
	// validate input ?
	// authenticate user
	passport.authenticate("local", {
		successRedirect: "/dashboard/user",
		failureRedirect: "/fail",
	})(req, res, next);
})

module.exports = router;