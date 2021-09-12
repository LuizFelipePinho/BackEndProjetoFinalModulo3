const mongoose = require("mongoose");

function Conn(url, user, pass, banco) {
  // url de conexeção: mongodb://servidor:porta/nomedobanco
  mongoose
    .connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      // o then é acionado caso funcione
      console.log("mongoDB connected");
    })
    .catch((err) => {
      // o catch pega o erro como parametro
      console.error(err);
    });
}

module.exports = Conn;
