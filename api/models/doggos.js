const mongoose = require('mongoose')

const doggoSchema = mongoose.Schema({
  breed: { type: String, required: true },
  shortDesc: { type: String, default: 'Best doggo ever!' },
  longDesc: String,
  imageURL: String,
  bigDog: Boolean,
  goodDog: { type: Boolean, default: true }
})

const Doggos = mongoose.model('Doggos', doggoSchema)

module.exports = Doggos