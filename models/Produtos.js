// require = require("@std/esm")(module)
function entidade (sequelize,DataType){
    
    var Produtos = sequelize.define("Produtos",{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            },
        },
    });
    return Produtos;

}
module.exports = entidade;
