import React from 'react';
import {Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


const About =()=> {

  return (
    <>
    <h1>About</h1>
    <DeleteIcon/>
    <Button variant="text">Text</Button>
<Button variant="contained" >Contained </Button>
<Button variant="outlined">Outlined</Button>
    
    </>
  )
}

export default About;