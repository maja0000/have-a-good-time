import React, { useState, useEffect } from 'react';
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import './addideas.css';

function AddIdeas() {
  const [sent, setSent] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET
  useEffect(() => {
    fetch('https://have-a-good-time.herokuapp.com/')
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
  // const [flash, setFlash] = useState(true);
  const [data, setData] = useState({
    idea: '',
    author: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://have-a-good-time.herokuapp.com/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (res) => setSent(res.sent),
        (err) => setSent(err.sent)
      );
    // sent ? toast.success("yaaas") : toast.error("nope");
  };

  const updateData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
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
              <div className="one-idea-name">
                <div className="user-idea">{idea.idea}</div>
                <span className="user-name">by {idea.author}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AddIdeas;
