const express=require('express');
const router=express.Router();
const Quiz=require('../models/quiz');

router.post('/',async (req,res)=>{
    const {date,quiz}=req.body;
    try{

        const newQuiz=await Quiz.create({
            date:date,
            quiz:quiz
        });
        res.json({message:"success"});
    }
    catch(err){
        console.log(err);
    }
});

module.exports=router;