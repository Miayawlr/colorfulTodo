import { config } from './../config'
import mongoose from 'mongoose'
const dbUrl: string = config.db

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('success ')
})
