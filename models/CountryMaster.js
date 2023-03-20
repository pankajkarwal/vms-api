const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const countrySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: false
    }
})

countrySchema.plugin(uniqueValidator);
mongoose.pluralize(null); // Disabling making table name plural

module.exports = mongoose.model('country_master', countrySchema);