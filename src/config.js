const values = require('./values');

const config = {
    database:{
        url:'mongodb://localhost/PFM',
    },
    jwt:{
        secret: '613b92e493bc7362a0b7ce76',
    },
    multer:{
        [values.animal](cb){
            cb(null, './src/statics/' + values.animal);
        },
        [values.diario](cb){
            cb(null, './src/statics/' + values.diario);
        },
    },
    hostname: 'http://localhost:4500/',
};

module.exports = config;