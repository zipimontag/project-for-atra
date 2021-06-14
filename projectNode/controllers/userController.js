const userSchema = require('../models/UserSchema');

const createUser = async (req, res) => {
    try {
        const newUser = new userSchema(req.body);
        await newUser.save();
        res.status(200).json({ newUser: newUser });
    }
    catch (err) {
        res.status(500).send("Error: " + err);
    }
    console.log("createUser");
}


const getAllUsers = async (req, res) => {
    try {
        const users = await userSchema.find();
        res.status(200).json({ users: users })
    }
    catch (err) {
        res.status(500).send('error')
    }
}

module.exports = { createUser, getAllUsers }