const textract = require("textract");
const fs = require('fs');

const SongsModel = require('../models/Song');

let locationToSongFiles = "../public/Liedjes_VG_DB.ods";


async function initDB() {

    let songs = await SongsModel.find({});
    if(songs.length === 0) {
      console.log("No songs collections being made.");

      // Lets read a file if there is any
      if(fs.existsSync(locationToSongFiles)){
        textract.fromFileWithPath(filePath, function( error, text ) {
            if(error) {
                console.error("Error at reading songs file: ", error);
            }

            if(text) {
                console.log("Text: ", text);
            }
        })
      } else {
        console.log("No songs file found")
      }
      
    }

}

exports = module.exports = {
    initDB: initDB
};