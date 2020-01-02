import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import styled from "styled-components"

import Game from "./Game"
import { device } from "../assets/devices"
import GamesStore from '../stores/GamesStore'

const GameContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;

  @media ${device.viewport12} {
    flex-direction: row;
  }
`

@inject('gamesStore')
@observer
export default class Games extends Component {
  componentDidMount() {
    this.props.gamesStore.fetchGames()
  }

  render() {
    const { fetchingGamesError, games } = this.props.gamesStore
    return (
      <GameContainerRow>
        {fetchingGamesError ? (
          <p>Error with fetching games {fetchingGamesError} </p>
        ) : (
          games && games.map(game => <Game key={game.id} {...game} />)
        )}
      </GameContainerRow>
    )
  }
}
