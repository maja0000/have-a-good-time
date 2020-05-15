import React, { useState } from 'react';
import './introduction.css';
// component
import SingleIdea from './SingleIdea';

const ideasList = [
  {
    id: 'idea2',
    title: 'Bring your plants back to life',
    img:
      'https://res.cloudinary.com/dmiwizanu/image/upload/v1589222369/plant_wp6mm1.svg',
    description:
      'erial but not ieaks, or tabulation characters (although tab characters candifferent things, so are hardlyn text is different from formatted text, where style information is included; from structured text, where structural parts of the document such as paragraphs, sections, and the like are identified; and from binary files in which some portions must be interpreted as binary objects (encoded',
    position: 'right',
  },

  {
    id: 'idea1',
    title: '??? Put on that cheeta bikini',
    img:
      'https://res.cloudinary.com/dmiwizanu/image/upload/v1589222376/bikini_fdtozo.svg',

    description: `erthings, so are hardly "plain"). Plain text is different from formatted text, where style information is included; from structured text, where structural parts of the document such as paragraphs, sections, and the like are identified; and from binary files in which some portions must be interpreted as binary objects (encoded`,
    position: 'left',
  },

  {
    id: 'idea3',
    title: 'Learn a trick',
    img:
      'https://res.cloudinary.com/dmiwizanu/image/upload/v1589222409/Doggie_m3jodr.svg',
    description: `eces, line breaks, or tabulation characters (although tab characters can "mean" many different things, so are hardly "plain"). Plain text is different from formatted text, where style information is included; from structured text, where structural parts of the document such as paragraphs, sections, and the like are identified; and from binary files in which some portions must be interpreted as binary objects (encoded`,
    position: 'right',
  },
  {
    id: 'idea4',
    title: 'relax ',
    img:
      'https://res.cloudinary.com/dmiwizanu/image/upload/v1589222384/meditating_auv1gp.svg',
    description: `ercharacters can "mean" many different things, so are hardly "plain"). Plain text is different from formatted text, where style information is included; from structured text, where structural parts of the document such as paragraphs, sections, and the like are identified; and from binary files in which some portions must be interpreted as binary objects (encoded`,
    position: 'left',
  },
];
function Introduction() {
  const [ideas, setIdeas] = useState(ideasList);
  return (
    <>
      <div className="wrapper">
        <div className="header"></div>
        <div className="illustration"></div>
        <div className="couple-of-ideas"></div>
      </div>
      <div className="all-ideas">
        {/* {ideas.map((idea, index) => (
          <SingleIdea key={index} ideas={idea} />
        ))} */}
      </div>
      <div className="bottom-graphic"></div>
    </>
  );
}
export default Introduction;
