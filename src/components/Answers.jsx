import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];//created new array
        shuffledAnswers.current.sort(() => Math.random() - 0.5);//sort will not create a new array but edit the shuffledAnswers array
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClasses = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)} className={cssClasses} disabled={answerState !== ''}>
                            {answer}
                        </button>
                    </li>
                )

            })}
        </ul>
    );
}