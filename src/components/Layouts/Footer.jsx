import React from'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>2023 AIWEBDEV. All rights reserved.</p>
        <ul className="flex justify-end">
          <li className="mr-4 text-blue-500 hover:text-blue-700">Facebook</li>
          <li className="mr-4 text-blue-500 hover:text-blue-700">Twitter</li>
          <li className="mr-4 text-blue-500 hover:text-blue-700">Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;