(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var studentSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: { type: Number },
        address: String,
        city: String,
        courses: [{
            name: { type: String, required: true},
            grade: { type: Number, default: 0 },
            year: { type: String, length: 4},
            semester: { type: String, length: 1 }            
        }]
    });

    module.exports = mongoose.model('Student', studentSchema);
})();