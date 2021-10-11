const router = require('express').Router();

const startPage = require('./routes/startPage');
router.use('/rimac/startPage', startPage);

const goto = require('./routes/goto');
router.use('/rimac/goto', goto);

module.exports = router;