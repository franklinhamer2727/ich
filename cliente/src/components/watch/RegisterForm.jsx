import React, {useState} from 'react';
import axios from 'axios';

const RegisterForm=()=>{
    //Creamos un estado para alamacenar los datos del formulario
    const[formData, setFormData] = useState({
        nombre:'',
        apellido: '',
        correo:'',
        contrasena: '',

    
    });

    //Crear  una funcion para manejar cambios en lso campos del formulario
    const handleChange= (event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value,
        });
    };

    //crea una funcion para manejar  el envio del formulario
    const handleSubmit =(event)=>{
        event.preventDefault();

        //envia la solicitud POST al servidr  con los datos del formualrio
        axios.post('localhost:3001/api/user',formData).then((response)=>{
            console.log(response);

        }).catch((error)=>{
            console.error(error);
        });


    }
    return (
        <form onSubmit={handleSubmit}>
            <label >
                Nombre
                <input type="text"name="nombre" value={formData.nombre} onChange={handleChange} required />

            </label>
            <br />
            <label>
                Apellido
                <input type="text"name="apellido" value={formData.apellido} onChange={handleChange} required />

            </label>
            <br />
            <label>
                Apellido
                <input type="email"name="correo" value={formData.correo} onChange={handleChange} required />

            </label>
            <br />
            <label>
                Apellido
                <input type="password"name="contrasena" value={formData.contrasena} onChange={handleChange} required />

            </label>
            <br />
            <button type ="submit">Registrarse</button>
        </form>
    );
}

export default RegisterForm