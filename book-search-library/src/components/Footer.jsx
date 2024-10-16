import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-12 p-4">
      <p>&copy; 2024 BrhyanCodes. All rights reserved.</p>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <a href="mailto:brianweke1998@gmail.com" className="text-blue-600 hover:text-blue-800">
            <i className="fas fa-envelope mr-2"></i> brianweke1998@gmail.com
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.twitter.com/briancodes_" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-twitter mr-2"></i> brianCodes
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.github.com/BrhyanCodes" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-github mr-2"></i> BrhyanCodes
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;