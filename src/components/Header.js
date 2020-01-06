import React from "react"
import styled from "styled-components"
import { device } from "../assets/devices"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Navigation from "./Navigation"

const HeaderContainer = styled.div`
  display: flex;
  line-height: 240px;
  background-image: linear-gradient(#ff48c4, #fff);
  justify-content: space-between;
  align-items: center;
`

const H1 = styled.span`
  font-weight: bold;
  font-size: 32px;
  justify-content: auto;
  margin-left: 5%;
  @media ${device.viewport9} {
    font-size: 64px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 48px !important;
  height: 48px !important;
  margin-right: 48px;
  justify-content: auto;
  align-content: flex-end;
  transition: transform 0.8s ease-in-out, color 0.8s ease-in-out;
  z-index: 1000;
  &:hover {
    transform: rotate(180deg);
    color: grey;
  }
`

const Header = ({ navOpen, changeNavStatus }) => {
  return (
    <>
      {navOpen && (
        <Navigation navOpen={navOpen} changeNavStatus={changeNavStatus} />
      )}
      <HeaderContainer>
        <H1>GAME CENTER</H1>
        <Icon
          title="Navigation menu"
          icon={faBars}
          onClick={() => changeNavStatus(!navOpen)}
        />
      </HeaderContainer>
    </>
  )
}

export default Header
