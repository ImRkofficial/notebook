import React, { useContext } from "react";
import noteContext from "../context/Notes/notesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Home =()=> {
  const notesContext = useContext(noteContext);
  const { notes } = notesContext;
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
