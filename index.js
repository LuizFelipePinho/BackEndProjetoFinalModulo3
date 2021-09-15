
// se o ambiente não for de produção, use a configuração do banco local
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();

}

const express = require("express");
const cors = require('cors');

const corsOptions = {
  origin: 'https://backend-tarefas-blue.herokuapp.com/tarefas',
  OptionSuccessStatus: 200,
}


const Conn = require("./models/conexaodb");
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const Conexabd = require("./models/conexaodb");
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;


Conn(db_url, db_user, db_pass, db_data);

const port = 3000;

const tarefa = require("./routes/tarefaRoutes");

app.use("/tarefas", tarefa);

app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
