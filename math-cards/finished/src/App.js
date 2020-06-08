import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

export default function App() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(3);
  const [operator, setOperator] = useState('*');

  function handleDrop(spot, item) {
    console.log(item);
    if (spot === 'number1') setNumber1(item.text);
    if (spot === 'number2') setNumber2(item.text);
    if (spot === 'operator') setOperator(item.text);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        {/* math card */}
        <div className="math-card">
          <Spot
            type="number"
            text={number1}
            spot="number1"
            handleDrop={handleDrop}
          />
          <Spot
            type="number"
            text={number2}
            spot="number2"
            handleDrop={handleDrop}
          />
          <Spot
            type="operator"
            text={operator}
            spot="operator"
            handleDrop={handleDrop}
          />
          <div className="total">{eval(`${number1}${operator}${number2}`)}</div>
        </div>

        <div>
          <div className="cards numbers">
            {Array(10)
              .fill(0)
              .map((n, i) => (
                <Card key={i} type="number" text={i} />
              ))}
          </div>

          <div className="cards operators">
            {['*', '-', '+', '/'].map((o, i) => (
              <Card key={i} type="operator" text={o} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

function Spot({ type, text, spot, handleDrop }) {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: type,
    drop: (item) => {
      // here is where we do the update
      handleDrop(spot, item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let backgroundColor = '#f2f2f2';
  if (canDrop) backgroundColor = '#3db897';
  if (isOver) backgroundColor = '#4bdcb5';

  return (
    <div className="spot" ref={dropRef} style={{ backgroundColor }}>
      {text}
    </div>
  );
}

function Card({ type, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type, text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div className="card" ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
}
