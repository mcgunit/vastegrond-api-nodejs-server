const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    name: {
      type: String
    },
    text: {
      type: String
    }
});
  
const Song = mongoose.model('Song', SongSchema);

exports = module.exports = Song;