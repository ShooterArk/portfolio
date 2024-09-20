"use client"
import React, { createContext, useRef } from 'react';

export const RootRefContext = createContext();

export const RootRefProvider = ({ children }) => {
  const rootRef = useRef(null); 

  return (
    <RootRefContext.Provider value={rootRef}>
      {children}
    </RootRefContext.Provider>
  );
};
