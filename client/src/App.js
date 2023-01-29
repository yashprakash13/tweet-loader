import "./App.css"
import Search from "./components/Search"
import Title from "./components/Title"

import { useState } from "react"

function App() {
  const [tweets, setTweets] = useState([])
  const getUserTweets = () => {
    fetch("http://localhost:8000/get-user-tweets/writes_eve")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTweets(data["items"])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  return (
    <div className="App bg-[#F8B195] w-full h-screen overflow-hidden">
      <Title />
      <Search />
    </div>
  )
}

export default App
