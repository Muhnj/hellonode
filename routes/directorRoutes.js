const express = require("express");
const router = express.Router();

router.get("/managerdash", (req, res) => {
  res.render("directorDashboard");
});

module.exports = router;