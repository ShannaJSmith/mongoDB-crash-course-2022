const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Test:418763@cluster0.dyqhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.listen(3001, () => {
  console.log("SEVER IS RUNNING")
});