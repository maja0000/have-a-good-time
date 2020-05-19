import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `Read about food! Clever articles about food culture `,
    link: 'https://www.famousformydinnerparties.com/all',
    picture:
      'https://res.cloudinary.com/dmiwizanu/image/upload/v1589830887/Screenshot_2020-05-18_at_21.41.23_vrlw0d.png',
  },
  {
    id: '2',
    text: `Grow a sourdough starter and bake bread, waffles, pancakes and other pasteries!`,
    link: 'https://www.youtube.com/watch?v=sTAiDki7AQA&t=133s',
    picture:
      'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: '3',
    text: `Yes, You Can Pickle That! Make the Quickest, Easiest Homemade Pickles `,
    link:
      'https://www.bonappetit.com/test-kitchen/how-to/article/how-to-pickle',
    picture:
      'https://images.unsplash.com/photo-1462536546956-beef6399d8cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },

  {
    id: '4',
    text: `Experiment with hard drinks! `,
    link: 'https://www.bonappetit.com/story/new-hard-drinks',
    picture:
      'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
];
export default function ModalCooking() {
  return (
    <>
      <div className="science-container">
        {scienceIdeas.map((each) => (
          <a className="science-idea" href={`${each.link}`}>
            <div
              className="modal-picture"
              style={{
                backgroundImage: `url("${each.picture}")`,
                backgroundSize: 'cover',
                height: '100px',
              }}
            />

            <div className="science-text">{each.text}</div>
          </a>
        ))}
      </div>
    </>
  );
}
