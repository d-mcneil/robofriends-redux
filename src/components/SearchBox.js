import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search RoboFriends"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search RoboFriends"
        onChange={onSearchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
