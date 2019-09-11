import React from "react"
import { Provider } from "mobx-react"
import stores from "./models/stores"

import Games from "./components/games"

const App = () => {
  return (
    <Provider {...stores}>
      <Games />
    </Provider>
  )
}

export default App
