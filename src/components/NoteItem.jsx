import React from 'react'

const NoteItem = ({title,description,tag})=> {
    return (
        <>
           
            <div className="card row col-3 mx-3 my-3">
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text">{description}</p>
                        <p className=" primary">{tag}</p>
                    </div>
            </div>
           
        </>
    )
}

export default NoteItem