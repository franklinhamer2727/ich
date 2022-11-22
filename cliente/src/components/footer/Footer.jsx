import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Terminos de Uso</li>
              <li>Politica-Privacidad</li>
              <li>Blog</li>
              <li>FAQ</li>
              {/* <li>Watch List</li> */}
            </ul>
            <p>© ICH 2022. Reservados todos los derechos. Todos los libros expuestos son pirateados., La imagenes son descargadas de internet. Esta prohibido copiar la web. Reservados todos los derechos.</p>
          </div>
          <div className='box'>
            <h3>Síganos</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com"><i  className='fab fa-facebook-f'></i></a>
                <a href="https://twitter.com/?lang=en"><i className='fab fa-twitter'></i></a>
                <a href="https://github.com/franklinhamer2727/ich"><i className='fab fa-github'></i></a> 
                <a href="https://www.instagram.com/"><i className='fab fa-instagram'></i></a>
              </li>
            </ul>
          </div>
          <div className='box'>
            <h3>ICH Book</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer