const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const { Film, User } = require('../models')

// this will get all the users within the sequelize database
router.get('/', async (req, res) => {
    // allUsers will grab all the Users currently on our sequelize database
    const allUsers = await User.findAll()

    res.status(200).send(allUsers)
    
})

// will get one user within the sequelize database
router.get('/:id', async (req, res) => {
    /* will find a user by their Primary Key. req.params.id will get the primary key from the parameters endpoint '/:id'.  
        eg:
            website.com/users/2 <<< this is the id
                oneUser will run and will findByPk(req.params.2) because "2" is the id */
    const oneUser = await User.findByPk(req.params.id)
    // if there isn't a user, run an error
    if (!oneUser) {
        res.status(404).send(`Sorry! This user ${req.params.id} doesn't exist!`)
        return
    }
    res.send(oneUser)
    
})

// creates user
router.post('/', [check('name').not().isEmpty().trim()], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
        return
    }
    await User.create(req.body)
    res.sendStatus(201)
})

// updates user
router.put('/:id'), async (req, res) => {
    const userToUpdate = await User.findByPk(req.params.id)

    const newFilm = await Film.create(seedFilms[0])

    await userToUpdate.addFilm(newFilm)

    const film = await userToUpdate.getFilms()

    res.send(film)
    
}

// gets user's films watched
router.get('/:id/movies', async (req, res) => {
    const oneUser = await User.findByPk(req.params.id)
    
    const userFilms = await oneUser.getFilms()

    res.send(userFilms)
})

// adds movies watched by user
router.post('/:uid/movies/:fid', async (req, res) => {
    const oneUser = await User.findByPk(req.params.uid)
    const oneFilm = await Film.findByPk(req.params.fid)
    
    await oneUser.addFilm(oneFilm)

    res.sendStatus(201)


})



module.exports = router