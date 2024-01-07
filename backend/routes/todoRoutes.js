const { getTodos } = require('../controllers/todoControllers');
const protect = require('../middlewares/userMiddleware');

const router = require('express').Router();
const app = require('express')();

app.use(protect);

router.get('/', getTodos);
router.get('/:id');
router.post('/add');
router.put('/update/:id');

module.exports = router;