import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Search for books"
        onChange={onSearch}
        className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default SearchBar;