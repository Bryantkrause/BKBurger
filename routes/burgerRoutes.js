const { Burger } = require('../models')

module.exports = app => {
  app.get('/burgers', (req, res) => {
    Burger.findAll()
      .then(burgers => res.json(burgers))
      .catch(e => console.error(e))
  })

  app.post('/burgers', (req, res) => {
    Burger.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.put('/burgers/:id', (req, res) => {
    Burger.findOne({ where: { id: parseInt(req.params.id) } })
      .then(burger => burger.update({ isDone: !burger.isDone}))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/burgers/:id', (req, res) => {
    Burger.findOne({ where: { id: parseInt(req.params.id) } })
      .then(burger => burger.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}