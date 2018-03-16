const dummy = (req, res) => {
    res.send({
        "hello": req.body.name
    })
}

module.exports = dummy;