import "./App.css"
import Search from "./components/Search"
import Title from "./components/Title"

import { useState, useEffect } from "react"
import ResultCard from "./components/ResultCard"

function App() {
  const [tweets, setTweets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const getUserTweets = async (username) => {
    await fetch(`http://localhost:8000/get-user-tweets/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setTweets(data["items"])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    getUserTweets(searchTerm)
  }, [])
  return (
    <div className="App bg-[#F8B195] w-full h-screen  overflow-auto">
      <Title />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        getUserTweets={getUserTweets}
      />
      {tweets?.length > 0 ? (
        <div className="w-full flex flex-wrap items-center justify-center font-inria mx-auto mt-[4rem]">
          {tweets.map((tweet) => (
            <ResultCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      ) : (
        <div className="w-full mt-[4rem] flex justify-center items-center text-2xl color-[#fff] font-inria">
          No tweets found
        </div>
      )}
    </div>
  )
}

export default App
