const express = require("express");
const router = express.Router();
const connectEnsureLogin =require("connect-ensure-login")
const multer = require("multer")
//import models
const Sale = require("../models/Sale");


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, "public/img/uploads");
  },
  filename: (req, file, cb) => {
  cb(null, file.originalname);
  },
  });
  var upload = multer({ storage: storage });

router.get("/addition", (req, res) => {
  res.render("addition");
});
router.post("/addition", upload.single("image"),async (req, res) => {
  try {
    const sale = new Sale(req.body);
    sale.image = req.file.path;
    console.log(sale);
    await sale.save();

    res.redirect("/addition");
  } catch (error) {
    res.status(400).render("addition");
    console.log(error);
  }
});
router.get("/saleslist", async (req, res) => {
  try {
    const items = await Sale.find().sort({ $natural: -1 });
    res.render("saledata", {
      sales: items,
    });
  } catch (error) {
    res.status(400).send("unable to find items in the db");
  }
});
router.get("/updatesale/:id", async (req, res) => {
  try {
    const updateSale = await Sale.findOne({ _id: req.params.id });
    res.render("updatesale", {
      sale: updateSale,
    });
  } catch (error) {
    res.status(400).send("unable to find this item in the db");
  }
});
router.post("/updatesale", async (req, res) => {
  try {
    await Sale.findOneAndUpdate({ _id:req.query.id }, req.body);
    res.redirect("/salesList");
  } catch (error) {
    res.status(400).send("unable to find this item in the db");
  }
});
router.post("/deleteSale", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    await Sale.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("unable to delete this item in the db");
  }
});
module.exports = router;
