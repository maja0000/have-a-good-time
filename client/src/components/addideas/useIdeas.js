import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useIdeas() {
  const [ideas, setIdeas] = useState([]);
  //   const [likes, setLikes] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    idea: '',
    author: '',
  });

  const getAllIdeas = () => {
    fetch('https://have-a-good-time-back.herokuapp.com/')
      .then((res) => res.json())
      .then((res) => {
        setIdeas(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const addInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const addNewIdea = (event) => {
    event.preventDefault();
    if (!data.author) {
      toast.error('yikes! you forgot your name... 🙈❕');
    }
    if (!data.idea) {
      toast.error('yikes! you forgot your idea... 🙈❕');
    }
    if (data.idea && data.author) {
      setIdeas([{ ...data, fake: true }, ...ideas]);
    }
    fetch('https://have-a-good-time-back.herokuapp.com/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setIdeas(res.reverse());
        toast.success('🎉 nice one! thanksss! 🎉');
      })

      .catch((err) => {
        toast.error('yikes! something went wrong! 🔎');
      });
  };
  const addLike = (id) => {
    fetch(`https://have-a-good-time-back.herokuapp.com/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ $inc: { likes: 1 } }),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success('cool, thanks for your vote!');
      })
      .catch((err) => {
        toast.error('yikes! something went wrong!');
      });
  };
  return [ideas, loading, addLike, addInput, getAllIdeas, addNewIdea];
}
