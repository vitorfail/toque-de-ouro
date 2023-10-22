"use client";
import Image from 'next/image'
import { Header } from './Header/Header'
import Banner from "./image/BANNER.jpg"
import Sutia from "./image/sutia.jpg"
import Conj from "./image/conj.webp"
import Calcinha from "./image/calcinha.webp"
import  ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { useEffect, useState } from 'react';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoidml0b3JmYWlsIiwiYSI6ImNsOHhyajNjYjA4aXIzdW56ZDN1NjI0ZjUifQ.dYaH3rrTcs8WwFHCHCSCRQ';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

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
        <p>O Toque especial <br/>no seu estilo</p>
      </section>
      <section className='catalogo'>
        <p>EXPLORE E ESCOLHA</p>
        <p>CATÁLOGO</p>
        <div className='roupas'>
          <div className="exibir" >
            <div className='hover'>
              <div className='text'>
                <p>SUTIÃNS</p>
              </div>
            </div>
          </div>
          <div className="exibir">
            <div className='hover'>
              <div className='text'>
                <p>SUTIÃNS</p>
              </div>
            </div>
          </div>
          <div className="exibir">
            <div className='hover'>
              <div className='text'>
                <p>SUTIÃNS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='Map'>
        <ReactMapGL
          initialViewState={{
            latitude: -7.26839,
            longitude: -39.3434,
            zoom: 11
          }}

          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={MAPBOX_TOKEN}>
        </ReactMapGL>
      </div>

    </div>
  )
}
