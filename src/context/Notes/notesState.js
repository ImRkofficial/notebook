import React ,{useState} from 'react';
import NoteContext from './notesContext';


const NoteState = (props)=>{
    let host ='http://localhost:8000'
    let note =[]
    const [notes,setNotes] = useState(note)
   

    // Get All Notes
    const getNotes = async ()=>{
        const response =await fetch(`${host}/api/notes/fetchallnotes`,{
            method:'GET',
            headers:{
                'Content-Type':'appilaction/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2NGU4Y2QyZTZiOGYyZDYxM2Y0YTlhMmMifX0sImlhdCI6MTY5Mjk3ODQ3OH0.lBXfwud14FcaLSBM5esI1DHUD-KVAMqTb7nxd3DJpTk'
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json.notes)
    }
    // Adding Note
    const addNote =async (title,description,tag)=>{
        const response =await fetch(`${host}/api/notes/addnote`,{
            method:'POST',
            headers:{
                'Content-Type':'appilaction/json',
                'mode':'cors',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2NGU4Y2QyZTZiOGYyZDYxM2Y0YTlhMmMifX0sImlhdCI6MTY5Mjk3ODQ3OH0.lBXfwud14FcaLSBM5esI1DHUD-KVAMqTb7nxd3DJpTk'
            },
            body:JSON.stringify({title,description,tag})
        });
        
       const note={
            "_id": "64e990b1e4d2f826t2c0ebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": title,
            "description":description,
            "tag": tag,
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        }
        console.log(note)
        // Here concate returns a array of note then map function will use this for mapping the array items
        setNotes(notes.concat(note))    
    }



    // Deleting Note
    const deleteNote =async (id)=>{
        const response =await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'appilaction/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2NGU4Y2QyZTZiOGYyZDYxM2Y0YTlhMmMifX0sImlhdCI6MTY5Mjk3ODQ3OH0.lBXfwud14FcaLSBM5esI1DHUD-KVAMqTb7nxd3DJpTk'
            }
        });
        const json = await response.json()
        console.log(json)
     const newNote = notes.filter((note)=>{
        return note._id !== id
     }) 
     setNotes(newNote)
    }




    // Edit Note
// API Call
    const editNote = async (id,title,description,tag)=>{
        const response =await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'appilaction/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2NGU4Y2QyZTZiOGYyZDYxM2Y0YTlhMmMifX0sImlhdCI6MTY5Mjk3ODQ3OH0.lBXfwud14FcaLSBM5esI1DHUD-KVAMqTb7nxd3DJpTk'
            },
            body:JSON.stringify({title,description,tag})
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
        <NoteContext.Provider value={{notes,addNote, deleteNote,editNote, getNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;