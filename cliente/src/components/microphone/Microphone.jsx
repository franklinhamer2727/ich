import { useSpeechContext } from "@speechly/react-client";

const Microphone = () => {
    const { segment, listening, attachMicrophone, start, stop } =
        useSpeechContext();

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
        }
    }

    return (
        <>
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
        </>
    );
};

export default Microphone;
