import React, { useState, createContext } from "react";

export const IsContext = createContext();

export const ContextProvider = (props) => {
  const [path, setPath] = useState({
    path: "",
    twitterName: "",
  });

  return (
    <IsContext.Provider value={[path, setPath]}>
      {props.children}
    </IsContext.Provider>
  );
};
