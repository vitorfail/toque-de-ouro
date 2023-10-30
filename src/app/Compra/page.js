"use client";
import Image from 'next/image'
import { Header } from '../Header/Header'
import Lista from "../image/list.png"
import Logo from "../image/logo1.png"
import li from '../menu';
import { Context } from '../provide';
import "./page.css"

// eslint-disable-next-line import/no-webpack-loader-syntax

import {AiFillInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"
import Seta from '../Seta';
import { Rodape } from '../Rodape';
import S from "../image/seta.png"

export default function Home() {
  const {nome, valor, qtd, url} =Context()
  return (
    <div className='app'>
      <Seta></Seta>
      <Header></Header>
      <div className='cabecalho'>
        <Image alt='Lista' style={{width:"20px", height:"20px"}} src={Lista}></Image>
        <Image alt='Logo' style={{width:"40px", height:"40px"}} src={Logo}></Image>
      </div>
      <div className="header compra">
            <div className="logo">
                <div className="img"></div>
            </div>
            <div className="menu">
              {li.map((item, key) => (
                <div key={key} className="item">
                  <div className="titulo">
                    <p>{item}</p>
                    <Image alt='Seta' src={S} height={15} width={15}></Image>
                  </div>
                  <span className="linha"></span>
                </div>
              ))}
            </div>
      </div>
            <div className="aviso">
              Compra agora!
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
      <div className='quebra'></div>
      <div className='produto'>
        <Image style={{background:"#bec0c4"}} alt='Url' src={url} width={400} height={900}></Image>
      </div>
      <Rodape></Rodape>
    </div>
  )
}
