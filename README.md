# Create-Quiz-Backend


## 1. Description : Creates quiz with following parameters
```
date : Date
quiz : [{
  options:[{
    value:String,
    opted_by:Number
  }],
  answer:Number,
  answered_by:Number,
  question:String,
  hint:String
}]
```
## Method: POST
```
 curl --location --request POST 'http://localhost:8000/api/v1/quiz' \
--header 'Content-Type: application/json' \
--data-raw {
"date":"2022-05-03"
"quiz" : [ 
        {
            "options" : [ 
                {
                    "value" : "first",
                    "opted_by" : "0"
                }, 
                {
                    "value" : "secing",
                    "opted_by" : "0"
                }, 
                {
                    "value" : "third",
                    "opted_by" : "0"
                }, 
                {
                    "value" : "fourth",
                    "opted_by" : "0"
                }
            ],
            "answer" : 2,
            "answered_by" : 0,
            "question" : "this is the question",
            "hint" : "jj",
            "_id" : ObjectId("62725e868c9b0ba956e765e6"),
           }
```
