import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Trending from "../components/trending/Trending";
import Upcomming from "../components/upcoming/Upcomming";
import { latest, recommended, upcome } from "../dummyData";
import { useSpeechContext } from "@speechly/react-client";

import "./style.css"

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
    if (typeof segment != "undefined") {
        palabras = segment.words.map((word) => word.value).join(" ");
        console.log(palabras);
    }

    return (
        <>
            <Homes />
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <button  onClick={attachMicrophone}>
                    Activar Comando de voz
                </button>
                <button onPointerDown={start} onPointerUp={stop}>
                    {listening ? "Listening…" : "Push to talk"}
                </button>
                <h1>
                    {segment &&
                        segment.words.map((word) => word.value).join(" ")}
                </h1>
            </div>


            <Upcomming items={leidos} title="Libros Mas Leidos" />
            <Upcomming items={data2} title="Últimas publicaciones" />
            {/* <Trending /> */}
            <Upcomming items={data} title="Libros Recomendados" />
        </>
    );
};

export default HomePage;
