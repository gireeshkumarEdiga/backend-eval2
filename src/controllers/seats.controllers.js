const express = required("express");

const router = express.Router();

const Seat = require("../models/seats.model");

router.get("/", async (req,res)=>{
    try{
        const seats = await Seat.find({show: {$eq:"express"}}).lean().exec();

        return res.send(shows);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
})

module.exports = router;