import React, { useState, useEffect } from 'react';
import {
  Link,
  Switch,
  useRouteMatch,
  useParams,
  Route,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import DisplayAllIdeas from './displayIdeasByCategory';
import DisplayAll from './DisplayAll';

import 'react-toastify/dist/ReactToastify.css';
import './addideas.css';

import useIdeas from './useIdeas';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
}));
function AddIdeas() {
  const [ideas, loading, addLike, addInput, getAllIdeas, addNewIdea] = useIdeas(
    []
  );

  const [limit, setLimit] = useState(2);

  const classes = useStyles();

  useEffect(() => {
    getAllIdeas();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewIdea(event);
  };
  const updateIdea = (id) => {
    addLike(id);
  };
  const showMorePosts = () => {
    setLimit((previous) => previous + 2);
  };
  const showLessPosts = () => {
    setLimit((previous) => previous - 2);
  };
  const categories = [
    'art',
    'music',
    'social',
    'online',
    'education',
    'nature',
    'handmade',
  ];
  let { url, path } = useRouteMatch();
  let cutIdeas = ideas.slice(0, limit);

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-picture"></div>
          <p>
            share your ideas how to spend time at home durning quarantine. No
            pressure to be over productive or super creative, everything counts!
            🧶🎣💅{' '}
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
          <label>category</label>
          <div>
            <input
              list="browsers"
              name="category"
              id="browser"
              onChange={(event) => addInput(event)}
            />
            <datalist id="browsers">
              <option value="nature" />
              <option value="online" />
              <option value="handmade" />
              <option value="art" />
              <option value="social" />
              <option value="music" />
              <option value="education" />
            </datalist>
          </div>
          <input type="submit" />
        </form>
        <div className="all-categories-container">
          <h3>MOST RECENT IDEAS:</h3>
          {cutIdeas.map((idea, key) => (
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
                  <p className="user-name score">{idea.likes}</p>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
          {cutIdeas.length === ideas.length ? (
            ''
          ) : (
            <button onClick={showMorePosts}> show more</button>
          )}
          {limit > 3 ? <button onClick={showLessPosts}>Show less</button> : ''}
        </div>
        <div className="ideas-container">
          <h3>CHOOSE A CATAGORY :</h3>
          <div className="categories-container">
            {categories.map((category, key) => (
              <Link key={key} to={`${url}/${category}`}>
                {category}
              </Link>
            ))}
          </div>
          <Switch>
            <Route
              path={`${path}/:topicId`}
              component={DisplayAllIdeas}
            ></Route>
            <Route path={`${path}`} component={DisplayAll}></Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default AddIdeas;
