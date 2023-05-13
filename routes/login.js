const express = require('express');
const router = express.Router();
const passport = require('passport')

// loading models
const User = require('../models/User')

router.get('/', (req, res)=> {
    res.render('login')
})

router.post('/login',passport.authenticate('local', { failureRedirect: '/', failureMessage: true }),(req, res) => {
    console.log(req.user.role);
    console.log("redirecting to", `/dashboard/${req.user.role}`);
    res.redirect(`/dashboard/${req.user.role}`)
}	
)

module.exports = router;