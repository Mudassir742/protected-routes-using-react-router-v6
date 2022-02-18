const router = require('express').Router()

const dataController = require("../controllers/dataController")
const verifyToken = require("../middleware/authMiddleware")

router.get("/getdata",verifyToken,dataController.getData)

module.exports = router