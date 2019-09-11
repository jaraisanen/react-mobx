import React from "react"
import { inject, observer } from "mobx-react"
import Game from "./game"
const Games = props => {
  const { fetchGames, games, fetchingGamesError } = props.gamesStore
  console.log(props)
  return (
    <>
      <h2>Test</h2>
      <button onClick={fetchGames}>Click to fetch click</button>
      {games && games.map(game => (
        <Game key={game.id} {...game} />
      ))}
    </>
  )
}

export default inject("gamesStore")(observer(Games))
