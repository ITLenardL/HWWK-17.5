const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const exerciseRoutes = require("./routes/exercises");
// const workoutRoutes = require("./routes/workouts");
const apiRoutes = require("./routes/apiroutes");
const viewRoutes = require("./routes/htmlroutes");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);
// app.use(workoutRoutes);

app.get("*", function(req, res) {
res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => console.log("listening on port: ", PORT));