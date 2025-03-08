// const express = require ('express');
// const {connectToMongoDB } = require("./routes/url");

// const app = express();
// const PORT = 8001;
// connectToMongoDB("mongodb://localhost:27017/short-url").then(()=>console.log('Mongodb conneted'))

// app.use("/url", urlRoute);
// app.listen(PORT,()=>console.log(`Server Started at Port ${PORT}`));  




// const express = require('express');
// const { connectToMongoDB } = require('./routes/connect');  // Ensure the correct path to db.js
// const urlRoute = require('./routes/url');  // Ensure the correct path to url routes
// const URl = require('./models/url')
// const app = express();
// const PORT = 8001;

// // Connect to MongoDB
// connectToMongoDB("mongodb://localhost:27017/short-url")
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Middleware to parse JSON
// app.use(express.json());

// // Use URL routes
// app.use("/url", urlRoute);
// app.get('/:shortId', async (req,res)=>{
//     const  shortId = req.params.shortId;
// const entry  =    await URL.findByIdAndUpdate({
//         shortId
//     },{
//         $push:{
//         visitHistory:{
//             timestamp:Date.now(),
            
//     }})
//     res.redirect(entry.redirectURL) ;
// })

// // Start the server
// app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

const express = require('express');
const { connectToMongoDB } = require('./routes/connect');  // Ensure correct path
const urlRoute = require('./routes/url');  
const URL = require('./models/url');  // Ensure correct case in import

const app = express();
const PORT = 8001;

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Use URL routes
app.use("/url", urlRoute);

// Handle URL redirection
app.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId }, 
            { 
                $push: { visitHistory: { timestamp: Date.now() } } 
            }, 
            { new: true }  // Ensures the updated document is returned
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        return res.redirect(entry.redirectURL);
    } catch (error) {
        console.error("Error handling redirection:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
