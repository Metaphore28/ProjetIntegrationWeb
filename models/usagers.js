const mongoose = require("mongoose");

//Schema for the collection users

let schemaUsers = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: Array,
        required: true,
        defaultL: ["User"]
    },
    cart: {
        type: Array
    }
});

let Users = module.exports = mongoose.model('users', schemaUsers);

// Delete user by _id
module.exports.deleteUser = (idUser, callback) => {
    let filtre = { "_id": idUser};
    Users.deleteOne(filtre, callback);
 };

 // Find user by _id
 module.exports.getUserById = (idUser, callback) => {
    Users.findById(idUser, callback);
 };
