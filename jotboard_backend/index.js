require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require("./connection/connection");
const postNoteRoute = require("./routes/postNoteRoute");
const getNoteRoute = require("./routes/getNoteRoute");
const deleteNoteRoute = require('./routes/deleteNoteRoute');
const updateNoteRoute = require("./routes/updateNoteRoute");

const app = express();
const PORT = process.env.PORT || 3000;

connection.connection();

app.use(cors());
app.use(express.json());


app.use("/postNote", postNoteRoute);
app.use("/getNote", getNoteRoute)
app.use("/deleteNote", deleteNoteRoute);
app.use("/updateNote", updateNoteRoute);

app.get("/", async(req,res) => {
    res.send("Its working!");
})

app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
})