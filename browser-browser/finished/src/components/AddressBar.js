import React from 'react';

function addHttps(url) {
  if (!url.startsWith('http') || !url.startsWith('https')) {
    console.log('doesnt start with https');
    return `https://${url}`;
  }
}

export default function AddressBar({ updateUrl, url, setUrl }) {
  function handleSubmit(e) {
    e.preventDefault();
    const httpsUrl = addHttps(url);
    console.log(httpsUrl);
    updateUrl(httpsUrl);
  }

  return (
    <div className="address-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </form>
    </div>
  );
}
