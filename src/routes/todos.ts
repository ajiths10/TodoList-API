import { Router } from "express";

const router = Router();

import { Todo } from "../models/todo";

let todos: Todo[] = [];
const todoController = require("../contorller/index");

type RequestBody = { text: string };
type RequestParams = { todoId: string };

router.get("/", todoController.getTodos);

router.post("/todo", todoController.postTodos);

router.put("/todo/:todoId", todoController.updateTodos);

router.delete("/todo/:todoId", todoController.deleteTodos);

export default router;
