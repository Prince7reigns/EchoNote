import mongoose,{Schema} from "mongoose";

const  hashtagSchema = new Schema({
    tag: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  count: {
    type: Number,
    default: 1
  },
  lastUsedAt: {
    type: Date,
    default: Date.now
  }
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
})

export const Hashtag = mongoose.model('Hashtag', hashtagSchema);