import React, { useState, useEffect } from "react"
import "./style.css"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData"
import Upcomming from "../upcoming/Upcomming"
const leidos = require('../../2011.json')

const allbook = require('../../2011.json')
const SinglePage = () => {
  const ID = useParams()
  console.log(ID)

  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = allbook.find(el =>el.ID===ID.id);
    console.log(item)
  
    if (item) {
      setItem(item)
    }
  }, [ID])
  const [rec, setRec] = useState(recommended)

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.title} </h1> <span> | {item.author} | </span> <span></span>
            </div>
            <div className='cadena'>
              <div className='fragmento'>


                <div className='imagen'>
                  <a href={`/singlepage/book/${item.ID}`}>
                  <img src={item.cover}  sizes="(max-width: 320px) 280px,(max-width: 480px) 440px,800px"/>
                  </a>

                </div>
                <div className='resumen'>
                  <h3>Detalles de Libro</h3>
                  <table className="table table-item-details">
                    <tbody>
                      <tr>
                        <td>Año:</td>
                        <td itemprop="copyrightYear">	{item.publisher_date} </td>
                      </tr>
                      <tr>
                        <td>Editor:</td>
                        <td itemprop="publisher">
                          <span itemprop="name">{item.publisher}  </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Paginas:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> {item.pages} </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Idiomas:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> 	{item.language} </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Desde:</td>
                        <td itemprop="publisher">
                          <span itemprop="name">{item.publisher_date} </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Autor:</td>
                        <td itemprop="publisher">
                          <span itemprop="name"> {item.author}</span>
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
              <div className='para'>

                <h3>Contenido:</h3>
                <p>{item.content}</p>
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
      ) : (
        "no"
      )}
    </>
  )
}

export default SinglePage
