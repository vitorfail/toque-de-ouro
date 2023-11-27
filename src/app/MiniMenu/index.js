"use client";
import li from "../menu";
import "./index.css"
import { Context } from "../provide";
import { useRouter } from "next/navigation";

export default function MiniMenu() {
  const {menu, setmenu} = Context()
  const route = useRouter()
  function passar(){
    setmenu(false)
    route.push("/")
  }
  return (
    <div className={menu?"minimenu show": "minimenu"}>
      <div className="barra">
        <p className="fechar" onClick={() => setmenu(false)}>x</p>
        <div className="op">
          {li.map((item, key) => (
            <p onClick={() => passar()} key={key}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
