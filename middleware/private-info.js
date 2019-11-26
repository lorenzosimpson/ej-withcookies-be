const Users = require('../data/helpers/users-helpers');

module.exports = async (req, res, next) => {
        let { id } = req.params;
        if (req.session.user_id === parseInt(id)) {
            next()
        } else {
            res.status(401).json({ error: 'you are not authorized'})
        }
}