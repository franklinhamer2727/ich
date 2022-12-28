import React, { useState,useEffect } from "react";
import Homes from "../components/homes/Homes";
import Trending from "../components/trending/Trending";
import Upcomming from "../components/upcoming/Upcomming";
//import { latest, recommended, upcome } from "../dummyData";
import { useSpeechContext } from "@speechly/react-client";
import HandsCapture from "../components/handscapture/HandsCapture";

import "./style.css";

const libros_recomendados = require("../ejemplo.json");
const ultimas_publicaciones = require("../DummyData.json");
const libros_mas_leidos = require("../Leidos.json");

const HomePage = () => {
    // const [items, setItems] = useState(upcome);
    // const [item, setItem] = useState(latest);
    // const [rec, setRec] = useState(recommended);
//Consumir un api
    // const [data,setData1] = useState(null);
    // const [dataleidos,setData2] = useState(null);
    // const [responserecientes,setData3] = useState(null);

    // const [loading, setLoading] = useState(true);
    // const [error,setError] = useState(null);
    // useEffect(()=>{
    //     async function fetchData(){
    //         try{
    //             const response = await fetch('https://www.etnassoft.com/api/v1/get/?category=all');
    //             const responseleidos = await fetch('https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed');
    //             const responserecientes = await fetch('https://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]&order=newest');

    //             const data =await response.json();
    //             const dataleidos = await responseleidos.json();
    //             const datarecientes = await responserecientes.json();
    //             setData1(data);
    //             setData2(dataleidos);
    //             setData3(datarecientes);

    //         }catch(error){
    //             setError(error);
    //         }finally{
    //             setLoading(false);
    //         }
    //     }fetchData();
    // },[]);





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
    // if(loading){
    //     return <p>Cargando...</p>
    // }
    // if(error){
    //     return <p>Ocurrio un error:{error.message}</p>
    // }

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
