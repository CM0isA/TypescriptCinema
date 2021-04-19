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
let service = new Service1();


app.get( "/", (req, res) => {
    res.send(req.body);
});

app.get( "/movies", (req, res) => {

  let response = service.getMovies();
  res.send(response);
});

app.get( "/today", (req, res) => {
  let response = service.getTodayMovies();
  res.send(response);
});

app.get("/seats/:id", (req,res) =>{
  let movieId = req.params.id;
  let response = service.getSeat(parseInt(movieId));
  res.send(JSON.stringify(response));
});

app.post("/addRezervarion/", (req: Request, res: Response)=> {
  let id =  req.body.id;
  let seats =  req.body.seats;
  if(seats!==""){
    seats=seats.replace("[","");
    seats=seats.replace(']','');
  }
  seats = seats.split(',')
  let response = service.reserveSeats(id,seats);
  res.send('The rezervation id is: ' + response);
});

app.get("/Cancel/:id", (req,res) =>{
  let rezervationId = req.params.id;
  let response = service.cancelRezervatiopn(parseInt(rezervationId));
  res.send(JSON.stringify(response));
});



app.listen(port, () => {
    console.log(`server started on port ${port}`);
});