import React from "react"
import styled from "styled-components"
import { device } from "../assets/devices"

const HeaderContainer = styled.div`
  line-height: 420px;
  background-image: linear-gradient(#ff48c4, #fff);
  vertical-align: middle;
`

const H1 = styled.span`
  font-weight: bold;
  font-size: 48px;
  line-height: 32px;
  justify-content: auto;
  margin-left: 5%;
  @media ${device.viewport9} {
    font-size: 64px;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <H1>GAME CENTER</H1>
    </HeaderContainer>
  )
}

export default Header
