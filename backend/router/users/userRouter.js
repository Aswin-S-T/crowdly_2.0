const express = require("express");
const { register } = require("../../controllers/users/userController");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send("USER ROUTER CALLED");
});

userRouter.post("/register", async (req, res) => {
	const data = req.body;
	register(data).then((response) => {});
	res.send("REGISTER API CALLED");
});

module.exports = userRouter;
