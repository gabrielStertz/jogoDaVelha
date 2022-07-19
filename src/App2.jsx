import { useEffect, useState } from 'react'
import './App.css'
function Square(props){
  
  return <button className='square' onClick={props.onClick}>{props.value}</button>
}
let next = true
function Game(){
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null])
  const [isNext, setIsNext] = useState(true)
  const [step, setStep] = useState(0)
  function handleClick(i){
    const squares2 = squares
    if(calculateWinner(squares2) || squares2[i]){
      return;
    }
    squares2[i] = isNext ? 'X' : 'O'
    setIsNext(!isNext)
    next = isNext
    setSquares(() => squares2)
    setStep(step + 1)
  }
  function restart(){
    const empty = [null, null, null, null, null, null, null, null, null]
    setSquares(empty)
    setStep(0)
    setIsNext(true)
    document.getElementById('restart').style.zIndex = -2
    document.getElementById('restart2').style.zIndex = -2
  }
  const winner = calculateWinner(squares)
  let status;
  if(winner == null && step == 9){
    document.getElementById('restart2').style.zIndex = 20
  }
  if (winner) {
    status = 'Winner: ' + winner;
    document.getElementById('restart').style.zIndex = 20
  } else {
    status = 'Next player: ' + (next ? 'X' : 'O');    }
  
  return (
    <div className='game'>
    <div className='board' >
    <button  className='restart' id='restart' onClick={() => restart()}>{status} Reiniciar</button>
    <button  className='restart2' id='restart2' onClick={() => restart()}>Reiniciar</button>
      <div className='line'>
      <Square
    value={squares[0]}
    onClick={() => handleClick(0)}
    />
      <Square
    value={squares[1]}
    onClick={() => handleClick(1)}
    />
      <Square
    value={squares[2]}
    onClick={() => handleClick(2)}
    />
      </div>
      <div className='line'>
      <Square
    value={squares[3]}
    onClick={() => handleClick(3)}
    />
      <Square
    value={squares[4]}
    onClick={() => handleClick(4)}
    />
      <Square
    value={squares[5]}
    onClick={() => handleClick(5)}
    />
      </div>
      <div className='line'>
      <Square
    value={squares[6]}
    onClick={() => handleClick(6)}
    />
      <Square
    value={squares[7]}
    onClick={() => handleClick(7)}
    />
      <Square
    value={squares[8]}
    onClick={() => handleClick(8)}
    />
      </div>
    </div>
    </div>
  
)
}
function App2() {
  const [history, setHistory] = useState([])
  const [move, setMove] = useState(0)
  return (Game())
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App2
