
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Главная", path: "/" },
    { title: "О нас", path: "/about" },
    { title: "Услуги", path: "/services" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-neon-purple/30 shadow-sm shadow-neon-purple/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold neon-text">НЕОН</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`neon-nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.title}
              </Link>
            ))}
            <Link to="/contact" className="neon-button animate-pulse-neon">
              Связаться
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neon-purple" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block neon-nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.title}
              </Link>
            ))}
            <Link to="/contact" className="block neon-button w-full text-center mt-4">
              Связаться
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
