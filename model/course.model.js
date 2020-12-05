const mongoose = require("mongoose");


var Courseschema = new mongoose.Schema({

   courseschema:{

    type: String,
    required : "require"
   },
   courseid :{
       type:String,
   },
   courseduration:{
  type:String,
   },
   coursefee:{
       type:String
   }

    
});

mongoose.model("course",Courseschema)