const express = require("express");
const projectRoute = require("./routes/projectRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/projects", projectRoute);
module.exports = app;
