import React from'react';

const Header = () => {
  return (
    <header className="bg-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://aiwebdev.co.il/wp-content/uploads/2023/07/received_1316245079264559-q9zg35fjviewzjfrpa2dw1abvzihreush4xt9hn8rk.jpeg"
            alt="Logo"
            className="w-12 h-12"
          />
        </div>
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <a href="https://aiwebdev.co.il/" className="text-gray-600 hover:text-gray-900">
              דף הבית
            </a>
          </li>
          <li>
            <a href="https://aiwebdev.co.il/%d7%90%d7%95%d7%93%d7%95%d7%aa%d7%99%d7%a0%d7%95/" className="text-gray-600 hover:text-gray-900">
              אודותינו
            </a>
          </li>
          <li>
            <a href="https://aiwebdev.co.il/%d7%aa%d7%99%d7%a7-%d7%a2%d7%91%d7%95%d7%93%d7%95%d7%aa/" className="text-gray-600 hover:text-gray-900">
              תיק עבודות
            </a>
          </li>
          <li>
            <a href="https://aiwebdev.co.il/%d7%94%d7%93%d7%a8%d7%9b-%d7%a9%d7%9c%d7%a0%d7%95/" className="text-gray-600 hover:text-gray-900">
              הדרך שלנו
            </a>
          </li>
          <li>
            <a href="https://aiwebdev.co.il/%d7%a6%d7%a8%d7%95-%d7%a7%d7%a9%d7%a8/" className="text-gray-600 hover:text-gray-900">
              צרו קשר
            </a>
          </li>
        </ul>
        <button
          className="md:hidden flex justify-center w-8 h-8 bg-gray-200 hover:bg-gray-400 rounded-full"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;