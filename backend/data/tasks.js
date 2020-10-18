const faker = require("faker");
const users = require("./users");
const boards = require("./boards");

const tasksForBoard = parentBoard => [
  {
    id: faker.random.uuid(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    boardId: parentBoard.id,
    list: parentBoard.lists[0],
    creatorId: users[0].id,
    membersIds: [users[0].id]
  },
  {
    id: faker.random.uuid(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    boardId: parentBoard.id,
    list: parentBoard.lists[1],
    creatorId: users[1].id,
    membersIds: [users[1].id]
  }
];

module.exports = [...tasksForBoard(boards[0]), ...tasksForBoard(boards[1])];
