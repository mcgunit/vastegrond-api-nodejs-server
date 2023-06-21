const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const init = require("./services/Init");

/* Router */
const songs = require('./routes/songs');
app.use('/songs', songs);


// To server static files located in the pujblic folders
app.use(express.static('public'));
app.use(cors({
    origin: '*'
}));

/* Configs */
let SERVER_PORT = process.env.PORT || 9000;
let MONGO_HOST = process.env.MONGO_HOST || "mongodb:27016";
let MONGO_DB = process.env.MONGO_DB || "vastegrond";


const server = app.listen(SERVER_PORT, () => {
    const port = server.address().port
    
    console.log("Vaste Grond listening at ", port);

    mongoose.connect(`mongodb://${MONGO_HOST}/${MONGO_DB}`, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongo");

        init.initDB();
    })
    .catch((err) => {
        console.error("Error at connecting to mongodb: ", err);
    });
});


// Listen to the Unhandled Rejections
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});



