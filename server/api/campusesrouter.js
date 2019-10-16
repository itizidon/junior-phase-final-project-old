const router = require('express').Router()
const Campuses = require('../db/campuses')

router.get('/', async(req, res, next)=> {
  const lol = await Campuses.findAll()
  res.send(lol)
})

module.exports=router
