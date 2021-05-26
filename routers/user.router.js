const { createUser, getUsersByUserId , getUsers , updateUsers , deleteUser } = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/create_user", createUser);
router.get("/get_user", getUsers);
router.get("/get_user/:id", getUsersByUserId);
router.post("/update_user",updateUsers)
router.delete("/delete_user/:id", deleteUser)

module.exports = router;
