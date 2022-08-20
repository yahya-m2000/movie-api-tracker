const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const { Film, User } = require('../models')

// all films
router.get('/', async (req, res) => {
    const allFilms = await Film.findAll()
    res.send(allFilms)
})

// one film
router.get('/:id', async (req, res) => {
    const oneFilms = await Film.findByPk(req.params.id)
    res.send(oneFilms)
})

// films of a specific genre
router.get('/genre', async (req, res) => {
    const allFilms = await Film.findAll()
    res.send(allFilms.genre)
})

// film's specific genre
router.get('/:id/genre', async (req, res) => {
    const oneFilms = await Film.findByPk(req.params.id)

    res.send(oneFilms.genre)
})

router.delete('/:id', async (req, res) => {
    const oneFilms = await Film.findByPk(req.params.id)
    await oneFilms.destroy()

    res.send(oneFilms)
})

router.put('/users/:fid', async (req, res) => {
    const oneFilms = await Film.findByPk(req.params.fid)
    await oneFilms.update({ rating: req.body })

    res.sendStatus(200)
})


module.exports = router