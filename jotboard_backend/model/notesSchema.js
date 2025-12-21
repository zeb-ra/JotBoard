const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    body: String
})


const note = mongoose.model('note', NotesSchema)

module.exports = note;