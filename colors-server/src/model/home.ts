import mongoose from 'mongoose'

const Schema = mongoose.Schema

const HomeSchema = new Schema({
  id: Number,
  title: String,
  date: Date,
  done: Boolean,
  deleted: Boolean,
})

const home = mongoose.model('Home', HomeSchema, 'home')

export default home
