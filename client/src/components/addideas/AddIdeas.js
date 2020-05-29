import React, { useState, useEffect } from 'react';
import {
  Link,
  Switch,
  useRouteMatch,
  useParams,
  Route,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import DisplayAllIdeas from './displayAllIdeas';
import DisplayAll from './DisplayAll';

import 'react-toastify/dist/ReactToastify.css';
import './addideas.css';

import useIdeas from './useIdeas';

// const override = css`
//   display: block;
//   margin-left: 50%;
//   margin-right: 50%;
//   border-color: #ffc735;
// `;
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
}));
function AddIdeas() {
  const [ideas, loading, addLike, addInput, getAllIdeas, addNewIdea] = useIdeas(
    []
  );
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  // useEffect(() => {
  //   getAllIdeas();
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewIdea(event);
  };

  // const updateIdea = (id) => {
  //   addLike(id);
  // };

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
        <div className="ideas-container">
          <p>Choose a category :</p>
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
            <Route exact path={`${path}/:all`} component={DisplayAll}></Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default AddIdeas;
