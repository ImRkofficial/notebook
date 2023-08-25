const  mongoose  = require("mongoose");

const {Schema} = mongoose;

const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true,
        minLength:[3,'Title Length should be greater then 3 characters']
    },
    description:{
        type:String,
        required:true,
        minLength:[5,'Description Length should be greater then 5 characters']
    },
    tag:{
        type:String,
        default:"General",
        minLength:[3,'Tag Length should be greater then 3 characters']
    },
     date:{
        type:Date,
        default:Date.now
     }

})

const Note = mongoose.model('note',NotesSchema)
module.exports =Note;