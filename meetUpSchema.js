const mongo = require("mongoose")

const eventSchema = new mongo.Schema({
    eventName: {
        type: String,
    },
    eventType: {
        type: String,
    },
    eventImage: {
        type: String,
    },
    eventStartDate: {
        type: String,
    },
    eventEndDate: {
        type: String,
    },
    eventStartTime: {
        type: String,
    },
    eventEndTime: {
        type: String,
    },
    eventHost: {
        type: String,
    },
    eventDetail: {
        type: String,
    },
    dressCode: {
        type: String,
    },
    ageRestriction: {
        type: String,
    },
    eventTags: [
        {
            type: String
        }
    ],
    eventAddress: {
        type: String,
    },
    eventPrice: {
        type: String,
    },
    eventHosts:[
        {
            hostName:{
                type:String
            },
            hostImage:String
        }
    ]
    

})
const Event = mongo.model("Event", eventSchema)
module.exports = Event