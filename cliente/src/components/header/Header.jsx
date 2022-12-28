import React, { useState } from "react";
import "./header.css";

const Header = () => {
    const [Mobile, setMobile] = useState(false);
    return (
        <>
            <header>
                <div className="container flexSB">
                    <nav className="flexSB">
                        <div className="logo">
                            <img src="./images/logo.png" alt="" />
                        </div>
                        {/*<ul className='flexSB'>*/}
                        <ul
                            className={Mobile ? "navMenu-list" : "flexSB"}
                            onClick={() => setMobile(false)}
                        >
                            <li>
                                <a href="/">Inicio</a>
                            </li>
                            <li>
                                <a href="/ultimas_publicaciones">Ultimos</a>
                            </li>
                            <li>
                                <a href="/libros_mas_leidos">Nuevos</a>
                            </li>
                            <li>
                                <a href="/libros_recomendados">Recomendados</a>
                            </li>
                            <li>
                                <a href="/contacto">Contacto</a>
                            </li>
                        </ul>
                        <button
                            className="toggle"
                            onClick={() => setMobile(!Mobile)}
                        >
                            {Mobile ? (
                                <i className="fa fa-times"></i>
                            ) : (
                                <i className="fa fa-bars"></i>
                            )}
                        </button>
                    </nav>
                    <div className="account flexSB">
                    
                        <a href="/login"><i className="fas fa-user"></i></a>
                        <a href="/registrar">Registrarse</a>
                        
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
