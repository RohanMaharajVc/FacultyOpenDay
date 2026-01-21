import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-blue-600 transition">
            <Home size={24} />
            <span>Faculty Open Day</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/education" className="text-gray-600 hover:text-education transition">Education</Link>
            <Link to="/law" className="text-gray-600 hover:text-law transition">Law</Link>
            <Link to="/commerce" className="text-gray-600 hover:text-commerce transition">Commerce</Link>
            <Link to="/humanities" className="text-gray-600 hover:text-humanities transition">Humanities</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

