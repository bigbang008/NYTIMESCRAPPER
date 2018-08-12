const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Update with correct info, add validation
const Article = new Schema({
    headline: {
        type: String,
        required: true,
    },
    pub_date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        default: "Not Available"
    }
});


module.exports = mongoose.model("Article", Article);