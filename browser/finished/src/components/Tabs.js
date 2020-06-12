import React, { useState } from 'react';

export default function Tabs({ browsers, active, choose, add, close }) {
  return (
    <div className="tabs">
      {browsers.map((browser, index) => (
        <Tab
          key={index}
          isActive={active === index}
          index={index}
          close={close}
        >
          <button onClick={() => choose(index)}>{browser}</button>
        </Tab>
      ))}
      <Tab>
        <button onClick={add}>+</button>
      </Tab>
    </div>
  );
}

function Tab({ index, children, close, isActive }) {
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
  });

  function moveHighlight(e) {
    setHighlightStyle({
      opacity: 0.4,
      left: e.nativeEvent.layerX - 250,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({ opacity: 0, left: e.nativeEvent.layerX - 250 });
  }

  return (
    <div
      className={`tab ${isActive ? 'is-active' : ''}`}
      onMouseOut={hideHighlight}
      onMouseMove={moveHighlight}
    >
      <div className="highlight" style={highlightStyle} />
      {children}
      {close && (
        <button className="close-tab" onClick={() => close(index)}>
          x
        </button>
      )}
    </div>
  );
}
