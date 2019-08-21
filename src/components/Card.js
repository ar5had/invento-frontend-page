
import React from 'react';
import '../styles/Card.css';

const Card = ({
  image,
  tag,
  viewCount,
  timeLeft,
  type,
  title,
  currentBid,
  msrp,
  units,
  isSoldOut,
  styleClass,
}) => {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img className="card-img" src={image} alt={title} />
        <span className="tag tag-value">{tag}</span>
        <span className="tag viewer-count icon-text">
          {
            viewCount ?
              <React.Fragment>
                <i className="eye-icon icon" />
                {viewCount}
              </React.Fragment> :
              null
          }
        </span>
      </div>
      <div className="card-rows-wrapper">
        <div className="card-row tag-time">
          <span className={`tag ${styleClass}`}>{type}</span>
          <span className="time">{timeLeft}</span>
        </div>
        <div className="card-row">
          <h6 className="border-bottom title">{title}</h6>
        </div>
        <div className="card-row">
          <span className="bid item">
            <span className="value">{currentBid}</span>
            Current Bid
        </span>
          <span className="msrp item">
            <span className="value">{msrp}</span>
            MSRP
        </span>
          <span className="units item">
            <span className="value">{units}</span>
            Units
        </span>
        </div>
        <div className="card-buttons card-row">
          {
            isSoldOut ?
              <button className="inactive-btn full-span-col">Sold</button> :
              <React.Fragment>
                <button className="primary-btn">
                  View Auction
                </button>
                <button className="secondary-btn icon-text">
                  Watch
                  <i className="star-icon icon" />
                </button>
              </React.Fragment>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
