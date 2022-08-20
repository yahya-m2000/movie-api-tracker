const { db, DataTypes } = require('../db')

const Film = db.define('Film', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    box_office: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
    }
})

const seedFilms = [
    {
        name: 'Godfather',
        genre: 'Crime, Drama',
        box_office: 250000000,
        rating: 9.2
    },

    {
        name: 'Godfather II',
        genre: 'Crime, Drama',
        box_office: 250000000,
        rating: 9.0
    },

    {
        name: 'American History X',
        genre: 'Crime, Drama',
        box_office: 23900000,
        rating: 8.5
    },

    {
        name: 'The Untouchables',
        genre: 'Crime, Drama',
        box_office: 106200000,
        rating: 7.9
    }
]
// this function will create new films looping through the seedUsers array database. 
async function seedFilm () {
    for (let film of seedFilms) {
        // so think of (film) as the index for seedFilms.
        await Film.create(film)
    }
}

module.exports = { Film, seedFilm }
