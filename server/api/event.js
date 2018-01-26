const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Event.findAll({
    attributes: ['name', 'location']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Event.create(req.body)
  .then(newEvent => res.json(newEvent))
  .catch(next);
})