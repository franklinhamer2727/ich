<<<<<<< HEAD
import React from "react";
import Homes from "../components/homes/Homes";

=======
import React, { useState, useEffect } from "react";
import Homes from "../components/homes/Homes";
>>>>>>> ff852f718cd33dd5ba274a19d12cbcd808c99696
import Upcomming from "../components/upcoming/Upcomming";
import { useSpeechContext } from "@speechly/react-client";
<<<<<<< HEAD
=======
import Microphone from "../components/microphone/Microphone";
>>>>>>> ff852f718cd33dd5ba274a19d12cbcd808c99696

import "./style.css";

const libros_recomendados = require("../ejemplo.json");
const ultimas_publicaciones = require("../DummyData.json");
const libros_mas_leidos = require("../Leidos.json");

const HomePage = () => {
    const { segment, listening, attachMicrophone, start, stop } =
        useSpeechContext();

<<<<<<< HEAD
    // attachMicrophone();

    let listaPalabras;
    
=======
    let listaPalabras;
>>>>>>> ff852f718cd33dd5ba274a19d12cbcd808c99696

    if (typeof segment != "undefined") {
        listaPalabras = segment.words.map((w) => w.value);

        console.log(listaPalabras);

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("index")) {
                window.location.reload();
            }
        }
    }
<<<<<<< HEAD

=======
>>>>>>> ff852f718cd33dd5ba274a19d12cbcd808c99696

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
