import React, { useReducer } from 'react';
import Tabs from './components/Tabs';
import AddressBar from './components/AddressBar';
import './App.css';

function getInitialState() {
  return {
    browsers: ['https://learn.chrisoncode.io', 'https://kapeheokalani.com'],
    activeBrowser: 0,
  };
}

function browserReducer(state, action) {
  if (action.type === 'ADD') {
    // add a new tab to browsers
    const browsers = [...state.browsers, ''];
    const activeBrowser = browsers.length - 1;

    return {
      browsers,
      activeBrowser,
    };
  }

  if (action.type === 'UPDATE') {
    const browsers = [...state.browsers];
    browsers[state.activeBrowser] = action.payload;

    return {
      ...state,
      browsers,
    };
  }

  if (action.type === 'CHOOSE') {
    return {
      ...state,
      activeBrowser: action.payload,
    };
  }

  if (action.type === 'DELETE') {
    const oldBrowsers = [...state.browsers];
    const browsers = oldBrowsers.filter((b, i) => i !== action.payload);
    const activeBrowser = browsers[state.activeBrowser]
      ? state.activeBrowser
      : browsers.length - 1;

    return {
      browsers,
      activeBrowser,
    };
  }
}

export default function App() {
  const [{ browsers, activeBrowser }, dispatch] = useReducer(
    browserReducer,
    {},
    getInitialState
  );

  const createBrowser = () => dispatch({ type: 'ADD' });
  const chooseBrowser = (id) => dispatch({ type: 'CHOOSE', payload: id });
  const updateBrowser = (url) => dispatch({ type: 'UPDATE', payload: url });
  const closeBrowser = (id) => dispatch({ type: 'DELETE', payload: id });

  const url = browsers[activeBrowser];

  return (
    <div className="app">
      <div className="browser">
        <Tabs
          browsers={browsers}
          create={createBrowser}
          choose={chooseBrowser}
          close={closeBrowser}
          active={activeBrowser}
        />

        <AddressBar update={updateBrowser} url={url} />

        <div className="viewport">
          {browsers[activeBrowser] ? (
            <iframe src={browsers[activeBrowser]} title="stuff" />
          ) : (
            <>New Tab Page</>
          )}
        </div>
      </div>
    </div>
  );
}
