////////////////////////////////////////////////////////
// CONFIG
////////////////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const whiteList = [
  "http://localhost:4001",
  "http://localhost:3000"
]

const doggosController = require("./controllers/doggos")

app.use(express.json())
app.use(cors({
  origin: (origin, cb) => {
    if (whiteList.indexOf(origin) !== -1) {
      cb(null, true)
    } else {
      cb(new Error())
    }
  }
}))

app.use("/doggos", doggosController)

mongoose.connect(dbURL, () => {
  console.log("Connected to doggos DB");
})

app.listen(PORT, () => {
  console.log("Doggos borking on port", PORT);
})