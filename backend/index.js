const dotenv = require("dotenv").config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { default: mongoose } = require("mongoose");
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

// -------------- Middlewares --------------
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

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