 import "./index.css";
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
        const data = await response.json();
        const books = data.docs.map((doc) => ({
          key: doc.key,
          title: doc.title_suggest,
          author: doc.author_name && doc.author_name[0],
          publisher: doc.publisher && doc.publisher[0],
          cover: doc.cover && doc.cover.small,
          cover_i: doc.cover_i,
          description: doc.description,
          publication_date: doc.publish_date,
          isbn: doc.isbn && doc.isbn[0],
          number_of_pages: doc.number_of_pages,
          subjects: doc.subject,
        }));
        setBooks(books);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {books.length > 0 ? (
        <BookList books={books} onBookSelect={handleBookSelect} />
      ) : (
        <p className="text-gray-600">No books found</p>
      )}
      {selectedBook && <BookDetails book={selectedBook} />}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

export default App;