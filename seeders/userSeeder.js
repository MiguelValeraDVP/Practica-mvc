/* const { faker } = require("@faker-js/faker");
const user = require("../models/userModel");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.name.firstName(),
    });
  }
  await user.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de users.");
};
 */