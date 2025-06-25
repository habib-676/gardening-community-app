const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eui8ux4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    const tipsCollection = client.db("tipsDB").collection("gardenTips");
    const userCollection = client.db("tipsDB").collection("gardenars");

    app.post("/gardenTips", async (req, res) => {
      const newTip = req.body;
      const result = await tipsCollection.insertOne(newTip);
      res.send(result);
    });

    app.delete("/gardenTips/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await tipsCollection.deleteOne(query);

      res.send(result);
    });

    app.put("/gardenTips/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedTip = req.body;
      const updatedDoc = {
        $set: updatedTip,
      };

      const result = await tipsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );

      res.send(result);
    });

    // like update :
    app.patch("/gardenTips/:id", async (req, res) => {
      const id = req.params.id;
      const { totalLiked } = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          totalLiked: totalLiked + 1,
        },
      };

      const result = tipsCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.get("/gardenTips", async (req, res) => {
      const cursor = tipsCollection.find();
      const result = await cursor.toArray();

      res.send(result);
    });

    // trending tips
    app.get("/gardenTips/trending", async (req, res) => {
      const result = await tipsCollection.find().limit(6).toArray();

      res.send(result);
    });

    app.get("/gardenTips/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await tipsCollection.findOne(query);
      res.send(result);
    });

    // explore gardeners :

    // all :
    app.get("/gardeners", async (req, res) => {
      const result = await userCollection.find().toArray();

      res.send(result);
    });

    // active :
    app.get("/gardeners/active", async (req, res) => {
      const query = { status: "Active" };
      const result = await userCollection.find(query).limit(6).toArray();

      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Garden server is working");
});

app.listen(port, () => {
  console.log(`Garden server is running on port : ${port}`);
});
