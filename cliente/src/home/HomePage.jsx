import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"
const data = require('../ejemplo.json')
const data2 = require('../DummyData.json')
const leidos = require('../Leidos.json')

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={leidos} title='Libros Mas Leidos' />
      <Upcomming items={data2} title='Últimas publicaciones' />
      {/* <Trending /> */}
      <Upcomming items={data} title='Libros Recomendados' />
    </>
  )
}

export default HomePage
