
import './QuestionBox.css'

export function QuestionBox({ questions, setGuess }) {
  return (
    <div className="Box">
      {questions.map((content, index) => (
        <button 
          key={index}
          className="option"
          onClick={() => setGuess(content)}
        >
          {content}
        </button>
      ))}
    </div>
  );
}
