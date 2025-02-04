import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  };


  return (
    <nav className="bg-neutral-900 text-white w-full fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl text-purple-600 font-bold">StudyPartner</div>
        <button onClick={logout}>Logout</button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-300">
          {["Home", "Features", "How It Works", "Subjects", "Testimonials", "FAQ", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="relative group transition-all duration-300 hover:text-white"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-800 py-4">
          <div className="flex flex-col space-y-4 text-center text-gray-300">
            {["Home", "Features", "How It Works", "Subjects", "Testimonials", "FAQ", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-white transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
