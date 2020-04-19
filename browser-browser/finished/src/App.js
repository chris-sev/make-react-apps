import React, { useState, useEffect, useRef } from 'react';
import Tabs from './components/Tabs';
import './App.css';
import AddressBar from './components/AddressBar';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  const setPrevious = value => (ref.current = value);
  return [ref.current, setPrevious];
}

function App() {
  const [browsers, setBrowsers] = useState([
    'https://courses.chrisoncode.io',
    'https://kapeheokalani.com'
  ]);
  const [activeBrowser, setActiveBrowser] = useState(0);
  const [value, setValue] = useState(browsers[activeBrowser]);
  const [prevBrowsersCount, setPrevBrowserCount] = usePrevious(browsers.length);
  const [prevActiveBrowser, setPrevActiveBrowser] = usePrevious(0);

  useEffect(() => {
    const browsersCount = browsers.length - 1;
    setPrevBrowserCount(browsersCount);
    setPrevActiveBrowser(activeBrowser);
  });

  useEffect(() => {
    const browsersCount = browsers.length - 1;
    const hasAddedBrowser = prevBrowsersCount < browsersCount;
    const hasRemovedBrowser = prevBrowsersCount > browsersCount;

    if (hasAddedBrowser) {
      // we added a new tab. set the latest to be active
      setActiveBrowser(browsersCount);
      setValue(browsers[browsersCount]);
    } else if (hasRemovedBrowser) {
      // we removed a tab. make the old active tab the current one
      const newActiveBrowser =
        prevActiveBrowser < browsersCount ? prevActiveBrowser : browsersCount;
      setActiveBrowser(newActiveBrowser);
      setValue(browsers[newActiveBrowser]);
    }
  }, [browsers, prevActiveBrowser, prevBrowsersCount]);

  /**
   * Create a browser
   */
  function createBrowser() {
    const newBrowsers = [...browsers, ''];
    setBrowsers(newBrowsers);
    setActiveBrowser(newBrowsers - 1);
  }

  /**
   * Close a browser
   */
  function closeBrowser(index) {
    const newBrowsers = browsers.filter((b, i) => i !== index);
    setBrowsers(newBrowsers);
  }

  /**
   * Update a browser
   */
  function updateBrowser(url) {
    const newBrowsers = [...browsers];
    newBrowsers[activeBrowser] = url;
    setBrowsers(newBrowsers);
  }

  /**
   * Select a browser
   */
  function chooseBrowser(index) {
    setActiveBrowser(index);
    setValue(browsers[index]);
  }

  return (
    <div className="app">
      <div className="browser">
        <Tabs
          browsers={browsers}
          create={createBrowser}
          close={closeBrowser}
          choose={chooseBrowser}
          active={activeBrowser}
        />

        <AddressBar setUrl={setValue} updateUrl={updateBrowser} url={value} />

        <div className="viewport">
          {browsers[activeBrowser] ? (
            <iframe src={browsers[activeBrowser]} />
          ) : (
            <>New Tab Page</>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
