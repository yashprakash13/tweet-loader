import { HiSearch } from "react-icons/hi"

const Search = ({ searchTerm, setSearchTerm, getUserTweets }) => {
  return (
    <div className="flex flex-row  align-items-center justify-center mt-4 font-inria mx-auto">
      <div className="flex justify-between items-center border-2 border-b-[6px] border-r-[5px] border-primaryText bg-[#355C7D] rounded-full text-[#fff] shadow-lg">
        <input
          type="text"
          id="password"
          className="rounded-full w-[42rem] h-[3rem] pl-[2rem] bg-[#355C7D] text-[#fff] focus:outline-none placeholder:text-[#fff]"
          placeholder="Type a username..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <HiSearch
          color="white"
          className=" text-xl mr-[2rem] cursor-pointer"
          onClick={() => {
            if (searchTerm.trim() !== "") {
              getUserTweets()
            }
          }}
        />
      </div>
    </div>
  )
}

export default Search
