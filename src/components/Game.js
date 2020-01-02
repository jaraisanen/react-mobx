import React from "react"
import styled from "styled-components"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { device } from "../assets/devices"

const GameItemContainer = styled.div`
  flex-basis: 40%;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 24px;
  padding: 24px;
  border-radius: 8px;
`

const ToolIcons = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.viewport12} {
    flex-direction: column;
  }
`
const H2 = styled.h2`
  font-size: 48px;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
  justify-content: center;
  text-align: center;
`

const P = styled.p`
  font-size: 32px;
  line-height: 32px;
  text-align: justify;
`

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 64px !important;
  height: 64px !important;
  margin: 24px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

const Game = props => {
  const { name, year, date } = props
  return (
    <GameItemContainer>
      <Row>
        <Column>
          <H2>{name}</H2>
          <P>Year {year}</P>
          <P>Added {moment(date).format("DD/MM/YYYY")}</P>
        </Column>
        <ToolIcons>
          <Icon icon={faEdit} />
          <Icon icon={faTrashAlt} />
        </ToolIcons>
      </Row>
    </GameItemContainer>
  )
}

export default Game
