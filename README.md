# Create-Quiz-Backend

## Table of contents :
- [API Documentation](https://github.com/Shofiya2003/Create-Quiz-Backend/edit/master/README.md#api-documentation)
- [Tech Stack](https://github.com/Shofiya2003/Create-Quiz-Backend/edit/master/README.md#tech-stack)


## API Documentation
### 1. Description : Creates quiz with following parameters
```
date : Date
<!--- An array of mongoose subdocument -->
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
            "hint" : "jj"
           }
```

## Tech Stack
- NodeJs
- ExpressJs
- Mongoose

## Frontend Repository
https://github.com/Shofiya2003/Quiz-Create-App

