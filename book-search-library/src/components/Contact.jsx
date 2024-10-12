import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-lg font-bold">Get in Touch</h2>
      <p className="text-gray-600">If you have any questions or need help with the library, please don't hesitate to contact us.</p>
      <form className="mb-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 mb-2 flex items-center" htmlFor="first-name">
            <i className="fas fa-user mr-2"></i> First Name:
          </label>
          <input
            type="text"
            id="first-name"
            className="bg-gray-100 p-2 rounded border border-gray-300 hover:border-gray-400 focus:border-gray-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 mb-2 flex items-center" htmlFor="last-name">
            <i className="fas fa-user mr-2"></i> Last Name:
          </label>
          <input
            type="text"
            id="last-name"
            className="bg-gray-100 p-2 rounded border border-gray-300 hover:border-gray-400 focus:border-gray-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 mb-2 flex items-center" htmlFor="email">
            <i className="fas fa-envelope mr-2"></i> Email:
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-100 p-2 rounded border border-gray-300 hover:border-gray-400 focus:border-gray-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 mb-2 flex items-center" htmlFor="contact">
            <i className="fas fa-comment mr-2"></i> Your Message?:
          </label>
          <textarea
            id="contact"
            className="bg-gray-100 p-2 rounded border border-gray-300 hover:border-gray-400 focus:border-gray-500"
            rows="5"
          />
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="flex flex-col mb-4">
        <h3 className="text-lg font-bold">Reach out to Us:</h3>
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
      </div>
    </div>
  );
};

export default Contact;