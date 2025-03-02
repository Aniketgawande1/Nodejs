const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Serve users as an HTML list
router.get("/users", async (req, res) => {
    try {
        const allDbUsers = await User.find({});
        const html = `
        <ul>
            ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
        </ul>`;
        res.send(html);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

// Serve users as JSON
router.get("/users", async (req, res) => {
    try {
        const allDbUsers = await User.find({});
        return res.json(allDbUsers);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Routes for user operations
router.route("/:id")
    .get(async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            return res.json(user);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
    .patch(async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
            return res.json({ status: "Success" });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
    .delete(async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.json({ status: "Success" });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

// Create a new user
router.post("/ ", async (req, res) => {
    try {
        const body = req.body;
        if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });

        return res.status(201).json({ msg: "Success", user: result });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
