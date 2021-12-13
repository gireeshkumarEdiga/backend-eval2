const mongoose = required("mongoose");

const seatSchema = new mongoose.Schema({
    show_id : {
        type : mongoose.Schema.Type.ObjectId,
        ref : "show",
        required : type
    }
})

module.exports = mongoose.model("seats",seatSchema);