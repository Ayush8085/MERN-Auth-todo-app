const dotenv = require("dotenv").config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const { default: mongoose } = require("mongoose");
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

// -------------- Middlewares --------------
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

// -------------- Routes Middlewares --------------
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

// -------------- Error Handler Middlewares --------------
app.use(errorHandler);

// -------------- CONNECT DB AND RUN SERVER --------------
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })