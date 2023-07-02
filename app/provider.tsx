"use client";

import React  ,{ReactNode}from 'react';
import {ThemeProvider} from "next-themes";

interface ProviderLayoutProps{
  children: ReactNode
}


const Providers:React.FC<ProviderLayoutProps> = ({children}) => {
  return (
    <ThemeProvider attribute='class'>
      {children}
    </ThemeProvider>
  );
}

export default Providers;
