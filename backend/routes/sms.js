var express = require('express');
const asyncHandler = require('express-async-handler');
var FreeDelivery = require('../models/freeDelivery');
const twilio = require('twilio'); 

const accountSid = 'AC20788623a073818b629d6912356946b3';
const authToken = 'a31b4ce57c085fb02f30a7b6279d640f'; 
const client = new twilio(accountSid, authToken);


var router = express.Router();





  router.get('/sendsms', async (req,res)=>{
    //  const {recipient , textmessage} = req.query
   // res.send('Hello to the Twilio Server')
    client.messages.create({
       body:"hhh",
       to:'+21695322200',
       from:'+14159644727',
     }).then((message)=> console.log(message.sid)) ;
    })
  

    module.exports = router;