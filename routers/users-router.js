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

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await Users.findById(id)
        res.status(200).json(user)
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not get user'})
    }
})

router.post('/', async (req, res) => {
    const user = req.body;
    console.log(user)
    try {
        const [added] = await Users.insert(user)
        const newUser = await Users.findById(added)
        res.status(200).json(newUser)
        console.log(added)
        console.log(newUser)
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not add user'})
    }
})

module.exports = router;