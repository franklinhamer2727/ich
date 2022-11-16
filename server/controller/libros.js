//Exportar el modelo que encierra la base de datos


// var mongoose = require("mongosse");
// var Libros = require();


//functrion para poder mostar todos los libros
LibrosController .list =function(req,res){
    res.json({"users":["UserOne","UserTwo","UserThree","UserFour"]})
}
//Funcion para poder mostrar solo un libro
LibrosController.show= function(req,res){

}
//function para mostrar la vista de regsitro de libro
LibrosController.create = function(req,res){

}

//funcion para poder guardar el libro en la base de datos

LibrosController.save= function(req,res){
    
}

//Funcion para poder mostrar el libro que se va a editar
LibrosController.edit= function(req,res){

}
//functon para poder actualizar el libro editado
LibrosController.update= function(req,res){

}
//function  para poder borrar el libro seleccionado
LibrosController.delete= function(req,res){

}

module.exports = LibrosController;