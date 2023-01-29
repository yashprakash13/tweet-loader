const ResultCard = ({ tweet }) => {
  return (
    <div className="flex align-items-center justify-center mt-4 font-inria mx-auto">
      {tweet.text}
    </div>
  )
}

export default ResultCard
