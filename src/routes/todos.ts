import { Router } from "express";

const router = Router();

const todoController = require("../contorller/index");

router.get("/", todoController.getTodos);

router.post("/todo", todoController.postTodos);

router.put("/todo/:todoId", todoController.updateTodos);

router.delete("/todo/:todoId", todoController.deleteTodos);

export default router;
