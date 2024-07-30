const mongoose = require('mongoose')

// 連接 MongoDB 數據庫
mongoose.connect('mongodb+srv://royzreus:123qwe@cluster0.78ao3to.mongodb.net/crud_db', {})

// 監聽連接成功的事件
mongoose.connection.on('connected', () => {
  console.log('connect to mongodb')
})

// 監聽連接失敗的事件
mongoose.connection.on('error', () => {
  console.error(`mongodb connection error: ${error}`)
})

// const connectedToMongoDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://royzreus:123qwe@cluster0.78ao3to.mongodb.net/crud_db')
//     console.log('connect to mongodb')
//   } catch (error) {
//     console.error(`mongodb connection error: ${error}`)
//   }
// }

// module.exports = { mongoose, connectedToMongoDB }
module.exports = mongoose
