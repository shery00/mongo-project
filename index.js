const connection = require("./model")
const express = require("express");
const application = express();
const path = require('path');
const expressHandlebars= require("express-handlebars");
const bodyparser=require('body-parser');



const  CourseController = require('./controllers/courses')



application.use(bodyparser.urlencoded({


extended : true 


}));

application.set("views",path.join(__dirname,"/views/"));
application.engine("hbs",expressHandlebars({

    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir :__dirname +"/views/layouts"
})),

application.set("view engine","hbs")

application.get("/",(req,res)=>{
//res.send//('<h1>hello there<h1>')//
res.render("stuff",{})
})


application.use("/Course",CourseController)


application.listen("3000",()=>{


    console.log("server is good to go ");
});