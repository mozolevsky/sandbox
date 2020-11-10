const faker = require("faker");
const users = require("./users");

const boards = [
  {
    id: faker.random.uuid(),
    title: faker.lorem.words(),
    adminId: users[0].id,
    membersIds: users.map(user => user.id),
    lists: [faker.lorem.words(), faker.lorem.words()],
    isPrivate: true
  },
  {
    id: faker.random.uuid(),
    title: faker.lorem.words(),
    adminId: users[1].id,
    membersIds: users.map(user => user.id),
    lists: [faker.lorem.words(), faker.lorem.words()],
    isPrivate: true
  }
];

module.exports = boards;
