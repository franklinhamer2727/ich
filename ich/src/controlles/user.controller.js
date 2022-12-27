var User = require ('../model/user');

//funcion para llmaar a todos los datos que se encuentran en la base de datos

const controladorUsuario ={
    allUsuario,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario,
}

async function allUsuario(req,res){
    var users= await User.findAll();
    res.json({
        data:users
    })
}

async function getUsuario(req,res){
    var {id}= req.params;
    console.log("Imprmiendo el id desde el navegador",req.params)
    var user = await User.findOne({
        where:{
            id
        }
    });
    res.json({
        data:user
    })
}

async function createUsuario(req,res){
    
    const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        estado: req.body.estado,
        roles: req.body.roles,
    };
    try{
        var newUser = await User.create(usuario);
        if(newUser){
            res.json({
                message:'Usuario creados satisfactoriamente',
                data:newUser,
            })
        }

    } catch(error){
        res.status(500).json({
            message:"error al crear usuario",
            data: {}
        })

    }
    
}
async function  deleteUsuario(req,res){
    var {id} = req.params;
    var rowCount = await User.destroy({
        where:{
            id
        }
    })
    res.json(rowCount);
}

async function  updateUsuario(req,res){
    var {id} = req.params;
    
    const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        estado: req.body.estado,
        roles: req.body.roles,
    };
    var user = await User.findOne({
        where:{
            id
        }
    });
    user.update(usuario);
    res.json(user)

}

module.exports = controladorUsuario;