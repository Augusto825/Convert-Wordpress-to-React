import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo1.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('#4E0559');

  // Handle the background color change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('#ffffff');
      } else {
        setBgColor('#4E0559');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = ['צרו קשר', 'הדרך שלנו', 'תיק עבודות', 'אודותינו', 'דף הבית'];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      style={{ backgroundColor: bgColor, minHeight: '100px', alignContent: 'center' }}
    >
      <div className=" px-4 flex items-center justify-center h-full">
        {/* Navigation */}
        <nav className="flex items-center justify-between w-full md:w-[1140px]">
          {/* Desktop Links */}
          <ul className="hidden md:flex flex-1 justify-center space-x-4">
            {navLinks.map((link) => (
              <li key={link} className="flex items-center">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[#F7BA00] px-5 py-3 relative group font-sans"
                  style={{ height: '46px', fontWeight: '700', fontSize: '16px' }}
                >
                  {link}
                  <span
                    className="block w-0 h-[2px] bg-[#f3f030] absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F7BA00] focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <img
              src={Logo} // Replace with your logo path
              alt="Logo"
              className="w-[120px] h-[80px]"
            />
          </div>
        </nav>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#4E0559]">
            <ul className="flex flex-col items-center py-2 space-y-2">
              {navLinks.map((link) => (
                <li key={link} className="w-full text-center">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-[#F7BA00] py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
