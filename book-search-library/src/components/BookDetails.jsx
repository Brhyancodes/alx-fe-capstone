import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className="flex flex-col mb-4 shadow-md">
      <h2 className="text-lg font-bold">{book.title}</h2>
      {book.description && (
        <p className="text-gray-600">Description: {book.description}</p>
      )}
      {book.publicationDate && (
        <p className="text-gray-600">Publication Date: {book.publicationDate}</p>
      )}
      {book.isbn && (
        <p className="text-gray-600">ISBN: {book.isbn}</p>
      )}
      {book.pageCount && (
        <p className="text-gray-600">Number of Pages: {book.pageCount}</p>
      )}
      {book.categories && (
        <p className="text-gray-600">Categories: {book.categories.join(', ')}</p>
      )}
    </div>
  );
};

export default BookDetails;

