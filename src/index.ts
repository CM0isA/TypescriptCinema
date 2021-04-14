import express, {Application, Request, Response, NextFunction} from 'express';
import { Service1 } from './services';

const port = Number(process.env.PORT || 3000);

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} - ${req.originalUrl} ${JSON.stringify(req.params)}`);
  console.log(`${res..statusCode}`);
  next();
}

const app: Application = express();
app.use(logRequest);

app.get( "/", (req, res) => {
    res.send( "Hello Typescript Assignment" );
});

app.get( "/movies", (req, res) => {
  let service1 = new Service1();
  let response = service1.getMovies();
  res.send(response);
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});