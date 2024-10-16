import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const apiKey = 'AIzaSyDKaY0TGroKhPhl0VBapu6lKhBMdQ8D_5Q';

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        setSearchResults(data.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedBook(null);
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      handleSearch();
    }
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search for books"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full lg:w-1/2 xl:w-1/3 px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="ml-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="ml-2 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
      {searchResults && searchResults.length > 0 && (
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((book) => (
              <li key={book.id} className="bg-white rounded shadow-md p-4 cursor-pointer" onClick={() => handleBookClick(book)}>
                <h2 className="text-lg font-bold">{book.volumeInfo.title}</h2>
                <p className="text-gray-600">Author: {book.volumeInfo.authors?.join(', ') ?? 'Unknown'}</p>
                <p className="text-gray-600">Publisher: {book.volumeInfo.publisher}</p>
                {book.volumeInfo.imageLinks && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="w-full h-auto mt-4"
                  />
                )}
              </li>
            ))}
          </ul>
          {selectedBook && (
            <div className="mt-4">
              <h2 className="text-lg font-bold">{selectedBook.volumeInfo.title}</h2>
              <p className="text-gray-600">Author: {selectedBook.volumeInfo.authors?.join(', ') ?? 'Unknown'}</p>
              <p className="text-gray-600">Publisher: {selectedBook.volumeInfo.publisher}</p>
              <p className="text-gray-600">Published Date: {selectedBook.volumeInfo.publishedDate}</p>
              <p className="text-gray-600">Description: {selectedBook.volumeInfo.description}</p>
              {selectedBook.volumeInfo.imageLinks && (
                <img
                  src={selectedBook.volumeInfo.imageLinks.thumbnail}
                  alt={selectedBook.volumeInfo.title}
                  className="w-full h-auto mt-4"
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;