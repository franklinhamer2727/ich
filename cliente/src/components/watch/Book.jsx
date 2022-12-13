import React, { Component, useState, useEffect } from 'react';
import "./style.css"
import { useParams } from "react-router-dom"
import Upcomming from "../upcoming/Upcomming"
const leidos = require('../../2011.json')

class Book extends Component {

  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById('enlaceDescargarPdf').click();
      window.close();
    }
  }


  render() {
    return (
      <>
        <section className='singlePage'>
          <div className='singleHeading'>
            <h1> </h1> <span> | | </span> <span></span>
          </div>
          <div className="containerbook">



            <div style={{ width: '100%', height: '100%' }}>
              <object data={require('./1.pdf')} type="application/pdf" width="100%" height="100%">
                <br />
                <a href={require('./1.pdf')} id="enlaceDescargarPdf"
                  download="1.pdf"
                >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
              </object>
            </div>




          </div>
          <div className='container'>
            <div className='para'>

              <h3>Contenido:</h3>

            </div>
            <div className='soical'>
              <h3>Share : </h3>
              <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
              <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
              <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
            </div>
          </div>




        </section>
        <div className='f'>
          <Upcomming items={leidos} title='Recommended Movies' />
        </div>

      </>

    )
  }
}
export default Book
