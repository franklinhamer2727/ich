import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Libros Mas Leidos' />
      <Upcomming items={item} title='Últimas publicaciones' />
      {/* <Trending /> */}
      <Upcomming items={rec} title='Libros Recomendados' />
    </>
  )
}

export default HomePage
