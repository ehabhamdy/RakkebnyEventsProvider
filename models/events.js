var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    poseter_url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Event = module.exports = mongoose.model('Event', eventSchema);

module.exports.getEvents = function (callback, limit) {
    Event.find(callback).limit(limit);
}