const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("connected");

    const db = client.db("project_db");
    const book = db.collection("Books");

    const result = await book.insertOne({
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      publisher: "Addison-Wesley"
    });

    console.log("Book inserted: ", result.insertedId);
  } finally {
    await client.close();
  }
}

run()
