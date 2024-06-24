import React, { useContext, useState, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../Context/AppContext';

export default function Cards() {
  const context = useContext(AppContext);
  const { response } = context;
  const { results } = response;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full'>
      <div className={`flex  flex-wrap justify-between ${windowWidth < 502 ? 'flex-col items-center' : ''}`}>
        {response &&
          response.results &&
          results.map((result) => (
            <Card
              result={result}
              key={result.work_id}
              centerCard={results.length === 1 && windowWidth <= 502}
            />
          ))}
      </div>
    </div>
  );
}
