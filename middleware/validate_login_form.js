module.exports = (req, res, next) => {
	const { email, password } = req.body;

	// Check if username and password are present
	if (!email || !password) {
		req.flash("errorMsg", "Please enter both username and password");
		res.redirect("/");
	} else {
		req.flash("successMsg", "you have logged in successfully")
		next();
	}
};