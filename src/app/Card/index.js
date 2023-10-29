'use client';
import "./index.css"
import { Context } from "../provide";
export function Card(props){
    const {updateproduto} = Context();
    return(
      <div className="card" onClick={updateproduto(props.nome, props.preco, props.qtd)}>
        <div className="modelo" style={{backgroundImage:`url(${props.url})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
          <div className="qtd">
            <p>{props.qtd}</p>
          </div>
        </div>
        <p className="nome">{props.nome}</p>
        <p className="preco">{props.preco}</p>
      </div>
    )
}