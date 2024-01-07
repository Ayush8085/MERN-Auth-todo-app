const { registerUser, loginUser, home } = require('../controllers/userControllers');
const protect = require('../middlewares/userMiddleware')

const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/home', protect, home);

module.exports = router;