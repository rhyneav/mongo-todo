// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// Object destructuring
// var user = {name: 'Rhyne', age: 21}
// var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) throw err;

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) throw err;

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Rhyne',
    //     age: 21,
    //     location: 'Cincinnati'
    // }, (err, res) => {
    //     if (err) throw err;

    //     console.log(JSON.stringify(res.ops, undefined, 2));

    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    db.close();
});