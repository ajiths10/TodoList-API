import {  Router } from 'express';

const router = Router();

import { Todo } from "../models/todo";

const todos: Todo[] = [];

router.get('/', (req, res, next) => {
  res.status(200).json({ todos : todos})
});

router.post('/todo',(req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text 
    };

    todos.push(newTodo);
    
    res.status(200).json({ todos : todos})
})
export default router;