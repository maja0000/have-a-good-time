import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `Grow a sourdough starter and bake bread, waffles, pancakes and other pasteries!`,
    link: 'https://www.youtube.com/watch?v=sTAiDki7AQA&t=133s',
    picture: require('../../pictures/bread.svg'),
  },
  {
    id: '2',
    text: `Yes, You Can Pickle That! Make the Quickest, Easiest Homemade Pickles `,
    link:
      'https://www.bonappetit.com/test-kitchen/how-to/article/how-to-pickle',
    picture: require('../../pictures/pickle.png'),
  },
];
export default function ModalCooking() {
  return (
    <>
      <div className="science-container">
        {scienceIdeas.map((each) => (
          <a className="science-idea" href={`${each.link}`}>
            <div
              style={{
                backgroundImage: `url("${each.picture}")`,
                backgroundSize: 'cover',
                height: '100px',
                width: '20%',
              }}
            />

            <div className="science-text">{each.text}</div>
          </a>
        ))}
      </div>
    </>
  );
}
