const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin@story.kvpcd1j.mongodb.net/?")

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB