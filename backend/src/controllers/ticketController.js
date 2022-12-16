const Ticket = require('../models/ticket.Model')


const getTicketData = async (req, res) => {
    try {
        data = await Ticket.find({})
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

// const postTicketData = async (req, res) => {
//     const item = req.body
//     console.log(item)
//     item && await Ticket.insertMany(item)
//     console.log('item has been inserted');
// }

const patchTicketData = async (req, res) => {
    const item = req.body
    try {
        let data = item && await Ticket.updateOne(item)
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }

    console.log('item has been updated');
}

module.exports = { getTicketData,patchTicketData }