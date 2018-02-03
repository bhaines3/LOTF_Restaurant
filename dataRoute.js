var tableInfo = require("/data");
var waitlistInfo = require("/waitlist");

module.exports = function(app) {

  app.get("/api/tables", function(req, res) {
    res.json(tableInfo);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitlistInfo);
  });

  app.post("/api/tables", function(req, res) {
    
    if (tableInfo.length < 8) {
      tableInfo.push(req.body);
      res.json(true);
    }
    else {
      waitlistInfo.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableInfo = [];
    waitlistInfo = [];

    console.log(tableInfo);
  });
};