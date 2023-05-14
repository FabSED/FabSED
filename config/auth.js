// authentication middleware

module.exports = {
	ensureAuthenticated: (req, res, next) => {
		if (req.isAuthenticated()) {
			return next();
		}
		console.log("[auth.js] not authenticated, redirecting ...");
		res.redirect("/");
	},
	forwardAuthenticated: (req, res, next) =>  {
		if (!req.isAuthenticated()) {
			return next();
		}
		res.redirect("/dashboard");
	},
};
