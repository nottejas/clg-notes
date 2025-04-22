const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://tejas:tejas69@genz-finance-app.euxgs.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("myLibrary");
        const books = db.collection("Books");

        const result = await books.insertOne({
            title: "Atomic Habits",
            author: "James Clear",
            publisher: "Penguin"
        });

        console.log("Inserted:", result.insertedId);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
