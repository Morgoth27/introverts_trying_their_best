// Define Mongoose
const { Schema, Types, model } = require('mongoose');
// import { isEmail } from 'validator';

const validator = require('validator'); 

const userSchema = new Schema(
        {
        username: {                 
                type: String, 
                unique: true,  
                required: true,
                trim: true,
                max_length: 14
                },
        email: { 
                type: String, 
                unique: true, 
                required: true,
                trim: true,
                validate: [ validator.isEmail, 'Email is invalid.' ]
        },
        thoughts: [
                {
                        type: Schema.Types.ObjectId,
                        ref: 'Thought',
                },
         ],
        followers: [
                {
                        type: Schema.Types.ObjectId,
                        ref: 'User',
                },
        ]
        },
        {
        toJSON: {
          virtuals: true,
        },
        id: false
        }
);

userSchema.virtual('followersCount').get(function () {
        return this.followers.length;
    });

const User = model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;