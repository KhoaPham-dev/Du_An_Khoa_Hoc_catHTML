var express = require("express");
var app = express();
var port = 4000;
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
