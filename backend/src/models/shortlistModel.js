const mongoose = require('mongoose');

const shortlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotels',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Compound index to ensure a user can't shortlist the same room multiple times
shortlistSchema.index({ userId: 1, roomId: 1 }, { unique: true });

module.exports = mongoose.model('Shortlist', shortlistSchema);