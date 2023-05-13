// passport strategy configuration here

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

module.exports = (passport) => {
	passport.use(
		new LocalStrategy(
			{
				usernameField: "email",
			},
			(email, password, done) => {
				// find user
				User.findOne({ email }).then((user) => {
					if (!user)
						return done(null, false, { message: "email not registered" });
					if (password !== user.password)
						return done(null, false, { message: "incorrect password" });
					return done(null, user);
				});
			}
		)
	);
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});
};

