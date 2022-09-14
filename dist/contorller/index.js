"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todos = [];
exports.getTodos = (req, res, next) => {
    res.status(200).json({ todos: todos });
};
exports.postTodos = (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ message: " Aadded", todos: todos });
};
exports.updateTodos = (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: " Updated", todos: todos });
    }
    res.status(404).json({ message: "Error in fetching !!" });
};
exports.deleteTodos = (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todos = todos.filter((todoItem) => todoItem.id !== tid);
    return res.status(200).json({ message: " Deleted", todos: todos });
};
