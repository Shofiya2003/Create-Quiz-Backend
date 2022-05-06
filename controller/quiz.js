const Quiz=require('../models/quiz');

const postQuiz=async (req,res)=>{
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
}

module.exports={postQuiz}