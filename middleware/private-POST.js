// this middleware checks that the session user id is the same as the user id of the resource they're trying to add
module.exports = async (req, res, next) => {
    let {user_id} = req.body;
    if (user_id === req.session.user_id) {
        next()
    } else {
        res.status(401).json({ error: "you'`re not authorized to make those changes"})
    }
}