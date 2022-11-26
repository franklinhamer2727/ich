import React, { useState, useEffect } from "react"
import "./style.css"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData"
import Upcomming from "../upcoming/Upcomming"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  const [rec, setRec] = useState(recommended)

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
              <h2> <span> Autores : Javier Castrillo, Dario Martin Gelbort</span></h2>

            </div>
            <div className='cadena'>
              <div className='fragmento'>


                <div className='imagen'>
                  <img src="https://olcovers2.blob.core.windows.net/coverswp/2017/12/sistemas-operativos-netbooks-OpenLibra.jpg"sizes="(max-width: 320px) 280px,(max-width: 480px) 440px,800px"/>

                </div>
                <div className='resumen'>
                  <h3>Detalles de Libro</h3>
                  <table className="table table-item-details">
                    <tbody>
                      <tr>
                        <td>Año:</td>
                        <td itemprop="copyrightYear">	2012 </td>
                      </tr>
                      <tr>
                        <td>Editor:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> Presidencia de la Nación  </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Paginas:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> 	68 páginas </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Idiomas:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> 	español </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Desde:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> 20/12/2017 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Tamaño:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> 2.73 MB </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Licencia:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> CC-BY </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="item-tags">
                <h3>Categorias</h3>
                  <li>
                    <a class="btn btn-ol-red" href="" title="GNU/LINUX">
                      <span itemprop="genre">GNU/LINUX</span>
                    </a>
                  </li>
                  <li>
                    <a  class="btn btn-ol-red" href="btn btn-ol-red" title="Software General">
                      <span itemprop="genre">Software General</span>
                    </a>
                  </li>
                  <li>
                    <a href="" class="btn btn-ol-red" title="Software Libre">
                      <span itemprop="genre">Software Libre</span>
                    </a>
                  </li>
                </div>

              </div>

            </div>

            <div className='container'>

              {/* <video src={item.video} controls></video> */}
              <div className='para'>
                {/* <h3>Date : {item.date}</h3> */}
                {/* <p>{item.desc}</p> */}
                <h3>Contenido:</h3>
                <p>Este material, destinado a docentes y alumnos, es una guía para conocer en forma básica el sistema operativo Windows y el sistema GNU/Linux. Se brindan elementos para situarse por primera vez en uno u otro sistema, en los elementos de su escritorio, la gestión de programas, carpetas y archivos.

El sistema operativo consiste en un conjunto de programas que administran los recursos de la computadora de la forma más eficaz posible. Es el intermediario entre el hardware (los procesadores, las memorias, los dispositivos de entrada y salida) y las diversas aplicaciones que utilizamos a diario. El sistema operativo es el encargado de:</p>
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
          <Upcomming items={rec} title='Recommended Movies' />
          </div>
        </>
      ) : (
        "no"
      )}
    </>
  )
}

export default SinglePage
