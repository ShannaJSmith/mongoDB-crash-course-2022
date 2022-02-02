const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Test:418763@cluster0.dyqhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");

  //pipeline data taken from export from mongodb compass
  const pipeline = [
    {
      '$match': {
        'accommodates': {
          '$gt': 4
        }, 
        'price': {
          '$lt': 500
        }
      }
    }, {
      '$project': {
        'name': 1, 
        'amenities': 1, 
        'price': 1, 
        'images': 1, 
        'description': 1
      }
    }, {
      '$limit': 20
    }
  ]

  const agg = await collection.aggregate(pipeline).toArray();
  console.log("agg:", agg)
  // perform actions on the collection object
  client.close();
});