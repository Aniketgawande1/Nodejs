// const mongoose = require('mongoose')
// async function connectToMongoDB(url){
//     return mongoose.connect(url);

// }
// module.exports={
//     connectToMongoDB,
// }
const mongoose = require("mongoose");

async function connectToMongoDB(url) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = { connectToMongoDB };
