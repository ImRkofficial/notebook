import React, { useContext } from "react";
import noteContext from "../context/Notes/notesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Home() {
  const notesContext = useContext(noteContext);
  const { notes } = notesContext;
  return (
    <>
     
        <div className="card-container row" style={{flexDirection:'row'}}>
          <AddNote/>
        {
          notes.map((note) => (
           <NoteItem title={note.title} description={note.description} tag={note.tag}/>
          ))
        }
        </div>
      
    </>
  );
}

export default Home;
