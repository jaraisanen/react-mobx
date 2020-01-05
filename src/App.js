import React from "react"
import { Provider } from "mobx-react"
import styled, { createGlobalStyle } from "styled-components"
import { Stores } from "./stores"
import Games from "./components/Games"
import Header from "./components/Header"
import background from "./assets/images/background-xl.jpg"

const GlobalStyle = createGlobalStyle`
  html { 
    font-size: 21px;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    min-height: -webkit-fill-available;
    line-height: 32px; 
  }
`
const ContentContainer = styled.div`
  margin-top: 5vh;
`

const appStores = new Stores()

const App = () => {
  console.log('gamesStore', appStores)
  return (
    <>
      <GlobalStyle />
      <Header />
      <Provider {...appStores}>
        <ContentContainer>
          <Games />
        </ContentContainer>
      </Provider>
    </>
  )
}

export default App
