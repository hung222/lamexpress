var express = require("express");
var app = express();
app.set("view engine", "pug"0);
app.set("views", "./views");
app.listen(process.env.PORT || 3000);

app.get("/", function(req, res){
  res.render("trangchu.html");
});

        
