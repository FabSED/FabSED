// routes for dashboards
// protected
const express = require("express");
const router = express.Router();
const data = require("../fake_requests.json");
const { ensureAuthenticated } = require("../config/auth");

router.get("/moed", ensureAuthenticated,(req, res) => {
	res.render("dashboards/moed", { data });
});

router.get("/mofa", (req, res) => {
	res.send("ministry of foregin affairs dashboard");
});

router.get("/mod", (req, res) => {
    res.send("ministry of defense dashboard")
});

router.get("/user", ensureAuthenticated, (req, res) => {
	res.render("dashboards/user")
});

module.exports = router;
