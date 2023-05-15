const express = require("express");
const router = express.Router();
const passport = require("passport");

// loading models
const User = require("../models/User");
const validate_login_form = require("../middleware/validate_login_form");

router.get("/", (req, res) => {
	res.render("login");
});

router.post(
	"/login",
	validate_login_form,
	passport.authenticate("local", {
		failureRedirect: "/",
		failureMessage: true,
	}),
	(req, res) => {
		console.log(req.user.role);
		console.log("redirecting to", `/dashboard/${req.user.role}`);
		res.redirect(`/dashboard/${req.user.role}`);
	}
);

router.get("/logout", (req, res) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		req.flash("successMsg", "logged out");
		res.redirect("/");
	});
});

module.exports = router;
