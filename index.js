//Require 'express' modules
const express = require('express')

//Initialize 'express' app object.
const app = express()

//Create a homepage route.
app.get('/', function(req, res){
    //Sends to client/web browser
    res.send('Hello world!')
})

app.get('/second', function(req, res){
    res.send('My Second Page!')
})

//Listen for connnections.
app.listen(3000)//Port number