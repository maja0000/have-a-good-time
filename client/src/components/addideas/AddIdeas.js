import React, { useState } from 'react';
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import './addideas.css';

function AddIdeas() {
  const [sent, setSent] = useState(false);
  // const [flash, setFlash] = useState(true);

  const [data, setData] = useState({
    idea: '',
    author: '',
  });

  const handleSubmit = (event) => {
    // event.preventDefault();
    fetch('???', {
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
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <p>
            share your ideas how to spend time at home durning quarantine. No
            pressure to be over productive or creative, everything counts!
            🧶🎣💅{' '}
          </p>
          <label>your idea</label>
          <input name="idea" defaultValue="" onChange={updateData} />
          <label>your name</label>
          <input name="author" defaultValue="" onChange={updateData} />
          <input type="submit" />
        </form>
        <div className="ideas-container">
          <div className="one-idea-name">
            <div className="user-idea">
              kujyhgdbvbv bvbvb vbbv bvbv bbvbvbb vbvbbvb vbvbvbv bvbbvbvb
              vbbvbv bvvbdbv bvbvbvb vbbvbvbvbbv bvbbvbvbbvbv bvb vb vbvbb
              vbvbvbbvbvbvvbdbvbvbvbv bvbbvb vbv bbvb vb bvbvbbv bvbvbvbvbv bbv
              bvbv
              bbvbvbvvbdbvbvbvbvbvbbvbvbvbbvbvbbvbvbbvbvbvbvbvbvbbvbvbvbbvbvbvvbvbtrfedej789o
            </div>
            <span className="user-name">by Maja</span>
          </div>
          <div className="one-idea-name">
            <div className="user-idea">
              kujyhgdbvbv bvbvb vbbv bvbv bbvbvbb vbvbbvb vbvbvbv bvbbvbvb
              vbbvbv bvvbdbv bvbvbvb vbbvbvbvbbv bvbbvbvbbvbv bvb vb vbvbb
              vbvbvbbvbvbvvbdbvbvbvbv bvbbvb vbv bbvb vb bvbvbbv bvbvbvbvbv bbv
              bvbv
              bbvbvbvvbdbvbvbvbvbvbbvbvbvbbvbvbbvbvbbvbvbvbvbvbvbbvbvbvbbvbvbvvbvbtrfedej789o
            </div>
            <span className="user-name">by Mwdefrgthyjuaja</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddIdeas;
