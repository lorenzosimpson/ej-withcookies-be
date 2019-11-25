const router = require('express').Router();
const Users = require('../data/helpers/users-helpers');

router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not get users'})
    }
})

module.exports = router;