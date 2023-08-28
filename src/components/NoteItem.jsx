import React,{useContext} from 'react'
import NoteContext from '../context/Notes/notesContext'

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote } = context;
    const {note} = props ;
console.log(note._id)
    const handleDelete =()=>{
        deleteNote(note._id)
    }
    return (
        <>
            <div className="card row col-3 mx-3 my-3">
                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className=" primary">{note.tag}</p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <i className="fa-solid fa-trash-can" onClick={handleDelete} ></i>
                        <i className="fa-solid fa-file-pen"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem;