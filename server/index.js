const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users');
mongoose.connect(
  'mongodb+srv://Test:418763@cluster0.dyqhe.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
);

// would actually go in routes.js
app.get('/getUsers', (req, res) => {
  UserModel.find({}, (error, result) => {
    if (error) {
      res.json(error);
    } else {
      res.json(result);
    }
  });
});
// app.post()

app.listen(3001, () => {
  console.log('SEVER IS RUNNING');
});
