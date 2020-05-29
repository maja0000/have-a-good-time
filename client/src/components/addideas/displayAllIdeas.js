import React, { useEffect } from 'react';
import useIdeas from './useIdeas';
import './addideas.css';
import { Link, useRouteMatch, useParams, Route } from 'react-router-dom';

import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
const override = css`
  display: block;
  margin-left: 50%;
  margin-right: 50%;
  border-color: #ffc735;
`;

function DisplayAllIdeas() {
  const [ideas, loading, addLike, addInput, getAllIdeas, addNewIdea] = useIdeas(
    []
  );
  useEffect(() => {
    getAllIdeas();
  }, []);
  const updateIdea = (id) => {
    addLike(id);
  };
  let { topicId } = useParams();
  let filteredIdeas = ideas.filter((idea) => idea.category === topicId);
  return (
    <>
      {loading ? (
        <HashLoader
          css={override}
          color={'ffc735'}
          size={50}
          loading={loading}
        />
      ) : (
        <div style={{ margin: '10px', display: 'flex', flexWrap: 'wrap' }}>
          {filteredIdeas.length < 1
            ? `We have no ideas in ${topicId} category, maybe you can add one? :-)`
            : ''}
          {filteredIdeas.map((idea, key) => (
            <div
              key={key}
              className="one-idea-name"
              style={idea.fake && { opacity: 0.3 }}
            >
              <div className="user-idea">{idea.idea}</div>
              <div className="name-vote">
                <p className="user-name ">by {idea.author}</p>
                <p
                  className="user-name vote"
                  onClick={() => updateIdea(idea._id)}
                ></p>
                {idea.likes ? (
                  <p
                    className="user-name score"
                    // style={likes.true && { backgroundColor: 'red' }}
                  >
                    {idea.likes}
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
          {/* {ideas.map((idea, key) => (
            <div
              key={key}
              className="one-idea-name"
              style={idea.fake && { opacity: 0.3 }}
            >
              <div className="user-idea">{idea.idea}</div>
              <div className="name-vote">
                <p className="user-name ">by {idea.author}</p>
                <p
                  className="user-name vote"
                  onClick={() => updateIdea(idea._id)}
                ></p>
                {idea.likes ? (
                  <p
                    className="user-name score"
                    // style={likes.true && { backgroundColor: 'red' }}
                  >
                    {idea.likes}
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))} */}
        </div>
      )}
    </>
  );
}
export default DisplayAllIdeas;
