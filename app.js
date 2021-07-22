const express = require("express");

const mongoose = require("mongoose");
const question = require("./model/question");
const { db } = require("./model/question");
const QuestionBank = require("./model/question");
require("dotenv/config");

const app = express();
app.use(express.json())


app.get("/",(req,res,next)=>{
    
    QuestionBank.find().then(result=>{
        res.status(200).json({
            QuestionBank : result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    console.log("first request");
    
})

app.post("/enter_question", async (req,res)=>{
   
    try {
        const myQuestionBank = new QuestionBank(req.body);
        await myQuestionBank.save();
        res.send(myQuestionBank);
       
    } catch (error) {
        console.log(error);
        res.send({error});
    }


    
})

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
{  useUnifiedTopology: true,useNewUrlParser:true },
(req,res)=>{
   
    console.log("Database is connected ");
});


app.listen(3000,()=>{
    console.log("listening to 3000");
})