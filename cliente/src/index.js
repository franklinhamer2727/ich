import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SpeechProvider appId="fd3ee9c6-f0c0-48e8-a756-b312a6d67c66">
            <App />
        </SpeechProvider>
    </React.StrictMode>
);
