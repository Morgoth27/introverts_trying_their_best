const { Thought, User } = require('../models');

const thoughtData = 
{
    thoughts: [
    {
        thoughtMsg: "I really hope mom gets the squirmle toy out today.",
        username: "Ganon",
        reactions: [
            {
                reactionText: "Same! Ready to HUNT!",
                username: "Morgoth"
            }
        ]
    },
    {
        thoughtMsg: "Starving!",
        username: "Korin"
    },
    {
        thoughtMsg: "Mom closed the bathroom door. Currently sobbing.",
        username: "Morgoth"
    },
    {
        thoughtMsg: "treats??/",
        username: "Korin",
        reactions: [
            {
                reactionText: "TREATS PLEASE",
                username: "Korin"
            },
            {
                reactionText: "......dude.",
                username: "Ganon"
            }
        ]
    },
    {
        thoughtMsg: "i cant do this. wheres mom",
        username: "Morgoth",
    reactions: [
            {
                reactionText: "Meet me at the cat tree, we can cuddle till she gets back.",
                username: "Ganon"
            }
        ]
    },
    {
        thoughtMsg: "Feeling possessive rn. Dont even LOOK at my food",
        username: "Ganon"
    }
]   
}

const seedThoughts = () => Thought.bulkCreate(thoughtData);

module.exports = seedThoughts;
