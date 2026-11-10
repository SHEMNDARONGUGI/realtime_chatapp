import mongoose from "mongoose";
const friendshipSchema = new mongoose.Schema(
  {
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

// creating a compound index for the requester and recipient pair to make sure we have only one friendship per a given pair of requester & recipient

friendshipSchema.index({ requester: 1, recipient: 1 }, { unique: true });

export default mongoose.model("Friendship", friendshipSchema);
