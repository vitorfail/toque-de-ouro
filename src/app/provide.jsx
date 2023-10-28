"use client";
import { createContext, useState, useContext } from 'react';
const MyContext = createContext();

export function Provider({ children }) {
  const [myState, setMyState] = useState("");

  const updateState = (newState) => {
    setMyState(newState);
  };

  return (
    <MyContext.Provider value={{ myState, updateState }}>
      {children}
    </MyContext.Provider>
  );
}

export function Context() {
  return useContext(MyContext);
}