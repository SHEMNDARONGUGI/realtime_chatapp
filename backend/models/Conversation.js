import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },

    // this new column helps store the last message concept to prevent loading the lastMessage everytime we load the conversation

    lastMessagePreview: {
      content: String,
      timestamp: Date,
    },
    unreadCount: {
      type: Map,
      of: Number,
      default: {},
    },
  },
  { timestamps: true },
);

//indexing the participants collumn
conversationSchema.index(
  { "participants.0": 1, "participants.1": 1 },
  { unique: true },
);

//We only want to have users A and B so that we can't have duplicate conversations - we use a mongoose middleware
conversationSchema.pre("save", function (next) {
  if (this.participants && this.participants.length === 2) {
    this.participants = this.participants.map((p) => p.toString()).sort();
  }

  next();
});

export default mongoose.model("Conversation", conversationSchema);
