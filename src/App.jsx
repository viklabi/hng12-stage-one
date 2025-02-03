import './App.css'
import ColorBox from './Components/ColorBox'
import ColorOptions from './Components/ColorOptions'
import GameStatus from './Components/GameStatus'
import NewGameBtn from './Components/NewGameBtn'
import Score from './Components/Score'
import { useEffect, useState } from 'react'

const App = () => {
  const [targetColor, setTargetColor] = useState('');
  const [colorOptions, setColorOptions] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const [score, setScore] = useState(0);
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

    } else {
      setGameStatus('Wrong! 😢');

    }
    startNewGame()
  }
  useEffect(() => {
    startNewGame();
  }, [])

  const restartGame = () => {
    startNewGame();
    setGameStatus('');
    setScore(0);
  }

  return (
    <main>
      <h1>Color Guessing Game</h1>
      <ColorBox color={ targetColor } />
      <p data-testid="game-instructions">Guess the correct color</p>
      <ColorOptions options={ colorOptions } handleGuess={ handleGuess } />
      <GameStatus gameStatus={ gameStatus } />
      <Score score={ score } />
      <NewGameBtn restartGame={ restartGame } />
    </main>
  )
}

export default App
