import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

export default function App() {
  const [markdownm, setMarkdown] = useState('# sup');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdownm} />

      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdownm) }}
      />
    </div>
  );
}
