"use client";
import { createContext, useState, useContext } from 'react';
const MyContext = createContext();

export function Provider({ children }) {
  const [nome, setnome] = useState("");
  const [valor, setvalor] = useState("");
  const [qtd, seqtd] = useState("");
  const [url, seturl] = useState("");
  const [vendedor, setvendedor] = useState("");
  const [tipo, settipo] = useState("");

  const updateproduto = (newnovo, newvalor,newqtd, newproduto, newvendedor, newtipo) => {
    setnome(newnovo);
    setvalor(newvalor);
    seqtd(newqtd);
    seturl(newproduto);
    setvendedor(newvendedor);
    settipo(newtipo);
  };
  return (
    <MyContext.Provider value={{nome, valor, qtd, url,vendedor, tipo, updateproduto}}>
      {children}
    </MyContext.Provider>
  );
}

export function Context() {
  return useContext(MyContext);
}