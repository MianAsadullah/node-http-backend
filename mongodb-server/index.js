const { MongoClient } = require("mongodb");
const assert = require("assert");
// Connection URI
const uri = "mongodb://localhost:27017";

// Database and collection names
const dbName = "conFusion";
const collectionName = "dishes";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB server
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Create a new database
    const db = client.db(dbName);
    console.log(`Database '${dbName}' created`);

    // Create a new collection
    const collection = await db.createCollection(collectionName);
    console.log(`Collection '${collectionName}' created`);
    await collection.insertOne({ name: "Uthappizza", description: "test" });
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed");
  }
}

// Call the function to connect and create database and collection
connectToMongo();
