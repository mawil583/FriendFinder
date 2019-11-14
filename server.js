let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 4000;

// ask teacher about these
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));


// the server.js file relies on the functions
/* defined in the files in my routes folder

*/
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log(`app listening on port # ${PORT}`)
});
