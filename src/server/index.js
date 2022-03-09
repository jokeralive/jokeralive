const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express') // Require Express to run server and routes
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express() // Start up an instance of app
const api_key = process.env.API_KEY;
const port = process.env.PORT;
const fetch = require('node-fetch');

app.use(cors());
app.use(bodyParser.json());  // to use json

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('dist'));

const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
// Post
app.post('/userText', async(req, res) => {
    console.log('req.body ===+>', req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${req.body.formText}&lang=en`);
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});
