const connection = require('../config/connection');
const { thoughts, users } = require('./seedData.json')
const { Thought, User } = require('../models')

connection.once('open', async () => {

  await User.deleteMany({});

  await Thought.deleteMany({});

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  console.log("Database has been seeded.")

})