const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

async function run(){
    try {
        await client.connect()
        console.log('connected');


        const db = client.db("project_db");
        const book = db.collection("Books");

        const result = await book.insertOne({
            title: "adadd"
        })

        // const result = await users.find({ age: { $gt: 40 } }).toArray();
        // console.log(result);

        // more queries left
        
        console.log('Book inserted: ', result.insertedId);
        
    } finally {
        await client.close()
    }
}

run().catch(console.error)