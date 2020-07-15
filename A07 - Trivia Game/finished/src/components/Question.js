import React from 'react';
import shuffle from 'lodash.shuffle';

export default function Question({ question, answerQuestion }) {
  const answers = shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => answerQuestion(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  );
}
