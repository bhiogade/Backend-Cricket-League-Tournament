'use strict';
const express = require('express')
const mongoose = require('mongoose');

// express app
const app = express()

const port = process.env.PORT || 5000

const Player = require('./Player');
const Matches = require('./Matches');
const Game = require('./Game');
const Score = require('./Score');

//UserName : sanket  , Password : nodes123
const dbURI = 'mongodb+srv://sanket:nodes123@cluster0.dpkry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then( result=> console.log('Mongodb connected '))
  .catch(err => console.log(err));

//To fetch all records of players schema from db
app.get('/all-players', (req, res) => {
  Player.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


//To fetch all records of Matches schema from db
app.get('/all-matches', (req, res) => {
  Matches.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


//To fetch all records of Score schema from db
app.get('/all-score', (req, res) => {
  Score.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


//To fetch all records of Game schema from db
app.get('/all-game', (req, res) => {
  Game.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


//To find single Player data by Id
app.get('/single-Player', (req, res) => {
  Player.findById('6135d18cf6868d5f7983d288')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


//HomePage
app.get('/', (req, res) => {
 res.send('Meow')
})

app.listen(port, () => {
  console.log(`Example app again listening at http://localhost:${port}`)
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});