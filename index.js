
/*

          local http = require "resty.http"
          
          local httpc = http.new()
          local res, err = httpc:request_uri("http://example.com", {
            method = "GET",
            headers = {
              ["User-Agent"] = "Kong/1.0"
            }
          })
          
          if not res then
            kong.log.err("failed to send HTTP request: ", err)
            return kong.response.exit(500, { message = "An unexpected error occurred" })
          end
          
          if res.status ~= 200 then
            kong.log.err("received non-200 response status: ", res.status)
            return kong.response.exit(502, { message = "Received non-200 response status" })
          end
          
          
          

const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: [],
};
##
import webpack from 'webpack';
import config from './webpack.config.js';

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toString());
    process.exit(1);
  }
  console.log(stats.toString());
});
*/

/* import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: 'app.js',
    },
  },
});

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



