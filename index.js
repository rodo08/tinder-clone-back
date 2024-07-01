const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;
const uri = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/signup", (req, res) => {
  const client = new MongoClient(uri);
});

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const users = database.collection("users");

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
