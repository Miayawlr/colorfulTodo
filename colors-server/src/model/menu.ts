import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MenuSchema = new Schema(
  {
    todo_id: String,
    id: Number,
    title: String,
    date: Date,
    done: Boolean,
    deleted: Boolean,
  },
  { versionKey: false }
)

const menu = mongoose.model('Menu', MenuSchema, 'menu')

export default menu
