import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    s: {
      type: String,
      required: true,
      index: true,
    },

    e: {
      type: String,
      required: true,
      index: true, 
    },

    p: {
      type: String,
      required: true,
      index: true,
    },

    pid: {
      type: String,
      default: null, 
    },

    x: Number,

    y: Number,

    t: {
      type: Number,
      required: true,
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "30d",
    }
  },
  {
    versionKey: false,
  }
);

eventSchema.index({ s: 1, t: -1 });

eventSchema.index({ p: 1, e: 1 });

const event = mongoose.model("event", eventSchema);

export default event;