const express = require('express');
const mongoose = require('mongoose');


const router = express.Router();
const CourseModel = mongoose.model("course")

router.get('/list',(req,res)=>{
     CourseModel.find((err,docs)=>{
      if(!err)
      {     
          console.log(docs);
           res.send("Course Controller")
     
     }

     })
     res.send("Course Controller")

});
    module.exports = router
