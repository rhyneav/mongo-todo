// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) throw err;

    console.log('Connected to MongoDB Server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete todos', err);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Rhyne'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteOne({
        _id: new ObjectID('5852903f9762992404cccdad')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});