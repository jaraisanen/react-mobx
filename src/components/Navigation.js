import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const NavContainer = styled.div`
  position: fixed;
  right: 0px;
  background: #1b1b1b;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  overflow: auto;
  height: 100%;
  height: -moz-available; 
  height: -webkit-fill-available;
  height: fill-available;
`

const ContentContainer = styled.div`
  display: flex;
  align-content: flex-end;
`

const Link = styled.a`
  font-size: 32px;
  color: #b8b7ad;
  font-weight: 600;
`

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 48px !important;
  height: 48px !important;
  margin: 24px;
`

const CloseIcon = styled(Icon)`
  color: #b8b7ad;
`

const Navigation = () => {
  return (
    <NavContainer>
      <ContentContainer>
        <Link>New Game</Link>
      </ContentContainer>
    </NavContainer>
  )
}

export default Navigation
