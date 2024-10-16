import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchQuery.trim() !== '') {
        setLoading(true);
        setError(null); // Reset error state on new search
        try {
          const apiKey = 'AIzaSyDKaY0TGroKhPhl0VBapu6lKhBMdQ8D_5Q';
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Books fetched:', data);
          const booksData = data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            publisher: item.volumeInfo.publisher,
            cover: item.volumeInfo.imageLinks?.thumbnail,
            description: item.volumeInfo.description,
            publicationDate: item.volumeInfo.publishedDate,
            isbn: item.volumeInfo.industryIdentifiers[0].identifier,
            pageCount: item.volumeInfo.pageCount,
            categories: item.volumeInfo.categories,
          }));
          setBooks(booksData);
        } catch (error) {
          console.error('Fetch error:', error);
          setError(`Error fetching books: ${error.message}`);
        } finally {
          setLoading(false);
        }
      }
    };

    // Only fetch books when searchQuery is updated
    if (searchQuery.trim() !== '') {
      fetchBooks();
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const trimmedSearchQuery = searchQuery.trim();
    if (trimmedSearchQuery !== '') {
      setSearchQuery(trimmedSearchQuery); // This will trigger the useEffect to fetch books
    }
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleSearchSubmit}
      >
        Search
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.length > 0 ? (
          <BookList books={books} onBookSelect={handleBookSelect} />
        ) : (
          <p className="text-gray-600">No books found</p>
        )
      )}
      {selectedBook && <BookDetails book={selectedBook} />}
      {error && <p className="text-red-600">{error}</p>}
      <div className="mt-4">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;