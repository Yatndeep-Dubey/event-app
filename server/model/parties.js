const mongoose = require('mongoose');
var schema2 = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    venue :{
        type: String,
        required: true
    },

    date:{
            type:String,
             required:true
    },
    time:{
           type:String,
           required:true
    }
})
const Partydb = mongoose.model('partydb',schema2);
module.exports=Partydb;