//4
const express = require('express') // 引入 Express 框架

const userController = require('../controllers/userController') // 引入使用者控制器，處理使用者相關操作

const router = express.Router() // 創建一個新的路由實例

// 定義處理 POST 請求的路由，當路徑為 '/' 時，交給 userController.createUser 函數處理
router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

// 導出路由，以便在其他文件中使用
module.exports = router
