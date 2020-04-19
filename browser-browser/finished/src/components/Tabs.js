import React, { useState } from 'react';

function Tab({ index, children, close, isActive }) {
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0
  });

  function moveHighlight(e) {
    setHighlightStyle({
      opacity: 0.4,
      left: e.nativeEvent.layerX - 250
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

export default function Tabs({ browsers, create, close, choose, active }) {
  return (
    <div className="tabs">
      {browsers.map((browser, index) => {
        return (
          <Tab
            key={index}
            index={index}
            close={close}
            choose={choose}
            isActive={active === index}
          >
            <button onClick={() => choose(index)}>{browser}</button>
          </Tab>
        );
      })}
      <Tab>
        <button onClick={create}>+</button>
      </Tab>
    </div>
  );
}
