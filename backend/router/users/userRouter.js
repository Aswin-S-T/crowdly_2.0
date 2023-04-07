const express = require("express");
const { register, login } = require("../../controllers/users/userController");
const { verifyToken } = require("../../middlewares/auth");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send("USER ROUTER CALLED");
});

userRouter.post("/register", async (req, res) => {
	const data = req.body;
	register(data).then((response) => {
		res.send(response);
	});
});

userRouter.post("/login", async (req, res) => {
	const data = req.body;
	login(data).then((response) => {
		res.send(response);
	});
});

module.exports = userRouter;
