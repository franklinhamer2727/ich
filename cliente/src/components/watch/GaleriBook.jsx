import React, { useState, useEffect } from "react"
// import "./style.css"
import "./galeria.css"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData"
import Upcomming from "../upcoming/Upcomming"
import {Grid} from '@material-ui/core';
import Ucard from "../upcoming/Ucard"
//mas leidos
const data1 = require('../../ejemplo.json')
//libros recomendados
const data2 = require('../../DummyData.json')
//Nuevos libros
const leidos = require('../../Leidos.json')

const GaleriBook = () => {
    const ID = useParams()
    let data
    if (ID.ultimas_publicaciones === "ultimas_publicaciones") { data = leidos }
    else if (ID.ultimas_publicaciones === "libros_recomendados") { data = data2 }
    else if (ID.ultimas_publicaciones === "libros_mas_leidos") { data = data1 }
    
    return (
        <section className='booklist'>
            <div className='container'>
                    <Grid container spacing={2}>
                        {data.map((item) => {
                            return(
                                <Grid item xs={12} sm={6} md={4}>

                                    <Ucard item={item} />
                                </Grid>

                            )
                            

                            
                        })}
                    </Grid>
            </div>
        </section>
    )
}
export default GaleriBook
