import { useEffect, useState } from 'react'
import './App.css'
function Square(props){
  
  return <button className='square' onClick={props.onClick}>{props.value}</button>
}
let next = true
function renderSquare(i){
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null])
  const [isNext, setIsNext] = useState(true)
  const [step, setStep] = useState(0)
  function handleClick(i){
    const squares2 = squares
    squares2[i] = isNext ? 'X' : 'O'
    setIsNext(!isNext)
    next = isNext
    setSquares(prevState => [...prevState, squares2])
    console.log(squares, squares2, step)
    setStep(step + 1)
    
  }
  
  return (
    <Square
      value={squares[i]}
      onClick={() => handleClick(i)}
    />
  );
}
function Game(){
  const status = 'Next player: ' + (next ? 'X' : 'O');
  return (
    <div className='game'>
     <div className='status'>{status}</div> 
    <div className='board'>
      <div className='line'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='line'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='line'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
    </div>
  
)
}
function App() {
  
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
export default App
