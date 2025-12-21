const express = require("express");

const Note = require("../model/notesSchema");

const deleteNoteRoute = express.Router();



deleteNoteRoute.delete("/:id", async(req,res) => {
    const noteId = req.params.id;



    try {
        const result = await Note.deleteOne({_id:noteId});

        res.send("Note deleted successfully");
    } catch (error) {
        res.send("Error deleting note");
    }
})


module.exports = deleteNoteRoute;