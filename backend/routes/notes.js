const express =require('express');
const router = express.Router()
const fetchUser = require('../middlewares/fetchuser');
const { fetchallnotes, createNote, updateNote, deleteNote } = require('../controller/notesController');

router.get('/fetchallnotes',fetchUser,fetchallnotes)
router.post('/addnote',fetchUser,createNote)
router.put('/updatenote/:id',fetchUser,updateNote)
router.delete('/deletenote/:id',fetchUser,deleteNote)

module.exports = router;