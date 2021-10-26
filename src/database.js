const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.database.url)
    .then(()=>{
       console.log('BD conectada');
    })
    .catch((err)=>{
        console.log(err);
    })