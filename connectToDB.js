require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

class ConnectToDB {
    constructor() {
        this.uri = process.env.mongo_uri;
        this.client = new MongoClient(this.uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
                tls: true,
            }
        });
    }

    async makeConnection() {
        await this.client.connect();
        console.log("Connection made");
    }

    async closeConnection() {
        await this.client.close();
        console.log("Connection closed");
    }

    async addData(dbName, collectionName, data) {
        const db = this.client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        console.log("Data inserted:", result.insertedId);
    }

    async query(dbName, collectionName, query) {
        const db = this.client.db(dbName);
        const collection = db.collection(collectionName);
        const cursor = collection.find(query);
        const data = await cursor.toArray();
        return data;
    }

    async updateData(dbName, collectionName, filter, update) {
        const db = this.client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.updateOne(filter, {
            $set: update
        });
        console.log("Data updated:", result.modifiedCount);
    }
}

// (async () => {
//     const cc = new ConnectToDB();
//     await cc.makeConnection();

//     // Specify the filter to find the document by _id
//     const filter = { "floor": 2  };

//     // Define the update object with the new fields
//     const update = {
//         w2_space_occ: 0,  // Add your value here
//         w4_space_occ: 0,  // Add your value here
//         w6_space_occ: 0   // Add your value here
//     };

//     // Update the document
//     await cc.updateData("test_db", "building", filter, update);

//     await cc.closeConnection();
// })();

module.exports= ConnectToDB;
