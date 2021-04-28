var express = require('express');
const asyncHandler = require('express-async-handler');
var FreeDelivery = require('../models/freeDelivery');
const twilio = require('twilio'); 

const accountSid = 'ACe735327a96603551e48cadf9e116b953';
const authToken = 'd2ed848fb769c2433fe0a231921b2f6b'; 
const client = new twilio(accountSid, authToken);


var router = express.Router();





  router.get('/sendsms', async (req,res)=>{
    //  const {recipient , textmessage} = req.query
   // res.send('Hello to the Twilio Server')
    client.messages.create({
       body:"your delivery has been affected",
       to:'+21695322200',
       from:'+15623625554',
     }).then((message)=> console.log(message.sid)) ;
    })
  

    module.exports = router;