import { useState, useEffect, useCallback } from 'react';

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState('any');

  const getQuestion = useCallback(() => {
    let url = 'https://opentdb.com/api.php?amount=1';
    if (category !== 'any') url += `&category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]));
  }, [category]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, category]);

  return { question, category, setCategory, getQuestion };
}
