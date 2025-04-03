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


router.get('/addition',(req,res) =>{
    res.render("addition");
});
router.post('/addition', async(req,res)=>{
   try {
    const sale = new Sale(req.body);
    
    console.log(sale)
    await sale.save();
    
    res.redirect("/addition");
   } catch (error) {
    res.status(400).render("addition")
    console.log(error);
   }
});
module.exports=router;