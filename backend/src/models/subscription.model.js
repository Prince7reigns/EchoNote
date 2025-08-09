import mongoose,{Schema} from "mongoose";


const subscriptionSchema = new Schema({
     subscriber: {
            type: Schema.Types.ObjectId, //one who is subscribing
            ref: "User"
       },
        channel: {
            type: Schema.Types.ObjectId, //one to whom subscriber subscribes
            ref: "User"
        },
},
{
    timestamps: true // Automatically adds createdAt and updatedAt fields
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema);