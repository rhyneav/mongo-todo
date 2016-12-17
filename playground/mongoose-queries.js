const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58553211c245a114369ef7f311';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log(todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log(todo);
// // });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID NOT FOUND')
//     }
//     console.log(todo);
// }).catch((e) => console.log(e));

var userID = '5853e13a88d4938c1854af7e'

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('Id not found!');
    }
    console.log(user);
}, (e) => {
    console.log(e);
})