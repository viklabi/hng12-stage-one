
const ColorOptions = ({ options, handleGuess }) => {
  return (
    <div className="color-options">
      { options.map((option, i) => <button data-testid="colorOption" onClick={ () => handleGuess(option) } key={ i } className="color-option" style={ { backgroundColor: option } }></button>) }
    </div>
  )
}

export default ColorOptions