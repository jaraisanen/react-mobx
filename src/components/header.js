import React from "react"
import styled from "styled-components"
import { device } from "../assets/devices"

const HeaderContainer = styled.div`
  line-height: 480px;
  background-image: linear-gradient(#ff48c4, #fff);
  text-align: center;
  vertical-align: middle;
`

const H1 = styled.span`
  font-weight: bold;
  font-size: 48px;
  line-height: 32px;
  justify-content: auto;
  @media ${device.viewport9} {
    font-size: 64px;
  }
`

const Header = props => {
  return (
    <HeaderContainer>
      <H1>GAME CENTER</H1>
    </HeaderContainer>
  )
}

export default Header
