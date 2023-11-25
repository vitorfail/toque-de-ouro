"use client";
import Image from 'next/image'
import { Header } from '../Header/Header'
import li from '../menu';
import "./page.css"
import calcinhas from '../calcinhas';

// eslint-disable-next-line import/no-webpack-loader-syntax

import {AiFillInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"
import Seta from '../Seta';
import { Rodape } from '../Rodape';
import S from "../image/seta.png"
import { Card } from '../Card';

export default function calci() {
  return (
    <div className='app'>
      <Seta></Seta>
      <Header></Header>
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
      <div className='campo'>
        <p className='titulo'>Calcinhas</p>
        <div className='tabelas'></div>
        <div className='cards'>
          {calcinhas.map((item, index) => (
            <Card key={index} url={item.url} qtd={item.qtd} preco={item.preco} nome={item.nome} vendedor={item.vendedor} tipo={item.tipo}></Card>
          ))}
        </div>
      </div>
      <Rodape></Rodape>
    </div>
  )
}
