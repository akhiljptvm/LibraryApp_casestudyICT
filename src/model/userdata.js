//Accessing Mongoose package
const mongoose = require('mongoose')

//Database connection
// mongoose.connect('mongodb+srv://iloveme008:iloveme008@cluster0.vqfrw.mongodb.net/LibraryApp?retryWrites=true&w=majority')
mongoose.connect('mongodb://localhost:27017/library');
//Schema definition
const Schema = mongoose.Schema;
const UserSchema = new Schema({

    email: {type: String, unique: true},
    password: String,
    number: String,
    
});

//Model creation
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;
