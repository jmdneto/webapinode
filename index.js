// import app from './app';
//require = require("@std/esm")(module)
//module.exports = require("./app.js")
var app = require("./app");


app.listen(7000, function(){
    console.log("app is running on 7000");
});