import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { useState, createContext, useContext } from 'react'

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig"

const themesMap = {
  lightTheme,
  darkTheme
}
export const ThemePreferenceContext = React.createContext()

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState('light')

  const theme = { ...GlobalStyles, colors: themesMap[currentTheme] }



  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  )
}



