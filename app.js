const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const app = express();
const session = require("express-session");
const passport = require("passport");
const flash = require('connect-flash');
require("dotenv").config();

// routers
const loginRoute = require("./routes/login");
const dashboardRoute = require("./routes/dashboard");
// ejs configs
app.use(expressLayouts);
app.set("view engine", "ejs");

// get request data from forms
app.use(express.urlencoded({ extended: false }));

// session middleware
// passport configs
require("./config/passport")(passport);
app.use(
	session({
		secret: "secret",
		resave: true,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());

// flash messaging
app.use(flash())

// global variables
app.use((req, res, next) => {
	res.locals.successMsg = req.flash("successMsg");
	res.locals.errorMsg = req.flash("errorMsg");
	next()
})

// ROUTES
app.use("/static", express.static("views"));
app.use("/", loginRoute);
app.use("/dashboard", dashboardRoute);

// running app
const PORT = process.env.PORT || 5000;
(async () => {
	try {
		// app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
		console.log("attempting connection to database");
		connectDB().then(() => {
			console.log("database connected successfully");
			app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
		});
	} catch (error) {
		console.log(error);
	}
})();
