const router = require("express").Router();

const { users, boards, tasks } = require("./data");

router.post("/login", (req, res, next) => {
  // do smth to login
  req.session.isLoggedIn = true;
  next();
});

router.post("/logout", (req, res, next) => {
  // do smth to logout
  req.session = null;
  next;
});

router.get("/users", (req, res) => {
  res.status(200).json(users);
});

router.get("/boards", (req, res) => {
  res.status(200).json(boards);
});

router.get("/board/:id", (req, res) => {
  const board = boards.filter(board => board.id === req.params.id);

  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404);
  }
});

router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

module.exports = router;
