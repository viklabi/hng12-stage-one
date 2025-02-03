
const Score = ({ score }) => {
  return (
    <p className="score">
      Score : <span data-testid="score">{ score }</span>
    </p>
  )
}

export default Score
