import { observable, action, decorate, flow, configure } from "mobx"

import axios from "axios"

class GamesStore {
  fetchingGames = false
  fetchingGamesError = {}
  fetchingGamesSuccess = false
  games = []

  fetchGames = async () => {
    console.log("api called")
    try {
      this.fetchingGames = true
      const response = await axios.get(`http://localhost:3001/api/games`)
      this.games = response.data
      this.fetchingGames = false
    } catch (error) {
      this.fetchingGames = false
      this.fetchingGamesError = error
      console.log(error)
    }
  }
}

decorate(GamesStore, {
  fetchingGames: observable,
  fetchingGamesError: observable,
  fetchingGamesSuccess: observable,
  games: observable,
  fetchGames: action
})

export default new GamesStore()
