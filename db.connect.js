const mongo = require('mongoose')
require('dotenv').config()
const mongoUri = process.env.MONGO

const data = async () => {
    try {
        const connection = await mongo.connect(mongoUri)
        if (connection) {
            console.log("Successfully Connected");

        }
    } catch (error) {
        console.error('Unable to connect with DB', error)
    }
}
module.exports = { data }