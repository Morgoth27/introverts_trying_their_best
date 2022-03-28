const connection = require('../config/connection');
const seedUsers = require('./userSeed')
const seedThoughts = require('./thoughtSeed');

const seedDatabase = async () => {


  await connection.sync({ force: true });


  await seedThoughts();
  await seedUsers();

  console.log("Seeding completed! 🌱")

  process.exit(0);
};

seedDatabase();