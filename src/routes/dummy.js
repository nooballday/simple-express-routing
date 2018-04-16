const dummy = (req, res) => {

    /**
     * get body validation result, if there is something that is not match it will automatically reject the request and send a message
     */
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.mapped());
    }
    

    res.send({
        "hello": req.body.name
    })
}

module.exports = dummy;