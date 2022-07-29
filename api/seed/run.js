require('dotenv').config()

const path = require('path')
const mongoose = require('mongoose')

const Doggos = require(path.join(__dirname, '../models/doggos'))
const dummyData = require('./data.json')

const dbURL = process.env.MONGODB_URL

mongoose.connect(dbURL, async () => {
  console.log('Connected to Doggos db')

  console.log('Resetting Doggos collection')
  await Doggos.collection.drop()
  console.log('Doggos collection dropped')

  console.log('Inserting seed data')
  const insertedDoggos = await Doggos.insertMany(dummyData)
  console.log('Dummy Doggos inserted')
  console.log(insertedDoggos)

  mongoose.connection.close()
})
