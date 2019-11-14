var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};
// request is going to be the information
/* received from the client whereas,
response is an object that. 

You can send a 
request from the client (browser and/or
front end code) and the server can send a 
response back to the client. request is data
(us being the server) */