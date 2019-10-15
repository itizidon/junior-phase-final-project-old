const {db} = require('./server/db')
const {green, red} = require('chalk')

const Students = require('./server/db/students')
const Campuses = require('./server/db/campuses')

const students = [{
  firstName: 'Garen',
  lastName: 'Lux',
  email: 'garen@gmail.com',
  imageURL: 'http://www.lol-wallpapers.com/wp-content/uploads/2018/06/Garen-by-ansontan-HD-Wallpaper-Background-Fan-Art-Artwork-League-of-Legends-lol-495x700.jpg',
  gpa: 2.9
  },
  {
    firstName: 'Ryze',
    lastName: 'Ezreal',
    email: 'Ryze@gmail.com',
    imageURL: 'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fblogoflegends.com%2Ffiles%2F2017%2F04%2FRyze_6.jpg&c=sc&w=736&h=485',
    gpa: 2.5
  }
]

const campus = [{
  name: 'Binghamton',
  imageURL: 'http://2.bp.blogspot.com/--A1wNZhS868/U7L4xKhbQTI/AAAAAAAAS04/rfzak1JCZFY/s1600/srdb3-1.jpg',
  address: '123 street',
  description: 'the mitochondria is the powerhouse of the cell'
  },
  {
  name: 'NYU',
  imageURL: 'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9a/Twisted_Treeline_Map_Preview.jpg/revision/latest/scale-to-width-down/250?cb=20140612032104',
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
