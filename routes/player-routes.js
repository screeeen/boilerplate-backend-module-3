//      routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Player = require('../models/player-model');
const Tournament = require('../models/tournament-model');


// POST '/players'
router.post('/players/add-player', (req, res) => {
  const { name, img, position, score, tournamentId } = req.body;
console.log('tournament in body?',tournamentId);

  let newPlayer = new Player({ name, img, position, score })

  newPlayer.save()
    .then((newPlayerDoc) => {
      Tournament.findByIdAndUpdate(tournamentId, { $push: { players: newPlayerDoc._id } }, { new: true })
        .then((updatedTournament) => {
          console.log('updated tournament',updatedTournament);
          
          res
            .status(201)
            .json(newPlayerDoc);
        })
        .catch(err => {
          res.status(500).json(err);
        })
    })
    .catch(err => {
      res.status(500).json(err);
    })
})



// GET '/players'		 => to get all the players
router.get('/players', (req, res, next) => {
  Player.find().populate('tournament')
    .then(allThePlayers => {
      res.json(allThePlayers);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET '/players/intoTournament/:id'		 => to get all the players
router.get('/players/intoTournament/:id', (req, res, next) => {
  const { id } = req.params
  Tournament.findById(id).populate('players')
    .then(oneTournamentWithPlayers => {
      console.log('get players into tournament ', oneTournamentWithPlayers);
      res.json(oneTournamentWithPlayers);
    })
    .catch(err => {
      res.json(err);
    })
});


// GET '/api/players/:id'		 => to get a specific player
router.get('/players/:id', (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)  //  Bad Request
      .json({ message: 'Specified id is not valid' })
    return;
  }

  Player.findById(id).populate('tournament')
    .then((foundPlayer) => {
      res.status(200).json(foundPlayer);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
});



// PUT '/api/players/:id' 		=> to update a specific player
router.put('/players/:id', (req, res, next) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  console.log(req.params)
  Player.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedPlayer) => {
      console.log(updatedPlayer);
      res
        .json(200, { updatedPlayer, message: `player with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res
        .json(err);
    })
})


// DELETE '/api/players/:id'   => to delete a specific player
router.delete('/players/:id', (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Player.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202)  //  Accepted
        .json({ message: `Player with ${id} was removed successfully.` });
    })
    .catch(err => {
      res.status(500).json(err);
    })
})

module.exports = router;