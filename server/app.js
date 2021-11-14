const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

// Import route for pasien
const pasienRouter = require('./routes/pasienRoute')

// Import route for dokter
const dokterRouter = require('./routes/dokterRoute')

//Import route for poli
const poliRouter = require('./routes/poliRoute')

//Import route for admin
const adminRouter = require('./routes/adminRoute')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', function(req, res) {
  res.status(200).json({ msg: "success" })
})

app.use('/pasien', pasienRouter)
app.use('/dokter', dokterRouter)
app.use('/poli', poliRouter)
app.use('/admin', adminRouter)

app.listen(port, () => {
  console.log(`listening app on port ${port}`)
})

module.exports = app