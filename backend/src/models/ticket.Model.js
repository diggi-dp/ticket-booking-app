const mongoose = require('mongoose')


const ticketSchema = new mongoose.Schema({
    seatNumbers: { type: [] },
    availableSeat: { type: [], required: true },
    bookedSeat: { type: [], required: true },
    reservedSeat: { type: [], required: true }
})
module.exports = new mongoose.model('Ticket', ticketSchema)