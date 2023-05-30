import React, { useState, useEffect } from 'react';
import './index.css'

function Url() {
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [linkHistory, setLinkHistory] = useState([]);
  const [inputError, setInputError] = useState(false); // State for input error

  useEffect(() => {
    const storedLinks = localStorage.getItem('linkHistory');
    if (storedLinks) {
      setLinkHistory(JSON.parse(storedLinks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('linkHistory', JSON.stringify(linkHistory));
  }, [linkHistory]);

  const handleInputChange = (event) => {
    setOriginalLink(event.target.value);
  };

  const handleShortenClick = () => {
    if (!originalLink) {
      setInputError(true); // Set input error to true if the input is empty
      return;
    }

    fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
      .then((response) => response.json())
      .then((data) => {
        const newLink = {
          original: originalLink,
          shortened: data.result.short_link,
        };
        setLinkHistory([...linkHistory, newLink]);
        setOriginalLink('');
        setShortenedLink(data.result.short_link);
        setCopiedIndex(null);
        setInputError(false); // Reset input error to false
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCopyClick = (index, link) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
  };

  const shortenText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="url-container">
      <div className="form">
        <div className="form-info1">
            <input
              type="text"
              value={originalLink}
              className={`input-ele ${inputError ? 'error' : ''}`}
              placeholder={inputError ? 'Please enter a link' : 'Shorten a link here...'}
              onChange={handleInputChange}
            />
          <button className="submit-btn hover-btn" onClick={handleShortenClick}>
            Shorten It!
          </button>
        </div>
      </div>

      {linkHistory.length > 0 && (
        <div className="ul-sub">
          {linkHistory.map((link, index) => (
            <div key={index} className="list-index">
              <p className="para1">{shortenText(link.original, 40)}</p>
              <div className="list-index1">
                <p className="para2">{link.shortened}</p>
                <button
                  onClick={() => handleCopyClick(index, link.shortened)}
                  className="btn-copy hover-btn"
                  style={{ backgroundColor: copiedIndex === index ? 'var(--Very-Dark-Blue)' : 'var(--Cyan)' }}
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Url;
