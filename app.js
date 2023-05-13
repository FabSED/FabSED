const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

// ejs configs
app.use(expressLayouts);
app.set("view engine", "ejs");

// get request data from forms
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/static", express.static("views"));
app.use("/", loginRoute);
app.use("/dashboard", dashboardRoute);


// running app
const PORT = process.env.PORT || 5000;
(async () => {
	try {
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
		// console.log("attempting connection to database");
		// connectDB(process.env.MONGO_URI).then(()=>{

		// console.log("database connected successfully");
		// app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
		//     }
	    // )
	} catch (error) {
		console.log(error);
	}
})();
