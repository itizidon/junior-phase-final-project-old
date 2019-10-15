const Sequelize = require('sequelize')
const db = require('./database')

const Campuses = db.define('campuses',{
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: 'https://images.immediate.co.uk/production/volatile/sites/4/2018/08/iStock_000044061370_Medium-fa5f8aa.jpg?quality=45&crop=5px,17px,929px,400px&resize=960,413'
  },
  address:{
    type: Sequelize.STRING,
    allowNull: false,
      validate:{
        notEmpty: true
      }
  },
  description:{
    type: Sequelize.TEXT
  }
})



module.exports = Campuses
