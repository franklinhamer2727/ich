import { useSpeechContext } from "@speechly/react-client";
function Microphono(props){

    const {listen}= useSpeechContext();
    const handleSave=()=>{
        const event = new KeyboardEvent('keydown',{
            key:'s',
            shiftKey:true
        });
        window.frames[0].document.activeElement.dispatchEvent(event);
    };
    listen('save',handleSave);
    return(
        <iframe src ={props.value}width="100%" height="100%"/>

    )

}

export default Microphono;