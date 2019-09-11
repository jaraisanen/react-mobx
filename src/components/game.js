import React from "react"

const Game = props => {
  const { id, name, year, date } = props
  return (
    <>
      <h2>Name {name}</h2>
      <p>Id {id}</p>
      <p>year {year}</p>
      <p>date {date}</p>
    </>
  )
}

export default Game
