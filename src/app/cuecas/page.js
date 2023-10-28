"use client";
import Image from 'next/image'
import { Header } from '../Header/Header'
import Lista from "../image/list.png"
import Logo from "../image/logo1.png"
import  ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { useEffect, useState } from 'react';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoidml0b3JmYWlsIiwiYSI6ImNsOHhyajNjYjA4aXIzdW56ZDN1NjI0ZjUifQ.dYaH3rrTcs8WwFHCHCSCRQ';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

import {AiFillInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"
import Seta from '../Seta';

export default function Home() {
  return (
    <div className='app'>
      <Seta></Seta>
      <Header></Header>
      <div className='cabecalho'>
        <Image style={{width:"20px", height:"20px"}} src={Lista}></Image>
        <Image style={{width:"40px", height:"40px"}} src={Logo}></Image>
      </div>
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
      <section className='mapa'>
        <div className='descri'>
          <p>Visite nossas lojas</p>
          <p>Temos 4 lojas para entender nossos clientes da região do Cariri. Duas estão localizar no Crato e duas na cidade de Juazeiro</p>
        </div>
        <div className='Map'>
          <ReactMapGL
            initialViewState={{
              latitude: -7.23139,
              longitude: -39.3584,
              zoom: 11
            }}

            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxAccessToken={MAPBOX_TOKEN}>
                <Marker className='img' style={{minHeight:'30px',minWidth:'30px'}} latitude={-7.22125098841004} longitude={-39.41171401554243}  kanchor="bottom" >
                </Marker>
                <Marker className='img' style={{minHeight:'30px',minWidth:'30px'}} latitude={-7.232346847875012} longitude={-39.41059401579593}  kanchor="bottom" >
                </Marker>
                <Marker className='img' style={{minHeight:'30px',minWidth:'30px'}}  latitude={-7.204351276105135} longitude={-39.318201469313834}  kanchor="bottom" >
                </Marker>
                <Marker className='img' style={{minHeight:'30px',minWidth:'30px'}} latitude={-7.206048803737471} longitude={-39.31790665397074}  kanchor="bottom" >
                </Marker>
          </ReactMapGL>
        </div>
      </section>

    </div>
  )
}
