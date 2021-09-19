'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TournamentScoreTableSchema =new Schema({
    SerialNo:{ type: Number},
    TeamName:{ type: Number },
    TotalMatchesPlayed:{ type: Number},
    MatchesWon:{ type: Number,
    MatchesLost:{ type: Number},
    MatchesDraw:{ type: Number},
    Points:{ type: Number}
  }
});

const Score = mongoose.model('Score',TournamentScoreTableSchema);
module.exports=Score;