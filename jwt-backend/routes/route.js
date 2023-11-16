const router = require("express").Router();

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  logout,
  loggedIn,
} = require("../controllers/userController");

router.get("/getUser", getUser);
router.post("/createUser", createUser);
router.patch("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/loggedIn", loggedIn);
module.exports = router;
