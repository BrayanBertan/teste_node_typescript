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
  repository.TEST().then(
    function(value){
      console.log(value);
      res.send(value)
    },
    function(error){
      res.send(error);
    },
  );
 
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
