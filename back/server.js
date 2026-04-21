import express from "express";
import cors from "cors";
import { sequelize } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import entityRoutes from "./routes/entity.routes.js";
import { User } from "./models/user.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/entity", entityRoutes);

sequelize.sync().then(async () => {
  const count = await User.count();
  if (count === 0) {
    await User.create({ username: "admin", password: "admin", role: "admin" });
    await User.create({ username: "user", password: "user", role: "user" });
  }
});


app.listen(5000, () => console.log("Server started"));
