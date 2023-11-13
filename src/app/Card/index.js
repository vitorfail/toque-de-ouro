'use client';
import "./index.css"
import { Context } from "../provide";
import { useRouter } from 'next/navigation';

export function Card(props){
  const {updateproduto} = Context();
  const router = useRouter();
  function pagproduto(){
    console.log(props)
    updateproduto(props.nome, props.preco, props.qtd, props.url, props.vendedor, props.tipo)
    router.push('/Compra');
  }
  return(
    <div className="card" onClick={() => pagproduto()}>
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