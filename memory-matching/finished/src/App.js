import React, { useState, useEffect } from 'react';
import shuffle from 'lodash.shuffle';
import './App.css';

// image for the pokemon
// https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png

const pokemon = [
  { id: 4, name: 'charizard' },
  { id: 10, name: 'caterpie' },
  { id: 77, name: 'ponyta' },
  { id: 108, name: 'lickitung' },
  { id: 132, name: 'ditto' },
  { id: 133, name: 'eevee' },
];
const doublePokemon = shuffle([...pokemon, ...pokemon]);

export default function App() {
  const [opened, setOpened] = useState([]); // using index
  const [matched, setMatched] = useState([]); // pokemon.id
  const [moves, setMoves] = useState(0);

  // check if there is a match
  // if there are 2 in the opened array, check if they match
  useEffect(() => {
    if (opened.length < 2) return;

    const firstPokemon = doublePokemon[opened[0]];
    const secondPokemon = doublePokemon[opened[1]];

    if (firstPokemon.name === secondPokemon.name)
      setMatched((matched) => [...matched, firstPokemon.id]);
  }, [opened]);

  // clear cards after 2 have been selected
  useEffect(() => {
    if (opened.length === 2) setTimeout(() => setOpened([]), 800);
  }, [opened]);

  // check if there is a winner
  useEffect(() => {
    if (matched.length === pokemon.length) alert('you won!');
  }, [matched]);

  function flipCard(index) {
    setMoves((moves) => moves + 1);
    setOpened((opened) => [...opened, index]);
  }

  return (
    <div className="app">
      <p>
        {moves} <strong>moves</strong>
      </p>

      <div className="cards">
        {doublePokemon.map((pokemon, index) => {
          let isFlipped = false;

          // do some logic to check if flipped
          if (opened.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;

          return (
            <PokemonCard
              key={index}
              index={index}
              pokemon={pokemon}
              isFlipped={isFlipped}
              flipCard={flipCard}
            />
          );
        })}
      </div>
    </div>
  );
}

function PokemonCard({ index, pokemon, isFlipped, flipCard }) {
  return (
    <button
      className={`pokemon-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => flipCard(index)}
    >
      <div className="inner">
        <div className="front">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            width="100"
          />
        </div>
        <div className="back">?</div>
      </div>
    </button>
  );
}
