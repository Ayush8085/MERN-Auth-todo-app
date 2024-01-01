const { registerUser, loginUser, home } = require('../controllers/userControllers');

const router = require('express').Router();
const protect = require('../middlewares/userMiddleware')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/home', protect, home);

module.exports = router;