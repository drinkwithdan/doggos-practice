////////////////////////////////////////////////////////
// CONFIG
////////////////////////////////////////////////////////

const express = require("express")

const doggosRouter = express.Router()
const Doggo = require("../models/doggos")

////////////////////////////////////////////////////////
// ROUTES
////////////////////////////////////////////////////////

// Index / route GET
doggosRouter.get("/", async (req, res) => {
  const doggos = await Doggo.find({}).exec()
  res.status(200).json(doggos)
})

// Show /:id route GET
doggosRouter.get("/:id", async (req, res) => {
  const doggo = await Doggo.findById(req.params.id).exec()
  res.status(200).json(doggo)
})

// New / route POST
doggosRouter.post("/", async (req, res) => {
  try {
    const newDoggo = await Doggo.create(req.body)
    console.log(newDoggo)
    res.status(200).json(newDoggo)
  } catch (error) {
    res.status(500).json({errorMessage: error.message})
    console.log(error.message);
  }
})

// Destroy /:id route DELETE
doggosRouter.delete("/:id", async (req, res) => {
  try {
    const deletedDoggo = await Doggo.findByIdAndDelete(req.params.id).exec()
    console.log(deletedHoliday)
    res.status(200).json(deletedDoggo)
  } catch (error) {
    res.status(500).json({errorMessage: error.message})
  }
})

// Update /:id route PUT
doggosRouter.put("/:id", async (req, res) => {
  try {
    const updatedDoggo = await Doggo.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
    console.log(updatedDoggo)
    res.status(200).send(updatedDoggo)
  } catch (error) {
    res.status(500)
  }
})

module.exports = doggosRouter
