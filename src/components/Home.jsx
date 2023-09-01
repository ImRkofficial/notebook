import React, { useContext, useEffect } from "react";
import noteContext from "../context/Notes/notesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Home =()=> {
  const notesContext = useContext(noteContext);
  const { notes,getNotes } = notesContext;

  useEffect(()=>{
    getNotes();
  },[])
  return (
    <>
     
        <div className="card-container container">
          <AddNote/>
       <div className="row">
       {
          notes.map((note) => (
           <NoteItem  key={note._id} note={note}/>
          ))
        }
       </div>
        </div>
      
    </>
  );
}

export default Home;
