

const NewGameBtn = ({ restartGame }) => {
  return (
    <button data-testid="newGameButton" className="new-game-btn" onClick={ restartGame }>
      New Game
    </button>
  )
}

export default NewGameBtn
