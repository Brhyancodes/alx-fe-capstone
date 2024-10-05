import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-lg font-bold">Get in Touch</h2>
      <p className="text-gray-600">If you have any questions or need help with the library, please don't hesitate to contact us.</p>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <a href="mailto:your-email@example.com" className="text-blue-600 hover:text-blue-800">
            <i className="fas fa-envelope mr-2"></i> your-email@example.com
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.twitter.com/BrhyanCodes" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-twitter mr-2"></i> @BrianCodes
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.github.com/BrhyanCodes" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-github mr-2"></i> @BrhyanCodes
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;