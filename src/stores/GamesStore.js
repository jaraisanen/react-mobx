import { observable, action } from "mobx"
import axios from "axios"

export default class GamesStore {
  @observable fetchingGames = false
  @observable fetchingGamesError = ""
  @observable fetchingGamesSuccess = false
  @observable games = []

  @action fetchGames = async () => {
    console.log("api called")
    try {
      this.fetchingGames = true
      const response = await axios.get(`http://localhost:3001/api/games`)
      this.games = response.data
      this.fetchingGames = false
    } catch (error) {
      this.fetchingGames = false
      this.fetchingGamesError = error.error
      console.log(error)
    }
  }
}
