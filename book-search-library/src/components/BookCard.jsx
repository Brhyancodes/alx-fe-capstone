import React from 'react';

const BookCard = ({ book, onBookSelect }) => {
  // console.log('Book card clicked:', book);
  return (
    <div className="flex flex-col mb-4 shadow-md" onClick={() => onBookSelect(book)}>
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`} alt={book.title} className="w-full h-48 object-cover rounded-t-md" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{book.title}</h2>
        <p className="text-gray-600">Author: {book.author}</p>
        <p className="text-gray-600">Publisher: {book.publisher}</p>
        
      </div>
    </div>
  );
};

export default BookCard;