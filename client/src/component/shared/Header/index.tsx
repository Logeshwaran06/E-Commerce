import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-3 items-center bg-gray-500 text-white px-8 py-4 sticky top-0 z-10 h-[80px]">
          <div className="heading">
            <ul className="list-none flex gap-4 items-center">
              <ShoppingCart />
              <li className="text-xl font-bold">MEGAHUT</li>
            </ul>
          </div>

          <nav className="navBar">
            <ul className="flex justify-center gap-6 list-none">
              <li className="cursor-pointer text-lg hover:underline">Home</li>
              <li className="cursor-pointer text-lg hover:underline" onClick={() => navigate('/nest')}>Nest</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/grocery')}>Grocery</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/clothings')}>Clothing</li>
              <li className="cursor-pointer text-lg hover:underline"  onClick={() => navigate('/electronics')}>Electronics</li>
            </ul>
          </nav>

          <div className="rightHeader flex justify-end items-center gap-4">
            <Search size={20} className="hover:cursor-pointer" />
            <span className="text-lg cursor-pointer" onClick={() => {navigate('/login')}}>Login</span>
          </div>
        </div>
    );
}

export default Header;