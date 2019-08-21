import React from 'react';
import ContentNav from './ContentNav';
import Card from './Card';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import '../styles/Content.css';

const Content = () => {

  const options = [
    {
      image: img1,
      tag: 'New',
      viewCount: 435,
      timeLeft: '3 days left',
      type: 'Live Auction',
      title: 'Original iPhone Boxes By Apple Liquidation Lot',
      currentBid: '$200',
      msrp: '$500',
      units: 20,
      isSoldOut: false,
      styleClass: 'live'
    },
    {
      image: img2,
      tag: 'Used',
      viewCount: 565,
      timeLeft: null,
      type: 'Elegible for Auction',
      title: '2 Players RC Battle Boxing Robots by Shift3',
      currentBid: '$1200',
      msrp: '$4000',
      units: 346,
      isSoldOut: false,
      styleClass: 'auction'
    },
    {
      image: img3,
      tag: null,
      viewCount: null,
      timeLeft: null,
      type: 'Newly Listed',
      title: 'Speakers, LED Lights, DVD Players, Printers, and More Electronics…',
      currentBid: '$9200',
      msrp: '$12000',
      units: 60,
      isSoldOut: true,
      styleClass: 'new'
    },
  ];

  const cards = options.map(
    (props, i) => <Card key={i} {...props} />
  );

  return (
    <section className="content-wrapper">
      <ContentNav />
      <div className="cards-wrapper">
        {cards}
      </div>
      <button className="hollow-btn primary full-width">Load more</button>
    </section>
  );
};

export default Content;
