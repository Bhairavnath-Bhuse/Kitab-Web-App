import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import backgroundImage from "../Images/Serchbackground.jpg";
import Categories from "./Categories";

export default function Searchbar() {
  const context = useContext(AppContext);
  const { setTitle, fetchData ,setPagenum} = context;

  const [showBackButton, setShowBackButton] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [backClicked, setBackClicked] = useState(false);

  function titleHandler(event) {
    setInputValue(event.target.value);
  }

  function searchHandler() {
    setTitle(inputValue);
    setPagenum(1);
    setShowBackButton(true);
    setSearchClicked(true); // Set the flag to indicate search clicked
  }

  function handleBackClick() {
    setShowBackButton(false);
    setBackClicked(true);
    setTitle("");
    setInputValue("");
    setSearchClicked(false); // Clear the search click flag
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      searchHandler();
    }
  }

  // Use useEffect to fetch data when the search click flag changes
  React.useEffect(() => {
    if (searchClicked) {
      fetchData();
      setSearchClicked(false); // Reset the search click flag
    }
    if (backClicked) {
      fetchData();
      setBackClicked(false);
    }
  }, [searchClicked, backClicked]);

  return (
    <div className=''>
      <div
        className="flex h-[20rem] max-w-[1300px] mx-auto  sm:flex-row  sm:justify-between sm:items-center md:flex-col md:justify-center md:items-center "
        loading="lazy"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          // Set the background image using the style attribute
        }}
      >
        <input
          type="text"
          placeholder="Search for book..."
          name="searchbar"
          value={inputValue}
          onChange={titleHandler}
          onKeyPress={handleKeyPress} // Add this line to handle Enter key press
          className=" w-5/12 p-2  sm:w-9/12 mt-20  md:w-5/12  sm:ml-5 border border-gray-300 rounded-md text-lg focus:border-blue-500 shadow-md"
        ></input>

        <button
          onClick={searchHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
        <Categories/>

        {showBackButton && (
        <div className="my-2">
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white  focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2"
          onClick={handleBackClick}
        >
          Back
        </button>
        </div>
        )}
        
      </div>
    </div>
  );
}
