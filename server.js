const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiroutes");
const viewRoutes = require("./routes/htmlroutes");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(
    "mongodb+srv://mongoatlas:CJ4eA6Tq8ve2Qvg@cluster0.js2sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);

app.get("*", function(req, res) {
res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => console.log("listening on port: ", PORT));