import React, { useState, useEffect } from "react";
import Homes from "../components/homes/Homes";
import Upcomming from "../components/upcoming/Upcomming";
import Microphone from "../components/microphone/Microphone";
import HandsCapture from "../components/handscapture/HandsCapture";

import "./style.css";

const libros_recomendados = require("../ejemplo.json");
const ultimas_publicaciones = require("../DummyData.json");
const libros_mas_leidos = require("../Leidos.json");

const HomePage = () => {
    return (
        <>
            <Homes />
            <HandsCapture />
            <Microphone />
            <Upcomming
                items={libros_mas_leidos}
                title="Libros Mas Leidos"
                link="libros_mas_leidos"
            />
            <Upcomming
                items={ultimas_publicaciones}
                title="Últimas publicaciones"
                link="ultimas_publicaciones"
            />
            <Upcomming
                items={libros_recomendados}
                title="Libros Recomendados"
                link="libros_recomendados"
            />
        </>
    );
};

export default HomePage;
