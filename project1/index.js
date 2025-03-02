
// const express = require("express");
// const users = require("./MOCK_DATA.json");
// const { default: mongoose } = require("mongoose");
 
// const app = express();
// const PORT = 8000;
// //Connection
// mongoose
// .connect(' mongodb://127.0.0.1:27017/Aniket')
// .then(()=>console.log("MongoDB Connected"))
// .catch((err)=>console.log("Mongo Error",err))
// //Schema
// const userSchema = new mongoose.Schema({
//     firstName: {
//         type:String,
//         required:true,

//     },
//     lastName:{
//         type:String,

//     },
//     email:{
//         type:String,
//         required:true,
//         unique: true,  
//     }, 
//     jobTitle:{
//         type:String,

//     },
//     gender:{
//         type:String,
//     },  

// });
// const User = mongoose.model("User", userSchema);

// //Middleware -Plugin
// app.use(express.urlencoded({extended:false}));

// app.use((req,res,next)=>{
//     console.log("Hello from the middleware 1");
//     // return res.json({mgs:'Hello From the middleware'})
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("Hello from the middleware 2");
//     return res.end('Hello From the middleware 2')
// })
// // Middleware (only needed for JSON request handling)
// // app.use(express.json());

// // Route to render users in HTML format
// app.get('/api/users', (req, res) => { 
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
//     </ul>
//     `;
//     res.send(html);
// });

// // REST API Route: Return JSON user list
// app.get('/api/users/json', (req, res) => {
//     return res.json(users);
// });

// // Route to get a user by ID
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);

//     if (!user) {
//         return res.status(404).json({ error: "User not found" });
//     }

//     return res.json(user);
// });
// app.put("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// })
// app.post("/api/users",(req,res)=>{
//     return res.json({status:"pending"});

// });
// app.patch("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// })
// app.delete("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// })

// // Start the Server
// app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/aniket")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo Error", err));

// Schema & Model



// Middleware
app.use(express.json());

// Routes


// Start Server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
