const mongoose = require('mongoose');

const connectionToDb = async ()=>{

  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/notebook')
    console.log('Db connected Successfully !')
  } catch (error) {
    console.log(error)
  }

}

module.exports = connectionToDb;