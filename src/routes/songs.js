const express = require('express');
const router = express.Router();

const SongsModel = require('../models/Song');

// middleware that is specific to this router
router.use((req, res, next) => {
  //console.log('Time: ', Date.now())
  next();
});
// define the home page route
router.get('/', (req, res) => {
  res.send('Songs home page')
});


/**
 * Will get the whole song list
 */
router.get('/getsongs', (req, res) => {

  SongsModel.find({})
  .then((songsList) => {
    //console.log("Getting Songs: ", JSON.stringify({songsList: songsList}));
    res.json({songsList: songsList});
  })
  .catch((err) => {
    res.send();
  })
  
})


module.exports = router