const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://prajwalsingh890:Test123@cluster0.yw8owy9.mongodb.net/BucciDB');

const Contact = mongoose.model('Contacts', { name: String , email: String, number: Number });


app.use(express.static("public")); //it makes use of other local files eg: CSS and images


app.use(bodyParser.urlencoded({extended:true})); // it make use of getting info from body



app.get("/",function(req,res){
    res.render("home");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/contactUs",function(req,res){
    res.render("contactUs");
});

app.post("/contactUs", function(req,res){

    const contactName = req.body.Name;
    const contactEmail = req.body.Email;
    const contactNumber = req.body.Number;

    const contactDetails = new Contact({ name:contactName, email:contactEmail, number:contactNumber});
    contactDetails.save().then(() => console.log("contact Saved"));
    res.redirect("/loginSuccess");
})

app.get("/loginSuccess", function(req,res){
    res.render("loginSuccess");
})

app.get("/gallery", function(req,res){
    res.render("gallery");
    // $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    //     event.preventDefault();
    //     $(this).ekkoLightbox();
    //   });
});


app.listen(3000 || process.env.POST , function(){
    console.log("Its running well");
});

