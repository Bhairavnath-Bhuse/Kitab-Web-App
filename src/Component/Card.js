import React, { useState } from "react";
import "./Card.css"; // Import your card CSS
import Modal from "./Modal";

export default function Card({ result }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [showFullAuthor,setShowFullAuthor]=useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleTitle = () => {
    setShowFullTitle(!showFullTitle);
  };

  const toggleAuthor = () =>{
    setShowFullAuthor(!showFullAuthor);
  }

  const authorString = result.authors.join(", ");
  


  return (
    <div>
     <div
        className="sm:w-[230px] md:w-[300px]  flex flex-col gap-2 border rounded-md my-8 md:pb-2 sm:pb-1 bg-white hovereffect "
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.3) " }}
      >
        <img
          className={`md:h-[270px] md:w-[180px] sm:h-[240px] sm:w-[150px] mx-auto py-3 `}
          src={result.published_works[0].cover_art_url}
          alt="book"
        />
        <p className="mx-auto md:px-2 sm:px-1">
          <span className="font-bold text-green-600">Title</span>:
          {showFullTitle || result.title.length <= 21 ? (
            result.title
          ) : (
            <span>
              {result.title.substring(0, 21)}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={toggleTitle}
              >
                See More
              </span>
            </span>
          )}
          {showFullTitle && (
            <span
              className="text-blue-600 cursor-pointer"
              onClick={toggleTitle}
            >
              Show Less
            </span>
          )}
        </p>

        <p className="mx-auto md:px-2 sm:px-1">
          <span className="font-bold text-black ">Author</span>:
          {showFullAuthor || authorString.length <= 21? (
            authorString
          ) : (
            <span>
              {authorString.substring(0, 21)}
              <span
                className="text-black cursor-pointer"
                onClick={toggleAuthor}
              >
                ...See More
              </span>
            </span>
          )}
          {showFullAuthor && (
            <span
              className="text-black cursor-pointer"
              onClick={toggleAuthor}
            >
              ...Show Less
            </span>
          )}
        </p>
        <button
          className="bg-blue-300 hover-bg-red-700 text-white font-medium py-2 px-4 rounded  focus-shadow-outline mx-auto mb-2"
          onClick={openModal}
        >
          Read More
        </button>
      </div>
      {isModalOpen && <Modal result={result} closeModal={closeModal} />}
    </div>
  );
}
