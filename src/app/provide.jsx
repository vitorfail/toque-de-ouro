"use client";
import { createContext, useState, useContext } from 'react';
const MyContext = createContext();

export function Provider({ children }) {
  const [nome, setnome] = useState("");
  const [valor, setvalor] = useState("");
  const [qtd, seqtd] = useState("");
  const [url, seturl] = useState("");

  const updateproduto = (newnovo, newvalor,newqtd, newproduto) => {
    setnome(newnovo);
    setvalor(newvalor);
    seqtd(newqtd);
    seturl(newproduto)
  };
  return (
    <MyContext.Provider value={{nome, valor, qtd, url,updateproduto}}>
      {children}
    </MyContext.Provider>
  );
}

export function Context() {
  return useContext(MyContext);
}