const asyncHandler = require('express-async-handler');
const Todo = require('../db/todoModel');


const getTodos = asyncHandler(async (req, res) => {

    if (!text) {
        res.status(403);
        throw new Error('Text cannot be empty!!');
    }

    const todos = await Todo.findById(userId);
})

module.exports = {
    getTodos,
}