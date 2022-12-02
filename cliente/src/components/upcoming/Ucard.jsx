import React from "react"
import { Link } from "react-router-dom"

const Ucard = ({ item: { ID, cover, title, author,publisher } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{title}</h3>
          <span>{author}</span> <br />
          <span>{publisher}</span> <br />
          <a href={`/singlepage/${ID}`}>
            <button className='primary-btn'>
              <i className='fa fa-play'></i> LEER
            </button>


          </a>
        </div>
      </div>
    </>
  )
}

export default Ucard
