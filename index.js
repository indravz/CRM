//
import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/CRMdb', {
  useNewUrlParser: true
});

const app = express();
const PORT = 3000;

//bodyparser setup 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//sering static files

app.use(express.static('public'));


routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express running on ${PORT}`));

app.listen(PORT, () => {
  console.log(`Your serer running on ${PORT}`)
});



