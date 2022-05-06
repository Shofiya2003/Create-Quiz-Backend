const express=require('express');
const router=express.Router();
const {postQuiz}=require('../controller/quiz');
const Quiz=require('../models/quiz');

router.post('/',postQuiz);

module.exports=router;