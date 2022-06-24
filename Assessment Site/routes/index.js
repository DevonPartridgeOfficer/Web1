const router = require("express").Router()
let index_controller = require("../controllers/index")

router.get("/", index_controller.index)

module.exports = router