import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addideas.css';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
import useIdeas from './useIdeas';

const override = css`
  display: block;
  margin-left: 50%;
  margin-right: 50%;
  border-color: #ffc735;
`;

function AddIdeas() {
  const [ideas, loading, addLike, addInput, getAllIdeas, addNewIdea] = useIdeas(
    []
  );

  useEffect(() => {
    getAllIdeas();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewIdea(event);
  };

  const updateIdea = (id) => {
    addLike(id);
  };
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
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-picture"></div>
            <p>
              share your ideas how to spend time at home durning quarantine. No
              pressure to be over productive or super creative, everything
              counts! 🧶🎣💅{' '}
            </p>
            <label>your idea</label>
            <input
              name="idea"
              defaultValue=""
              onChange={(event) => addInput(event)}
            />
            <label>your name</label>
            <input
              name="author"
              defaultValue=""
              onChange={(event) => addInput(event)}
            />
            <input type="submit" />
          </form>
          <div className="ideas-container">
            {ideas.map((idea, key) => (
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
          </div>
        </div>
      )}
    </>
  );
}

export default AddIdeas;
