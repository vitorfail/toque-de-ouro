import "./index.css"
import { useEffect, useState } from "react"
export default function Seta(){
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
    }, []);
    function topo(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });    }
    return(
        <div onClick={() => topo()} className={head?"seta  show": "seta"}><p>&lsaquo;</p></div>
    )
}