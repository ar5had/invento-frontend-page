
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
  isLive,
}) => {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img className="card-img" src={image} alt={title} />
        <span className="tag">{tag}</span>
        <span className="viewer-count">{viewCount}</span>
      </div>
      <div className="card-row tag-time">
        <span className="tag">{type}</span>
        <span className="time">{timeLeft}</span>
      </div>
      <div className="card-row">
        <h6 className="border-bottom title">{title}</h6>
      </div>
      <div className="card-row">
        <span className="bid span">
          <span className="value">{currentBid}</span>
          Current Bid
        </span>
        <span className="msrp span">
          <span className="value">{msrp}</span>
          MSRP
        </span>
        <span className="units span">
          <span className="value">{units}</span>
          Units
        </span>
      </div>

      <div className="card-buttons card-row">
        {
          isSoldOut ? <button className="inactive-btn">Sold</button> :
            <>
              <button className="primary-btn">
                View Auction
            </button>
              <button className="last secondary-btn">
                Watch
            </button>
            </>
        }
      </div>
    </div>
  );
};

export default Card;
