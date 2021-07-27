import React, { useEffect, useState  } from 'react';

import '../assets/scss/components/_game.scss'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Game({navigation}) {
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

    // x === firstNumber
    // ? setCorrectPosition(prevPosition => prevPosition +1)
    //   : x === secondNumber ? setCorrectNumber(prevState => prevState +1)
    //     : x === thirdNumber ? setCorrectNumber(prevState => prevState +1)
    //       : null
    // y === secondNumber
    //   ? setCorrectPosition(prevPosition => prevPosition +1)
    //     : y === firstNumber ? setCorrectNumber(prevState => prevState +1)
    //       : y === thirdNumber ? setCorrectNumber(prevState => prevState +1)
    //         : null
    // z === thirdNumber
    //   ? setCorrectPosition(prevPosition => prevPosition +1)
    //     : z === firstNumber ? setCorrectNumber(prevState => prevState +1)
    //       : z === secondNumber ? setCorrectNumber(prevState => prevState +1)
    //         : null
    
    setPreviousCheck(firstNumber.toString() + secondNumber.toString() + thirdNumber.toString())

    setFirstNumber('')
    setSecondNumber('')
    setThirdNumber('')
  }

  const showWinAlert = () => {
    console.log(counter)
      setX(draw());
      setY(draw());
      setZ(draw());
      setPreviousCheck('');
      setCorrectNumber('');
      setCorrectPosition('');
      setCounter(0);
  }

  useEffect(() => {
    if (correctPosition === 3) {showWinAlert()}
  }, [correctPosition])

  useEffect(() => {
    if (thirdNumber) {checkResult()}
  }, [thirdNumber])


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
  );
}