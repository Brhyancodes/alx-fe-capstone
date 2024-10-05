import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className="flex flex-col mb-4 shadow-md">
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p className="text-gray-600">Description: {book.description}</p>
      <p className="text-gray-600">Publication Date: {book.publication_date}</p>
      <p className="text-gray-600">ISBN: {book.isbn}</p>
      <p className="text-gray-600">Number of Pages: {book.number_of_pages}</p>
      <p className="text-gray-600">Subjects: {book.subjects.join(', ')}</p>
    </div>
  );
};

export default BookDetails;