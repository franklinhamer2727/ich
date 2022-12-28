import { useSpeechContext } from "@speechly/react-client";

import { render, fireEvent, screen } from "@testing-library/react";
import Iframe from "../watch/Iframe";

const Microphone = () => {
    const { segment, listening, attachMicrophone, start, stop } =
        useSpeechContext();

    let listaPalabras;
    let flag_go_down = true;

    if (typeof segment != "undefined") {
        listaPalabras = segment.words.map((w) => w.value);

        console.log(listaPalabras);

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("index")) {
                window.location.reload();
            }
        }

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("end")) {
                document.location.href = "ultimas_publicaciones";
            }
        }

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("new")) {
                document.location.href = "libros_mas_leidos";
            }
        }

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("three")) {
                document.location.href = "libros_recomendados";
            }
        }

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("contact")) {
                document.location.href = "contacto";
            }
        }

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("down")) {
                if (flag_go_down) {
                    test(() => {
                        const { getByTestId } = render(<Iframe />);
                        const element = getByTestId("mielemento");
                        fireEvent.keyDown(element, {
                            key: "s",
                            shiftKey: true,
                        });
                    });
                }

                flag_go_down = false;
            }
        }

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("next")) {
                document.querySelector(".fa-chevron-right").click();
            }
        }

        if (listaPalabras.includes("go")) {
            if (listaPalabras.includes("previous")) {
                document.querySelector(".fa-chevron-left").click();
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
