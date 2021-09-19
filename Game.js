'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    
    awayTeam: {
        playername: { type: String },
        team: {
            fullName: { type: String },
            abbrevation: { type: String }
        },
        gamesplayed: { type: Number },
        wins: { type: Number },
        losses: { type: Number },
        draws: { type: Number },
        otLoss: { type: Number },
        points: { type: Number }
    },
    homeTeam: {
        playername: { type: String },
        team: {
            fullName: { type: String },
            abbrevation: { type: String }
        },
        gamesplayed: { type: Number },
        wins: { type: Number },
        losses: { type: Number },
        draws: { type: Number },
        points: { type: Number }
    },
  });

const Game   = mongoose.model('Game', GameSchema);
module.exports=Game;