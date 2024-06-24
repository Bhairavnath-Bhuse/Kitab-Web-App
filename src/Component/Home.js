import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Spinner from './Spinner'
import Main from './Main'
import { AppContext } from '../Context/AppContext'
import { useContext,useEffect } from 'react'


export default function Home() {
    const context=useContext(AppContext);
    const{fetchData,loading,readMoreClicked}=context;
    useEffect(()=>{
      fetchData();
    },[]);
  
  return (
    <div>
        <Navbar className='fixed'/>
         <Searchbar  className='fixed'/>
        <div className='w-11/12 max-w-[1300px] mx-auto '>
          {
          loading ? <Spinner/> : 
          <Main/>
         }
        </div>
    </div>
  )
}
