import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='flex  flex-col justify-center items-center gap-6 mt-10 pb-7'>
        <div className='custom-loader'>
        </div>
        <div className='text-5xl'>
            Loading...
        </div>
    </div>
  )
}

