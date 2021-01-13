import React, { useState, createContext, useEffect } from "react";

export const IsContext = createContext();

export const ContextProvider = (props) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <IsContext.Provider value={[path, setPath]}>
      {props.children}
    </IsContext.Provider>
  );
};
