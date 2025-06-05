
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Factory Tour', path: '/factory-tour' },
    { name: 'CSR', path: '/csr' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* <Home className="h-6 w-6 text-rice-green" />
          <span className="font-playfair font-bold text-2xl text-rice-brown">Arana Rice</span> */}
          <Link to="/" className="flex items-center space-x-2">
           <img 
            //  src="../../../public/uploads/headicon.jpg" 
              src="/uploads/headicon.jpg"
               alt="Arana Rice Logo" 
              className="h-8 w-auto"
               style={{ height: '45px', width: '70px' }}
               />
             
          </Link>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="font-medium text-rice-brown hover:text-rice-green transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contactpage">
          <Button className="bg-rice-green hover:bg-rice-green-light">
            Contact Us
          </Button></Link>
         
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5"
        >
          <span className={`block w-6 h-0.5 bg-rice-brown transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-rice-brown transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-rice-brown transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-4 flex flex-col space-y-4 pb-4">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="font-medium text-rice-brown hover:text-rice-green transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-rice-green hover:bg-rice-green-light w-full">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
