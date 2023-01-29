import { HiSearch } from "react-icons/hi"

const Search = () => {
  return (
    <div class="flex flex-row  align-items-center justify-center mt-4 font-inria mx-auto">
      <div className="flex justify-between items-center border-2 border-b-[6px] border-r-[5px] border-primaryText bg-[#355C7D] rounded-full text-[#fff] shadow-lg">
        <input
          type="text"
          id="password"
          class="rounded-full w-[42rem] h-[3rem] pl-[2rem] bg-[#355C7D] text-[#fff] focus:outline-none"
          placeholder="Type a username..."
        />
        <HiSearch color="white" class=" text-xl mr-[2rem]" />
      </div>
    </div>
  )
}

export default Search
