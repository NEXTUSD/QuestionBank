const mongoose = require("mongoose");

const QuestionBank = new mongoose.Schema({
    Question : String,
    Option1 : String,
    Option2 : String,
    Option3 : String,
    Option4 : String,



    });

    module.exports = mongoose.model("question",QuestionBank);

    

