const express = require("express");
const Note = require("../model/notesSchema");


const updateNoteRoute = express.Router();



updateNoteRoute.put("/", async(req,res) => {
    const result = await Note.updateOne({_id: req.body.id}, {$set: {body: req.body.body}})
    res.send(result);
})


module.exports = updateNoteRoute;