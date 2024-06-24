import React from "react";
import { AiOutlineClose } from 'react-icons/ai';

import './Modal.css'; // Import your modal CSS

export default function Modal({ result, closeModal }) {
  console.log('modal result',result)
  console.log('lanuage',result.language)
  return (
    <div>
      
      <div className="base">
      <div className="modal-content">
        <span className="close-button text-red-900 " onClick={closeModal}><AiOutlineClose/></span>
        <img className="modal-image" src={result.published_works[0].cover_art_url} alt="Book Cover" />
        
        <p className="modal-text"><span className="label">Name:</span> {result.title}</p>
        <p className="modal-text"><span className="label">Author:</span> {result.authors[0] ?result.authors[0] :'Not Available'}</p>
        <p className="modal-text"><span className="label">Isbn:</span> {result.published_works[0].isbn}</p>
        <p className="modal-text"><span className="label">Language:</span> {result.language ? result.language :'Not Available'}</p>
        <p className="modal-text"><span className="label">PageCount:</span> {result.page_count ? result.page_count :'Not Available'}</p>
        <p className="modal-text"><span className="label">Series Name:</span> {result.series_name ?result.series_name :'Not Available'}</p>
        <p className="modal-text"><span className="label">Summary:</span> { result.summary ?  result.summary :'Not Available'}</p>
        <p className="modal-text">
  <a
    href="https://amazon.com" // Replace with the actual URL
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Recommended for security
    className="text-blue-600 hover:underline "
  >
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline mx-auto mb-2 mt-3 transition duration-300 ease-in-out transform hover:scale-105">
      BUY NOW
    </button>
  </a>
</p>


        
      </div>
      </div>
    </div>
   
  );
}
