const { MongoClient } = require("mongodb");
const dbUrl = "mongodb+srv://vsharmaofficial9029_db_user:3jvGoxxQK8hKPg8M@mongoexperiment.mr92rya.mongodb.net/";
const client = new MongoClient(dbUrl);

const dbInstance = () => {
    client.connect();
    return client.db("experiment");
}

const getUserDetails = async (email) => {
    client.connect();
    const dbObj = client.db("experiment");
    const userCollection = dbObj.collection("users");
    const details = await userCollection.findOne( {email} )
    return details;
}

const getTodos = async () => {
    
}

module.exports = {dbInstance, getUserDetails};