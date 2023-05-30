import React, { useState, useEffect } from 'react';
import './index.css'

function Url() {
  const [originalLink, setOriginalLink] = useState(''); // State for storing the original link input
  const [shortenedLink, setShortenedLink] = useState(''); // State for storing the shortened link
  const [copiedIndex, setCopiedIndex] = useState(null); // State for storing the index of the copied link
  const [linkHistory, setLinkHistory] = useState([]); // State for storing the link history

  useEffect(() => {
    // Retrieve link history from localStorage on component mount
    const storedLinks = localStorage.getItem('linkHistory');
    if (storedLinks) {
      setLinkHistory(JSON.parse(storedLinks));
    }
  }, []);

  useEffect(() => {
    // Store link history in localStorage whenever it changes
    localStorage.setItem('linkHistory', JSON.stringify(linkHistory));
  }, [linkHistory]);

  const handleInputChange = (event) => {
    setOriginalLink(event.target.value); // Update the original link state when the input value changes
  };

  const handleShortenClick = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
      .then((response) => response.json())
      .then((data) => {
        const newLink = {
          original: originalLink,
          shortened: data.result.short_link,
        };
        setLinkHistory([...linkHistory, newLink]); // Add the new link to the link history array
        setOriginalLink(''); // Clear the original link input
        setShortenedLink(data.result.short_link); // Store the shortened link in state
        setCopiedIndex(null); // Reset the copied link index
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCopyClick = (index, link) => {
    navigator.clipboard.writeText(link); // Copy the shortened link to the clipboard
    setCopiedIndex(index); // Set the copied link index to the clicked item's index
  };

  const shortenText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'; // Shorten the text and append three dots if it exceeds the maxLength
    }
    return text; // Return the original text if it is within the maxLength
  };

  return (
    <div className="url-container">
      <div className="form">
      <div className="form-info1">
        <input type="text" value={originalLink}  className="input-ele" onChange={handleInputChange} />
        <button className="submit-btn" onClick={handleShortenClick}> Shorten It!</button>
      </div>
   </div>

      {linkHistory.length > 0 && (
          <div className='ul-sub'>
            {linkHistory.map((link, index) => (
              <div key={index} className='list-index'>
                 <p className='para1'>{shortenText(link.original, 40)} </p>
                 <div className='list-index1'>
                 <p className='para2'>{link.shortened}</p>
                <button
                  onClick={() => handleCopyClick(index, link.shortened)}
                  className='btn-copy'
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
