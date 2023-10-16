'use client';
import Image from "next/image"
import "./Header.css"
import Logo from "../image/logo2.png"
import { useEffect, useState } from "react";

export function Header(){
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
    }, []); // Certifique-se de incluir handleResize no array de dependências
  
    return(
        <div className={head? "header show": "header"}>
            <div className="logo">
                <Image src={Logo} alt="logo"></Image>
            </div>
            <div className="menu">
                <p>HOME</p>
                <p>CATÁLOGO 1</p>
                <p>CATÁLOGO 2</p>
                <p>CATÁLOGO 3</p>
                <p>SOBRE NÓS</p>
            </div>
        </div>
    )
}