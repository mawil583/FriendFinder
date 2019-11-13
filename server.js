let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// let something = require("/path");
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log(`app listening on port # ${PORT}`)
});
