// Connect to MongoDB
const mongoose = require("mongoose");
async function connectMongoDb(url) {
    mongoose.connect(url)
    // .then(() => console.log("MongoDB Connected"))
    // .catch((err) => console.log("Mongo Error", err));

}
module.exports={
    connectMongoDb,
}

