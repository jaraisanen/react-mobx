import { observable, action } from "mobx"
import axios from "axios"

export default class GamesStore {
  @observable fetchingGames = false
  @observable actionError = ""
  @observable actionSuccess = false
  @observable games = []

  @action fetchGames = async () => {
    console.log("api called")
    try {
      this.fetchingGames = true
      const response = await axios.get(`http://localhost:3001/api/games`)
      this.games = response.data
      this.actionSuccess = false
    } catch (error) {
      this.fetchingGames = false
      this.actionError = error.error
      console.log(error)
    }
  }

  @action deleteGame = async selectedGameId => {
    console.log('delete called')
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/games/${selectedGameId}`
      )
      this.actionSuccess = response
      this.fetchGames()
    } catch (error) {
      this.actionError = error
    }
  }
}
