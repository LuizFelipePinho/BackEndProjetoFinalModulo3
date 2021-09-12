const mongoose = require('mongoose');


function Conn(url, porta, banco) {

    // url de conexeção: mongodb://servidor:porta/nomedobanco
    mongoose.connect(`mongodb+srv://dbUser:123@cluster0.rytip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then( () => { // o then é acionado caso funcione
        console.log("mongoDB connected");
    } ).catch((err) => { // o catch pega o erro como parametro
        console.error(err)
    });
}

module.exports = Conn;