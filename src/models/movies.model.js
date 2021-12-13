const mongoose = require("mongoose");

const moviSchema = new mongoose.Schema.Schema({

    name : { type : String, required : true},
    actor : [{type: String, required: true}],
    language : [{type : String, required : true}],
    director : [{type:String, required : true}],
    poster_url : [{type: String, required : true}]
})

module.exports = mongoose.model("movie", moviSchema);