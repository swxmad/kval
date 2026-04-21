import express from "express";
import { Entity } from "../models/entity.js";

const router = express.Router();

// GET + фильтры
router.get("/", async (req, res) => {
  const where = {};

  if (req.query.title) where.title = req.query.title;
  if (req.query.category) where.category = req.query.category;

  const items = await Entity.findAll({ where });
  res.json(items);
});

// CREATE
router.post("/", async (req, res) => {
  const item = await Entity.create(req.body);
  res.json(item);
});

// UPDATE
router.put("/:id", async (req, res) => {
  await Entity.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "updated" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Entity.destroy({ where: { id: req.params.id } });
  res.json({ message: "deleted" });
});

export default router;
