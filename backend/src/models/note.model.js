import mongoose , { Schema } from 'mongoose';
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// {
//   title,
//   content,
//   hashtags,
//   image,
//   createdBy,
//   isPublic,
//   isPinned,
//   sharedWith,
//   views,
//   likes,
//   comments,
//   summary,
//   type,
// }

// Defines the structure for each content block within a note.
const blockSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['text', 'image', 'heading'], // Allowed block types
    },
    data: {
        // 'Mixed' type allows this field to store a string (for text)
        // or an object like { url, public_id } (for an image).
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
}, { _id: false }); // No separate _id for sub-documents (blocks)

const noteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    content: {
        type: [blockSchema],
        default: [],
    },
    hashtags: [{
        type:mongoose.Types.ObjectId,
        ref: 'Hashtag',
    }],
    owner:{
        type: Schema.Type.ObjectId,
        ref: 'User', // References the 'User' model
        required: true // Ensures that every note is linked to a user
    },
    isPublic: {
        type: Boolean,
        default: true // Default visibility is public
    },
    viwes:{
        type: Number,
        default: 0 // Default view count is 0
    },
    summary: {
        type: String,
        trim: true,
        default: ''
    },
    type:{
        type: String,
        default:'general', // Default type is 'general'
        required: true
    },
    treandScore:{
        type: Number,
        default: 0 // Default trend score is 0
    },
    savedCount: {
       type: Number,
       default: 0 
   }
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
})

noteSchema.plugin(mongooseAggregatePaginate)


export const Note = mongoose.model('Note', noteSchema);