const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/hh",{useNewUrlParser:true,useUnifiedTopology:true },(error)=>{
  if(!error)


  {
  console.log('success')

  }
 else
 {

    console.log('error not connected')
 }



});

const course = require("./course.model");