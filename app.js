
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vamsi:vamsi@cluster0.rpx0i0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
     tls: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("test_db");
const myColl = myDB.collection("test_collection");

const doc = { name: "Normal pizza", shape: "round" , price:"1000"};
const result = await myColl.insertOne(doc);
console.log(
   `A document was inserted with the _id: ${result.insertedId}`,
);
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
