import './App.css'
import ColorBox from './Components/ColorBox'
import ColorOptions from './Components/ColorOptions'
import GameStatus from './Components/GameStatus'
import Life from './Components/Life'
import NewGameBtn from './Components/NewGameBtn'
import Score from './Components/Score'
import TryAgainModal from './Components/TryAgainModal'
import { useEffect, useState } from 'react'

const App = () => {
  const [targetColor, setTargetColor] = useState('');
  const [colorOptions, setColorOptions] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  const [modalStatus, setModalStatus] = useState(false)

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const startNewGame = () => {
    const newTargetColor = generateRandomColor();
    setTargetColor(newTargetColor);
    const options = [newTargetColor];
    while (options.length < 6) {
      const newOption = generateRandomColor();
      if (!options.includes(newOption)) {
        options.push(newOption);
      }
    }
    options.sort(() => Math.random() - 0.5);
    setColorOptions(options);
  }

  const handleGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setGameStatus('Correct! 🎉');
      setScore((prevScore) => prevScore + 1);
      startNewGame()
    } else {
      setGameStatus('Wrong! 😢');
      setLife((prevLife) => prevLife - 1);
      if (life === 0) {
        setModalStatus(true);
        setLife(0)
      }
    }
  }

  useEffect(() => {
    startNewGame();
  }, [])

  const restartGame = () => {
    startNewGame();
    setGameStatus('');
    setScore(0);
    setLife(5);
  }
 
  const tryAgain = () => {
    restartGame();
    setModalStatus(false);
  }
  return (
    <main>
      <h1>Color Guessing Game</h1>
      <div className="top">
       <Life life={life}/>
       <Score score={ score } />
      </div>
      <ColorBox color={ targetColor } />
      <p data-testid="game-instructions">Guess the correct color</p>
      <ColorOptions options={ colorOptions } handleGuess={ handleGuess } />
      <GameStatus gameStatus={ gameStatus } />
      <NewGameBtn restartGame={ restartGame } />
      {modalStatus && <TryAgainModal tryAgain={tryAgain}/>}
    </main>
  )
}

export default App