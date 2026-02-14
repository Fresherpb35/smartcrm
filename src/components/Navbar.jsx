// src/components/layout/Navbar.jsx  (or Header.jsx)
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // if you're using these elsewhere

export default function Navbar() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');           // ← preferred: internal route
    // navigate('/signin');
    // navigate('/auth/login');
    // navigate('/account/signin');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 md:py-5 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1
          className="
            text-2xl md:text-3xl font-bold
            bg-gradient-to-r from-blue-600 to-indigo-600
            bg-clip-text text-transparent
            cursor-pointer select-none
          "
          onClick={() => navigate('/')} // optional: click logo → home
        >
          Insyght
        </h1>

        {/* Right side actions */}
        <div className="flex items-center gap-6 md:gap-8">
          <button
            onClick={handleSignInClick}
            className="
              text-sm md:text-base font-medium
              text-indigo-600 hover:text-indigo-700
              transition-colors duration-200
              hover:underline underline-offset-4
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
              rounded px-1 py-1
            "
            type="button"
          >
            Sign In
          </button>

          {/* Optional: Add Sign Up button later */}
          {/* <button className="...">Sign Up</button> */}
        </div>
      </div>
    </nav>
  );
}