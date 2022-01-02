const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const { NodeHtmlMarkdown, NodeHtmlMarkdownOptions }   =require('node-html-markdown')

const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {

  res.contentType('text/html')
  res.sendFile(path.join(__dirname, '/index.html'));

 
})



app.get('/api', (req, res) => {
  console.log(req.query.url)
  request(req.query.url, function (error, response, body) {
    // console.log(body)
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    const $ = cheerio.load(body);
    // console.log($('article').html())
    // console.log(NodeHtmlMarkdown.translate($('body').html()))
    if (req.query.type === 'html') {
      res.send($('body').html())
    } else {
      res.send(NodeHtmlMarkdown.translate($('body').html()))
    }
    // res.send(NodeHtmlMarkdown.translate($('body').html()))
    // res.send($('body').html())
  });
  
})

const server  = app.listen(port, () => console.log(`servidor escuchando en :${port}`))







