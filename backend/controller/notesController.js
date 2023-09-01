const Note = require("../models/Notes");

exports.fetchallnotes = ("/", async (req, res) => {
            try {
                const notes = await Note.find();
                res.send({ notes });
            } catch (error) {
                res.status(400).send({ error: "Not Found" });
                console.log(error.message);
            }
        });

exports.createNote = ("/", async (req, res) => {
    const { title, tag, description } = req.body;
            try {
                const note = new Note({
                    title,
                    description,
                    tag,
                    user: req.user.id,
                });
                const newAddedNote = await note.save();
                res.status(200).json({ newAddedNote });
                console.log(req.body);
            } catch (error) {
                res.status(400).send(error.message);
                console.log(error.message);
            }
        });

exports.updateNote = ("/", async (req, res) => {
            const { title, description, tag } = req.body;

            try {
                // Creating a noeNote Object
                const newNote = {};
                if (title) {
                    newNote.title = title;
                }
                if (description) {
                    newNote.description = description;
                }
                if (tag) {
                    newNote.tag = tag;
                }

                let note = await Note.findById(req.params.id);

                if (!note) {
                    return res.status(400).send("Not Found");
                }

                if (note.user.toString() !== req.user.id) {
                    return res.status(401).send("Not Allowed");
                }
                note = await Note.findByIdAndUpdate(
                    req.params.id,
                    { $set: newNote },
                    { new: true }
                );
                res.json({ note });
            } catch (error) {
                console.log(error.message);
                res.status(500).send("Internal server error");
            }
        });

exports.deleteNote = ("/", async (req, res) => {
            try {
                let note = await Note.findById(req.params.id);
                if (!note) {
                    return res.status(400).send("Not Found");
                }
                if (note.user.toString() !== req.user.id) {
                    return res.status(401).send("Not Allowed");
                }

                await Note.findByIdAndDelete(req.params.id);
                res.status(200).send(note);
            } catch (error) {
                console.log(error.message);
                res.status(500).send("Internal server error");
            }
        });
