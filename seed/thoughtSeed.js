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
        thoughtMsg: "Korin",
        username: "Starving!"
    },
    {
        thoughtMsg: "Morgoth",
        username: "Mom closed the bathroom door. Currently sobbing."
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
        thoughtMsg: "Morgoth",
        username: "i cant do this. wheres mom",
    reactions: [
            {
                reactionText: "Meet me at the cat tree, we can cuddle till she gets back.",
                username: "Ganon"
            }
        ]
    },
    {
        thoughtMsg: "Ganon",
        username: "Feeling possessive rn. Dont even LOOK at my toys or you'll catch these paws"
    }
]   
}

const seedThoughts = () => Thought.bulkCreate(thoughtData);

module.exports = seedThoughts;
