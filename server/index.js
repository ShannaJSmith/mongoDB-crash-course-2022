const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users');

const cors = require('cors');

app.use(express.json());
app.use(cors());

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

app.post('/createUser', async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  //save function available with mongoose
  await newUser.save();
  res.json(user);
});

app.listen(3001, () => {
  console.log('SEVER IS RUNNING');
});
