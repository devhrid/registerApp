var express = require("express");
var path  = require("path");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var index = require("./routes/index");
var tasks = require("./routes/tasks");


app.set("views",path.join(__dirname ,"views"));
app.set("View Engine","ejs");
app.engine('html', require("ejs").renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'clients')));


app.use("/",index);
app.use("/api",tasks);

app.listen(port,function(){
    console.log("server is ready to serve you");
})