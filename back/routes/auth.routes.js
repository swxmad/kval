import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username, password } });

    if (!user) return res.status(401).json({ message: "Ошибка входа" });

    res.json({ role: user.role });
});

export default router;
