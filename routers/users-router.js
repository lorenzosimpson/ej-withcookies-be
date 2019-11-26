const router = require('express').Router();
const Users = require('../data/helpers/users-helpers');
const Trips = require('../data/helpers/trips-helpers');
const bcrypt = require('bcryptjs');
const validateBody = require('../middleware/validate-req-body');
const privateInfo = require('../middleware/private-info');

router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        const map = async (arr, cb) => {
            let new_arr = []
            for(let x=0; x<arr.length; x++) {
                let id = arr[x].id;
                new_arr[x] = arr[x];
                new_arr[x].trips = await cb(id)
                delete new_arr[x].password;
            }
            return res.status(200).json(new_arr)
        }
        map(users, Trips.findByUserId)
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not get users'})
    }
})

router.get('/:id', privateInfo, async (req, res) => {
    const {id} = req.params;
    try {
        const user = await Users.findById(id)
        delete user.password
        res.status(200).json(user)
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not get user'})
    }
})
// create user
router.post('/register', validateBody, async (req, res) => {
    let user = req.body;
    try {
        const hash = await bcrypt.hash(user.password, 8)
            user.password = hash
            
        const [added] = await Users.insert(user)
        const newUser = await Users.findById(added)
        req.session.username = newUser.username; // return cookie
        req.session.user_id = newUser.id;
        delete newUser.password
        res.status(200).json(newUser)
    
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not add user'})
    }
})
//login
router.post('/login', validateBody, async (req, res) => {
    let user = req.body;
    try {
        let existing = await Users.findByUsername(user.username)
        if (existing && bcrypt.compareSync(user.password, existing.password)) {
            req.session.username = user.username; // return cookie
            req.session.user_id = existing.id;
          
            res.status(200).json({ message: `Welcome, ${existing.username}`, id: existing.id})
        } else {
            res.status(401).json({ error: 'Please check credentials and try again'})
        }

    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'could not log in'})
    }
})

module.exports = router;