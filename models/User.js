// Define Mongoose
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
        username: { 
                type: String, 
                unique: true,  
                required: true,
                trim: true,
        },
        email: { 
                type: String, 
                unique: true, 
                required: true,
                validate: {   
                    validator: function (valid) {
                      return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valid);
                    },
                    message: 'Email invalid. Provide a valid email.'
                }
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
        }
);

userSchema.virtual('followersCount').get(function () {
        return this.followers.length;
    });

const User = model('User', userSchema);


module.exports = User;