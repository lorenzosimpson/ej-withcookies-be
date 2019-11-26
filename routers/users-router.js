const router = require('express').Router();
const Users = require('../data/helpers/users-helpers');
const bcrypt = require('bcryptjs');

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
// create user
router.post('/', async (req, res) => {
    let user = req.body;
    try {
        const hash = await bcrypt.hash(user.password, 8)
            user.password = hash
            
        const [added] = await Users.insert(user)
        const newUser = await Users.findById(added)
        req.session.username = newUser.username
        delete newUser.password
        res.status(200).json(newUser)
    
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not add user'})
    }
})



module.exports = router;