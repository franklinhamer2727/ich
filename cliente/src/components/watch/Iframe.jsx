import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Upcomming from "../upcoming/Upcomming";
import Microphone from "../microphone/Microphone";

function Iframe(props){
    return(
        <div data-testid ="mielemento" style={{ width: "100%", height: "100%" }}>
            <iframe
                src={props.value}
                width="100%"
                height="100%"
            />
            
        </div>
    )
}
export default Iframe;