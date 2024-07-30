//3
const userService = require('../services/userService')

// class userController{}

async function createUser(req, res) {
  try {
    // 從請求主體中解構出使用者名稱、郵件和電話
    const { name, email, phone } = req.body
    //調用使用者服務模組的函數來創建使用者
    const saveUser = await userService.createUser(name, email, phone)
    res.json(saveUser) // 將創建成功的使用者信息以 JSON 格式返回客戶端
  } catch (error) {
    res.status(500).json({ error: error.message }) // 如果出現錯誤，返回 500 錯誤碼並返回錯誤信息
    next(error) // 可選：傳遞錯誤給下一個中間件處理
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getUserById(req, res) {
  const userId = req.params.id
  try {
    const user = await userService.getUserById(userId)
    if (!user) {
      return res.status(404).json({ error: 'user not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
async function updateUser(req, res) {
  const userId = req.params.id
  const updatedDate = req.body
  try {
    const updatedUser = await userService.updateDate(userId, updatedDate)
    if (!updatedUser) {
      return res.status(404).json({ error: 'user not found' })
    }
    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function deleteUser(req, res) {
  const userId = req.params.id
  try {
    const deletedUser = await userService.deleteUser(userId)
    if (!deletedUser) {
      return res.status(404).json({ error: 'user not found' })
    }
    res.json({ message: 'user deleted successfully', user: deletedUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
module.exports = {
  createUser, // 導出創建使用者的控制器函數
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
}
