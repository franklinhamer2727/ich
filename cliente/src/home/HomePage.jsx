import React from "react";
import Homes from "../components/homes/Homes";

import Upcomming from "../components/upcoming/Upcomming";
//import { latest, recommended, upcome } from "../dummyData";
import { useSpeechContext } from "@speechly/react-client";

import "./style.css";

const libros_recomendados = require("../ejemplo.json");
const ultimas_publicaciones = require("../DummyData.json");
const libros_mas_leidos = require("../Leidos.json");

const HomePage = () => {
    const { segment, listening, attachMicrophone, start, stop } =
        useSpeechContext();

    // attachMicrophone();

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
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <button onClick={attachMicrophone}>
                        Activar Comando de voz
                    </button>
                    <button onPointerDown={start} onPointerUp={stop}>
                        {listening ? "Escuchando..." : "Presione para escuchar"}
                    </button>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h1>
                        {segment &&
                            segment.words.map((word) => word.value).join(" ")}
                    </h1>
                </div>
            </div>
            <Upcomming items={libros_mas_leidos} title="Libros Mas Leidos" link ="libros_mas_leidos"/>
            <Upcomming items={ultimas_publicaciones} title="Últimas publicaciones"link ="ultimas_publicaciones" />
            <Upcomming items={libros_recomendados} title="Libros Recomendados" link="libros_recomendados" />
        </>
    );
};

export default HomePage;
