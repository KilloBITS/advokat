const mongoClient = require("mongodb").MongoClient;

let db;
const URL = `'mongodb://localhost:27017'`;
const LoadDB = async () => {
  if (db) {
    return db;
  }
  try {
    const client = await mongoClient.connect(URL, { useNewUrlParser: true });
    db = client.db("LAWYER");
  } catch (err) {}
  return db;
};

module.exports = LoadDB;
