const mongoose = require("mongoose");

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error Connecting to Database");
    }
}




module.exports.connection = connection;