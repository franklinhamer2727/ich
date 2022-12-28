import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Upcomming from "../upcoming/Upcomming";
import Microphone from "../microphone/Microphone";

const leidos = require("../../2011.json");

const allbook = require("../../2011.json");

const Book = () => {
    const ID = useParams();
    console.log(ID);

    const [item, setItem] = useState(null);
    // useEffect(()=>{
    //   const iframe = document.querySelector('iframe');
    //   const dispatchKeyboardEvent =()=>{
    //     const event = new KeyboardEvent('keydown',{
    //       key:'S',
    //       shiftKey:true,
    //     });
    //     iframe.dispatchEvent(event)
    //   };
    //   iframe.addEventListener('load',dispatchKeyboardEvent);
    //   return ()=>{
    //     iframe.removeEventListener('load',dispatchKeyboardEvent);
    //   };
    // },[]);

    useEffect(() => {
        let item = allbook.find((el) => el.ID === ID.id);
        console.log(item);

        if (item) {
            setItem(item);
        }
    }, [ID]);

    return (
        <>
            {item ? (
                <>
                    <section className="singlePage">
                        <div className="singleHeading">
                            <h1>{item.title} </h1>{" "}
                            <span> | {item.author} |</span> <span></span>
                        </div>
                        <div className="containerbook">
                            <div style={{ width: "100%", height: "100%" }}>
                                <iframe
                                    src={item.url_download}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                        <Microphone />

                        <div className="container">
                            <div className="para">
                                <h3>Contenido:</h3>
                                <p>{item.content}</p>
                            </div>
                            <div className="soical">
                                <h3>Share : </h3>
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" />
                                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
                            </div>
                        </div>
                    </section>
                    <div className="f">
                        <Upcomming items={leidos} title="Recommended Movies" />
                    </div>
                </>
            ) : (
                "no"
            )}
        </>
    );
};
export default Book;
// class Bookd extends Component {

//   render() {
//     return (
//       <>
//         <section className='singlePage'>
//           <div className='singleHeading'>
//             <h1> </h1> <span> | | </span> <span></span>
//           </div>
//           <div className="containerbook">

//             <div style={{ width: '100%', height: '100%' }}>
//               <object data={require('./1.pdf')} type="application/pdf" width="100%" height="100%">
//                 <br />

//               </object>
//             </div>

//           </div>
//           <div className='container'>
//             <div className='para'>

//               <h3>Contenido:</h3>

//             </div>
//             <div className='soical'>
//               <h3>Share : </h3>
//               <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
//               <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
//               <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
//             </div>
//           </div>

//         </section>
//         <div className='f'>
//           <Upcomming items={leidos} title='Recommended Movies' />
//         </div>

//       </>

//     )
//   }
// }
//
