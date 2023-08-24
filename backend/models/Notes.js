const  mongoose  = require("mongoose");

const {Schema} = require(mongoose)

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
     date:{
        type:Date,
        default:Date.now
     }

})

exports.Note = mongoose.model('note',NotesSchema)