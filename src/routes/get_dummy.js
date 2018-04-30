const model = require('../model/login')
const logErrorMessage = "Something wrong with get_dummy request"

const get_dummy = (req, res) => {

    const username = req.params.name

     /**
      * get validation result from scema, because its a GET request *duh
      */
    const errors = validationResult(req)

     if (Object.keys(errors.mapped()).length != 0) {
         return res.status(422).json(errors.mapped())
     }

     /**
      * all the query should be done asynchronously
      * 
      * NOTE: if you are using client connection, make sure you close the connection before exit code
      */

    (async () =>{

        //fetch data from database using each function from the model
        const { rows } = await model.getUser([
            username
        ])

        const user_description = rows[0].desc

        res.send({
            "Heeyyy!": req.params.user_description
        })

    })().catch(e => setImmediate(() => {
        //define your own logERrorMessage
        logError.error(logErrorMessage, {'errMsg' : e.message, 'user' : username})
        res.status(500).send({message : "Something went wrong!"})
    }))

}

module.exports = get_dummy