require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users');
const PORT = 3001;

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.dyqhe.mongodb.net/sample_airbnb?retryWrites=true&w=majority`
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

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
