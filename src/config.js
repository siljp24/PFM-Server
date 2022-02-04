const values = require('./values');

const config = {
    database:{
        url:'mongodb+srv://Siljp:claveCluster1234@clusterreserva.yzjrv.mongodb.net/Reserva?retryWrites=true&w=majority',
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
    hostname: 'http://reservanimal.herokuapp.com/',
};

module.exports = config;