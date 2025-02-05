

const TryAgainModal = ({tryAgain}) => {
  return (
    <div className="try-again-modal">
      <div className="modal-box">
        <p className="modal-content">Oops you are out of lives</p>
        <button onClick={tryAgain} className="try-again-btn">Try Again</button>
      </div>
    </div>
  )
}

export default TryAgainModal
