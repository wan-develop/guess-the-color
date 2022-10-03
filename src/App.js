import { useEffect, useState } from 'react';
import './App.css';


import { ColorBox } from "./components/ColorBox/ColorBox"
import { QuestionBox } from "./components/QuestionBox/QuestionBox"

function App() {
  const [color, setColor] = useState("#ff033d");
  const [questions, setQuestions] = useState([]);
  const [guess, setGuess] = useState(undefined);
  const [isValid, setIsValid] = useState(undefined);

  useEffect(() => {

    generateNewQuestion();

  }, [])

  useEffect(() => {

    console.log(guess, color)
    setIsValid(color === guess);




    return () => {
      setColor(getRandomColor())
    }

  }, [guess])

  useEffect(() => {
    generateNewQuestion()
    console.log(questions)
  }, [color])


  const getRandomColor = () => {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    return '#' + Array(6).fill('').map(() => chars[Math.round(Math.random() * chars.length)]).join('')
  }

  const generateNewQuestion = () => {

    const randomIndex = Math.round(Math.random() * 2);

    let Arr = new Array(3).fill("").map(( e , i)=> {
      if( i === randomIndex) return color;
      return getRandomColor()
    } )

    
    //set questions to a random sorted list
    setQuestions(Arr)
  }



  return (
    <div className="App">
      <h1>Color Guess</h1>
      <ColorBox color={color} />
      <QuestionBox
        questions={questions}
        setGuess={setGuess}
      />

      {
        isValid
          ? <h3 className='right-answer answer-status'>You Rock!</h3>
          : <h3 className='wrong-answer answer-status'>You miss!</h3>
      }
    </div>
  );
}

export default App;
