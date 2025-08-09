import mongoose, { Schema } from 'mongoose';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    index: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false, 
  },
  refreshToken: {
    type: String,
    select: false, 
  },
},{
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    this.password =  await bcrypt.hash(this.password, 10)
    return next();
})

userSchema.methods = {
    comparePassword: async function (password) {
      console.log("👉 Incoming password:", password);
    console.log("🔒 Stored hash:", this.password);
        return await bcrypt.compare(password,this.password);
    },

    generateAccessToken: async function (){
        return jwt.sign(
            {
                _id: this._id,
                username: this.username,
                email: this.email,
                fullName: this.fullName,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1h' // ✅ Set token expiration time
            }
        )
    },

    generateRefreshToken : async function () {
        return jwt.sign(
            {
                _id:this._id
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '7d' // ✅ Set token expiration time
            }
        )
    }
}
export const User = mongoose.model('User', userSchema);