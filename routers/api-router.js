const router = require('express').Router()
const usersRouter = require('./users-router');
const tripsRouter = require('./trips-router');

router.use('/users', usersRouter);
router.use('/trips', tripsRouter);

module.exports = router;