import { observable } from "mobx"

export default class Game {
  @observable fetchingGame = false

  @Observable id = ""
  @observable name = ""
  @observable year = ""
  @observable date = ""
}
