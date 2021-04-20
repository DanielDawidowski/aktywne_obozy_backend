const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const ClientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        phone: { 
            type: Number, 
            trim: true,
            required: true 
        },
        event: { 
            type: ObjectId,
            ref: "Event"
        },
        message: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            default: "Niezatwierdzony",
            enum: ["Niezatwierdzony", "Zatwierdzony"]
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);