const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
    },
    event: {
      type: ObjectId,
      ref: "Event",
    },
    eventName: {
      type: String,
    },
    price: {
      type: Number,
    },
    message: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "Niezatwierdzony",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
