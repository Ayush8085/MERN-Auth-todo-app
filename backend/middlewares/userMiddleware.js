const jwt = require("jsonwebtoken");
const User = require("../db/userModel");

const JWT_SECRET = process.env.JWT_SECRET;

const userMiddleware = async (req, res, next) => {
    const jwt_string = req.headers['authorization'];
    const token = jwt_string.split(' ')[1].trim();

    const verified =  jwt.verify(token, JWT_SECRET);
    if (verified) {
        req.user = await User.findById(verified.id);
        return next();
    }

    return res.status(404).json({
        message: "Invalid token!!",
    })
}

module.exports = userMiddleware;