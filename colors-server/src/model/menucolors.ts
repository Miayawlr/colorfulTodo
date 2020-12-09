import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MenuColorsSchema = new Schema({
  todo_id: String,
  icon: String,
  name: String,
  colors: Array,
})

const menuColors = mongoose.model('Menucolors', MenuColorsSchema)

export default menuColors
