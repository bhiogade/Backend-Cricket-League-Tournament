'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchesSchema = new Schema({
    ListOfMatches:{
     MatchNumber: { type: Number },
     homeTeam: { type: String },
     awayTeam: { type: String },
     venue:    { type: String }
                 },
    MatchSummary:{
     TeamDetails:{
       homeTeam: { type: String },
       awayTeam: { type: String },
     },
     Winner:{ type: String },
     Looser:{ type: String },
     ManOfTheMatch:{ type: String },
     BowlerOfTheMatch:{ type: String },
     BestFielder:{ type: String }
   }});
   
   
const Matches = mongoose.model('Matches', MatchesSchema);
module.exports=Matches;