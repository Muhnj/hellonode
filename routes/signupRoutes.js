const express =require('express');
const router = express.Router();
//import models
const Signup = require('../models/Signup');
router.get('/signingup',(req,res) =>{
    res.render("signup");
});
router.post('/signingup',(req,res)=>{
   try {
    const user = new Signup(req.body);
    console.log(user)
    user.save();
    res.redirect("/signingup");
   } catch (error) {
    res.status(400).render("signup")
    console.log(error);
   }
});
module.exports=router;