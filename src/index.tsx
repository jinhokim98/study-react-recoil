import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes'
import GlobalStyle from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './style/Theme'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  </>
)
