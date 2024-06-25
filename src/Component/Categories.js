import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import './Categories.css';

export default function Categories() {
  const context = useContext(AppContext);
  const { category, setCategory, setPagenum ,fetchData} = context;
  const [categorybtn, setCategorybtn] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  function categoryHandler(event) {
    const value = event.target.value;
    setCategorybtn(true);
    setCategory(value);
    setPagenum(1);
    setActiveButton(value);
  }

  useEffect(() => {
    if (categorybtn) {
      fetchData()
    }
    // eslint-disable-next-line
  }, [categorybtn, category]);

  return (
    <div className={`md:flex md:flex-wrap md:gap-1 ${window.innerWidth < 576 ?'hidden' : ''}`}>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === '' ? 'active-btn' : ''}`}
        name="All"
        value={''}
      >
        All
      </button>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === 'General Literature' ? 'active-btn' : ''}`}
        name="General Literature"
        value={'General Literature'}
      >
        General Literature
      </button>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === 'Science & Technology' ? 'active-btn' : ''}`}
        name="Science & Technology"
        value={'Science & Technology'}
      >
        Science and Tech
      </button>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === 'Animals, Bugs & Pets' ? 'active-btn' : ''}`}
        name="Animals, Bugs & Pets"
        value={'Animals, Bugs & Pets'}
      >
        Animal
      </button>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === 'Hobbies, Sports & Outdoors' ? 'active-btn' : ''}`}
        name="Hobbies, Sports & Outdoors"
        value={'Hobbies, Sports & Outdoors'}
      >
        Sports
      </button>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === 'Real Life' ? 'active-btn' : ''}`}
        name="Real Life"
        value={'Real Life'}
      >
        Real Life
      </button>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === 'Art, Creativity & Music' ? 'active-btn' : ''}`}
        name="Art, Creativity & Music"
        value={'Art, Creativity & Music'}
      >
        Art & Creativity
      </button>
      <button
        onClick={categoryHandler}
        className={`btn ${activeButton === 'Mystery & Suspense' ? 'active-btn' : ''}`}
        name="Mystery & Suspense"
        value={'Mystery & Suspense'}
      >
        Mystery
      </button>
    </div>
  );
}
