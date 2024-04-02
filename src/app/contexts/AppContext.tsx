"use client";
import React, { createContext, useState } from "react";


interface AppContext {

}

export const AppContext = createContext<AppContext>(({

}));

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <AppContext.Provider value={{}}>{children}</AppContext.Provider>
  )
}