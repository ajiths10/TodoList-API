import { Todo } from "../models/todo";

let todos: Todo[] = [];
type RequestBody = { text: string };
type RequestParams = { todoId: string };

exports.getTodos = (req: any, res: any, next: any) => {
  res.status(200).json({ todos: todos });
};

exports.postTodos = (req: any, res: any, next: any) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  res.status(200).json({ message: " Aadded", todos: todos });
};

exports.updateTodos = (req: any, res: any, next: any) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: " Updated", todos: todos });
  }
  res.status(404).json({ message: "Error in fetching !!" });
};

exports.deleteTodos = (req: any, res: any, next: any) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;

  todos = todos.filter((todoItem) => todoItem.id !== tid);
  return res.status(200).json({ message: " Deleted", todos: todos });
};
