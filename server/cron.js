const router = require('express').Router();
const {Event} = require('./db/models')

router.get('/', (req, res, next) => {
    Event.findAll({
      attributes: ['id', 'name', 'location']
    })
      .then(events => console.log('i got events ', events))
      .catch(next)
  })

module.exports = router;