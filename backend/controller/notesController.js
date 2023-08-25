const Note = require('../models/Notes')

exports.fetchallnotes =('/', async (req,res)=>{
try {
    const notes = await Note.find()
    res.send({notes})
} catch (error) {
    res.send({error:'Error occured'})
console.log(error)
}
})


exports.createNote =('/', async (req,res)=>{
    try {
        const {title,tag,description} = req.body;
        const note = new Note({
            title,description,tag,user:req.user.id
        })
        const newAddedNote = await note.save()
        res.status(201).json({newAddedNote})
       
    } catch (error) {
        res.status(400).send(error)
    }
    })




exports.updateNote = ('/',async (req,res)=>{
    const {title,description,tag} =req.body;

    // Creating a noeNote Object
    const newNote = {};
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}

    let note = await Note.findById(req.params.id)

    if(!note){
        return res.status(400).send("Not Found")
    }

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed")
    }


    note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})

    res.json({note})
})




exports.deleteNote = ('/', async (req,res)=>{
    try {
        let note = await Note.findById(req.params.id)
        if(!note){
            return res.status(400).send("Not Found")
        }
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }

    
     await Note.findByIdAndDelete(req.params.id)
        res.status(201).send(note)
    } catch (error) {
        res.send({Success:false})
    }
})