import React from 'react';
import '../styles/ContentNav.css';

const ContentNav = () => {
  return (
    <div className="content-nav">
      <button className="nav-button active">Everything</button>
      <button className="nav-button">Live Auction</button>
      <button className="nav-button">Elegible for Auction</button>
      <button className="nav-button">Buy now only</button>
      <div className="side-filter">
        <label>Sort By:</label>
        <div className="select-with-icon">
          <select className="clear">
            <option>Lowest price</option>
          </select>
          <span>▼</span>
        </div>
      </div>
    </div>
  );
};

export default ContentNav;
