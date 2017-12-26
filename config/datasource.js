var Sequelize = require("sequelize");
var fs = require("fs");
var path = require ("path");


var database = null;

var loadModels = function (sequelize){
    var dir = path.join(fs.realpathSync("."),"../proj/models");
    // var dir = ('C:\Users\jmdne\Documents\_svn\proj\models');
    var models=[];
    fs.readdirSync(dir).forEach(function(file){
        var modelDir = path.join(dir,file),
            model = sequelize.import(modelDir);
        models[model.name]=model;      
    });
    return models;
};

function bd (app){
    if(!database){
        var config = app.config;
        var sequelize = new Sequelize(
            // config.host,
            // config.port,
            config.database,
            config.username,
            config.password,
            config.params
            // config.dialect
        );
        database ={
            sequelize:
            Sequelize,
            models:{},
        };

        database.models=loadModels(sequelize);

        sequelize.sync().done(function(){
            return database;
        });
    }
    return database;
}
module.exports = bd;