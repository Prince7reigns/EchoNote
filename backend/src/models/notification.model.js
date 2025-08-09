import mongoose,{Schema} from "mongoose";


const  notificationSchema = new Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Ensures that every notification has a recipient
    },
    type: {
        type: String,
        enum: ["like", "comment", "follow", "other"], // Specifies the types of notifications
        required: true // Ensures that every notification has a type
    },
    content: {
        type: String,
        required: true // Ensures that every notification has content
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Ensures that every notification has a sender
    },
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
        required: true // Ensures that every notification is linked to a note
    },
    isRead: {
        type: Boolean,
        default: false // Default value for read status
    }
}, { timestamps: true });

export const Notification = mongoose.model('Notification', notificationSchema);