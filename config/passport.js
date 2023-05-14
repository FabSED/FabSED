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
					console.log("user", user);
					if (!user)
						return done(null, false, { message: "email not registered" });
					if (password !== user.password)
						return done(null, false, { message: "incorrect password" });
					return done(null, user);
				});
			}
		)
	);

	// copied from docs
	// passport.serializeUser(function (user, cb) {
	// 		process.nextTick(function () {
	// 			cb(null, { id: user.id, username: user.email });
	// 		});
	// 	});

	// passport.deserializeUser(function (user, cb) {
	// 	process.nextTick(function () {
	// 		return cb(null, user);
	// 	});
	// });
	// serialize user
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	// deserialize user
	passport.deserializeUser(async function (id, done) {
		try {
			const user = await User.findById(id);
			done(null, user);
		} catch (err) {
			done(err);
		}
	});
};

