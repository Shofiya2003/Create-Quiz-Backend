const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  options:{
      type:[],
      required:true
  },
  answer:{
      type:Number,
      required:true
  },
  answered_by:{
    type:Number,
    required:true
  },
  question:{
    type:String,
    required:true
  },
  hint:{
    type:String,
  }

  
}, { timestamps: true });

const quizSchema = new mongoose.Schema({
  date:{
      type:Date,
      required:true
  },
  quiz:[questionSchema],
},{collection:'quiz'});

const quiz = mongoose.model("quiz", quizSchema);
module.exports = quiz;
