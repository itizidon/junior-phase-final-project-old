const router = require('express').Router()
const Students = require('../db/students')

router.get('/', async(req, res, next)=> {
  try{
  const lol = await Students.findAll()
  res.send(lol)
  }
  catch(err){
    next(err)
  }
})

router.get('/:id', async(req, res, next)=> {
  try{
  const lol = await Students.findById(req.params.id)
  res.send(lol)
  }catch(err){
    next(err)
  }
})

router.post('/',async(req, res, next)=>{
  try{
    const lol = await Students.create(req.body)
    res.send(lol)
  }catch(err){
    next(err)
  }
})

module.exports=router
