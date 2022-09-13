import  express  from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

import todosRoutes from './routes/todos';

app.use(bodyParser.json());
app.use()

app.listen(port);