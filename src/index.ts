import express, {Application, Request, Response, NextFunction} from 'express';
import { Service1 } from './services';

const port = Number(process.env.PORT || 3000);

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} - ${req.originalUrl} ${JSON.stringify(req.params)}`);
  console.log(`${res.statusCode}`);
  next();
}

const app: Application = express();
app.use(logRequest);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get( "/", (req, res) => {
    res.send(req.body);
});

app.get( "/movies", (req, res) => {
  let service1 = new Service1();
  let response = service1.getMovies();
  res.send(response);
});

app.get( "/today", (req, res) => {
  let service1 = new Service1();
  let response = service1.getTodayMovies();
  res.send(response);
});

app.get("/seats/:id", (req,res) =>{
  let service = new Service1();
  let id = req.params.id;
  let response = service.getSeat(parseInt(id));
  res.send(JSON.stringify(response));
});

app.post("/addRezervarion/", (req: Request, res: Response)=> {
  let id =  req.body.id;
  let item =  req.body.seats;

  console.log(id);
  res.send(item);
});



app.listen(port, () => {
    console.log(`server started on port ${port}`);
});