
const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("Hello from the middleware 1");
    // return res.json({mgs:'Hello From the middleware'})
    next()
})
app.use((req,res,next)=>{
    console.log("Hello from the middleware 2");
    return res.end('Hello From the middleware 2')
})
// Middleware (only needed for JSON request handling)
// app.use(express.json());

// Route to render users in HTML format
app.get('/api/users', (req, res) => { 
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
    </ul>
    `;
    res.send(html);
});

// REST API Route: Return JSON user list
app.get('/api/users/json', (req, res) => {
    return res.json(users);
});

// Route to get a user by ID
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
});
app.put("/api/users/:id",(req,res)=>{
    return res.json({status:"pending"});
})
app.post("/api/users",(req,res)=>{
    return res.json({status:"pending"});

});
app.patch("/api/users/:id",(req,res)=>{
    return res.json({status:"pending"});
})
app.delete("/api/users/:id",(req,res)=>{
    return res.json({status:"pending"});
})

// Start the Server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
