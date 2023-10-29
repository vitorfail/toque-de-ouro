'use client';
import Image from "next/image";
import "./index.css"
import Mail from "../image/mail.png"
import Clock from "../image/clock.png"
import Phone from "../image/phone.png"
import {AiFillInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"
export function Rodape(){
    return(
      <div className="rodape">
        <div className="inf">
          <div className="colum">
            <p className="titulo">Compania</p>
            <p>Sobre nós</p>
            <p>Nos contacte</p>
          </div>
          <div className="colum">
            <p className="titulo">Informações</p>
            <p>Endereço</p>
            <p>horarios</p>
          </div>
          <div className="colum">
            <div  className="titulo" id="linha">
              <Image alt="Phone" src={Phone} width={20} height={20}></Image>
              <p>Phone: (88) 981393182</p>
            </div>
            <div id="linha">
              <Image alt="horario" src={Clock} width={20} height={20}></Image>
              <div>
                <p style={{ marginBottom:"10px"}}>Segunda-Sexta: 8:00 - 17:30</p>
                <p style={{ marginBottom:"10px"}}>Sab: 8:00 - 13:00</p>
              </div>
            </div>
            <div id="linha">
              <Image alt="Phone" src={Mail} width={20} height={20}></Image>
              <p>ENVIE UM EMAIL</p>
            </div>
          </div>
          <div className="colum">
            <p className="titulo">Nos siga</p>
            <div id="linha">
              <AiFillFacebook style={{marginRight:"10px"}}></AiFillFacebook>
              <p>FACEBOOK</p>
            </div>
            <div id="linha">
              <AiFillInstagram style={{marginRight:"10px"}}></AiFillInstagram>
              <p>INSTAGRAM</p>
            </div>
          </div>
        </div>
        <p className="copy">Copyright @ 2023 Vitor Manoel</p>
      </div>
    )
}