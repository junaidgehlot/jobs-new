const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide a company name'],
        maxlength: 50
    },
    position: {
        type: String,
        reqiured: [true, 'Please provide position'],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'decline', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref:'User',
        required: [true, 'Please provode user']
    }

}, {timestamps: true});

module.exports = mongoose.model('Job', jobSchema);