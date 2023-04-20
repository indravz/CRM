
/* // Import the Vite configuration from a separate file
import viteConfig from './vite.config.js';

// Create a Vite server and add it as middleware to Express
createServer({...viteConfig, server: { middlewareMode: true }}).then((vite) => {
  app.use(vite.middlewares);
  // Serve the built assets
  app.use(express.static(path.join(__dirname, 'dist')));

  // Define a route that responds with a status code of 200
  app.get('/', (req, res) => {
    res.sendStatus(200);
  });
*/

/* export default {
  build: {
    outDir: 'dist'
  }
}; 

"build": "vite build",*/
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



