"use client";
import { createContext, useState, useContext } from 'react';
const MyContext = createContext();

export function Provider({ children }) {
  const [nome, setnome] = useState("");
  const [valor, setvalor] = useState("");
  const [qtd, seqtd] = useState("");
  const [ quantidade_sacola, setquantidade_sacola] = useState(0)
  const [url, seturl] = useState("");
  const [vendedor, setvendedor] = useState("");
  const [tipo, settipo] = useState("");
  const [catalogo, setcatalogo]= useState(true)
  const [menu, setmenu]= useState(false)
  const [sacola, setsacola]= useState([])

  const updateproduto = (newnovo, newvalor,newqtd, newproduto, newvendedor, newtipo) => {
    setnome(newnovo);
    setvalor(newvalor);
    seqtd(newqtd);
    seturl(newproduto);
    setvendedor(newvendedor);
    settipo(newtipo);
  };
  return (
    <MyContext.Provider value={{nome, valor, qtd, url,vendedor, tipo, catalogo, menu, sacola, quantidade_sacola,updateproduto, setcatalogo, setmenu, setsacola, setquantidade_sacola}}>
      {children}
    </MyContext.Provider>
  );
}

export function Context() {
  return useContext(MyContext);
}