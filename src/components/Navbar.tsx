import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Droplets className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">BlueTech</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link
              to="/water-quality"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Analytics
            </Link>
            <Link
              to="/industry/login"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Industry
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;