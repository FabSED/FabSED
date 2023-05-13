// routes for dashboards
// protected
const express = require("express");
const router = express.Router();

router.get('/moed', (req, res) => {
    res.send('ministry of education dashboard')
})

router.get("/mofa", (req, res) => {
	res.send("ministry of foregin affairs dashboard");
});

router.get("/mod", (req, res) => {
    res.send("ministry of defense dashboard")
})

router.get("/user", (req, res) => {
	res.send("user dashboard");
});



module.exports = router;