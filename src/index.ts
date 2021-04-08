import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import repository = require('./repository');
dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req: Request, res: Response) => {
console.log('hello');
});

app.post('/categorias', (req: Request, res: Response) => {
  app.post('/comidas', (req, res) => {
    //repository.createCategoria(req.)
    //res.statusCode = 200;
  });

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
