'use client';
import "./index.css"

export function Card(props){
    return(
      <div className="card">
        <div className="modelo" style={{background:"url("+props.url+")", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
          <div className="qtd">
            <p>{props.qtd}</p>
          </div>
        </div>
        <p className="nome">{props.nome}</p>
        <p className="preco">{props.preco}</p>
      </div>
    )
}