const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public")); //it makes use of other local files eg: CSS and images


app.use(bodyParser.urlencoded({extended:true})); // it make use of getting info from body

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
    console.log("Its running well");
});
