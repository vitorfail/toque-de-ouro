'use client';
import "./index.css"
import X from "../image/x.png" 
import { Context } from "@/app/provide"
import Image from "next/image";

export default function Popup_Sacola(){
    const {sacola, popup_sacola, setpopup_sacola} = Context()
    function criar_testo(){
        var t = ""
        for(var i=0; i<sacola.length;i++ ){
            t= t + sacola[i].qtd +" Peças de "+ sacola[i].n + "%0A"
        }
        return t
    }
    return(
        <div className={popup_sacola?"popup_sacola show":"popup_sacola"}>
            <div className="back">
                <Image src={X} width={25} height={25} className="fechar" onClick={() => setpopup_sacola(false)}/>
                <p className="titulo">Sacola</p>
                {sacola.map((item, index) => (
                <div key={index} className="linha">
                    <p>{item.n}</p>
                    <div className="qtd">
                        <p>{item.qtd}</p>
                        <p>Peças</p>
                    </div>
                </div>))}
                <a target="_blank" href={`https://api.whatsapp.com/send?phone=5588999308692&text=${encodeURIComponent("Olá, minha lista de compras:%0A"+ criar_testo())}`}>Falar com o vendedor</a>
            </div>
        </div>
    )
} 