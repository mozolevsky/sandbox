const faker = require("faker");

const users = [
  {
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    photoUrl: faker.image.imageUrl()
  },
  {
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    photoUrl: faker.image.imageUrl()
  }
];

module.exports = users;
