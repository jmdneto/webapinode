var express = require ("express");
var config = require ("./config/config");
var datasource = require ("./config/datasource");
var bodyParser = require ("body-parser");

var app = express();
app.config = config;
app.datasource = datasource(app);

app.set("port",7000);
app.use(bodyParser.json());

app.listen(7000, function(){
    console.log("app is running on 7000");});
var Produtos = app.datasource.models.Produtos;
//var result = null;
//var err = null;

app.route ("/produtos")
    .get(function(req,res){
		
        Produtos.findAll({})
            .then(function(result){ res.json(result);})
            .catch(function(){res.status(412);});
    })

    .post(function(req,res){

        Produtos.create(req.body)
            .then(function(result){res.json(result);})
            .catch(function(){res.status(412);});
    });

app.route ("/produtos/:id")
    .get(function(req,res){
     
        Produtos.findOne({where: req.params})
            .then(function(result){res.json(result);})
            .catch(function(){res.status(412);});
    })
    .put(function(req,res){
        
        Produtos.update(req.body,{where: req.params})
            .then(function(result){res.json(result);})
            .catch(function(){res.status(412);});
            
    })

    .delete(function(req,res){
            
        Produtos.destroy({where: req.params})
            .then(function() {res.sendStatus(204);})
            .catch(function(){res.status(412);});
                
    });

      
// export default app;
module.exports = app;