const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
const api=require('./routes/api');


const app=express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api',api);


//Connect to mongoose Server
const uri="mongodb://localhost:27017/quizDB";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log("connected to DB......");
  })
  .catch((err) => console.log(err));

  //mongoose debugger
  mongoose.set("debug",true);


const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})