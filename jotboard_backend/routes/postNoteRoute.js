const express = require("express");
const Note = require("../model/notesSchema");


const postNoteRoute = express.Router()



postNoteRoute.post("/", async (req, res) => {
  try {
    const note = new Note(req.body);
    
    await note.save();
    

    res.send("data pushed to db")
    

  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});



module.exports = postNoteRoute;