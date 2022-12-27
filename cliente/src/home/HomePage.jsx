import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Trending from "../components/trending/Trending";
import Upcomming from "../components/upcoming/Upcomming";
import { latest, recommended, upcome } from "../dummyData";
import { useSpeechContext } from "@speechly/react-client";
import HandsCapture from "../components/handscapture/HandsCapture";

import "./style.css";

const data = require("../ejemplo.json");
const data2 = require("../DummyData.json");
const leidos = require("../Leidos.json");

const HomePage = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
    const [rec, setRec] = useState(recommended);
    const { segment, listening, attachMicrophone, start, stop } =
        useSpeechContext();

    // attachMicrophone();
    let palabras = "";
    let listaPalabras;
    const keywords = ["index"];

    if (typeof segment != "undefined") {
        listaPalabras = segment.words.map((w) => w.value);

        console.log(listaPalabras);

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("index")) {
                window.location.reload();
            }

            // if (listaPalabras.includes("next")) {
            //     // to do action
            // }
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
            <Upcomming items={leidos} title="Libros Mas Leidos" />
            <Upcomming items={data2} title="Últimas publicaciones" />
            {/* <Trending /> */}
            <Upcomming items={data} title="Libros Recomendados" />
            <HandsCapture />
        </>
    );
};

export default HomePage;
