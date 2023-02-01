import "./App.css"
import Search from "./components/Search"
import Title from "./components/Title"

import { useState, useEffect } from "react"
import ResultCard from "./components/ResultCard"
import ReactPaginate from "react-paginate"

function App() {
  const [tweets, setTweets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [pagecount, setPagecount] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)

  const URL = `http://localhost:8000/get-user-tweets/${searchTerm}?page=${pageNumber}`

  const getUserTweets = () => {
    console.log("Search tweets called.")
    if (searchTerm.trim() === "") {
      return
    }
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Setting for page number: ", pageNumber)
        setTweets(data["items"])
        var totalpages = Math.ceil(data["total"] / data["size"])
        console.log("Pages count: ", totalpages)
        setPagecount(totalpages)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    console.log("useeffect for pagenumber: ", pageNumber)
    getUserTweets()
  }, [pageNumber])

  const changePage = async ({ selected }) => {
    var pageNumberToUpdateTo = selected + 1
    console.log("Clicked page: ", pageNumberToUpdateTo)
    setPageNumber(pageNumberToUpdateTo)
  }

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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pagecount}
        onPageChange={changePage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        disableInitialCallback={true}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default App
