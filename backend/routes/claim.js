var express = require('express');
const asyncHandler = require('express-async-handler');
var Claim = require('../models/claim');


var router = express.Router();


router.post('/add',(async(req,res)=>{
    const claim=await Claim.create({...req.body});
  
    if(claim) {
      res.status(200) ;
      res.json({data:claim}) ;
    }else{
      res.status(500);
      throw new Error('claim creating failed');
    }
  
  })
  );


  router.get('/'  , async (req, res) => {
  
    var claim = await Claim.find()
    res.send(claim);
  });
  

  router.get('/findByUser/:user',asyncHandler(async(req,res)=>{
    //res.send(req.params.id)   
     user = req.params.user;
    try {

      const ClaimByUser = await Claim
      .find({'user':user})
   

    if (!ClaimByUser) {
      return res.status(400).json({ message: "not found " }).end()
    }
    
    res.send(ClaimByUser);

     }  catch (e) {
    console.error(e)
    res.status(400).end()
    }


   
   })) ;



   
  router.put('/accept/:id',asyncHandler(async(req,res)=>{
      try {
    const accpetedClaim= await Claim
    .updateOne(
      { _id: req.params.id },
{ $set: { "etat" : "treated"} }
    )
    .lean()
    .exec()


    if (!accpetedClaim) {
      return res.status(400).json({ message: "not found " }).end()
    }

    res.status(200).json(accpetedClaim )
     }  catch (e) {
    console.error(e)
    res.status(400).end()
    }
   
   })) ;


   


   
  router.put('/refuse/:id',asyncHandler(async(req,res)=>{
    try {
  const accpetedClaim= await Claim
  .updateOne(
    { _id: req.params.id },
{ $set: { "etat" : "refused"} }
  )
  .lean()
  .exec()


  if (!accpetedClaim) {
    return res.status(400).json({ message: "not found " }).end()
  }

  res.status(200).json(accpetedClaim )
   }  catch (e) {
  console.error(e)
  res.status(400).end()
  }
 
 })) ;


  module.exports = router;