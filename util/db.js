const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/treinamento_db";

const dbInstance = MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    console.log('Database is working!');
    db.close();
});

module.exports = dbInstance;


