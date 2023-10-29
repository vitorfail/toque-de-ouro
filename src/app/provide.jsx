"use client";
import { createContext, useState, useContext } from 'react';
const MyContext = createContext();

export function Provider({ children }) {
  const [nome, setnome] = useState("");
  const [valor, setvalor] = useState("");
  const [qtd, seqtd] = useState("");

  const updatenome = (newState) => {
    setnome(newState);
  };
  const updatevalor = (newState) => {
    setvalor(newState);
  };
  const updateqtd = (newState) => {
    seqtd(newState);
  };

  return (
    <MyContext.Provider value={{nome, valor, qtd, updatenome, updatevalor, updateqtd}}>
      {children}
    </MyContext.Provider>
  );
}

export function Context() {
  return useContext(MyContext);
}