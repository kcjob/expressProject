const express = require('express');
const route = require('./route/route');
const mongoose = require('mongoose');

var db = "mongodb://localhost:27017/vocab"
var mongoDB = 'vocab';

mongoose.connect(db, {UseNewUrlParser:true, useUnifiedTopology:true});

const app = express();
const port = 3000;

app.get('/', function(req, res){
  res.send("hello World!!");
})

app.use(express.json());
app.use('/api', route);

app.listen(port, function(){
  console.log("The server is listening on port: ", port);

})

