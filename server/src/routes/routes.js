const express = require("express")
const { route } = require("../app")
const promptController = require("../controllers/prompt-controller")
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)
module.exports = routes

//  http://localhost:5001/api/prompt