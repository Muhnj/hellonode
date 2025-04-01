// const express = require("express");
// const router = express.Router();

// const Signup = require('../models/Sale.js');

// router.get("/addition", (req, res) =>{
//     res.render("addtion")
// });

// router.post("/addition", (req, res) =>{
//     console.log(req.body);
//     res.redirect("/addition")

// });



// module.exports = router;


const express =require('express');
const router = express.Router();
//import models
const Sale = require('../models/Sale');
const User = require('../models/User');

router.get('/addition',(req,res) =>{
    res.render("addition");
});
router.post('/addition',(req,res)=>{
   try {
    const sale = new Sale(req.body);
    const user = new User(req.body);
    console.log(user)
    console.log(sale)
    user.save();
    sale.save();
    res.redirect("/addition");
   } catch (error) {
    res.status(400).render("addition")
    console.log(error);
   }
});
module.exports=router;