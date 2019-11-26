module.exports = (req, res, next) => {
    if (!req.body.username) {
        res.status(400).json({ error: 'Please include a username'})
    } else if (!req.body.password) {
        res.status(400).json({ error: 'Please include a password'})
    } else {
        next()
    }
}