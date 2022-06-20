// install and import express
const express = require("express");
const path = require("path");
let app = express();
const port = 8000

// Code here



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../../src/assets/users.html"));
});

app.get("/users",(req, res) => {
    // console.log("user")
  res.sendFile(path.join(__dirname + "../../src/assets/user.json"));
});

app.listen(port, () => {
    console.log("server is running at port :",port)
})
// Note: Do not remove this export statement
module.exports = app;
