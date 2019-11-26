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

router.get('/:id', async (req, res) => {
    let {id} = req.params;
    try {
        const trip = await Trips.findById(id)
        if (trip) {
            res.status(200).json(trip)
        } else {
            res.status(404).json({error: 'trip not found'})
        }

    } catch(err) {
        res.status(500).json({ error: 'could not get trip'})
    }
})

router.post('/', async (req, res) => {
    let trip = req.body;
    try {
        const [added] = await Trips.insert(trip)
        const newTrip = await Trips.findById(added)

        res.status(201).json(newTrip)

    } catch(err) {
        res.status(500).json({ error: 'could not add trip'})
    }
})

router.put('/:id', async (req, res) => {
    let {id} = req.params;
    let changes = req.body;
    try {
        const updated = await Trips.update(id, changes)
        if (updated) {
            const trip = await Trips.findById(id)
            res.status(200).json(trip)
        } else {
            res.status(404).json({error: 'trip not found'})
        }
    } catch(err) {
        res.status(500).json({ error: 'could not update trip'})
    }
})

router.delete('/:id', async (req, res) => {
    let {id} = req.params;
    try {
        const deleted = await Trips.remove(id)
        if (deleted) {
            res.status(200).json({ message: `deleted trip ${id}`})
        } else {
            res.status(404).json({error: 'trip not found'})
        }
    } catch(err) {
        res.status(500).json({ error: 'could not delete trip'})
        console.log(err)
    }
})









module.exports = router;