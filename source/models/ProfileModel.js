//Models.py er onurup


const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    EmailAddress:{type:String},
    MobileNumber:{type:String},
    City:{type:String},
    UserName:{type:String,unique:true},
    Password:{type:String}, 
   

},{versionKey:false});

const profileModel= mongoose.model('Profile',DataSchema);

module.exports = profileModel