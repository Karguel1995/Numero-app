import React, { useEffect, useState  } from 'react';

import '../assets/scss/components/_game.scss'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Game() {
  const [firstNumber , setFirstNumber] = useState('')
  const [secondNumber , setSecondNumber] = useState('')
  const [thirdNumber , setThirdNumber] = useState('')
  const [previousCheck, setPreviousCheck] = useState('')

  const draw = () => (Math.floor(Math.random() * 9 + 1))

  const [x, setX] = useState(draw())
  const [y, setY] = useState(draw())
  if (y === x)  {setY(draw())}
  const [z, setZ] = useState(draw())
  if (z === y) { setZ(draw())}
  if (z === x) { setZ(draw())}

  const [counter, setCounter] = useState(0)
  const [correctPosition, setCorrectPosition] = useState(0)
  const [correctNumber, setCorrectNumber] = useState(0)
  const [displayPopup, setDisplayPopup] = useState(false)

  const checkResult = () => {
    setCorrectPosition(0)
    setCorrectNumber(0)
    setCounter(prevCounter => prevCounter + 1)


    if (x === firstNumber) {
      setCorrectPosition(prevPosition => prevPosition +1)
    } else if (x === secondNumber) {
      setCorrectNumber(prevState => prevState +1)
    } else if (x === thirdNumber) {
      setCorrectNumber(prevState => prevState +1)
    } 

    if (y === secondNumber ) {
      setCorrectPosition(prevPosition => prevPosition +1)
    } else if (y === firstNumber) {
      setCorrectNumber(prevState => prevState +1)
    } else if (y === thirdNumber) {
      setCorrectNumber(prevState => prevState +1)
    }


    if (z === thirdNumber  ) {
      setCorrectPosition(prevPosition => prevPosition +1)
    } else if (z === firstNumber) {
      setCorrectNumber(prevState => prevState +1)
    } else if (z === secondNumber) {
      setCorrectNumber(prevState => prevState +1)
    } 
    
    setPreviousCheck(firstNumber.toString() + secondNumber.toString() + thirdNumber.toString())

    setFirstNumber('')
    setSecondNumber('')
    setThirdNumber('')
  }

  const showWinAlert = () => {
      setDisplayPopup(true)
      setPreviousCheck('');
      setCorrectNumber('');
      setCorrectPosition('');
  }

  useEffect(() => {
    if (correctPosition === 3) {showWinAlert()}
  }, [correctPosition])

  useEffect(() => {
    if (thirdNumber) {checkResult()}
  }, [thirdNumber])


  const resetGame = () => {
    setCounter(0);
    setDisplayPopup(false)
    setX(draw());
    setY(draw());
    setZ(draw());
  }
  const displayNumbers = () => {
    return numbers.map( (nr) => {
      return( 
        
        <button 
        key={nr}
        onClick={() => {firstNumber ? secondNumber ? setThirdNumber(nr) : setSecondNumber(nr) : setFirstNumber(nr)}}
        >
          <p>{nr}</p>
        </button>
        
      )
    })
  } 

  return (
    <>
    <div className={displayPopup ? 'popupActive' : 'popupInactive'}>
      <p>You won!</p>
      <p>The correct code was: {x}{y}{z}</p>
      <p>Your attemts: {counter}</p>
        <button onClick={resetGame}>Play again</button>
    </div>
    <div>
      <div className="checkNumber">
        <p>{firstNumber}</p>
        <p>{secondNumber}</p>
        <p>{thirdNumber}</p>
      </div>
      <div>
        <p>Attempts: {counter}</p>
        <p>Previous check: {previousCheck}</p>
        <p>Correct number and correct position: {correctPosition}</p>
        <p>Correct number, but wrong position: {correctNumber}</p>
      </div>
      <div className="buttonsContainer">
        {displayNumbers()}
      </div>
    </div>
    </>
  );
}