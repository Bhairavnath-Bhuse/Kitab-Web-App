import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';

export default function Pagination() {
  const context = useContext(AppContext);
  const { pagenum, setPagenum, fetchData } = context;
  
  const[next,setNext]=useState(false);
  const[prev,setPrev]=useState(false);

  
  const handleNextClick = () => {
    const page = pagenum+1;
    setPagenum(page);
    setNext(true);
  };


  const handlePrevClick = () => {
    if (pagenum > 1) {
      const page = pagenum-1;
      setPrev(true);
      setPagenum(page);
    }
  };

  useEffect(()=>{
     if(prev){
        setPrev(false);
        fetchData();
     }
     if(next){
      setNext(false);
      fetchData();
     }
    //eslint-disable-next-line
  },[prev,next])



  return (
    <div>

      <div className='flex justify-end '>
        {pagenum > 1 && (
         
        <button
        onClick={handlePrevClick}
        className="bg-blue-300 hover-bg-red-700 text-white font-medium py-2 px-4 rounded  focus-shadow-outline mx-auto mb-2">Previous</button>
        )}
        <button onClick={handleNextClick} className="bg-blue-300 hover-bg-red-700 text-white font-medium py-2 px-4 rounded  focus-shadow-outline mx-auto mb-2">
          Next 
        </button>
      </div>
      {/* <div>{next ? <span>next</span>:<span>not next</span>}</div> */}
    </div>
  );
}





