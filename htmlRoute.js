var path = require("path");

module.exports = function(app) {
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "./tables.html"));
    });
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./home.html"));
    });
    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "./index.html"));
    });

};