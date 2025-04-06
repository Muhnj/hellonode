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
router.get('/saleslist', async(req,res) =>{
    try{
        const items = await Sale.find();
        res.render("sales", {
            sales:items
        })        
    }catch(error){
        res.status(400).send("unable to find items in the db")

    }
});

module.exports=router;