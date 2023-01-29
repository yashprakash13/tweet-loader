const ResultCard = ({ tweet }) => {
  return (
    <div className="flex justify-center items-center w-[28rem] h-[16rem] m-[1.5rem]">
      <div className="w-full h-full p-6 rounded-[5px] border-primaryText border-2 border-b-4 border-r-4 bg-[#fff] max-w-sm">
        <p className="text-gray-700 text-base mb-4">{tweet.text}</p>
      </div>
    </div>
  )
}

export default ResultCard
