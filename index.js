const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require ("body-parser")
const Post = require('./MOCX/cadastros')


app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//conexão com banco de dados
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/MOCX", {
    useMongoClient: true
}).then(() => {
    console.log("MongoDB conectado")
}).catch((err) => {
    console.log("Erro ao se conectar ao mongoDB " +err )
})

// Rotas
app.get('/', function(req,res){
    Post.all().then(function(posts){
        res.render.('main', {envios:posts})    
    })
    
})

app.get ('/cadastros', function(req,res){
    res.render('formulario')
})

app.post('/cadastros', function(req,res){
    res.send("Nomes: " + req.body.nome + "Datas de nascimento: " + req.body.data_nascimento + "CPFs: " + req.body.cpf)

    Post.create({
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        cpf:req.body.cpf
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Erro no cadastro " + erro)})

})

app.get('./deletar/:id', function(req.res){
    Post.destroy({where:{'id':req.params.id}}).then(function(){
        res.send("Exclusão realizada.")}).catch(function(erro){
            res.send.("Não foi possível realizar a exclusão.")
        })
})

app.listen(8081, function(){
console.log("Servidor rodando na URL http://localhost:8081")
})