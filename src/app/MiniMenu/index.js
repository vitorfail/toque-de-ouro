"use client";
import Image from "next/image";
import li from "../menu";
import "./index.css"
import { Context } from "../provide";

export default function MiniMenu() {
  const {menu, setmenu} = Context()
  return (
    <div className={menu?"menu": "menu show"}>
      <div className="barra">
        <p className="fechar" onClick={() => setmenu(false)}>x</p>
        <div className="op">
          {li.map((item, key) => (
            <p key={key}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
