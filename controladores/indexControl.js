//jshint esversion:6
const { Op } = require("sequelize");
async function index (request,response){
    response.json({data:"Bienvenidos a SIRT."})
}
module.exports =  {
    index
};