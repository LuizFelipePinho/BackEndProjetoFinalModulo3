const express = require('express');
const Conn = require('./models/conexaodb');
const app = express();
app.use(express.json());

const Conexabd = require('./models/conexaodb');
Conn("localhost", 27017, "tarefas");

const port =  3000;


const tarefa = require('./routes/tarefaRoutes');

app.use("/tarefas", tarefa);


app.listen( process.env.PORT || port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});