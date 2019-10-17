const router = require('express').Router()
const Campuses = require('../db/campuses')

router.get('/', async(req, res, next)=> {
  try{
  const lol = await Campuses.findAll()
  res.send(lol)
  }catch(err){
    next(err)
  }
})

router.get('/:id', async(req, res, next)=> {
  try{
  const lol = await Campuses.findById(req.params.id)
  res.send(lol)
  }catch(err){
    next(err)
  }
})

router.post('/',async(req,res,next)=>{
  try{
    const lol = await Campuses.create(req.body)
    res.send(lol)
  }catch(err){
    next(err)
  }
})

module.exports=router
