import React, { useState, useEffect } from "react"
// import "./style.css"
import "./galeria.css"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData"
import Upcomming from "../upcoming/Upcomming"
import Ucard from "../upcoming/Ucard"
//mas leidos
const data1 = require('../../ejemplo.json')
//libros recomendados
const data2 = require('../../DummyData.json')
//Nuevos libros
const leidos = require('../../Leidos.json')

const AllBook = () => {
    const ID = useParams()
    let data
    if (ID.ultimas_publicaciones === "ultimas-publicaciones") { data = leidos }
    else if (ID.ultimas_publicaciones === "libros-recomendados") { data = data2 }
    else if (ID.ultimas_publicaciones === "libros-mas-leidos") { data = data1 }
    console.log(data)


    return (
        <section className='booklist'>
            <div className='container'>

                    <div className='booklist-content grid'>
                        {data.map((item) => {
                            return (
                                <>
                                    <Ucard item={item} />
                                </>
                            )
                        })}
                    </div>
            </div>
        </section>

    )
}

export default AllBook
