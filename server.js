//Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

//Intatiations
const app = express();
const PORT = 3000;

const additionRoutes = require("./routes/additionRoutes");
const loginRoutes = require("./routes/loginRoutes");
const signupRoutes = require("./routes/signupRoutes");


//configurations
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//middle ware
app.use(express.static(path.join(__dirname, "public"))); //specifies a folder for static files
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", additionRoutes);
app.use("/", loginRoutes);
app.use("/", signupRoutes );


//redirection to unavailable page
app.get("*", (req, res) => {
  res.send("oops! page not found");
});

//Bootstrapping Server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
