import mongoose , {Schema} from "mongoose";
import { type } from "os";


const commentSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Content is required'],
        trim: true,
    },
    note:{
        type: Schema.Types.ObjectId,
        ref: 'Note', // References the 'Note' model
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User', // References the 'User' model
        required: true, // Ensures that every comment is linked to a user
    },
    replyTo:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment', // References the 'Comment' model for replies
            default:null
        },     
    ]
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
})


export const Comment = mongoose.model('Comment', commentSchema);