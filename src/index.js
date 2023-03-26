const express = require('express');
const app = express();

const songs = require('./routes/songs');


/* Router */
app.use('/songs', songs);



// To server static files located in the pujblic folders
app.use(express.static('public'));


const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("Vaste Grond listening at http://%s:%s", host, port)
 })