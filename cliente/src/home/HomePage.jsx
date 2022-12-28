import React, { useState, useEffect } from "react";
import Homes from "../components/homes/Homes";
import Upcomming from "../components/upcoming/Upcomming";
import { useSpeechContext } from "@speechly/react-client";
import Microphone from "../components/microphone/Microphone";

import "./style.css";

const libros_recomendados = require("../ejemplo.json");
const ultimas_publicaciones = require("../DummyData.json");
const libros_mas_leidos = require("../Leidos.json");

const HomePage = () => {
    const { segment, listening, attachMicrophone, start, stop } =
        useSpeechContext();

    let listaPalabras;

    if (typeof segment != "undefined") {
        listaPalabras = segment.words.map((w) => w.value);

        console.log(listaPalabras);

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("index")) {
                window.location.reload();
            }
        }
    }

    return (
        <>
            <Homes />
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
