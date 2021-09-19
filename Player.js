'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    playername: { type: String},
    team: {
        fullName: { type: String },
        abbrevation: {type: String}
    },
    gamesplayed: { type: Number },
    wins: { type: Number },
    losses: { type: Number },
    draws: { type: Number },
    points: { type: Number }
    
});


//Document creation in db
const Player = mongoose.model('Player', PlayerSchema);

module.exports=Player;