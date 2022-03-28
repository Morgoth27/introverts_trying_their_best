const connection = require('../config/connection');
const { thoughts, users } = require('./seedData.json')
const { Thought, User } = require('../models')

connection.once('open', async () => {
  console.log("Seeding started.....")

  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  await User.collection.findOneAndUpdate(
    { _id: users[0]._id },
    { $push: 
      {    thoughts: { $each: [thoughts[2]._id, thoughts[4]._id]},
           followers: users[1]._id,} 
    }
  );

  await User.collection.findOneAndUpdate(
    { _id: users[1]._id },
    { $push: 
      {   thoughts: { $each: [thoughts[0]._id, thoughts[5]._id]},
          followers: {$each: [users[0]._id, users[2]._id]},} 
    }
  );

  await User.collection.findOneAndUpdate(
    { _id: users[2]._id },
    { $push: 
      { thoughts: { $each: [thoughts[1]._id, thoughts[3]._id]},
        followers: users[1]._id} 
    }
  );

  await User.collection.findOneAndUpdate(
    { _id: users[3]._id },
    { $push: 
      { followers: {$each : [users[0]._id, users[1]._id, users[2]._id]} } 
    }
  );





  console.log("Database has been seeded.")
  process.exit(0);
})