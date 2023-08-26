import React ,{useState} from 'react';
import NoteContext from './notesContext';


const NoteState = (props)=>{
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
            "_id": "64e990b1e4d2f8262c0ebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "MERN Stack",
            "description": "Dummy Description about mern stack development",
            "tag": "Full Stack Development",
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        },
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
            "_id": "64e990b1e4d2f8262c0ebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "MERN Stack",
            "description": "Dummy Description about mern stack development",
            "tag": "Full Stack Development",
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        },
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
            "_id": "64e990b1e4d2f8262c0ebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "MERN Stack",
            "description": "Dummy Description about mern stack development",
            "tag": "Full Stack Development",
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        },
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
            "_id": "64e990b1e4d2f8262c0ebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "MERN Stack",
            "description": "Dummy Description about mern stack development",
            "tag": "Full Stack Development",
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        },
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
            "_id": "64e990b1e4d2f8262c0ebe99",
            "user": "64e8cd2e6b8f2d613f4a9a2c",
            "title": "MERN Stack",
            "description": "Dummy Description about mern stack development",
            "tag": "Full Stack Development",
            "date": "2023-08-26T05:42:09.528Z",
            "__v": 0
        }
    ]
    const [notes,setNotes] = useState(note)
   
    
    return(
        <NoteContext.Provider value={{notes,setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;