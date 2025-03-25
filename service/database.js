const {MongoClient}=require('mongodb')
const config = require('../db.config.json')


//In order to connect to the database do the following:
const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('Country_Night');
const collection = db.collection('Instructors');

//This should check the connection of the data base and see if we can connect in.
(async function test_connection() {
    try {
      await db.command({ ping: 1 });
      console.log(`Connect to database`);
    } catch (ex) {
      console.log(`Unable to connect to database with ${url} due to ${ex.message}`);
      process.exit(1);
    }
})();

async function add_admin(user) {
    await userCollection.insertOne(user);
}

function find_user(username){
    return collection.findOne({ username: username});
}

module.exports= {
    add_admin,
    find_user
}

//See testing regarding hash