import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addideas.css';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
const override = css`
  display: block;
  margin-left: 50%;
  margin-right: 50%;
  border-color: #ffc735;
`;
function AddIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    idea: '',
    author: '',
  });

  // GET
  useEffect(() => {
    fetch('https://have-a-good-time-back.herokuapp.com/')
      .then((res) => res.json())
      .then((res) => {
        setIdeas(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  // POST
  const updateData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (!data.author) {
      toast.error('yikes! you forgot your name... 🙈❕');
    }
    if (!data.idea) {
      toast.error('yikes! you forgot your idea... 🙈❕');
    }
    // event.preventDefault();
    fetch('https://have-a-good-time-back.herokuapp.com/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => {
        toast.success('🎉 nice one! thanksss! 🎉');
      })
      .catch((err) => {
        toast.error('yikes! something went wrong! 🔎');
      });
  };
  // PUT

  const updateIdea = (id) => {
    fetch(`https://have-a-good-time-back.herokuapp.com/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ $inc: { likes: 1 } }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLikes(likes + 1);
        console.log('in fetch', likes);
        toast.success('cool, thanks for your vote!');
      })
      .catch((err) => {
        toast.error('yikes! something went wrong!');
      });
  };
  console.log('outside', likes);
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
            <input name="idea" defaultValue="" onChange={updateData} />
            <label>your name</label>
            <input name="author" defaultValue="" onChange={updateData} />
            <input type="submit" />
          </form>
          <div className="ideas-container">
            {ideas.map((idea, key) => (
              <div key={key} className="one-idea-name">
                <div className="user-idea">{idea.idea}</div>
                <div className="name-vote">
                  <p className="user-name ">by {idea.author}</p>
                  <p
                    className="user-name vote"
                    onClick={() => updateIdea(idea._id)}
                  ></p>
                  {idea.likes ? (
                    <p className="user-name score">{idea.likes}</p>
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
