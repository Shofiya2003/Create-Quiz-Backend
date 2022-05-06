const express=require('express');
const router=express.Router();
const quiz=require('./quiz');
router.use('/v1/quiz',quiz)
module.exports=router;