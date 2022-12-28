var Libros = require('../model/libros');
var Reciente = require('../model/recientes');

const controladorLibros={
    allLibros,
    getLibros,
    createLibros,
    deleteLibros,
    updateLibros,
}

async function allLibros(req,res){
    var libros = await Libros.findAll();
    res.json({
        data:libros
    })

}
async function getLibros(req,res){
    var {id}= req.params;
    var newLibros = await Libros.create(libros);
    var libros = await Libros.findOne({
        where:{
            id
        }
    });
    res.json({
        data:libros
    })

}
async function createLibros(req,res){
    const libros ={
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        content_short: req.body.content_short,
        publisher: req.body.publisher,
        publisher_date: req.body.publisher_date,
        pages: req.body.pages,
        language: req.body.language,
        url_details: req.body.url_details,
        url_download: req.body.url_download,
        cover: req.body.cover,
        thumbnail: req.body.thumbnail,
        num_comments: req.body.num_comments,
        fecha: req.body.fecha,
        id_usuarios: req.body.id_usuarios

    };
    try{
        var newLibros = await Libros.create(libros);
        if(newLibros){
            res.json({
                message: 'Libro registrado satisfactoriamente',
                data: newLibros,
            })
        }
    } catch(error){
        res.status(500).json({
            message: "error al registrar el libro",
            data:{}

        })

    }


}
async function deleteLibros(req,res){

    var {id} = req.params;
    var rowCount = await Libros.destroy({
        where:{
            id
        }
    })
    res.json(rowCount);

}
async function updateLibros(req,res){
    var {id}= req.params;
    const libro ={
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        content_short: req.body.content_short,
        publisher: req.body.publisher,
        publisher_date: req.body.publisher_date,
        pages: req.body.pages,
        language: req.body.language,
        url_details: req.body.url_details,
        url_download: req.body.url_download,
        cover: req.body.cover,
        thumbnail: req.body.thumbnail,
        num_comments: req.body.num_comments,
        fecha: req.body.fecha,
        id_usuarios: req.body.id_usuarios

    };
    var libro_ = await Libros.findOne({
        where:{
            id
        }
    });
    libro_.update(libro);
    res.json(libro_)


}

module.exports = controladorLibros;