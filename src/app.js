const express = require('express')
// const { connectedToMongoDB } = require('./configuration/dbConfig')
const cors = require('cors')
const userRoutes = require('./routes/userRoute')
const app = express()
const PORT = process.env.Port || 5001
const bodyPqrser = require('body-parser')

app.use(bodyPqrser.json())
app.use(cors())
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})

app.use('/api/user', userRoutes)
