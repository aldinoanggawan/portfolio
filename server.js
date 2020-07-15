require('dotenv').config()
const cors = require('cors')
const express = require('express')
const sendMail = require('./mail')

const app = express()

const PORT = process.env.PORT || 8000

// Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())

// Enable Cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
)

app.get('/', (req, res) => {
  res.json({ message: 'GET request' })
})

app.post('/contact', (req, res) => {
  //send email here
  const { name, email, text } = req.body
  console.log(req.body)

  sendMail(name, email, text, (error, data) => {
    if (error) {
      res.status(500).json({ message: 'Internal Error' })
    } else {
      res.json({ message: 'Message successfully sent!', data })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
