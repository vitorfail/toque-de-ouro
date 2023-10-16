"use client";
import Image from 'next/image'
import { useEffect } from 'react';
import { Header } from './Header/Header'
import Banner from "./image/BANNER.jpg"
import Sutia from "./image/sutia.jpg"
import Conj from "./image/conj.webp"
import Calcinha from "./image/calcinha.webp"
import {AiFillInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"

export default function Home() {


  return (
    <div className='app'>
      <Header></Header>
      <section className='info'>
        <div className='whats'>
          <p> (88) 9878-9999</p>
          <p>Da segunda ao sábado, das 8:00 as 17:30</p>
        </div>
        <div className="icons">
              <a href="https://www.instagram.com/vitor_andrademanoel04/" target="_blank">
                  <AiFillFacebook color="white"></AiFillFacebook>
              </a>
              <a href="https://www.linkedin.com/in/vitor-manoel-programer/" target="_blank">
                  <AiFillYoutube color="white"></AiFillYoutube>
              </a>
              <a href="https://github.com/vitorfail" target="_blank">
                  <AiFillInstagram color="white"></AiFillInstagram>
              </a>
        </div>
      </section>
      <section className='banner'>
        <p>O Toque especial no seu estilo</p>
      </section>
      <section className='catalogo'>
        <p>EXPLORE NOSSO CATÁLOGO</p>
        <div className='roupas'>
          <div className="exibir" >
            <div className='text'>
              <p>SUTIÃNS</p>
            </div>
          </div>
          <div className="exibir">
            <div className='text'>
              <p>SUTIÃNS</p>
            </div>
          </div>
          <div className="exibir">
            <div className='text'>
              <p>SUTIÃNS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
