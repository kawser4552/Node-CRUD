
//Basic
const express =require ('express')
const router = require('./source/routes/api')  //urls.py er moto

const app = new express(); //express er object create korlam
const bodyparser = require('body-parser');



//security middleware import


   const rateLimit= require("express-rate-limit")
   const helmet = require("helmet")
    const mongoSanitize=require("express-mongo-sanitize")

    const xss= require('xss-clean')
    const hpp = require('hpp')
    const cors =require('cors')
    const mongoose = require('mongoose');
    
//Security middleware implement

app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())
app.use(bodyparser.json())


//Requiest rate limiting

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)


let URI = "mongodb://127.0.0.1:27017/Todo"
let OPTION = {user:'',pass:'',autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("connection success");
    console.log(error);
})

//Routing implement


app.use('/api/v1',router);




//undefined route   mane ei name kono route nai tarpor o request chole ashche

app.use('*',(req,res)=>{
    res.status(404).json({"status":"Failed","data":"not Found"});
})


module.exports=app;