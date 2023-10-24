'use client';
import Image from "next/image"
import "./Header.css"
import li from "../menu";
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
    function menu(){

    }
    return(
      <div>
        <div className={head? "header show": "header"}>
            <div className="logo">
                <div className="img"></div>
            </div>
            <div className="menu">
              {li.map((item, key) => (
                <p key={key}>{item}</p>
              ))}
            </div>
        </div>
      </div>
    )
}