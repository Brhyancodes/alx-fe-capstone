import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onBookSelect }) => {
  //console.log('Book list rendered:', books);
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto max-w-md">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onBookSelect={onBookSelect} />
      ))}
    </div>
  );
};

export default BookList;

