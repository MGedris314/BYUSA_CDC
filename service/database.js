const {MongoClient}=require('mongodb')
const config = require('../db.config.json')


//In order to connect to the database do the following:
const url = `mongodb+srv://${config.username}:${config.password}:${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('Country_Night');
const collection =db.collections('Instructors')


//See ignore regarding hash