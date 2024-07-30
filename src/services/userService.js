//2
const User = require('../models/user')

const userService = {
  async createUser(name, email, phone) {
    const newUser = new User({ name, email, phone }) // 創建新的使用者實例
    return await newUser.save() // 將新使用者實例保存到資料庫並返回結果
  },
  async getAllUsers() {
    return await User.find()
  },
  async getUserById(userId) {
    return await User.findById(userId)
  },

  async updateDate(userId, updatedDate) {
    return await User.findByIdAndUpdate(userId, updatedDate, {
      new: true,
    })
  },

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId)
  },
}

module.exports = userService
