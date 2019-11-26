const Trips = require('../data/helpers/trips-helpers');
const router = require('express').Router();
const withCookie = require('../middleware/withCookie')

router.get('/', withCookie, async (req, res) => {
    try {
        const trips = await Trips.find()
        res.status(200).json(trips)
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: 'could not find trips'})
    }
})











module.exports = router;