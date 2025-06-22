require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
class connectToDB {
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
    makeConnection() {
        async ()=>{
            await this.client.connect();
        }
        console.log("Connection made");
    }
    closeConnection(){
        async ()=>{
            await this.client.close();
        }
        console.log("Connection closed");
    }
}
const cc=new connectToDB();
cc.makeConnection();
cc.closeConnection();