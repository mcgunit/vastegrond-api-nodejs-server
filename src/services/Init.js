const csv = require("csv-parser");
const fs = require('fs');
const path = require("path");

const SongsModel = require('../models/Song');

let locationToSongFiles = path.resolve("public/Liedjes_VG_DB.csv");

async function initDB() {

    let songs = await SongsModel.find({});
    if(songs.length === 0) {
      console.log("No songs collections being made.");
      let results = [];
      // Lets read a file if there is any
      if(fs.existsSync(locationToSongFiles)){
        fs.createReadStream(locationToSongFiles)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            
            for(let i=0; i<results.length; i++) {
                let title = results[i].Title;
                let text = results[i].Body;

                //console.log("Title: ", title);
                //console.log("Body: ", text);

                
                SongsModel.find({name: title})
                .then((result) => {
                    //console.log("checking song: ", result);
                    if(result.length == 0) {
                        SongsModel.create({ name: title, text: text});
                    } else {
                        console.log(`Song ${title} already in db`);
                    }
                })
                .then(() => {
                    console.log(`Song ${title} written to db`)
                })
                

            }
        });
      } else {
        console.log("No songs file found")
      }
      
    }

}

exports = module.exports = {
    initDB: initDB
};