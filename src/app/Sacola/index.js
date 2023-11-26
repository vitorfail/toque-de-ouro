'use client';
import "./index.css"
import { Context } from "../provide";
import Image from "next/image";
import S from "../image/sacola.png"
import { useState, useEffect } from "react";

export function Sacola(){
  const {quantidade_sacola}= Context()
  const [head, sethead] = useState(false)
    const scrollevent = () =>{
    if(window.scrollY> 10){
        sethead(true)
    }
    else{
        sethead(false)
    }
    }

    useEffect(() => {
    // Adiciona o ouvinte de evento quando o componente monta
    window.addEventListener('scroll', scrollevent);

    // Remove o ouvinte de evento quando o componente desmonta
    return () => {
        window.removeEventListener('scroll', scrollevent);
    };
    }, []);
  return(
    <div className={head?"sacola":"sacola down"} >
      <p>{quantidade_sacola}</p>
      <div className="imagem">
        <Image width={40} height={40} alt="sacola" src={S}></Image>
      </div>
    </div>
  )
}