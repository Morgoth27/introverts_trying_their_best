const sequelize = require('../config/connection');
const seedUsers = require('./userSeed')
const seedThoughts = require('./thoughtSeed');

const seedDatabase = async () => {


  await sequelize.sync({ force: true });


  await seedThoughts();
  await seedUsers();

  process.exit(0);
};

seedDatabase();