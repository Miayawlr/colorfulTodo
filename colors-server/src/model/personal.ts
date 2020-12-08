import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PersonalSchema = new Schema({
  id: Number,
  title: String,
  date: Date,
  done: Boolean,
  deleted: Boolean,
})

const personal = mongoose.model('Person', PersonalSchema, 'person')

export default personal
