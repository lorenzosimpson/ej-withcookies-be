const Trips = require('../data/helpers/trips-helpers');
// this middleware checks that the session user id is the same as the user id of the resource they're trying to edit or delete
module.exports = async (req, res, next) => {
    const {id} = req.params;
    try {
        const {user_id} = await Trips.findById(id)
        if (req.body.user_id && req.body.user_id !== req.session.user_id) {
            res.status(401).json({ error: "you can't change ownership of an existing trip."})
        }
        else if (user_id === req.session.user_id) {
            next();
        } 
        else {
            res.status(401).json({ error: 'you are not authorized to make this change'})
        }
    } catch(err) {
        res.status(500).json({ error: 'an error occurred'})
    }
}