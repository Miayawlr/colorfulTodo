import mongoose from 'mongoose'

const Schema = mongoose.Schema

const WorkSchema = new Schema({
  id: Number,
  title: String,
  date: Date,
  done: Boolean,
  deleted: Boolean,
})

const work = mongoose.model('Work', WorkSchema, 'work')

export default work
