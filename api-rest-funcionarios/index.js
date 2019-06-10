const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'funcionarios_db'
});

connection.connect(erro =>{
    if(erro){
        return erro;
    }
});



app.get('/', (req, res) => {
    const CRIA_FUNCIONARIOS_DB_QUERY = 'CREATE SCHEMA IF NOT EXISTS funcionarios_db';
    const USA_FUNCIONARIOS_DB_QUERY = 'USE funcionarios_db';
    const CRIA_FUNCIONARIOS_TABLE_QUERY = 'CREATE TABLE IF NOT EXISTS '+
                                        'funcionarios(Id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(Id),'+
                                        'Idade int NOT NULL, Nome varchar(64), Cargo varchar(64))';
  
  
    //criar base de dados
    connection.query(CRIA_FUNCIONARIOS_DB_QUERY, (err, resultados) => {
        if(err){
            console.log('erro ao criar a base de dados');
            return res.send(err);
        }
        else{
            //escolher a base de dados
            connection.query(USA_FUNCIONARIOS_DB_QUERY, (err, resultados) => {
                if(err){
                    console.log('erro ao usar a base de dados');
                    return res.send(err);
                }
                else{
                    //criar a tabela
                    connection.query(CRIA_FUNCIONARIOS_TABLE_QUERY, (err, resultados) => {
                        if(err){
                            console.log('erro ao criar a tabela da base de dados');
                            return res.send(err);
                        }
                        else{
                            return res.send('vai em /funcionarios para ver os funcionarios');
                        }            
                    });
                }
            });            
        }
    });
});
  

app.get('/funcionarios', (req, res) =>{  
    const SELECT_ALL_FUNCIONARIOS_QUERY = 'SELECT * FROM funcionarios'
    connection.query(SELECT_ALL_FUNCIONARIOS_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data: results
            });
        }
    });
});

app.get('/funcionario/Id', (req, res) =>{  
    const {Id} = req.query;
    const SELECT_FUNCIONARIO_BY_ID_QUERY = `SELECT * FROM funcionarios WHERE Id LIKE ${Id}`
    connection.query(SELECT_FUNCIONARIO_BY_ID_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data: results
            });
        }
    });
});

app.post('/funcionario', (req,res) => {
const {Idade, Nome, Cargo} = req.query;
console.log('alo ', req.query)

    if(Idade && Nome && Cargo){
        const INSERT_DISCOS_QUERY = `INSERT INTO funcionarios (Idade, Nome, Cargo) VALUES(${Idade},'${Nome}','${Cargo}')`
    
        connection.query(INSERT_DISCOS_QUERY, (err, results) => {
            if(err){
                return res.send(err);
            }
            else{
                return res.send('funcionario adicionado com sucesso');
            }
        });
    }else{
        res.send('Query Idade Nome Cargo para adicionar');
    }
});

app.delete('/funcionario/del', (req, res) => {
    const {Id} = req.query;

    if(Id){
        const DELETE_DISCOS_QUERY = `DELETE FROM funcionarios WHERE Id = '${Id}'`;

        connection.query(DELETE_DISCOS_QUERY,  (err, results) => {
            if(err){
                return res.send(err);
            }
            else{
                return res.send('funcionario removido com sucesso');
            }
        });
    }else{        
        res.send('Query Id para deletar');
    }
});

app.put('/funcionario/upd', (req, res) => {  
    const {Id, Atributo, Valor} = req.query;

    if(Id && Atributo && Valor){
        if(isNaN(Valor)){
            const UPDATE_FUNCIONARIOS_QUERY = `UPDATE funcionarios SET ${Atributo} = '${Valor}'  WHERE Id = ${Id}`;

            connection.query(UPDATE_FUNCIONARIOS_QUERY, (err, results) => {
                if(err){
                    return res.send(err);
                }
                else{
                    return res.send('sucesso na atualização do funcionario');
                }
            });
        }
        else{
            const UPDATE_FUNCIONARIOS_QUERY = `UPDATE funcionarios SET ${Atributo} = ${Valor}  WHERE Id = ${Id}`;

            connection.query(UPDATE_FUNCIONARIOS_QUERY, (err, results) => {
                if(err){
                    return res.send(err);
                }
                else{
                    return res.send('sucesso na atualização do funcionario');
                }
            });
        }   
    }else{
        res.send('Query Id & Atributo={Nome ou Cargo ou Idade} & Valor para update');
    }  
});


app.get('/funcionario/search', (req, res) => {
    const {Atributo, Valor} = req.query;

    if(Atributo && Valor){
        if(isNaN(Valor)){
            const SEARCH_ALL_FUNCIONARIOS_QUERY = `SELECT * FROM funcionarios WHERE ${Atributo} LIKE '${Valor}'`;

            connection.query(SEARCH_ALL_FUNCIONARIOS_QUERY, (err, results) => {
                if(err){
                    return res.send(err);
                }
                else{
                    return res.json({
                        data: results
                    });
                }
            });
        }
        else{
            const SEARCH_ALL_FUNCIONARIOS_QUERY = `SELECT * FROM funcionarios WHERE ${Atributo} LIKE ${Valor}`;

            connection.query(SEARCH_ALL_FUNCIONARIOS_QUERY, (err, results) => {
                if(err){
                    return res.send(err);
                }
                else{
                    return res.json({
                        data: results
                    });
                }
            });
        }               
    }else{
        res.send('Query Atributo={Id ou Idade ou Nome ou Cargo} & Valor para pesquisar');
    } 
});


const port = 4000;

app.listen(port, () => {
    console.log('servidor funcionarios escutando na porta', port);
});
