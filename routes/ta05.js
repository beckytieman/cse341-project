//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta05Controller = require('../controllers/ta05');

router.get('/', ta05Controller.getIndex)

router.post('/counter', ta05Controller.changeCount)

router.post('/change-style', ta05Controller.changeStyle)

//router.post('/reset', ta05Controller)


module.exports = router;