const dotenv = require('dotenv');
dotenv.config();

let path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analysedData', postData);

function postData (req, res) {
  const url = `${baseUrl}key=${apiKey}&url=${req.body.url}&lang=auto`

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(url, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    res.send(data)
    console.log(data)
  })
  .catch(error => {
    console.log('Error:', error);
    res.status(500).send('An error occurred');
  });
}


