const express = require('express')
const app = express()
// routes
const { films, users } = require('./routes')
// the seedFilm and seedUser
const { seed } = require('./models')


app.use(express.json())
// quite literal. .use() allows express to access the routes
app.use('/users', users)
app.use('/films', films)

// this function gets server.js up and running
async function serve(port) {
    // before the server runs, we want our data to be published to the sequelize database
    await seed()

    app.listen(port, () => {
        console.log(`App listening on port ${port}.`)
    })
}

// runs the function the param is our port number
serve(3000)