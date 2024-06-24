import React from 'react'
import Cards from './Cards'
import Pagination from './Pagination'
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';
import  NotFoundImage from '../Images/404.png'

export default function Main() {
  const context = useContext(AppContext);
  const{response}=context;
  
  
  const shouldRenderPagination = response && response.results && response.results.length >=24;
  return (
    <div className='w-full'>
        {
          response && response.results && response.results.length===0 && (<div className='flex justify-center'><img src={NotFoundImage} alt=''/></div>)
        }
        <Cards/>
        {  
          shouldRenderPagination && 
          
          <Pagination/>
          
        }
        
    </div>
  )
}
