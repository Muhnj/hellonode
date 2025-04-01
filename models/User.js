const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    
    fname: {
        type: String,
        trim: true,
        
    },
    lname: {
        type: String,
        trim: true,
        
    },
    email: {
        type: String,
        trim: true,
        
    },
    branch: {
        type: String,
        trim: true,
        
    }
    
});



module.exports = mongoose.model('user', UserSchema);