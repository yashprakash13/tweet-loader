import "./App.css"
import Search from "./components/Search"
import Title from "./components/Title"

import { useState, useEffect } from "react"
import ResultCard from "./components/ResultCard"

function App() {
  const [tweets, setTweets] = useState([])
  const getUserTweets = (username) => {
    fetch(`http://localhost:8000/get-user-tweets/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTweets(data["items"])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    getUserTweets("writes_eve")
  }, [])
  return (
    <div className="App bg-[#F8B195] w-full h-screen  overflow-auto">
      <Title />
      <Search />
      {tweets?.length > 0 ? (
        <div className="w-full flex flex-wrap items-center justify-center font-inria mx-auto mt-[4rem]">
          {tweets.map((tweet) => (
            <ResultCard tweet={tweet} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No tweets found</h2>
        </div>
      )}
    </div>
  )
}

export default App
