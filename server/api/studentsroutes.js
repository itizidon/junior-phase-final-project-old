const router = require('express').Router()
const Students = require('../db/students')

router.get('/', async(req, res, next)=> {
  const lol = await Students.findAll()
  res.send(lol)
})

module.exports=router
