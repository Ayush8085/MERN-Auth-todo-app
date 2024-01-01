const dotenv = require("dotenv").config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { default: mongoose } = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// -------------- Middlewares --------------
app.use(express.json());

// -------------- Routes Middlewares --------------
app.use('/api/users', userRoutes);

// -------------- CONNECT DB AND RUN SERVER --------------
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })