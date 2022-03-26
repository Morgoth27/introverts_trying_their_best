const { Schema, Types, model } = require('mongoose');

const dateFormat = (date) => {
    return date.toLocaleString()
};

const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dateFormat,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }   
);

const thoughtsSchema = new Schema({
    thoughtMsg: { 
            type: String, 
            required: true ,
            minlength: [1, "No thought entered. Enter a thought!"],
            maxlength: [300, "Try being a little more succinct -- max 300 characters."],
    },
    createdAt: { 
            type: Date, 
            default: Date.now,
            get: dateFormat,
    },
    username:  { 
            type: String, 
            required: true 
    },
    reactions: [reactionsSchema],
   },
   {
    toJSON: {
        getters: true,
    },
    id: false,
  }       
   );
    
   thoughtsSchema.virtual('reactionsCount').get(function () {
    return this.reactions.length;
  });
    
   const Thought = model('Thought', thoughtsSchema);

    
   module.exports = Thought;