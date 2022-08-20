const { db, DataTypes } = require('../db')

const User = db.define('Users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const seedUsers = [
    {
        name: 'Simon',
        email: 'simon.haines@multiverse.io'
    },
    {
        name: 'Yahya',
        email: 'is@warrior.truth'
    }
]

// this function will create new users looping through the seedUsers array database
async function seedUser () {
    for (let user of seedUsers) {
        // so think of (user) as the index for seedFilms. this (user) is looping through the seedUsers array and User.creating new Users using the data from seedUsers
        await User.create(user)
    }
}

module.exports = { User, seedUser }