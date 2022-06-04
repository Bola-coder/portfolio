const express = require("express");
const { getAllProjects } = require("../controllers/projectController");

const router = express.Router();

router.route("/").get(getAllProjects);

module.exports = router;
