'use client';
import Image from "next/image"
import "./Header.css"
import Logo from "../image/logo.jpeg"
import { useEffect, useState } from "react";

export function Header(){
    const [head, sethead] = useState(false)
    useEffect(()=>{
        const scrollevent = () =>{
          if(window.scrollY> 10){
            sethead(true)
          }
          else{
            sethead(false)
          }
        }
        window.addEventListener("scroll", scrollevent)
        return () => {
          window.removeEventListener("scroll", scrollevent)
        }
      })
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