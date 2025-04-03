const express = require("express");
const router = express.Router();

router.get("/salesdash", (req, res) => {
  res.render("salesagentDashboard");
});

module.exports = router;