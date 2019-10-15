const Sequelize = require('sequelize')
const db = require('./database')

const Students = db.define('students',{
  firstName:{
    type: Sequelize.STRING,
    allowNull: false,
      validate:{
        notEmpty: true
      }
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    },
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
  },
  gpa:{
    type: Sequelize.FLOAT,
    validate:{
      max: 4,
      min: 0
    }
  }
})

module.exports=Students
