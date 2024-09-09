import { useState } from "react";
import { Menu, X } from "lucide-react";
import { logo } from "../../assets/svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-5">
          <img src={logo} alt="shortly-logo" />
          {/* Navigation links for desktop */}
          <nav className="hidden md:flex space-x-4 gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              Features
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              Pricing
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              Resources
            </a>
          </nav>
        </div>

        {/* Buttons for both desktop and mobile */}
        <div className="hidden md:flex space-x-2 gap-3">
          <button className="text-gray-600 hover:text-gray-800">Login</button>
          <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu Button for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white rounded-lg mt-2 mx-4 absolute right-12 w-52 shadow-lg">
          <nav className="flex flex-col space-y-2 py-4">
            <a href="#" className="text-gray-500 hover:text-gray-800 px-4 py-2">
              Features
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 px-4 py-2">
              Pricing
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 px-4 py-2">
              Resources
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 px-4 py-2">
              Login
            </a>
            <button className="bg-teal-500 text-white mx-4 my-2 px-4 py-2 rounded-full hover:bg-teal-600">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
