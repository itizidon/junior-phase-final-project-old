const {db} = require('./server/db')
const {green, red} = require('chalk')

const Students = require('./server/db/students')
const Campuses = require('./server/db/campuses')

const students = [{
  firstName: 'Brian',
  lastName: 'Shaw',
  email: 'Brian@gmail.com',
  imageUrl: 'https://thefitexpo.com/caroff_wp/wp-content/uploads/2019/01/brian_shaw_profile.jpg',
  gpa: 2.9
  },
  {
    firstName: 'Eddie',
    lastName: 'Hall',
    email: 'Eddie@gmail.com',
    imageUrl: 'https://i.ytimg.com/vi/oHnh3XRFyDE/maxresdefault.jpg',
    gpa: 2.5
  }
]

const campus = [{
  name: 'Binghamton',
  imageUrl: 'http://2.bp.blogspot.com/--A1wNZhS868/U7L4xKhbQTI/AAAAAAAAS04/rfzak1JCZFY/s1600/srdb3-1.jpg',
  address: '123 street',
  description: 'the mitochondria is the powerhouse of the cell'
  },
  {
  name: 'NYU',
  imageUrl: 'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9a/Twisted_Treeline_Map_Preview.jpg/revision/latest/scale-to-width-down/250?cb=20140612032104',
  address: '321 street',
  description: 'i love redux'
  }
]

const seed = async () => {
  try{
  await db.sync({force: true})
  await Promise.all(students.map(student=>{
    return Students.create(student)
  }))
  await Promise.all(campus.map(campi=>{
    return Campuses.create(campi)
  }))
  // seed your database here!

  console.log(green('Seeding success!'))
  db.close()
  }catch(err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }
}
  seed()
