import React ,{useState} from 'react';
import NoteContext from './notesContext';


const NoteState = (props)=>{
    let host ='http://localhost:8000'
    const note =[
        {
            "_id": "64e9821bbb091f6913d02b2a",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "Web Development",
            "description": "Dummy Description",
            "tag": "Development",
            "date": "2023-08-26T04:39:55.297Z",
            "__v": 0
        },
        {
            "_id": "64e990b1e4d2f8262c0ebje99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "MERN Stack",
            "description": "Dummy Description about mern stack development",
            "tag": "Full Stack Development",
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        },
        {
            "_id": "64e9821bbb0f91f6913jd02b2a",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "Web Development",
            "description": "Dummy Description",
            "tag": "Development",
            "date": "2023-08-26T04:39:55.297Z",
            "__v": 0
        },
        {
            "_id": "64e990b1e4d2f8f262c0hebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "MERN Stack",
            "description": "Dummy Description about mern stack development",
            "tag": "Full Stack Development",
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        }
    ]
    const [notes,setNotes] = useState(note)
   
    // Adding Note
    const addNote = (title,description,tag)=>{
       let note={
            "_id": "64e990b1e4d2f826t2c0ebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": title,
            "description":description,
            "tag": tag,
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        }
        // Here concate returns a array of note then map function will use this for mapping the array items
        setNotes(notes.concat(note))
    }



    // Deleting Note
    const deleteNote = (id)=>{
        console.log(id)
     const newNote = notes.filter((note)=>{
        return note._id !== id
     }) 
     setNotes(newNote)
    }




    // Edit Note
// API Call
    const editNote = async (id,title,description,tag)=>{
        const response =await fetch(`${host}/api/notes/updatenote/64e8d3695547e666797dbd78`,{
            method:'POST',
            headers:{
                'Content-Type':'appilaction/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2NGU4Y2QyZTZiOGYyZDYxM2Y0YTlhMmMifX0sImlhdCI6MTY5Mjk3ODQ3OH0.lBXfwud14FcaLSBM5esI1DHUD-KVAMqTb7nxd3DJpTk'
            },
            body:JSON.stringify()
        });
        const json =response.json()
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title =title;
                element.description =description;
                element.tag =tag
            }
            
        }
    }


    
    return(
        <NoteContext.Provider value={{notes,addNote, deleteNote,editNote}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;