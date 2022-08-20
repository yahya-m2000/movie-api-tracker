const { db } = require('../db')
const { Film, seedFilm } = require('./Films')
const { User, seedUser } = require('./Users')

// a many to many relationship with a junction table of User_Film
User.belongsToMany(Film, { through: 'User_Film' })
Film.belongsToMany(User, { through: 'User_Film' })

// this function will publish data into the database
async function seed() {
    // sequelize will create a table
    await db.sync({ force: true })
    // seedFilm() and seedUser() will be published to the table when the seed() function runs
    await seedFilm()
    await seedUser()
}



module.exports = { seed, Film, User }