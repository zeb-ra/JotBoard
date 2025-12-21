const express = require("express");

const Note = require("../model/notesSchema");


const getNoteRoute = express.Router();


getNoteRoute.get("/", async(req,res)=> {
    const notes = await Note.find();
    res.json(notes);
})


module.exports = getNoteRoute;