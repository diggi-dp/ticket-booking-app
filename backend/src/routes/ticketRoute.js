const express = require('express')
const {getTicketData,patchTicketData} = require('../controllers/ticketController')

const router = express.Router()


router.get("/ticket",getTicketData)
router.patch("/ticket",patchTicketData)
// router.update("/ticket",updateTicketData)

module.exports = router