const asyncHandler = require('express-async-handler');
const User = require('../db/userModel');
const zod = require('zod');
const jwt = require('jsonwebtoken');

// Input validation with zod
const usernameSchema = zod.string();
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// ----------------- REGISTER USER ----------------
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (
        usernameSchema.safeParse(username).success === false ||
        passwordSchema.safeParse(password).success === false ||
        emailSchema.safeParse(email).success === false) {
        return res.status(404).json({
            message: 'Invalid inputs!!'
        });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(404).json({
            message: 'User already exists!!',
        });
    }

    await User.create({
        username,
        email,
        password,
    });

    return res.status(201).json({
        message: 'User created successfully!!',
    });
});

module.exports = {
    registerUser,
};